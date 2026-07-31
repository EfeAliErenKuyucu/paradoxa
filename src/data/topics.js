export const TOPIC_CATEGORIES = [
  { id: 'all', label: 'Tüm Konular', icon: 'Sparkles' },
  { id: 'diksiyon', label: 'Diksiyon & Edebiyat', icon: 'BookOpen' },
  { id: 'psikoloji', label: 'Psikoloji & Zihin', icon: 'BrainCircuit' },
  { id: 'felsefe', label: 'Felsefe & Paradokslar', icon: 'Compass' },
  { id: 'bilim', label: 'Tuhaf Bilim & Evren', icon: 'Atom' },
  { id: 'nadir', label: 'Dünyadan Nadir Kavramlar', icon: 'Globe' },
  { id: 'etimoloji', label: 'Etimoloji & Tarih', icon: 'History' },
  { id: 'sanat', label: 'Sanat & Estetik', icon: 'Palette' }
];

export const DICTION_WARMUPS = [
  {
    title: "Diyafram & Nefes Egzersizi (4-7-8)",
    description: "4 saniye burundan derin nefes al, 7 saniye tut, 8 saniye ağzından 'fıss' sesiyle yavaşça ver. Omuzlarını düşür, göğsünü değil karnını şişir.",
    type: "Nefes"
  },
  {
    title: "Dudak & Çene Isınması (Tekerleme 1)",
    description: "Şu köşe yaz köşesi, şu köşe kış köşesi, ortadaki soğuk su şişesi. (3 kez dudakları tembelleştirmeden yüksek sesle söyle).",
    type: "Tekerleme"
  },
  {
    title: "Artikülasyon Egzersizi (Tekerleme 2)",
    description: "Gül dibi bülbül sesi, bülbül sesi gül dibi. Çatalca'da çatal caddede çatal iğne satan çatalcalı Çatan'ın çatal iğneleri.",
    type: "Tekerleme"
  },
  {
    title: "Gırtlak & P-T-K Vurgusu",
    description: "P, T, K sessizlerini gırtlaktan patlatarak 'Pa-Ta-Ka, Pe-Te-Ke, Pı-Tı-Kı, Pi-Ti-Ki' şeklinde ritmik tekrar et.",
    type: "Artikülasyon"
  }
];

