
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const NotFound: React.FC = () => {
  const { language } = useLanguage();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <Sparkles className="w-24 h-24 text-red-500 mx-auto mb-8 animate-pulse" />
          
          <h1 className="text-6xl lg:text-8xl font-bold explosive-text mb-6">
            404
          </h1>
          
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
            {language === 'en' ? 'Page Not Found' : 'Halaman Tidak Dijumpai'}
          </h2>
          
          <p className="text-xl text-gray-300 mb-12">
            {language === 'en'
              ? 'The fireworks you\'re looking for seem to have exploded into thin air!'
              : 'Bunga api yang anda cari nampaknya telah meletup dan hilang!'
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="explosive-button inline-flex items-center px-8 py-3 rounded-lg font-bold"
            >
              <Home className="w-5 h-5 mr-2" />
              {language === 'en' ? 'Back to Home' : 'Kembali ke Laman Utama'}
            </Link>
            
            <Link 
              to="/fireworks" 
              className="bg-transparent border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              {language === 'en' ? 'Browse Fireworks' : 'Layari Bunga Api'}
            </Link>
          </div>
        </div>
        </div>
      </div>
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default NotFound;
