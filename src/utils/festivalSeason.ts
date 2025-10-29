// Malaysian Festival Season Detection System
export interface FestivalInfo {
  name: string;
  nameMs: string;
  keywords: string[];
  keywordsMs: string[];
  isActive: boolean;
  daysUntil: number;
}

export interface SeasonalCopywriting {
  mainHeading: {
    en: string;
    ms: string;
  };
  subHeading: {
    en: string;
    ms: string;
  };
  description: {
    en: string;
    ms: string;
  };
  festivalName: string;
}

// Malaysian Festival Dates (fixed dates and calculated dates)
export const getMalaysianFestivals = (year: number) => {
  const festivals = [
    {
      id: 'merdeka',
      name: 'Merdeka Day',
      nameMs: 'Hari Kemerdekaan',
      date: new Date(year, 7, 31), // August 31
      keywords: ['merdeka', 'independence day', 'patriotic', 'malaysia day'],
      keywordsMs: ['merdeka', 'hari kemerdekaan', 'patriotik', 'hari malaysia']
    },
    {
      id: 'cny',
      name: 'Chinese New Year',
      nameMs: 'Tahun Baru Cina',
      date: getChineseNewYear(year), // Lunar calendar - approximate
      keywords: ['chinese new year', 'cny', 'lunar new year', 'ang pow'],
      keywordsMs: ['tahun baru cina', 'cny', 'tahun baru lunar', 'ang pow']
    },
    {
      id: 'deepavali',
      name: 'Deepavali',
      nameMs: 'Deepavali',
      date: getDeepavali(year), // Hindu calendar - approximate
      keywords: ['deepavali', 'diwali', 'festival of lights', 'hindu festival'],
      keywordsMs: ['deepavali', 'diwali', 'festival cahaya', 'perayaan hindu']
    },
    {
      id: 'raya',
      name: 'Hari Raya',
      nameMs: 'Hari Raya Aidilfitri',
      date: getHariRaya(year), // Islamic calendar - approximate
      keywords: ['hari raya', 'aidilfitri', 'eid', 'ketupat'],
      keywordsMs: ['hari raya', 'aidilfitri', 'eid', 'ketupat']
    },
    {
      id: 'thaipusam',
      name: 'Thaipusam',
      nameMs: 'Thaipusam', 
      date: getThaipusam(year), // Hindu calendar - approximate
      keywords: ['thaipusam', 'hindu festival', 'kavadi'],
      keywordsMs: ['thaipusam', 'perayaan hindu', 'kavadi']
    },
    {
      id: 'wesak',
      name: 'Wesak Day',
      nameMs: 'Hari Wesak',
      date: getWesak(year), // Buddhist calendar - approximate 
      keywords: ['wesak', 'buddha', 'buddhist festival'],
      keywordsMs: ['wesak', 'buddha', 'perayaan buddha']
    },
    {
      id: 'wedding',
      name: 'Wedding Season',
      nameMs: 'Musim Perkahwinan',
      date: null, // Always active
      keywords: ['wedding', 'marriage', 'bride', 'groom', 'sparklers'],
      keywordsMs: ['perkahwinan', 'kahwin', 'pengantin', 'sparklers']
    }
  ];

  return festivals;
};

// Approximate Chinese New Year dates (varies by lunar calendar)
const getChineseNewYear = (year: number): Date => {
  const cnyDates: { [key: number]: [number, number] } = {
    2024: [1, 10], // Feb 10, 2024
    2025: [0, 29], // Jan 29, 2025
    2026: [1, 17], // Feb 17, 2026
    2027: [1, 6],  // Feb 6, 2027
    2028: [0, 26], // Jan 26, 2028
  };
  
  const [month, day] = cnyDates[year] || [1, 15]; // Default Feb 15 if not found
  return new Date(year, month, day);
};

// Approximate Deepavali dates (varies by Hindu calendar)
const getDeepavali = (year: number): Date => {
  const deepavaliDates: { [key: number]: [number, number] } = {
    2024: [10, 1],  // Nov 1, 2024
    2025: [9, 20],  // Oct 20, 2025
    2026: [10, 8],  // Nov 8, 2026
    2027: [9, 29],  // Oct 29, 2027
    2028: [10, 16], // Nov 16, 2028
  };
  
  const [month, day] = deepavaliDates[year] || [9, 20]; // Default Oct 20 if not found
  return new Date(year, month, day);
};

// Approximate Hari Raya dates (varies by Islamic calendar)
const getHariRaya = (year: number): Date => {
  const rayaDates: { [key: number]: [number, number] } = {
    2024: [3, 10],  // Apr 10, 2024
    2025: [2, 30],  // Mar 30, 2025
    2026: [2, 20],  // Mar 20, 2026
    2027: [2, 9],   // Mar 9, 2027
    2028: [1, 26],  // Feb 26, 2028
  };
  
  const [month, day] = rayaDates[year] || [3, 15]; // Default Apr 15 if not found
  return new Date(year, month, day);
};

