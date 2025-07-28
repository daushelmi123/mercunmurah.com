
import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  const quickLinks = [
    { name: t('fireworks'), path: '/fireworks' },
    { name: t('packages'), path: '/packages' },
    { name: t('permits'), path: '/permits' },
    { name: t('contact'), path: '/contact' },
  ];

  const festivals = [
    'Deepavali', 'Hari Raya', 'Chinese New Year', 'Thaipusam', 
    'Christmas', 'Merdeka', 'Wedding Celebrations'
  ];

  return (
    <footer className="bg-black border-t border-red-900/20 mt-16 sm:mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Flame className="w-8 h-8 text-red-500" />
              <span className="text-2xl font-bold explosive-text">MercunMurah</span>
            </div>
            <p className="text-gray-400 text-sm">
              {language === 'en' 
                ? 'Malaysia\'s most affordable fireworks for every celebration. From RM2 onwards.'
                : 'Bunga api paling murah di Malaysia untuk setiap perayaan. Bermula dari RM2.'
              }
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-red-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-red-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              {language === 'en' ? 'Quick Links' : 'Pautan Pantas'}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-red-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Festivals */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              {language === 'en' ? 'Festivals' : 'Perayaan'}
            </h3>
            <ul className="space-y-2">
              {festivals.slice(0, 6).map((festival) => (
                <li key={festival}>
                  <span className="text-gray-400 text-sm">{festival}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              {language === 'en' ? 'Contact Us' : 'Hubungi Kami'}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-red-500 mt-1" />
                <span className="text-gray-400 text-sm">+60 12-345 6789</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-red-500 mt-1" />
                <span className="text-gray-400 text-sm">info@mercunmurah.my</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-red-500 mt-1" />
                <span className="text-gray-400 text-sm">Kuala Lumpur, Malaysia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-red-900/20 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 MercunMurah. {language === 'en' ? 'All rights reserved.' : 'Hak cipta terpelihara.'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
