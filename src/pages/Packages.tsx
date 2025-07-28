
import React from 'react';
import { ShoppingCart, MessageCircle, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

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

  const packagesData: Package[] = [
    {
      id: 1,
      name: { en: 'Wedding Celebration Package', ms: 'Pakej Majlis Perkahwinan' },
      description: { 
        en: 'Perfect for your special wedding day with romantic fireworks',
        ms: 'Sempurna untuk hari perkahwinan istimewa anda dengan bunga api romantik'
      },
      items: {
        en: ['10x Heart Shape Sparklers', '5x Golden Fountain', '3x Wedding Rockets', '2x Love Birds Display', '1x Grand Finale'],
        ms: ['10x Pencahaya Bentuk Hati', '5x Air Pancut Emas', '3x Roket Perkahwinan', '2x Paparan Burung Cinta', '1x Kemuncak Besar']
      },
      price: 299,
      originalPrice: 450,
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=600&h=400&fit=crop',
      featured: true
    },
    {
      id: 2,
      name: { en: 'Hari Raya Festive Package', ms: 'Pakej Perayaan Hari Raya' },
      description: { 
        en: 'Celebrate Hari Raya with joy and colorful fireworks',
        ms: 'Rayakan Hari Raya dengan kegembiraan dan bunga api berwarna-warni'
      },
      items: {
        en: ['15x Colorful Fountains', '8x Hari Raya Rockets', '5x Green & Gold Sparklers', '3x Crescent Moon Display', '2x Ketupat Shaped Fireworks'],
        ms: ['15x Air Pancut Berwarna', '8x Roket Hari Raya', '5x Pencahaya Hijau & Emas', '3x Paparan Bulan Sabit', '2x Bunga Api Bentuk Ketupat']
      },
      price: 199,
      originalPrice: 280,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop'
    },
    {
      id: 3,
      name: { en: 'Birthday Celebration Package', ms: 'Pakej Sambutan Hari Jadi' },
      description: { 
        en: 'Make birthdays extra special with exciting fireworks',
        ms: 'Jadikan hari jadi lebih istimewa dengan bunga api yang menarik'
      },
      items: {
        en: ['12x Birthday Candle Sparklers', '6x Number Fountains', '4x Happy Birthday Rockets', '3x Cake Shape Display', '2x Age Number Fireworks'],
        ms: ['12x Pencahaya Lilin Hari Jadi', '6x Air Pancut Nombor', '4x Roket Selamat Hari Jadi', '3x Paparan Bentuk Kek', '2x Bunga Api Nombor Umur']
      },
      price: 149,
      originalPrice: 220,
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600&h=400&fit=crop'
    },
    {
      id: 4,
      name: { en: 'New Year Spectacular Package', ms: 'Pakej Spektakular Tahun Baru' },
      description: { 
        en: 'Welcome the new year with spectacular fireworks display',
        ms: 'Sambut tahun baru dengan persembahan bunga api yang spektakular'
      },
      items: {
        en: ['20x Countdown Fountains', '10x New Year Rockets', '5x Clock Display Fireworks', '3x Champagne Bottle Sparklers', '1x Midnight Finale'],
        ms: ['20x Air Pancut Kiraan Detik', '10x Roket Tahun Baru', '5x Bunga Api Paparan Jam', '3x Pencahaya Botol Champagne', '1x Kemuncak Tengah Malam']
      },
      price: 399,
      originalPrice: 550,
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop'
    },
    {
      id: 5,
      name: { en: 'Festival Mix Package', ms: 'Pakej Campuran Perayaan' },
      description: { 
        en: 'Versatile package perfect for any Malaysian festival',
        ms: 'Pakej serba boleh yang sempurna untuk mana-mana perayaan Malaysia'
      },
      items: {
        en: ['18x Mixed Color Fountains', '12x Festival Rockets', '8x Cultural Sparklers', '5x Traditional Display', '3x Unity Fireworks'],
        ms: ['18x Air Pancut Warna Campuran', '12x Roket Perayaan', '8x Pencahaya Budaya', '5x Paparan Tradisional', '3x Bunga Api Perpaduan']
      },
      price: 249,
      originalPrice: 350,
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop'
    }
  ];

  const handleAddToCart = (pkg: Package) => {
    console.log(`Adding package ${pkg.id} to cart`);
    
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
    window.open(`https://wa.me/+60137340415?text=${message}`, '_blank');
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black py-8 pt-20 sm:pt-24">
        <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold explosive-text mb-6">
            {language === 'en' ? 'Fireworks Packages' : 'Pakej Bunga Api'}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Special curated packages for every celebration. Save more when you buy in bundles!'
              : 'Pakej istimewa yang disusun untuk setiap perayaan. Jimat lebih apabila anda beli dalam bundle!'
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