// Get days until a specific date
const getDaysUntil = (targetDate: Date): number => {
  const today = new Date();
  const diffTime = targetDate.getTime() - today.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

// Detect current active festival (within 30 days)
export const getCurrentFestival = (): FestivalInfo | null => {
  const currentYear = new Date().getFullYear();
  const festivals = getMalaysianFestivals(currentYear);
  
  for (const festival of festivals) {
    if (!festival.date) continue; // Skip wedding (always active)
    
    const daysUntil = getDaysUntil(festival.date);
    
    // If festival is within 30 days (before or after)
    if (daysUntil <= 30 && daysUntil >= -30) {
      return {
        name: festival.name,
        nameMs: festival.nameMs,
        keywords: festival.keywords,
        keywordsMs: festival.keywordsMs,
        isActive: true,
        daysUntil: daysUntil
      };
    }
  }
  
  return null; // No active festival
};

// Get seasonal copywriting based on current festival
export const getSeasonalCopywriting = (): SeasonalCopywriting => {
  const currentFestival = getCurrentFestival();
  
  if (!currentFestival) {
    // Default copywriting when no festival is active
    return {
      mainHeading: {
        en: 'Mercun Murah Malaysia | Kedai Bunga Api Wedding & Festival',
        ms: 'Mercun Murah Malaysia | Kedai Bunga Api Wedding & Festival'
      },
      subHeading: {
        en: 'Mercun Popular | Bunga Api Wedding & Festival Bestseller',
        ms: 'Mercun Popular | Bunga Api Wedding & Festival Bestseller'
      },
      description: {
        en: 'Jual mercun murah dari RM2. Bunga api wedding, sparklers cantik. Kedai bunga api terpercaya KL, Shah Alam, Johor.',
        ms: 'Jual mercun murah dari RM2. Bunga api wedding, sparklers cantik. Kedai bunga api terpercaya KL, Shah Alam, Johor.'
      },
      festivalName: 'wedding',
      festivalColor: null
    };
  }

  // Festival-specific copywriting
  const festivalKeywords = currentFestival.keywords.join(', ');
  const festivalKeywordsMs = currentFestival.keywordsMs.join(', ');
  
  return {
    mainHeading: {
      en: `Mercun Murah Malaysia | Kedai Bunga Api ${currentFestival.name} & Wedding`,
      ms: `Mercun Murah Malaysia | Kedai Bunga Api ${currentFestival.nameMs} & Wedding`
    },
    subHeading: {
      en: `Mercun ${currentFestival.name} | Bunga Api Wedding & ${currentFestival.name} Bestseller`,
      ms: `Mercun ${currentFestival.nameMs} | Bunga Api Wedding & ${currentFestival.nameMs} Bestseller`
    },
    description: {
      en: `Jual mercun murah dari RM2. Bunga api ${currentFestival.name.toLowerCase()}, mercun ${currentFestival.name.toLowerCase()}, sparklers wedding. Kedai bunga api terpercaya KL, Shah Alam, Johor.`,
      ms: `Jual mercun murah dari RM2. Bunga api ${currentFestival.nameMs.toLowerCase()}, mercun ${currentFestival.nameMs.toLowerCase()}, sparklers wedding. Kedai bunga api terpercaya KL, Shah Alam, Johor.`
    },
    festivalName: currentFestival.name,
    festivalColor: null
  };
};

// Approximate Thaipusam dates (varies by Hindu calendar)
const getThaipusam = (year: number): Date => {
  const thaipusamDates: { [key: number]: [number, number] } = {
    2024: [0, 25],  // Jan 25, 2024
    2025: [1, 12],  // Feb 12, 2025  
    2026: [1, 1],   // Feb 1, 2026
    2027: [0, 21],  // Jan 21, 2027
    2028: [1, 9],   // Feb 9, 2028
  };
  
  const [month, day] = thaipusamDates[year] || [0, 25]; // Default Jan 25 if not found
  return new Date(year, month, day);
};

// Approximate Wesak Day dates (varies by Buddhist calendar)
const getWesak = (year: number): Date => {
  const wesakDates: { [key: number]: [number, number] } = {
    2024: [4, 22],  // May 22, 2024
    2025: [4, 12],  // May 12, 2025
    2026: [4, 31],  // May 31, 2026  
    2027: [4, 20],  // May 20, 2027
    2028: [4, 8],   // May 8, 2028
  };
  
  const [month, day] = wesakDates[year] || [4, 22]; // Default May 22 if not found
  return new Date(year, month, day);
};

// Debug function to check current festival
export const debugCurrentFestival = () => {
  const currentFestival = getCurrentFestival();
  const seasonalCopy = getSeasonalCopywriting();
  
  console.log('Current Festival:', currentFestival);
  console.log('Seasonal Copywriting:', seasonalCopy);
  
  return {
    currentFestival,
    seasonalCopy
  };
};