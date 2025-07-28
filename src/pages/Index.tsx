import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import FestivalCard from "@/components/FestivalCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import { fireworksData } from "@/data/fireworksData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";

const Index = () => {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Select 6 Merdeka fireworks for carousel
  const merdekaFireworks = [
    fireworksData.find(f => f.id === 97)!, // 4 138 Shot Merdeka
    fireworksData.find(f => f.id === 901)!, // 5138 Shoot Cake ABC
    fireworksData.find(f => f.id === 955)!, // 100 Shoot Flying Dragon
    fireworksData.find(f => f.id === 986)!, // Double Shoot Banana Besar
    fireworksData.find(f => f.id === 988)!, // 8 Shoot Roma Candle
    fireworksData.find(f => f.id === 989)! // 4 25 Shoot Cake
  ];

  const handleProductClick = (productId: number) => {
    window.location.href = `/fireworks?product=${productId}`;
  };

  const slideLeft = () => {
    if (carouselRef.current) {
      const slideWidth = 336; // 320px + 16px gap
      carouselRef.current.scrollBy({ left: -slideWidth, behavior: 'smooth' });
      setIsAutoPlay(false);
      setTimeout(() => setIsAutoPlay(true), 5000); // Resume auto-play after 5s
    }
  };

  const slideRight = () => {
    if (carouselRef.current) {
      const slideWidth = 336; // 320px + 16px gap
      carouselRef.current.scrollBy({ left: slideWidth, behavior: 'smooth' });
      setIsAutoPlay(false);
      setTimeout(() => setIsAutoPlay(true), 5000); // Resume auto-play after 5s
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/20 via-background to-secondary/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
            {language === 'en' ? 'MercunMurah' : 'MercunMurah'}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {language === 'en' 
              ? 'Your trusted source for premium fireworks and festive celebrations' 
              : 'Sumber terpercaya anda untuk bunga api premium dan perayaan meriah'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/fireworks" 
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-8 py-3 text-lg font-medium transition-colors hover:bg-primary/90"
            >
              {language === 'en' ? 'Shop Fireworks' : 'Beli Bunga Api'}
            </a>
            <a 
              href="/packages" 
              className="inline-flex items-center justify-center rounded-md border border-input bg-background text-foreground px-8 py-3 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {language === 'en' ? 'View Packages' : 'Lihat Pakej'}
            </a>
          </div>
        </div>
      </section>

      {/* Fireworks Carousel */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={slideLeft}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-primary/80 hover:bg-primary text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={slideRight}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-primary/80 hover:bg-primary text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Carousel Container */}
            <div 
              ref={carouselRef}
              className="overflow-x-auto scrollbar-hide"
              style={{ scrollBehavior: 'smooth' }}
            >
              <div className={`flex space-x-6 ${isAutoPlay ? 'animate-[slide_15s_linear_infinite]' : ''}`}>
                {/* First set of fireworks */}
                {merdekaFireworks.map((firework, index) => (
                  <div 
                    key={`first-${index}`}
                    className="flex-shrink-0 w-80 h-60 rounded-lg overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300"
                    onClick={() => handleProductClick(firework.id)}
                  >
                    <div className="relative w-full h-full">
                      <img 
                        src={firework.image}
                        alt={language === 'en' ? firework.name.en : firework.name.ms}
                        className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="font-bold text-lg mb-1">
                          {language === 'en' ? firework.name.en : firework.name.ms}
                        </h3>
                        <p className="text-primary font-semibold">RM{firework.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Duplicate set for seamless loop */}
                {merdekaFireworks.map((firework, index) => (
                  <div 
                    key={`second-${index}`}
                    className="flex-shrink-0 w-80 h-60 rounded-lg overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300"
                    onClick={() => handleProductClick(firework.id)}
                  >
                    <div className="relative w-full h-full">
                      <img 
                        src={firework.image}
                        alt={language === 'en' ? firework.name.en : firework.name.ms}
                        className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="font-bold text-lg mb-1">
                          {language === 'en' ? firework.name.en : firework.name.ms}
                        </h3>
                        <p className="text-primary font-semibold">RM{firework.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* See More Products Button */}
            <div className="text-center mt-8">
              <a 
                href="/fireworks"
                className="inline-flex items-center justify-center rounded-md bg-secondary text-secondary-foreground px-8 py-3 text-lg font-medium transition-colors hover:bg-secondary/90"
              >
                {language === 'en' ? 'See More Products' : 'Lihat Lebih Banyak Produk'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Festivals */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {language === 'en' ? 'Perfect for Every Celebration' : 'Sesuai untuk Setiap Perayaan'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FestivalCard
              name={language === 'en' ? 'Chinese New Year' : 'Tahun Baru Cina'}
              image="https://images.unsplash.com/photo-1548140723-de6a4578892d?w=400"
              description={language === 'en' 
                ? 'Celebrate with traditional red and gold fireworks' 
                : 'Sambut dengan bunga api merah dan emas tradisional'}
            />
            <FestivalCard
              name={language === 'en' ? 'Deepavali' : 'Deepavali'}
              image="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400"
              description={language === 'en' 
                ? 'Light up the festival of lights' 
                : 'Terangi festival cahaya'}
            />
            <FestivalCard
              name={language === 'en' ? 'Independence Day' : 'Hari Kemerdekaan'}
              image="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400"
              description={language === 'en' 
                ? 'Patriotic displays in red, white, and blue' 
                : 'Paparan patriotik merah, putih, dan biru'}
            />
            <FestivalCard
              name={language === 'en' ? 'Weddings' : 'Perkahwinan'}
              image="https://images.unsplash.com/photo-1519741497674-611481863552?w=400"
              description={language === 'en' 
                ? 'Magical moments for your special day' 
                : 'Detik ajaib untuk hari istimewa anda'}
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'en' ? 'Ready to Light Up Your Celebration?' : 'Bersedia untuk Menerangi Perayaan Anda?'}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Browse our extensive collection of over 97 different fireworks starting from just RM1' 
              : 'Layari koleksi kami yang luas dengan lebih 97 jenis bunga api bermula dari RM1 sahaja'}
          </p>
          <a 
            href="/fireworks" 
            className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-8 py-3 text-lg font-medium transition-colors hover:bg-primary/90"
          >
            {language === 'en' ? 'View All Products' : 'Lihat Semua Produk'}
          </a>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Index;