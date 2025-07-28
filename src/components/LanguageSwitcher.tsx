
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Globe className="w-4 h-4 text-gray-400" />
      <div className="flex space-x-1">
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 text-sm rounded transition-colors ${
            language === 'en' 
              ? 'bg-red-600 text-white' 
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('ms')}
          className={`px-3 py-1 text-sm rounded transition-colors ${
            language === 'ms' 
              ? 'bg-red-600 text-white' 
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          BM
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
