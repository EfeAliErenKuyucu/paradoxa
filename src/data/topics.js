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
    researchPrompts: [
      'Kadrimutlak kelimesi edebiyatta ve felsefede ne tür bağlamlarda kullanılır?',
      'Günlük yaşamda metaforik olarak kime veya neye "kadrimutlak" denebilir?',
      'Bu kelimenin konuşma dilindeki tonlama ve artikülasyon nüansları nelerdir?'
    ],
    difficulty: 'Orta'
  },
  {
    id: 'diks-2',
    title: 'Tahayyül',
    category: 'diksiyon',
    pronunciation: 'ta-hay-yül',
    origin: 'Arapça (Hayal kökünden)',
    researchPrompts: [
      'Tahayyül ile hayal kurmak arasındaki felsefi ve zihinsel fark nedir?',
      'Sanatçıların ve bilim insanlarının tahayyül mekanizması nasıl çalışır?',
      'Konuşurken "tahayyül etmek" kalıbı dinleyicide nasıl bir etki yaratır?'
    ],
    difficulty: 'Kolay'
  },
  {
    id: 'diks-3',
    title: 'Feraset',
    category: 'diksiyon',
    pronunciation: 'fe-ra-set',
    origin: 'Arapça (Firasat)',
    researchPrompts: [
      'Feraset ile zeka (IQ) ve basiret arasındaki fark nedir?',
      'Liderlikte feraset sahibi olmak neleri değiştirir?',
      'Feraset kelimesinin etimolojik kökenindeki "at sürme/sezgi" bağı nereden gelir?'
    ],
    difficulty: 'Kolay'
  },
  {
    id: 'diks-4',
    title: 'Girift',
    category: 'diksiyon',
    pronunciation: 'gi-rift',
    origin: 'Farsça (Gireft)',
    researchPrompts: [
      'Girift yapılar sanatta, mimaride ve edebiyatta nasıl karşımıza çıkar?',
      'Bir problemi anlatırken "girift" sözcüğü nasıl bir derinlik katar?',
      'Farsça etimolojisinde girift kavramının orijinal anlamı nedir?'
    ],
    difficulty: 'Kolay'
  },
  {
    id: 'diks-5',
    title: 'Mefkure',
    category: 'diksiyon',
    pronunciation: 'mef-ku-re',
    origin: 'Arapça (Fikir kökünden)',
    researchPrompts: [
      'Mefkure sahibi olmak insan hayatını ve motivasyonunu nasıl etkiler?',
      'Tarihteki büyük mefkure örnekleri nelerdir?',
      'Gaye, hedef ve mefkure arasındaki anlam kademeleri nelerdir?'
    ],
    difficulty: 'Orta'
  },
  {
    id: 'diks-6',
    title: 'Kadirşinas',
    category: 'diksiyon',
    pronunciation: 'ka-dir-şi-nas',
    origin: 'Arapça/Farsça bileşik',
    researchPrompts: [
      'Kadirşinaslık toplumsal ilişkilerde ve psikolojide ne anlama gelir?',
      'Vefakarlık ile kadirşinaslık arasındaki ince çizgi nedir?',
      'Konuşmanızda birine duyduğunuz minneti ifade ederken bu kelimeyi nasıl kullanırsınız?'
    ],
    difficulty: 'Orta'
  },
  {
    id: 'diks-7',
    title: 'Safsata (Fallacy)',
    category: 'diksiyon',
    pronunciation: 'saf-sa-ta',
    origin: 'Arapça (Sophisteia kökünden)',
    researchPrompts: [
      'En yaygın mantık safsataları (Ad Hominem, Strawman, Slippery Slope) nelerdir?',
      'Debatlarda ve günlük tartışmalarda safsatayı anında tespit etme yöntemleri nelerdir?',
      'Hitabette safsataya düşmeden güçlü argüman nasıl kurulur?'
    ],
    difficulty: 'Derin'
  },
  {
    id: 'diks-8',
    title: 'Mütefekkir',
    category: 'diksiyon',
    pronunciation: 'mü-te-fek-kir',
    origin: 'Arapça (Tefekkür kökünden)',
    researchPrompts: [
      'Mütefekkir ile sıradan akademisyen veya araştırmacı arasındaki niteliksel fark nedir?',
      'Tefekkür süreci zihinsel olarak nasıl gerçekleşir?',
      'Kelimenin çifte "k" sesindeki retorik vurgusu nasıl yapılır?'
    ],
    difficulty: 'Derin'
  },
  {
    id: 'diks-9',
    title: 'İntizam',
    category: 'diksiyon',
    pronunciation: 'in-ti-zam',
    origin: 'Arapça (Nizam kökünden)',
    researchPrompts: [
      'İntizam sahibi olmanın insan beynine ve stres seviyesine etkisi nedir?',
      'Doğadaki intizam ile insan yapımı nizam arasındaki farklar nelerdir?',
      'Diksiyonda ritim ve intizamın dinleyici üzerindeki etkisi nedir?'
    ],
    difficulty: 'Kolay'
  },
  {
    id: 'diks-10',
    title: 'Muamma',
    category: 'diksiyon',
    pronunciation: 'mu-am-ma',
    origin: 'Arapça (Amma kökünden)',
    researchPrompts: [
      'Tarihteki en büyük bilimsel ve felsefi muammalar nelerdir?',
      'Muamma sözcüğü edebiyatta şiir türü olarak nasıl kullanılmıştır?',
      'Çift "m" vurgusu konuşmada gizem havasını nasıl pekiştirir?'
    ],
    difficulty: 'Orta'
  },
  {
    id: 'diks-11',
    title: 'Beliğ (Hitabet Sanatı)',
    category: 'diksiyon',
    pronunciation: 'be-liğ',
    origin: 'Arapça (Belağat kökünden)',
    researchPrompts: [
      'Beliğ bir konuşma ile sıradan bir anlatım arasındaki en büyük fark nedir?',
      'Belağat sanatında dinleyiciye göre söz söyleme inceliği nasıl uygulanır?',
      'Tarihteki beliğ hatiplerin ortak konuşma özellikleri nelerdir?'
    ],
    difficulty: 'Orta'
  },

  // --- ETIMOLOJI & TARIH ---
  {
    id: 'eti-1',
    title: 'Nostalji',
    category: 'etimoloji',
    pronunciation: 'nos-tal-ji',
    origin: 'Yunanca (Nostos "Yuvaya Dönüş" + Algos "Acı")',
    researchPrompts: [
      'Nostalji 17. yüzyılda İsviçreli askerlerde ölümcül bir hastalık olarak nasıl teşhis edildi?',
      'Beynimizin geçmişi güzelleştirme eğilimi (Rosy Retrospection) nasıl çalışır?',
      'Popüler kültür nostaljiyi pazarlama silahı olarak nasıl kullanır?'
    ],
    difficulty: 'Kolay'
  },
  {
    id: 'eti-2',
    title: 'Sabotaj',
    category: 'etimoloji',
    pronunciation: 'sa-bo-taj',
    origin: 'Fransızca (Sabot "Tahta Ayakkabı")',
    researchPrompts: [
      'Kelimenin etimolojik hikayesi günümüzdeki anlamını nasıl şekillendirdi?',
      'Psikolojide Öz-Sabotaj (Self-Sabotage) nedir ve neden kendi başarımızı engelleriz?',
      'Siber dünyada ve siyasette sabotaj kavramının değişimi nasıl olmuştur?'
    ],
    difficulty: 'Orta'
  },
  {
    id: 'eti-3',
    title: 'Karantina',
    category: 'etimoloji',
    pronunciation: 'ka-ran-ti-na',
    origin: 'İtalyanca (Quaranta Giorni "40 Gün")',
    researchPrompts: [
      '40 sayısının tarihte ve tıpta arınma/bekleme süresi kabul edilmesinin kökeni nedir?',
      'Tarihteki büyük karantina uygulamaları medeniyeti nasıl değiştirdi?',
      'Kelimenin İtalyanca etimolojisindeki denizcilik bağlamı nedir?'
    ],
    difficulty: 'Kolay'
  },
  {
    id: 'eti-4',
    title: 'Boykot',
    category: 'etimoloji',
    pronunciation: 'boy-kot',
    origin: 'İngilizce (Captain Charles Boycott olayı)',
    researchPrompts: [
      'Yüzbaşı Boycott 1880 yılında İrlanda toplumu tarafından nasıl tamamen izole edildi?',
      'Bir şahsın isminin eyleme dönüşmesinin etimolojik terimi (Eponim) nedir?',
      'Tarihteki en etkili toplumsal boykot hareketleri hangileridir?'
    ],
    difficulty: 'Kolay'
  },

  // --- SANAT & ESTETİK ---
  {
    id: 'san-1',
    title: 'Chiaroscuro (Işık-Gölge Karşıtlığı)',
    category: 'sanat',
    pronunciation: 'kya-ros-ku-ro',
    origin: 'İtalyanca (Chiaro "Aydınlık" + Oscuro "Karanlık")',
    researchPrompts: [
      'Chiaroscuro tekniği sinemada (Film Noir) ve fotoğrafçılıkta duygu yaratmak için nasıl kullanılır?',
      'İnsan gözünün ve beyninin yüksek kontrastlı görsellere tepkisi nedir?',
      'Karanlık olmadan ışığın anlam ifade etmemesi üzerine sanatsal felsefe nedir?'
    ],
    difficulty: 'Derin'
  },
  {
    id: 'san-2',
    title: 'Wabi-Sabi (侘寂)',
    category: 'sanat',
    pronunciation: 'va-bi sa-bi',
    origin: 'Japon Estetik Felsefesi',
    researchPrompts: [
      'Batı dünyasının kusursuzluk (Perfectionism) arayışı ile Wabi-Sabi zihniyeti nasıl çatışır?',
      'Eski bir ahşap masanın veya paslı bir metalin estetize edilmesi insan ruhuna ne katar?',
      'Mimaride ve iç mekanda Wabi-Sabi tasarımı nasıl uygulanır?'
    ],
    difficulty: 'Orta'
  },
  {
    id: 'san-3',
    title: 'Pentimento',
    category: 'sanat',
    pronunciation: 'pen-ti-men-to',
    origin: 'İtalyanca (Pişmanlık kökünden)',
    researchPrompts: [
      'Ressamın tuval üzerindeki fikrini değiştirip üzerini kapatması ancak zamanla alt katmanın belirmesi sanatta ne anlama gelir?',
      'X-ray analizleri sayesinde tablolarda keşfedilen en şaşırtıcı Pentimento örnekleri nelerdir?',
      'Hayatımızda geçmişin izlerinin gün yüzüne çıkmasıyla bağdaştırılabilir mi?'
    ],
    difficulty: 'Derin'
  },

  // --- PSİKOLOJİ & ZİHİN ---
  {
    id: 'psi-1',
    title: 'Baader-Meinhof Fenomeni',
    category: 'psikoloji',
    pronunciation: 'baa-der meyn-hof',
    origin: 'Psikolojik Illüzyon (Farkındalık Yanılsaması)',
    researchPrompts: [
      'Beynin "Seçici Dikkat" (Selective Attention) mekanizması bu fenomeni nasıl yaratır?',
      'Doğrulama yanlılığı (Confirmation Bias) ile Baader-Meinhof arasındaki ilişki nedir?',
      'Pazarlamacılar ve reklamcılar bu fenomeni müşteriler üzerinde nasıl kullanır?'
    ],
    difficulty: 'Orta'
  },
  {
    id: 'psi-2',
    title: 'Semmelweis Refleksi',
    category: 'psikoloji',
    pronunciation: 'sem-mel-veys',
    origin: 'Dr. Ignaz Semmelweis tarihi olayı',
    researchPrompts: [
      'Dr. Semmelweis elleri yıkama gerçeğini keşfettiğinde neden tımarhaneye kapatıldı?',
      'İnsan beyni neden statükoyu korumaya ve yeni gerçekleri reddetmeye programlıdır?',
      'Günümüzde bilimde veya işte Semmelweis refleksinden nasıl kaçınabiliriz?'
    ],
    difficulty: 'Derin'
  },
  {
    id: 'psi-3',
    title: 'Bouba / Kiki Etkisi',
    category: 'psikoloji',
    pronunciation: 'bu-ba ki-ki',
    origin: 'Wolfgang Köhler Sinestezi Deneyi',
    researchPrompts: [
      'Dilin evriminde seslerin şekillerle olan doğuştan bağlantısı (Ses Semantiği) nedir?',
      'Sinestezi ve insan beyninin kineztetik haritalaması bu deneyi nasıl açıklar?',
      'Marka isimleri seçilirken Bouba/Kiki etkisinden nasıl yararlanılır?'
    ],
    difficulty: 'Kolay'
  },
  {
    id: 'psi-4',
    title: 'Jamais Vu',
    category: 'psikoloji',
    pronunciation: 'ja-me vü',
    origin: 'Fransızca ("Hiç görülmemiş")',
    researchPrompts: [
      'Jamais vu anında beyinde (özellikle temporal lobda) nörolojik olarak ne yaşanır?',
      'Bir kelimeyi 30 saniye boyunca tekrar edince yaşanan zihinsel yorulma (semantic satiation) ile ilişkisi nedir?',
      'Günlük hayatta anlık hafıza kopuşları neden yaşanır?'
    ],
    difficulty: 'Orta'
  },
  {
    id: 'psi-5',
    title: 'Spotlight Etkisi (Spotlight Effect)',
    category: 'psikoloji',
    pronunciation: 'spot-layt ef-fek-ti',
    origin: 'Sosyal Psikoloji',
    researchPrompts: [
      'Spotlight etkisi sosyal anksiyete ve sahne korkusunu nasıl tetikler?',
      'Gerçekte insanların başkalarına ayırdığı dikkat süresi ne kadardır?',
      'Bu illüzyondan kurtulmak için hangi zihinsel çerçeveleme (reframing) kullanılır?'
    ],
    difficulty: 'Kolay'
  },
  {
    id: 'psi-6',
    title: 'Zeigarnik Etkisi',
    category: 'psikoloji',
    pronunciation: 'zey-gar-nik',
    origin: 'Bluma Zeigarnik (Sovyet Psikolog)',
    researchPrompts: [
      'Garsonların ödenmemiş masaları hatırlayıp ödenenleri unutması bu etkiyle nasıl açıklandı?',
      'Erteleme hastalığını (procrastination) yenmek için Zeigarnik etkisi nasıl bir silaha dönüşür?',
      'Diziler ve filmler neden en heyecanlı yerde (cliffhanger) biter?'
    ],
    difficulty: 'Orta'
  },
  {
    id: 'psi-7',
    title: 'Ganzfeld Etkisi',
    category: 'psikoloji',
    pronunciation: 'ganz-felt',
    origin: 'Almanca ("Tüm Alan")',
    researchPrompts: [
      'Sensory Deprivation (Duyusal Yoksunluk) anında insan beyni neden kendi görsellerini yaratır?',
      'Ganzfeld deneyi parapsikolojide ve sinirbilimde nasıl incelenmiştir?',
      'Zihnin dış dünyadan uyarım almadığında ürettiği yaratıcı potansiyel nedir?'
    ],
    difficulty: 'Derin'
  },
  {
    id: 'psi-8',
    title: 'L\'esprit de l\'escalier',
    category: 'psikoloji',
    pronunciation: 'les-pri döl-les-kal-ye',
    origin: 'Fransızca (Diderot)',
    researchPrompts: [
      'Stres ve baskı anında beynin Amigdala felci geçirmesi hızlı hazırcevaplığı nasıl engeller?',
      'Hazırcevaplık (Wit) doğuştan mıdır yoksa pratikle geliştirilebilir mi?',
      'Bu hissiyatın insan özgüveni üzerindeki etkisi nedir?'
    ],
    difficulty: 'Orta'
  },

  // --- FELSEFE & PARADOKSLAR ---
  {
    id: 'fel-1',
    title: 'Theseus\'un Gemisi (Ship of Theseus)',
    category: 'felsefe',
    pronunciation: 'te-se-us',
    origin: 'Antik Yunan Felsefesi (Plutarkhos)',
    researchPrompts: [
      'İnsan vücudundaki tüm hücreler 7 yılda bir yenileniyorsa, siz 7 yıl önceki aynı kişi misiniz?',
      'Kimlik (Identity) ve Öz (Essence) kavramları felsefede nasıl tanımlanır?',
      'Yapay zeka veya bilgisayar parçaları değiştiğinde orijinal varlık nerede başlar nerede biter?'
    ],
    difficulty: 'Orta'
  },
  {
    id: 'fel-2',
    title: 'Buridan\'ın Eşeği (Buridan\'s Ass)',
    category: 'felsefe',
    pronunciation: 'bu-ri-dan',
    origin: 'Jean Buridan Özgür İrade Felsefesi',
    researchPrompts: [
      'Özgür irade (Free Will) ve Determinizm açısından eşit seçenekler insanı nasıl felç eder (Analysis Paralysis)?',
      'Modern dünyada çok fazla seçeneğin olması (Paradox of Choice) bizi Buridan\'ın eşeğine mi dönüştürüyor?',
      'Kararsızlık anında beynin rasyonellik ve duygu merkezi nasıl çatışır?'
    ],
    difficulty: 'Kolay'
  },
  {
    id: 'fel-3',
    title: 'Fermi Paradoksu',
    category: 'felsefe',
    pronunciation: 'fer-mi',
    origin: 'Enrico Fermi (Fizikçi)',
    researchPrompts: [
      'Büyük Filtre (Great Filter) hipotezi insanlığın geleceği hakkında ne söyler?',
      'Karanlık Orman Hipotezi (Dark Forest Theory) evrendeki sessizliği nasıl açıklar?',
      'İletişim kuramama nedenlerimiz (Zaman, Mesafe, Teknoloji farkı) nelerdir?'
    ],
    difficulty: 'Orta'
  },
  {
    id: 'fel-4',
    title: 'Sorites Paradoksu (Yığın Paradoksu)',
    category: 'felsefe',
    pronunciation: 'so-ri-tes',
    origin: 'Antik Yunan (Eubulides)',
    researchPrompts: [
      'Bulanık Mantık (Fuzzy Logic) ve muğlak kavramlar dilde ve matematikte nasıl çözülür?',
      'Alışkanlıklarımızın tek bir günden değil birikimden oluşması (Kademeli Değişim) ile ilişkisi nedir?',
      'Kelime sınırlarının ve kategorilerin yapaylığı üzerine felsefi yaklaşım nedir?'
    ],
    difficulty: 'Derin'
  },
  {
    id: 'fel-5',
    title: 'Newcomb Paradoksu',
    category: 'felsefe',
    pronunciation: 'nü-kom',
    origin: 'William Newcomb (Oyun Teorisi)',
    researchPrompts: [
      'Öngörülebilirlik ve Özgür İrade felsefede nasıl uzlaştırılır?',
      'Oyun teorisinde bu paradoks neden matematikçileri ikiye bölmüştür?',
      'Karar verme mekanizmasında nedensellik (Causality) prensibi nasıl işler?'
    ],
    difficulty: 'Derin'
  },

  // --- TUHAF BİLİM & EVREN ---
  {
    id: 'bil-1',
    title: 'Petrichor (Toprak Kokusu)',
    category: 'bilim',
    pronunciation: 'pet-ri-kor',
    origin: 'Yunanca (Petra + Ichor)',
    researchPrompts: [
      'İnsan burnu Geosmin molekülünü neden köpekbalıklarının sudaki kanı hissetmesinden daha hassas algılar?',
      'Evrimsel olarak yağmur kokusunu sevmemizin hayatta kalma (su bulma) ile bağı nedir?',
      'Aktinobakteriler bu kokuyu oluştururken toprakta nasıl bir süreç yürütür?'
    ],
    difficulty: 'Kolay'
  },
  {
    id: 'bil-2',
    title: 'Casimir Etkisi (Casimir Effect)',
    category: 'bilim',
    pronunciation: 'ka-zi-mir',
    origin: 'Hendrik Casimir (Kuantum Fizikçi)',
    researchPrompts: [
      'Kuantum Vakumu gerçekten boş mudur yoksa sanal parçacıklarla mı doludur?',
      'Negatif Enerji ve solucan delikleri (Wormholes) teorilerinde Casimir etkisi nasıl yer alır?',
      'Görünmeyen kuantum kuvvetlerinin makro dünyaya etkisi nedir?'
    ],
    difficulty: 'Derin'
  },
  {
    id: 'bil-3',
    title: 'Sonolüminesans (Sonoluminescence)',
    category: 'bilim',
    pronunciation: 'so-no-lü-mi-ne-sans',
    origin: 'Fizik / Akustik',
    researchPrompts: [
      'Sesten nasıl ışık elde edilir? Akustik enerjinin optik enerjiye dönüşümü nasıl gerçekleşir?',
      'Tabancalı karideslerin (Pistol Shrimp) avlanırken çıkardığı ses ve ışık patlaması ile bağı nedir?',
      'Laboratuvar koşullarında soğuk füzyon umudu yaratmış mıdır?'
    ],
    difficulty: 'Derin'
  },
  {
    id: 'bil-4',
    title: 'Kuantum Dolanıklık (Quantum Entanglement)',
    category: 'bilim',
    pronunciation: 'ku-an-tum do-lan-ık-lık',
    origin: 'Einstein (Spooky action at a distance)',
    researchPrompts: [
      'Einstein neden bu duruma "Uzak mesafeden ürkütücü eylem" demiştir?',
      'Işık hızından hızlı bilgi iletimi imkansızken kuantum dolanıklık nasıl çalışır?',
      'Kuantum bilgisayarlar ve teleportasyon gelecekte bunu nasıl kullanacak?'
    ],
    difficulty: 'Derin'
  },
  {
    id: 'bil-5',
    title: 'Biyolüminesans (Bioluminescence)',
    category: 'bilim',
    pronunciation: 'bi-yo-lü-mi-ne-sans',
    origin: 'Biyoloji / Kimya',
    researchPrompts: [
      'Lüsiferin maddesi ve Lüsiferaz enziminin kimyasal tepkimesi nasıl çalışır?',
      'Okyanusun 1000 metre altında canlılar neden ışığı iletişim, avlanma ve kamuflaj için kullanır?',
      'Genetik mühendisliği ile parlayan şehir ağaçları üretmek mümkün müdür?'
    ],
    difficulty: 'Orta'
  },

  // --- NADİR KAVRAMLAR (ÇEVRİLEMEYEN HİSLER) ---
  {
    id: 'nad-1',
    title: 'Sonder',
    category: 'nadir',
    pronunciation: 'son-der',
    origin: 'John Koenig',
    researchPrompts: [
      'Otobüste veya yolda yanınızdan geçen birinin dünyasını hayal ettiğinizde zihninizde ne değişir?',
      'Empati yeteneği ile Sonder idraki arasındaki psikolojik bağ nedir?',
      'Modern şehir hayatının getirdiği yabancılaşmaya (Alienation) panzehir olabilir mi?'
    ],
    difficulty: 'Kolay'
  },
  {
    id: 'nad-2',
    title: 'Komorebi (木漏れ日)',
    category: 'nadir',
    pronunciation: 'ko-mo-re-bi',
    origin: 'Japonca',
    researchPrompts: [
      'Japon kültüründe doğadaki anlık güzellikleri (Wabi-Sabi) kelimelerle ifade etme sanatı nedir?',
      'Işık ve gölge oyunlarının insan zihnindeki serotonin ve kortizol seviyesine etkisi nedir?',
      'Görsel sanatlarda ve sinemada Komorebi estetiği nasıl kullanılır?'
    ],
    difficulty: 'Kolay'
  },
  {
    id: 'nad-3',
    title: 'Weltschmerz',
    category: 'nadir',
    pronunciation: 'velt-şmerts',
    origin: 'Almanca ("Dünya Ağrısı")',
    researchPrompts: [
      'Romantik dönem edebiyatında Weltschmerz temasının işlenişi nasıldır?',
      'Depresyon ile dünyadaki adaletsizliklerden duyulan melankoli (Weltschmerz) arasındaki fark nedir?',
      'Bu duyguyu yaratıcı bir sanatsal üretime dönüştürmek mümkün müdür?'
    ],
    difficulty: 'Orta'
  },
  {
    id: 'nad-4',
    title: 'Hiraeth',
    category: 'nadir',
    pronunciation: 'hi-rayt',
    origin: 'Gallce (Welsh)',
    researchPrompts: [
      'Nostalji ile Hiraeth arasındaki köklü fark nedir?',
      'İnsan beyni neden geçmişi gerçekte olduğundan daha pembe ve huzurlu hatırlar (Rosy Retrospection)?',
      'Müzikte ve şiirde Hiraeth hissi nasıl melodiye dökülür?'
    ],
    difficulty: 'Orta'
  },
  {
    id: 'nad-5',
    title: 'Yūgen (幽玄)',
    category: 'nadir',
    pronunciation: 'yü-gen',
    origin: 'Japon Estetik Felsefesi',
    researchPrompts: [
      'Gündüz açık gökyüzüne bakmak yerine Sisli dağlara bakarken duyulan Yūgen hissi nedir?',
      'Sanatta "Söylenmeyeni ima etme" (Subtlety) felsefesi nasıl işler?',
      'Estetik algıda tamlık değil, gizem neden daha büyüleyicidir?'
    ],
    difficulty: 'Derin'
  },
  {
    id: 'nad-6',
    title: 'Meraki (Μεράκι)',
    category: 'nadir',
    pronunciation: 'me-ra-ki',
    origin: 'Yunanca',
    researchPrompts: [
      'Sıradan bir görevi Meraki ile yapmak (Zanaat ruhu) insan mutluluğunu nasıl etkiler?',
      'Japonlardaki Ikigai ile Yunanlılardaki Meraki arasındaki benzerlikler nelerdir?',
      'Modern serbest üretimde işimize "ruh katmak" ne demektir?'
    ],
    difficulty: 'Kolay'
  },
  {
    id: 'nad-7',
    title: 'Kintsugi (金継ぎ)',
    category: 'nadir',
    pronunciation: 'kin-tsu-gi',
    origin: 'Japon Felsefesi & Zanaatı',
    researchPrompts: [
      'Kintsugi felsefesi insanın yaşadığı travmalar ve yaralar (Psychological Resilience) için ne anlam taşır?',
      'Kusursuzluk takıntısı (Perfectionism) karşısında kırıkları altınla parlatmak neleri değiştirir?',
      'Japon Wabi-Sabi anlayışında geçicilik ve eskilik neden yüceltilir?'
    ],
    difficulty: 'Orta'
  },
  {
    id: 'nad-8',
    title: 'Fernweh',
    category: 'nadir',
    pronunciation: 'fern-ve',
    origin: 'Almanca ("Uzak Hasreti")',
    researchPrompts: [
      'İnsanoğlunun keşfetme genetiği (DRD4-7R Wandering Gene) gerçekten var mıdır?',
      'Fernweh hissi seyahat etme arzusu ile felsefi keşif arzusunu nasıl birleştirir?',
      'Haritalara ve atlaslara bakarken duyulan o tanımsız özlem nereden gelir?'
    ],
    difficulty: 'Kolay'
  }
];

// Session queue to strictly prevent back-to-back topic repeats
let sessionHistory = [];

export function getRandomTopic(categoryId = 'all', excludeIds = []) {
  let filtered = TOPICS;
  if (categoryId !== 'all') {
    filtered = TOPICS.filter(t => t.category === categoryId);
  }

  // Filter out any topic in excludeIds OR recently shown in sessionHistory
  let available = filtered.filter(t => !excludeIds.includes(t.id) && !sessionHistory.includes(t.id));
  
  // If we ran out of unseen topics in this pool, clear session history for fresh cycle!
  if (available.length === 0) {
    sessionHistory = sessionHistory.filter(id => !filtered.some(t => t.id === id));
    available = filtered.filter(t => !excludeIds.includes(t.id));
  }

  const chosen = available[Math.floor(Math.random() * available.length)];
  if (chosen) {
    sessionHistory.push(chosen.id);
    if (sessionHistory.length > 25) {
      sessionHistory.shift(); // keep history queue balanced
    }
  }
  return chosen || filtered[0];
}
