export type Verse = {
  id: string; // e.g., "18:10"
  surah: string; // name
  ayah: number;
  arabic: string;
  english: string;
  story: string; // ~3 short sentences. keep general & reflective.
};

export const VERSES: Verse[] = [
  {
    id: "1:1",
    surah: "Al-Fatiha",
    ayah: 1,
    arabic: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ",
    english: "In the name of Allah—the Most Compassionate, Most Merciful.",
    story: "This opening sets the tone of mercy and care. It reminds the reader to begin with gratitude and humility. Many start tasks with it to align intention and calm the heart.",
  },
  {
    id: "2:286",
    surah: "Al-Baqarah",
    ayah: 286,
    arabic: "لَا يُكَلِّفُ اللّٰهُ نَفْسًا إِلَّا وُسْعَهَا...",
    english: "Allah does not burden any soul with more than it can bear...",
    story: "A reassurance in moments of overwhelm. It invites patience and trust that strength grows with trials. Many recall it when facing new responsibilities.",
  },
  {
    id: "13:28",
    surah: "Ar-Ra'd",
    ayah: 28,
    arabic: "أَلَا بِذِكْرِ اللّٰهِ تَطْمَئِنُّ الْقُلُوبُ",
    english: "Surely, it is in the remembrance of Allah that hearts find rest.",
    story: "People turn to this line when anxiety rises. It suggests that mindful remembrance settles the inner noise. The verse offers a practical anchor: pause, breathe, remember.",
  },
  {
    id: "94:5",
    surah: "Ash-Sharh",
    ayah: 5,
    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    english: "So, indeed, with hardship comes ease.",
    story: "Short yet deep, it pairs difficulty with relief. Communities repeat it to encourage each other. It frames tough seasons as pathways to growth.",
  },
  {
    id: "24:35",
    surah: "An-Nur",
    ayah: 35,
    arabic: "اللّٰهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ...",
    english: "Allah is the Light of the heavens and the earth...",
    story: "This famous parable speaks of guidance as light. Many reflect on how clarity arrives like a lamp in darkness. It invites seeking brightness in learning and character.",
  },
  {
    id: "12:87",
    surah: "Yusuf",
    ayah: 87,
    arabic: "وَلَا تَيْأَسُوا مِن رَّوْحِ اللّٰهِ...",
    english: "Do not lose hope in Allah’s mercy...",
    story: "Drawn from the story of Prophet Yusuf, it encourages patience through long trials. Hope is portrayed as an act of courage. Families recite it when waiting for good news.",
  },
  {
    id: "39:53",
    surah: "Az-Zumar",
    ayah: 53,
    arabic: "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ...",
    english: "Say, ‘O My servants who have exceeded the limits against themselves, do not despair of Allah’s mercy...’",
    story: "A verse of return and second chances. It breaks the cycle of shame with compassion. Many keep it close when rebuilding their lives.",
  },
  {
    id: "103:1-3",
    surah: "Al-Asr",
    ayah: 1,
    arabic: "وَالْعَصْرِ * إِنَّ الْإِنسَانَ لَفِي خُسْرٍ * إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ...",
    english: "By time, surely humankind is in loss—except those who believe, do good, advise with truth, and advise with patience.",
    story: "A compact life framework: faith, action, truth, patience. Teams use it to center on shared values. It nudges us to spend time wisely together.",
  },
  {
    id: "17:23",
    surah: "Al-Isra",
    ayah: 23,
    arabic: "وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا...",
    english: "Your Lord has decreed that you worship none but Him and be excellent to parents...",
    story: "Often cited when caring for elders. It frames kindness at home as sacred work. Even small acts of service carry weight.",
  },
  {
    id: "2:152",
    surah: "Al-Baqarah",
    ayah: 152,
    arabic: "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ",
    english: "So remember Me; I will remember you. And be grateful to Me and do not be ungrateful.",
    story: "A gentle call to gratitude. Many build daily habits around it—journals, quiet reflection. It links remembrance with being seen and supported.",
  },
  {
    id: "65:3",
    surah: "At-Talaq",
    ayah: 3,
    arabic: "وَمَن يَتَوَكَّلْ عَلَى اللّٰهِ فَهُوَ حَسْبُهُ...",
    english: "And whoever relies upon Allah—then He is sufficient for them...",
    story: "For times of uncertainty, it centers trust over control. People recall it before big decisions. It pairs reliance with steady action.",
  },
  {
    id: "93:11",
    surah: "Ad-Duha",
    ayah: 11,
    arabic: "وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ",
    english: "And as for the favor of your Lord—speak of it.",
    story: "A nudge toward healthy optimism. Share good with humility; it multiplies hope. Communities use it to celebrate progress without arrogance.",
  }
];