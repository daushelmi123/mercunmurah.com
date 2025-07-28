
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhatsAppButton: React.FC = () => {
  const { language } = useLanguage();

  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = '+60137340415';
    const message = encodeURIComponent(
      language === 'en' 
        ? 'Hi MercunMurah! I\'m interested in your fireworks. Please assist me.'
        : 'Hi MercunMurah! Saya berminat dengan bunga api anda. Tolong bantu saya.'
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="whatsapp-float group"
      aria-label={language === 'en' ? 'WhatsApp us' : 'WhatsApp kami'}
    >
      <div className="flex items-center space-x-2">
        <MessageCircle className="w-6 h-6" />
        <span className="hidden lg:block text-sm font-medium whitespace-nowrap">
          {language === 'en' ? 'Tap here to WhatsApp us' : 'Tekan sini untuk WhatsApp kami'}
        </span>
      </div>
    </button>
  );
};

export default WhatsAppButton;
