
import React, { useEffect, useState } from 'react';
import { ShoppingCart, MessageCircle, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { CONTACT_INFO } from '@/config/constants';
import { getSeasonalCopywriting, getCurrentFestival } from '@/utils/festivalSeason';

interface Package {
  id: number;
  name: { en: string; ms: string };
  description: { en: string; ms: string };
  items: { en: string[]; ms: string[] };
  price: number;
  originalPrice: number;
  image: string;
  featured?: boolean;
}

const Packages: React.FC = () => {
  const { t, language } = useLanguage();
  const { addToCart } = useCart();
  const [seasonalCopy, setSeasonalCopy] = useState(getSeasonalCopywriting());
  const [currentFestival, setCurrentFestival] = useState(getCurrentFestival());

  // Update seasonal content on component mount
  useEffect(() => {
    setSeasonalCopy(getSeasonalCopywriting());
    setCurrentFestival(getCurrentFestival());
  }, []);

  const packagesData: Package[] = [
    {
      id: 1,
      name: { en: 'Wedding Celebration Package', ms: 'Pakej Majlis Perkahwinan' },
      description: {
        en: 'Package Hero Malaya',
        ms: 'Pakej Hero Malaya'
      },
      items: {
        en: ['3x 138 Shoot Thor V-Shape', '10x Besi 14"', '5x Fountain Smoke Colours', '2x Fountain Triangle'],
        ms: ['3x 138 Shoot Thor V-Shape', '10x Besi 14"', '5x Fountain Smoke Colours', '2x Fountain Triangle']
      },
      price: 800,
      originalPrice: 1000,
      image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199101/fireworks_400x400/fireworks_400x400/resized_framed_5414_Shoot_Cake_Thor_V_Shape_5414.jpg',
      featured: true
    },
    {
      id: 2,
      name: { en: 'Wedding Celebration Package', ms: 'Pakej Majlis Perkahwinan' },
      description: {
        en: 'Package Heroin Malaya',
        ms: 'Pakej Heroin Malaya'
      },
      items: {
        en: ['1x 138 Shoot V-Shape', '10x Besi 14"', '5x Fountain Smoke Colours', '2x Fountain Triangle'],
        ms: ['1x 138 Shoot V-Shape', '10x Besi 14"', '5x Fountain Smoke Colours', '2x Fountain Triangle']
      },
      price: 500,
      originalPrice: 650,
      image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199054/fireworks_400x400/fireworks_400x400/resized_framed_product_92_4138_Shoot_Cake.jpg'
    },
    {
      id: 3,
      name: { en: 'Wedding Celebration Package', ms: 'Pakej Majlis Perkahwinan' },
      description: {
        en: 'Package Malam Nikah',
        ms: 'Pakej Malam Nikah'
      },
      items: {
        en: ['1x 138 Shoot', '5x Besi 14"', '5x Fountain Smoke Colours', '2x Fountain Triangle'],
        ms: ['1x 138 Shoot', '5x Besi 14"', '5x Fountain Smoke Colours', '2x Fountain Triangle']
      },
      price: 300,
      originalPrice: 400,
      image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198993/fireworks_400x400/fireworks_400x400/resized_framed_product_24_14_Inch_Besi_14.jpg'
    }
  ];

  const handleAddToCart = (pkg: Package) => {
    
    addToCart({
      id: pkg.id,
      name: pkg.name,
      price: pkg.price,
      image: pkg.image,
      type: 'package'
    });
    
    toast.success(
      language === 'en' 
        ? `${pkg.name.en} added to cart!` 
        : `${pkg.name.ms} ditambah ke troli!`,
      {
        duration: 2000,
      }
    );
  };

  const handleWhatsAppOrder = (packageName: string) => {
    const message = encodeURIComponent(
      language === 'en' 
        ? `Hi! I'm interested in the ${packageName} package from MercunMurah.`
        : `Hi! Saya berminat dengan pakej ${packageName} dari MercunMurah.`
    );
    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black py-8 pt-20 sm:pt-24">
        <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold explosive-text mb-6">
            {currentFestival 
              ? `Pakej Bunga Api ${currentFestival.name} Wedding | Bundle Mercun Murah Malaysia`
              : 'Pakej Bunga Api Wedding Festival | Bundle Mercun Murah Malaysia'}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {currentFestival 
              ? `Pakej sparklers wedding, mercun ${currentFestival.name.toLowerCase()}. Jimat 30% dengan bundle festival. ${currentFestival.daysUntil > 0 ? `Persediaan ${currentFestival.name} - ${currentFestival.daysUntil} hari lagi!` : `Selamat ${currentFestival.name}!`} Free delivery KL Shah Alam Johor.`
              : 'Pakej sparklers wedding, bundle festival. Jimat 30% dengan pakej combo. Harga borong untuk event besar. Free delivery KL Shah Alam Johor.'
            }
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {packagesData.map((pkg) => (
            <Card key={pkg.id} className={`festival-card ${pkg.featured ? 'ring-2 ring-red-500' : ''} hover:firework-glow transition-all duration-300`}>
              {pkg.featured && (
                <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white text-center py-2 text-sm font-semibold">
                  <Star className="w-4 h-4 inline mr-1" />
                  {language === 'en' ? 'MOST POPULAR' : 'PALING POPULAR'}
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={pkg.image}
                    alt={pkg.name[language]}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <CardTitle className="text-white text-2xl font-bold">
                  {pkg.name[language]}
                </CardTitle>
                <p className="text-gray-300 text-sm">
                  {pkg.description[language]}
                </p>
              </CardHeader>
              
              <CardContent>
                {/* Items List */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">
                    {language === 'en' ? 'Package Includes:' : 'Pakej Termasuk:'}
                  </h4>
                  <ul className="space-y-2">
                    {pkg.items[language].map((item, index) => (
                      <li key={index} className="text-gray-300 text-sm flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl font-bold text-red-500">
                      RM{pkg.price}
                    </span>
                    <span className="text-lg text-gray-400 line-through">
                      RM{pkg.originalPrice}
                    </span>
                    <span className="bg-red-600 text-white px-2 py-1 rounded text-sm">
                      {language === 'en' ? 'SAVE' : 'JIMAT'} RM{pkg.originalPrice - pkg.price}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button
                    onClick={() => handleAddToCart(pkg)}
                    className="w-full explosive-button"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {t('addToCart')}
                  </Button>
                  
                  <Button
                    onClick={() => handleWhatsAppOrder(pkg.name[language])}
                    variant="outline"
                    className="w-full bg-transparent border-green-500 text-green-400 hover:bg-green-500 hover:text-white"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {t('orderWhatsapp')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        </div>
      </div>
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default Packages;