export const TOPICS = [
  // --- DİKSİYON & EDEBİYAT ---
  {
    id: 'diks-1',
    title: 'Kadrimutlak',
    category: 'diksiyon',
    pronunciation: 'kad-ri-mut-lak',
    origin: 'Arapça (Kadr + Mutlak)',
    shortDescription: 'Her şeye gücü yeten, mutlak iktidar sahibi olan. Diksiyonda vurgulu ve heybetli tınısıyla bilinen nadir sözcük.',
    researchPrompts: [
      'Kadrimutlak kelimesi edebiyatta ve felsefede ne tür bağlamlarda kullanılır?',
      'Günlük yaşamda metaforik olarak kime veya neye "kadrimutlak" denebilir?',
      'Bu kelimenin konuşma dilindeki tonlama ve artikülasyon nüansları nelerdir?'
    ],
    difficulty: 'Orta',
    dictionTip: 'Gırtlak seslerini yumuşatmadan "K" ve "T" harflerini net vurgulayın.'
  },
  {
    id: 'diks-2',
    title: 'Tahayyül',
    category: 'diksiyon',
    pronunciation: 'ta-hay-yül',
    origin: 'Arapça (Hayal kökünden)',
    shortDescription: 'Zihinde canlandırma, hayal etme süreci. Düşünceden zihinsel imgeye geçiş halini ifade eder.',
    researchPrompts: [
      'Tahayyül ile hayal kurmak arasındaki felsefi ve zihinsel fark nedir?',
      'Sanatçıların ve bilim insanlarının tahayyül mekanizması nasıl çalışır?',
      'Konuşurken "tahayyül etmek" kalıbı dinleyicide nasıl bir etki yaratır?'
    ],
    difficulty: 'Kolay',
    dictionTip: '"h" ve "y" harflerinin birleşiminde sesi boğazda boğmadan akıcı söyleyin.'
  },
  {
    id: 'diks-3',
    title: 'Feraset',
    category: 'diksiyon',
    pronunciation: 'fe-ra-set',
    origin: 'Arapça (Firasat)',
    shortDescription: 'Çabuk anlama, zihin keskinliği ve olayların arkasındaki gerçeği hemen sezinleme yeteneği.',
    researchPrompts: [
      'Feraset ile zeka (IQ) ve basiret arasındaki fark nedir?',
      'Liderlikte feraset sahibi olmak neleri değiştirir?',
      'Feraset kelimesinin etimolojik kökenindeki "at sürme/sezgi" bağı nereden gelir?'
    ],
    difficulty: 'Kolay',
    dictionTip: 'Son takıdaki "e" harfini açık değil, dengeli vurguyla telaffuz edin.'
  },
  {
    id: 'diks-4',
    title: 'Girift',
    category: 'diksiyon',
    pronunciation: 'gi-rift',
    origin: 'Farsça (Gireft)',
    shortDescription: 'Birbirinin içine girmiş, karmaşık, iç içe geçmiş ve çözülmesi zor durum veya yapı.',
    researchPrompts: [
      'Girift yapılar sanatta, mimaride ve edebiyatta nasıl karşımıza çıkar?',
      'Bir problemi anlatırken "girift" sözcüğü nasıl bir derinlik katar?',
      'Farsça etimolojisinde girift kavramının orijinal anlamı nedir?'
    ],
    difficulty: 'Kolay',
    dictionTip: '"r" ve "f" harflerini yutmadan heceyi net kapatın.'
  },
  {
    id: 'diks-5',
    title: 'Mefkure',
    category: 'diksiyon',
    pronunciation: 'mef-ku-re',
    origin: 'Arapça (Fikir kökünden)',
    shortDescription: 'Ulaşılmak istenen en yüksek hedef, ideal, ülkü.',
    researchPrompts: [
      'Mefkure sahibi olmak insan hayatını ve motivasyonunu nasıl etkiler?',
      'Tarihteki büyük mefkure örnekleri nelerdir?',
      'Gaye, hedef ve mefkure arasındaki anlam kademeleri nelerdir?'
    ],
    difficulty: 'Orta',
    dictionTip: '"k" sesini inleterek değil, damaktan net çıkarın.'
  },
  {
    id: 'diks-6',
    title: 'Kadirşinas',
    category: 'diksiyon',
    pronunciation: 'ka-dir-şi-nas',
    origin: 'Arapça/Farsça bileşik',
    shortDescription: 'Değer, iyilik ve emeğin kıymetini bilen, kadir kıymet anlayan kimse.',
    researchPrompts: [
      'Kadirşinaslık toplumsal ilişkilerde ve psikolojide ne anlama gelir?',
      'Vefakarlık ile kadirşinaslık arasındaki ince çizgi nedir?',
      'Konuşmanızda birine duyduğunuz minneti ifade ederken bu kelimeyi nasıl kullanırsınız?'
    ],
    difficulty: 'Orta',
    dictionTip: 'Dört heceyi eşit ritimle söyleyerek akıcılığı koruyun.'
  },
  {
    id: 'diks-7',
    title: 'Safsata (Fallacy)',
    category: 'diksiyon',
    pronunciation: 'saf-sa-ta',
    origin: 'Arapça (Sophisteia kökünden)',
    shortDescription: 'Doğru gibi görünen ancak mantıksal açıdan hatalı, yanıltıcı argüman veya akıl yürütme.',
    researchPrompts: [
      'En yaygın mantık safsataları (Ad Hominem, Strawman, Slippery Slope) nelerdir?',
      'Debatlarda ve günlük tartışmalarda safsatayı anında tespit etme yöntemleri nelerdir?',
      'Hitabette safsataya düşmeden güçlü argüman nasıl kurulur?'
    ],
    difficulty: 'Derin',
    dictionTip: 'Tekerleme gibi takılmadan "saf-sa-ta" hecelerini net ayırın.'
  },
  {
    id: 'diks-8',
    title: 'Mütefekkir',
    category: 'diksiyon',
    pronunciation: 'mü-te-fek-kir',
    origin: 'Arapça (Tefekkür kökünden)',
    shortDescription: 'Derin düşünen, fikir üreten, olayların özünü kavramaya çalışan entelektüel ve düşünür.',
    researchPrompts: [
      'Mütefekkir ile sıradan akademisyen veya araştırmacı arasındaki niteliksel fark nedir?',
      'Tefekkür süreci zihinsel olarak nasıl gerçekleşir?',
      'Kelimenin çifte "k" sesindeki retorik vurgusu nasıl yapılır?'
    ],
    difficulty: 'Derin',
    dictionTip: 'Çift "k" harfini vurgularken kısa bir duraksama yapıp sesi fırlatın.'
  },
  {
    id: 'diks-9',
    title: 'İntizam',
    category: 'diksiyon',
    pronunciation: 'in-ti-zam',
    origin: 'Arapça (Nizam kökünden)',
    shortDescription: 'Düzgünlük, düzenlilik, uyum ve sistemli olma hali.',
    researchPrompts: [
      'İntizam sahibi olmanın insan beynine ve stres seviyesine etkisi nedir?',
      'Doğadaki intizam ile insan yapımı nizam arasındaki farklar nelerdir?',
      'Diksiyonda ritim ve intizamın dinleyici üzerindeki etkisi nedir?'
    ],
    difficulty: 'Kolay',
    dictionTip: '"i" harflerini daraltmadan, "z" sesini net tonlayarak söyleyin.'
  },

  // --- ETIMOLOJI & TARIH ---
  {
    id: 'eti-1',
    title: 'Nostalji',
    category: 'etimoloji',
    pronunciation: 'nos-tal-ji',
    origin: 'Yunanca (Nostos "Yuvaya Dönüş" + Algos "Acı")',
    shortDescription: 'Köken olarak tıbbi bir hastalık (Sıla Hastalığı) olarak tanımlanan, günümüzde geçmişe duyulan tatlı-sert özlem.',
    researchPrompts: [
      'Nostalji 17. yüzyılda isviçreli askerlerde ölümcül bir hastalık olarak nasıl teşhis edildi?',
      'Beynimizin geçmişi güzelleştirme eğilimi (Rosy Retrospection) nasıl çalışır?',
      'Popüler kültür nostaljiyi pazarlama silahı olarak nasıl kullanır?'
    ],
    difficulty: 'Kolay',
    dictionTip: 'Son hecedeki "ji" sesini yumuşak ve akıcı kapatın.'
  },
  {
    id: 'eti-2',
    title: 'Sabotaj',
    category: 'etimoloji',
    pronunciation: 'sa-bo-taj',
    origin: 'Fransızca (Sabot "Tahta Ayakkabı")',
    shortDescription: 'Sanayi devriminde Fransız işçilerin makineleri bozmak için içine tahta takunyalarını (sabot) atması olayı.',
    researchPrompts: [
      'Kelimenin etimolojik hikayesi günümüzdeki anlamını nasıl şekillendirdi?',
      'Psikolojide Öz-Sabotaj (Self-Sabotage) nedir ve neden kendi başarımızı engelleriz?',
      'Siber dünyada ve siyasette sabotaj kavramının değişimi nasıl olmuştur?'
    ],
    difficulty: 'Orta',
    dictionTip: '"j" sesini titretmeden net telaffuz edin.'
  },
  {
    id: 'eti-3',
    title: 'Karantina',
    category: 'etimoloji',
    pronunciation: 'ka-ran-ti-na',
    origin: 'İtalyanca (Quaranta Giorni "40 Gün")',
    shortDescription: 'Venedik Vebası döneminde limana yanaşan gemilerin karaya çıkmadan önce deniz ortasında bekletildiği 40 günlük süre.',
    researchPrompts: [
      '40 sayısının tarihte ve tıpta arınma/bekleme süresi kabul edilmesinin kökeni nedir?',
      'Tarihteki büyük karantina uygulamaları medeniyeti nasıl değiştirdi?',
      'Kelimenin İtalyanca etimolojisindeki denizcilik bağlamı nedir?'
    ],
    difficulty: 'Kolay',
    dictionTip: 'Ritmik dört heceyi eşit vurguyla söyleyin.'
  },

  // --- SANAT & ESTETİK ---
  {
    id: 'san-1',
    title: 'Chiaroscuro (Işık-Gölge Karşıtlığı)',
    category: 'sanat',
    pronunciation: 'kya-ros-ku-ro',
    origin: 'İtalyanca (Chiaro "Aydınlık" + Oscuro "Karanlık")',
    shortDescription: 'Rönesans ve Barok resimde (Caravaggio, Rembrandt) figürlere hacim kazandırmak için kullanılan keskin ışık ve zifiri karanlık zıtlığı.',
    researchPrompts: [
      'Chiaroscuro tekniği sinemada (Film Noir) ve fotoğrafçılıkta duygu yaratmak için nasıl kullanılır?',
      'İnsan gözünün ve beyninin yüksek kontrastlı görsellere tepkisi nedir?',
      'Karanlık olmadan ışığın anlam ifade etmemesi üzerine sanatsal felsefe nedir?'
    ],
    difficulty: 'Derin',
    dictionTip: 'İtalyanca kökenli "kya" sesini akıcı başlatın.'
  },
  {
    id: 'san-2',
    title: 'Wabi-Sabi (侘寂)',
    category: 'sanat',
    pronunciation: 'va-bi sa-bi',
    origin: 'Japon Estetik Felsefesi',
    shortDescription: 'Kusurlu, geçici, yıpranmış ve tamamlanmamış nesnelerdeki doğal ve mütevazı güzelliği takdir etme sanatı.',
    researchPrompts: [
      'Batı dünyasının kusursuzluk (Perfectionism) arayışı ile Wabi-Sabi zihniyeti nasıl çatışır?',
      'Eski bir ahşap masanın veya paslı bir metalin estetize edilmesi insan ruhuna ne katar?',
      'Mimaride ve iç mekanda Wabi-Sabi tasarımı nasıl uygulanır?'
    ],
    difficulty: 'Orta',
    dictionTip: 'Sakin ve yapmacıksız bir söyleyiş tarzı kullanın.'
  },

  // --- PSİKOLOJİ & ZİHİN ---
  {
    id: 'psi-1',
    title: 'Baader-Meinhof Fenomeni',
    category: 'psikoloji',
    pronunciation: 'baa-der meyn-hof',
    origin: 'Psikolojik Illüzyon (Farkındalık Yanılsaması)',
    shortDescription: 'Yeni öğrendiğiniz bir kelimeyi, kavramı veya arabayı aniden her yerde görmeye başlama illüzyonu.',
    researchPrompts: [
      'Beynin "Seçici Dikkat" (Selective Attention) mekanizması bu fenomeni nasıl yaratır?',
      'Doğrulama yanlılığı (Confirmation Bias) ile Baader-Meinhof arasındaki ilişki nedir?',
      'Pazarlamacılar ve reklamcılar bu fenomeni müşteriler üzerinde nasıl kullanır?'
    ],
    difficulty: 'Orta',
    dictionTip: 'Yabancı terimi Türkçe cümleye akıcı bir fonetikle entegre edin.'
  },
  {
    id: 'psi-2',
    title: 'Semmelweis Refleksi',
    category: 'psikoloji',
    pronunciation: 'sem-mel-veys',
    origin: 'Dr. Ignaz Semmelweis tarihi olayı',
    shortDescription: 'Yerleşik inançlara veya kurulu düzene aykırı olan yeni ve doğru bilgileri otomatik olarak reddetme eğilimi.',
    researchPrompts: [
      'Dr. Semmelweis elleri yıkama gerçeğini keşfettiğinde neden tımarhaneye kapatıldı?',
      'İnsan beyni neden statükoyu korumaya ve yeni gerçekleri reddetmeye programlıdır?',
      'Günümüzde bilimde veya işte Semmelweis refleksinden nasıl kaçınabiliriz?'
    ],
    difficulty: 'Derin',
    dictionTip: 'İsmi söylerken "vey" hecesini akıcı tamamlayın.'
  },
  {
    id: 'psi-3',
    title: 'Bouba / Kiki Etkisi',
    category: 'psikoloji',
    pronunciation: 'bu-ba ki-ki',
    origin: 'Wolfgang Köhler Sinestezi Deneyi',
    shortDescription: 'İnsanların sivri şekilleri "Kiki", yuvarlak yumuşak şekilleri "Bouba" olarak adlandırma konusunda kültürlerarası %95 anlaşması.',
    researchPrompts: [
      'Dilin evriminde seslerin şekillerle olan doğuştan bağlantısı (Ses Semantiği) nedir?',
      'Sinestezi ve insan beyninin kineztetik haritalaması bu deneyi nasıl açıklar?',
      'Marka isimleri seçilirken Bouba/Kiki etkisinden nasıl yararlanılır?'
    ],
    difficulty: 'Kolay',
    dictionTip: 'Kiki\'yi sert, Bouba\'yı yumuşak tonlayarak kavrama ton katın.'
  },
  {
    id: 'psi-4',
    title: 'Jamais Vu',
    category: 'psikoloji',
    pronunciation: 'ja-me vü',
    origin: 'Fransızca ("Hiç görülmemiş")',
    shortDescription: 'Déjà vu\'nün tam tersi; çok iyi bildiğiniz bir mekanı, yüzü veya kelimeyi aniden tamamen yabancı ve ilk kez görüyormuş gibi hissetme hali.',
    researchPrompts: [
      'Jamais vu anında beyinde (özellikle temporal lobda) nörolojik olarak ne yaşanır?',
      'Bir kelimeyi 30 saniye boyunca tekrar edince yaşanan zihinsel yorulma (semantic satiation) ile ilişkisi nedir?',
      'Günlük hayatta anlık hafıza kopuşları neden yaşanır?'
    ],
    difficulty: 'Orta',
    dictionTip: 'Fransızca telaffuza uygun olarak hafif genizden akıtarak söyleyin.'
  },

  // --- FELSEFE & PARADOKSLAR ---
  {
    id: 'fel-1',
    title: 'Theseus\'un Gemisi (Ship of Theseus)',
    category: 'felsefe',
    pronunciation: 'te-se-us',
    origin: 'Antik Yunan Felsefesi (Plutarkhos)',
    shortDescription: 'Tüm tahtaları tek tek yenilenen bir gemi hala aynı gemi midir? Değişen eski tahtalardan yeni bir gemi yapılırsa hangisi orjinaldir?',
    researchPrompts: [
      'İnsan vücudundaki tüm hücreler 7 yılda bir yenileniyorsa, siz 7 yıl önceki aynı kişi misiniz?',
      'Kimlik (Identity) ve Öz (Essence) kavramları felsefede nasıl tanımlanır?',
      'Yapay zeka veya bilgisayar parçaları değiştiğinde orijinal varlık nerede başlar nerede biter?'
    ],
    difficulty: 'Orta',
    dictionTip: 'Soruyu sorarken dinleyiciyi düşündürecek tonlamayla duraksamalar verin.'
  },
  {
    id: 'fel-2',
    title: 'Buridan\'ın Eşeği (Buridan\'s Ass)',
    category: 'felsefe',
    pronunciation: 'bu-ri-dan',
    origin: 'Jean Buridan Özgür İrade Felsefesi',
    shortDescription: 'Hem susamış hem acıkmış bir eşeğin, kendine eşit mesafedeki saman balyası ve su kovası arasında karar veremeyip kararsızlıktan ölmesi paradoksu.',
    researchPrompts: [
      'Özgür irade (Free Will) ve Determinizm açısından eşit seçenekler insanı nasıl felç eder (Analysis Paralysis)?',
      'Modern dünyada çok fazla seçeneğin olması (Paradox of Choice) bizi Buridan\'ın eşeğine mi dönüştürüyor?',
      'Kararsızlık anında beynin rasyonellik ve duygu merkezi nasıl çatışır?'
    ],
    difficulty: 'Kolay',
    dictionTip: 'Hikaye anlatımı gibi ritmik ve vurgulu sunun.'
  },

  // --- TUHAF BİLİM & EVREN ---
  {
    id: 'bil-1',
    title: 'Petrichor (Toprak Kokusu)',
    category: 'bilim',
    pronunciation: 'pet-ri-kor',
    origin: 'Yunanca (Petra "Taş" + Ichor "Tanrıların Kanı")',
    shortDescription: 'Kuru toprağa yağmur yağdığında ortaya çıkan büyüleyici kokunun bilimsel ve moleküler adı (Geosmin molekülü).',
    researchPrompts: [
      'İnsan burnu Geosmin molekülünü neden köpekbalıklarının sudaki kanı hissetmesinden daha hassas algılar?',
      'Evrimsel olarak yağmur kokusunu sevmemizin hayatta kalma (su bulma) ile bağı nedir?',
      'Aktinobakteriler bu kokuyu oluştururken toprakta nasıl bir süreç yürütür?'
    ],
    difficulty: 'Kolay',
    dictionTip: 'Şiirsel bir tonla kokunun yarattığı hissi sese yansıtın.'
  },

  // --- NADİR KAVRAMLAR ---
  {
    id: 'nad-1',
    title: 'Sonder',
    category: 'nadir',
    pronunciation: 'son-der',
    origin: 'John Koenig (The Dictionary of Obscure Sorrows)',
    shortDescription: 'Sokaktan geçen her yabancının da en az sizin kadar karmaşık, hüzünlü, neşeli ve detaylı bir hayat yaşadığını aniden fark etme hissi.',
    researchPrompts: [
      'Otobüste veya yolda yanınızdan geçen birinin dünyasını hayal ettiğinizde zihninizde ne değişir?',
      'Empati yeteneği ile Sonder idraki arasındaki psikolojik bağ nedir?',
      'Modern şehir hayatının getirdiği yabancılaşmaya (Alienation) panzehir olabilir mi?'
    ],
    difficulty: 'Kolay',
    dictionTip: 'Hissi dinleyiciye geçirecek derin ve ılık bir ses tonu kullanın.'
  },
  {
    id: 'nad-2',
    title: 'Komorebi (木漏れ日)',
    category: 'nadir',
    pronunciation: 'ko-mo-re-bi',
    origin: 'Japonca',
    shortDescription: 'Ağaç yapraklarının arasından süzülerek yere düşen güneş ışığı hüzmeleri ve yarattığı huzurlu gölge oyunu.',
    researchPrompts: [
      'Japon kültüründe doğadaki anlık güzellikleri (Wabi-Sabi) kelimelerle ifade etme sanatı nedir?',
      'Işık ve gölge oyunlarının insan zihnindeki serotonin ve kortizol seviyesine etkisi nedir?',
      'Görsel sanatlarda ve sinemada Komorebi estetiği nasıl kullanılır?'
    ],
    difficulty: 'Kolay',
    dictionTip: 'Akıcı, dingin bir ritimle telaffuz edin.'
  }
];

export function getRandomTopic(categoryId = 'all', excludeIds = []) {
  let filtered = TOPICS;
  if (categoryId !== 'all') {
    filtered = TOPICS.filter(t => t.category === categoryId);
  }
  const available = filtered.filter(t => !excludeIds.includes(t.id));
  if (available.length === 0) {
    return filtered[Math.floor(Math.random() * filtered.length)];
  }
  return available[Math.floor(Math.random() * available.length)];
}
