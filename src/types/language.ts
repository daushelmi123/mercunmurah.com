
export type Language = 'en' | 'ms';

export interface Translation {
  en: string;
  ms: string;
}

export const translations = {
  // Navigation
  home: { en: 'Home', ms: 'Laman Utama' },
  fireworks: { en: 'Fireworks', ms: 'Bunga Api' },
  packages: { en: 'Packages', ms: 'Pakej' },
  permits: { en: 'Permit Guide', ms: 'Panduan Permit' },
  testimonials: { en: 'Testimonials', ms: 'Testimoni' },
  contact: { en: 'Contact', ms: 'Hubungi' },
  cart: { en: 'Cart', ms: 'Troli' },

  // Homepage
  heroTitle: { 
    en: 'Explosive Fireworks for Every Malaysian Festival', 
    ms: 'Bunga Api Meletup untuk Setiap Perayaan Malaysia' 
  },
  heroSubtitle: { 
    en: 'From RM2 onwards - Perfect for Deepavali, Hari Raya, Chinese New Year & More', 
    ms: 'Dari RM2 ke atas - Sempurna untuk Deepavali, Hari Raya, Tahun Baru Cina & Lain-lain' 
  },
  viewAllFireworks: { en: 'View All Fireworks', ms: 'Lihat Semua Mercun' },
  viewPackages: { en: 'View Packages', ms: 'Lihat Pakej' },
  permitGuide: { en: 'Fireworks Permit Guide', ms: 'Panduan Permit Sah' },

  // WhatsApp button
  whatsappText: { en: 'Tap here to WhatsApp us', ms: 'Tekan sini untuk WhatsApp kami' },

  // Festivals
  festivals: {
    deepavali: { en: 'Deepavali', ms: 'Deepavali' },
    raya: { en: 'Hari Raya', ms: 'Hari Raya' },
    cny: { en: 'Chinese New Year', ms: 'Tahun Baru Cina' },
    chapGoMei: { en: 'Chap Goh Mei', ms: 'Chap Goh Mei' },
    thaipusam: { en: 'Thaipusam', ms: 'Thaipusam' },
    christmas: { en: 'Christmas', ms: 'Krismas' },
    newYear: { en: 'New Year', ms: 'Tahun Baru' },
    merdeka: { en: 'National Day', ms: 'Hari Merdeka' },
    wedding: { en: 'Wedding Celebrations', ms: 'Majlis Perkahwinan' }
  },

  // Common
  addToCart: { en: 'Add to Cart', ms: 'Tambah ke Troli' },
  watchVideo: { en: 'Watch Video', ms: 'Tonton Video' },
  orderWhatsapp: { en: 'Order via WhatsApp', ms: 'Tempah melalui WhatsApp' },
  search: { en: 'Search fireworks...', ms: 'Cari bunga api...' },
  price: { en: 'Price', ms: 'Harga' },
  loading: { en: 'Loading...', ms: 'Memuatkan...' },

  // Contact & Support
  needHelp: { en: 'Need Help?', ms: 'Perlukan Bantuan?' },
  contactUs: { en: 'Contact Us', ms: 'Hubungi Kami' },
  whatsappHelp: { en: 'WhatsApp for Help', ms: 'WhatsApp untuk Bantuan' }
};
