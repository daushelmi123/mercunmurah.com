
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const CartHeader: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="text-center mb-4">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold explosive-text mb-2">
        {language === 'en' ? 'Shopping Cart' : 'Troli Membeli-Belah'}
      </h1>
    </div>
  );
};

export default CartHeader;
