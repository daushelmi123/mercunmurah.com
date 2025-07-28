
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const EmptyCart: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-black py-6 sm:py-8 w-full overflow-x-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center py-12 sm:py-20">
            <ShoppingCart className="w-16 h-16 sm:w-24 sm:h-24 text-gray-600 mx-auto mb-4 sm:mb-6" />
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
              {language === 'en' ? 'Your Cart is Empty' : 'Troli Anda Kosong'}
            </h1>
            <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base px-4">
              {language === 'en' 
                ? 'Start shopping for amazing fireworks for your celebration!'
                : 'Mula membeli-belah untuk bunga api yang menakjubkan untuk perayaan anda!'
              }
            </p>
            <a href="/fireworks" className="explosive-button inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold text-sm sm:text-base">
              {language === 'en' ? 'Shop Fireworks' : 'Beli Bunga Api'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
