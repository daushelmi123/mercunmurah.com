
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: { en: string; ms: string };
  event: { en: string; ms: string };
  image: string;
}

const Testimonials: React.FC = () => {
  const { language } = useLanguage();

  const testimonialsData: Testimonial[] = [
    {
      id: 1,
      name: 'Ahmad Rahman',
      location: 'Kuala Lumpur',
      rating: 5,
      comment: {
        en: 'Amazing fireworks for our Hari Raya celebration! The whole family loved it. Very affordable prices and excellent quality.',
        ms: 'Bunga api yang menakjubkan untuk sambutan Hari Raya kami! Seluruh keluarga menyukainya. Harga yang sangat berpatutan dan kualiti yang cemerlang.'
      },
      event: { en: 'Hari Raya Celebration', ms: 'Sambutan Hari Raya' },
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=100&h=100&fit=crop&crop=face' // 100x100px
    },
    {
      id: 2,
      name: 'Priya Devi',
      location: 'Selangor',
      rating: 5,
      comment: {
        en: 'Perfect for our Deepavali celebration! The sparklers were beautiful and lasted long. Will definitely order again next year.',
        ms: 'Sempurna untuk sambutan Deepavali kami! Pencahaya itu cantik dan tahan lama. Pasti akan menempah lagi tahun depan.'
      },
      event: { en: 'Deepavali Festival', ms: 'Perayaan Deepavali' },
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=100&h=100&fit=crop&crop=face' // 100x100px
    },
    {
      id: 3,
      name: 'Lim Wei Ming',
      location: 'Penang',
      rating: 5,
      comment: {
        en: 'Excellent service and high-quality fireworks for Chinese New Year. The dragon display was spectacular! Highly recommended.',
        ms: 'Perkhidmatan yang cemerlang dan bunga api berkualiti tinggi untuk Tahun Baru Cina. Paparan naga sangat spektakular! Sangat disyorkan.'
      },
      event: { en: 'Chinese New Year', ms: 'Tahun Baru Cina' },
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=100&h=100&fit=crop&crop=face' // 100x100px
    },
    {
      id: 4,
      name: 'Sarah Abdullah',
      location: 'Johor Bahru',
      rating: 5,
      comment: {
        en: 'Made our wedding day extra special! The heart-shaped fireworks were romantic and magical. Thank you MercunMurah!',
        ms: 'Menjadikan hari perkahwinan kami lebih istimewa! Bunga api berbentuk hati sangat romantik dan ajaib. Terima kasih MercunMurah!'
      },
      event: { en: 'Wedding Ceremony', ms: 'Majlis Perkahwinan' },
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=100&h=100&fit=crop&crop=face' // 100x100px
    },
    {
      id: 5,
      name: 'Rajesh Kumar',
      location: 'Ipoh',
      rating: 5,
      comment: {
        en: 'Great variety and affordable prices. Used for our family gathering and everyone was amazed. Fast delivery too!',
        ms: 'Pelbagai pilihan dan harga yang berpatutan. Digunakan untuk perhimpunan keluarga kami dan semua orang kagum. Penghantaran pantas juga!'
      },
      event: { en: 'Family Gathering', ms: 'Perhimpunan Keluarga' },
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=100&h=100&fit=crop&crop=face' // 100x100px
    },
    {
      id: 6,
      name: 'Fatimah Zahra',
      location: 'Kota Kinabalu',
      rating: 5,
      comment: {
        en: 'Outstanding quality and service! The New Year package was worth every ringgit. Will recommend to all friends and family.',
        ms: 'Kualiti dan perkhidmatan yang luar biasa! Pakej Tahun Baru berbaloi dengan setiap ringgit. Akan mengesyorkan kepada semua kawan dan keluarga.'
      },
      event: { en: 'New Year Celebration', ms: 'Sambutan Tahun Baru' },
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face' // 100x100px
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
        }`}
      />
    ));
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black py-8 pt-20 sm:pt-24">
        <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold explosive-text mb-6">
            {language === 'en' ? 'Customer Testimonials' : 'Testimoni Pelanggan'}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Read what our satisfied customers say about MercunMurah fireworks for their celebrations'
              : 'Baca apa yang pelanggan yang berpuas hati katakan tentang bunga api MercunMurah untuk perayaan mereka'
            }
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-red-500 mb-2">500+</div>
            <div className="text-gray-300">
              {language === 'en' ? 'Happy Customers' : 'Pelanggan Gembira'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-500 mb-2">1000+</div>
            <div className="text-gray-300">
              {language === 'en' ? 'Events Celebrated' : 'Acara Dirayakan'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-500 mb-2">4.9★</div>
            <div className="text-gray-300">
              {language === 'en' ? 'Average Rating' : 'Penilaian Purata'}
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonialsData.map((testimonial) => (
            <Card key={testimonial.id} className="festival-card hover:firework-glow transition-all duration-300">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-red-500 mb-4" />
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Comment */}
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  "{testimonial.comment[language]}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.location}</p>
                    <p className="text-red-400 text-xs">{testimonial.event[language]}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            {language === 'en' ? 'Join Our Happy Customers!' : 'Sertai Pelanggan Gembira Kami!'}
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Experience the joy and excitement of our premium fireworks for your next celebration'
              : 'Rasai kegembiraan dan keseronokan bunga api premium kami untuk perayaan anda yang seterusnya'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/fireworks" 
              className="explosive-button inline-flex items-center justify-center px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105"
            >
              {language === 'en' ? 'Shop Fireworks' : 'Beli Bunga Api'}
            </a>
            <a 
              href="/packages" 
              className="bg-transparent border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white inline-flex items-center justify-center px-6 py-3 rounded-lg font-bold transition-all duration-300"
            >
              {language === 'en' ? 'View Packages' : 'Lihat Pakej'}
            </a>
          </div>
        </div>
        </div>
      </div>
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default Testimonials;
