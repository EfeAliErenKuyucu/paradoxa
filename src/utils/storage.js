// LocalStorage persistence for Streak counter & Researched Knowledge Codex

const CODEX_KEY = 'curio15_codex_v1';
const STREAK_KEY = 'curio15_streak_v1';

export function getSavedCodex() {
  try {
    const raw = localStorage.getItem(CODEX_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

export function saveTopicToCodex(entry) {
  try {
    const current = getSavedCodex();
    // Check if already present
    const existingIdx = current.findIndex(item => item.topic.id === entry.topic.id);
    const newEntry = {
      id: entry.topic.id,
      topic: entry.topic,
      notes: entry.notes || '',
      speechAnalytics: entry.speechAnalytics || null,
      date: new Date().toISOString()
    };

    if (existingIdx >= 0) {
      current[existingIdx] = newEntry;
    } else {
      current.unshift(newEntry);
    }

    localStorage.setItem(CODEX_KEY, JSON.stringify(current));
    updateStreak();
    return current;
  } catch (e) {
    console.error('Save to codex failed', e);
    return [];
  }
}

export function getStreakInfo() {
  try {
    const raw = localStorage.getItem(STREAK_KEY);
    if (!raw) return { count: 0, lastDate: null };
    return JSON.parse(raw);
  } catch (e) {
    return { count: 0, lastDate: null };
  }
}

export function updateStreak() {
  try {
    const today = new Date().toISOString().split('T')[0];
    const streak = getStreakInfo();

    if (!streak.lastDate) {
      const newStreak = { count: 1, lastDate: today };
      localStorage.setItem(STREAK_KEY, JSON.stringify(newStreak));
      return newStreak;
    }

    if (streak.lastDate === today) {
      return streak; // Already updated today
    }

    const last = new Date(streak.lastDate);
    const now = new Date(today);
    const diffDays = Math.round((now - last) / (1000 * 60 * 60 * 24));

    let count = streak.count;
    if (diffDays === 1) {
      count += 1;
    } else if (diffDays > 1) {
      count = 1; // Reset streak if missed more than 1 day
    }

    const updated = { count, lastDate: today };
    localStorage.setItem(STREAK_KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    return { count: 1, lastDate: new Date().toISOString().split('T')[0] };
  }
}
