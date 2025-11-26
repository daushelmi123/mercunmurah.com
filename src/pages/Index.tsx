import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import FestivalCard from "@/components/FestivalCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import FestivalDebug from "@/components/FestivalDebug";
import { fireworksData, type FireworkProduct } from "@/data/fireworksData";
import { ChevronLeft, ChevronRight, ShieldCheck, Package, TrendingDown } from "lucide-react";
import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { getSeasonalCopywriting, getCurrentFestival, debugCurrentFestival } from "@/utils/festivalSeason";

const MERDEKA_FIREWORK_IDS = [97, 901, 955, 986, 988, 989];

const Index = () => {
  const { language } = useLanguage();
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const resumeTimerRef = useRef<number | null>(null);
  const [seasonalCopy, setSeasonalCopy] = useState(getSeasonalCopywriting());
  const [currentFestival, setCurrentFestival] = useState(getCurrentFestival());

  useEffect(() => {
    const updateSeasonalContent = () => {
      setSeasonalCopy(getSeasonalCopywriting());
      setCurrentFestival(getCurrentFestival());

      if (process.env.NODE_ENV === "development") {
        debugCurrentFestival();
      }
    };

    updateSeasonalContent();

    const interval = setInterval(updateSeasonalContent, 24 * 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => () => {
    if (resumeTimerRef.current) {
      window.clearTimeout(resumeTimerRef.current);
    }
  }, []);

  const merdekaFireworks = useMemo(() => {
    const selected = MERDEKA_FIREWORK_IDS.map(id =>
      fireworksData.find(firework => firework.id === id)
    ).filter((firework): firework is FireworkProduct => Boolean(firework));

    return selected;
  }, []);

  const hasMerdekaFireworks = merdekaFireworks.length > 0;

  const scheduleAutoPlayResume = useCallback(() => {
    if (resumeTimerRef.current) {
      window.clearTimeout(resumeTimerRef.current);
    }

    resumeTimerRef.current = window.setTimeout(() => {
      setIsAutoPlay(true);
      resumeTimerRef.current = null;
    }, 5000);
  }, []);

  const handleProductClick = useCallback((productId: number) => {
    window.location.href = `/fireworks?product=${productId}`;
  }, []);

  const slideLeft = useCallback(() => {
    if (!carouselRef.current) {
      return;
    }

    const slideWidth = 336;
    carouselRef.current.scrollBy({ left: -slideWidth, behavior: "smooth" });
    setIsAutoPlay(false);
    scheduleAutoPlayResume();
  }, [scheduleAutoPlayResume]);

  const slideRight = useCallback(() => {
    if (!carouselRef.current) {
      return;
    }

    const slideWidth = 336;
    carouselRef.current.scrollBy({ left: slideWidth, behavior: "smooth" });
    setIsAutoPlay(false);
    scheduleAutoPlayResume();
  }, [scheduleAutoPlayResume]);

  return (
    <div className="min-h-screen bg-background">
      <FestivalDebug />
      <Navbar />

      <section className="relative bg-gradient-to-br from-primary/20 via-background to-secondary/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
            {seasonalCopy.mainHeading[language]}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {seasonalCopy.description[language]}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/fireworks"
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-8 py-3 text-lg font-medium transition-colors hover:bg-primary/90"
            >
              {language === "en" ? "Shop Fireworks" : "Beli Bunga Api"}
            </a>
            <a
              href="/packages"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background text-foreground px-8 py-3 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {language === "en" ? "View Packages" : "Lihat Pakej"}
            </a>
          </div>
        </div>
      </section>

      {/* Trusted Supplier Section */}
      <section className="py-12 bg-gradient-to-r from-red-950/20 via-background to-red-950/20 border-y border-red-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              {language === "en" 
                ? "We Supply Premium Malaysian Fireworks Brands" 
                : "Kami Membekalkan Jenama Bunga Api Malaysia"}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              {language === "en"
                ? "Buy retail or wholesale — same quality, factory prices."
                : "Beli runcit atau borong — kualiti sama, harga kilang."}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <span className="px-4 py-2 bg-red-900/30 border border-red-500/30 text-red-400 rounded-lg font-semibold">BearBoom</span>
              <span className="px-4 py-2 bg-red-900/30 border border-red-500/30 text-red-400 rounded-lg font-semibold">BMFireworks</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">
                {language === "en" ? "Trusted Quality" : "Kualiti Dipercayai"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === "en"
                  ? "Direct supply from established Malaysian brands"
                  : "Bekalan terus dari jenama Malaysia yang mantap"}
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-bold mb-2">
                {language === "en" ? "Flexible Ordering" : "Pesanan Fleksibel"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === "en"
                  ? "Buy 1 piece for events or bulk cartons for resale — no minimum order"
                  : "Beli 1 keping untuk majlis atau karton borong untuk jual balik — tiada pesanan minimum"}
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-green-900/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="font-bold mb-2">
                {language === "en" ? "Factory Direct Prices" : "Harga Terus Kilang"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === "en"
                  ? "Same wholesale rates for everyone — from RM1 per piece"
                  : "Harga borong sama untuk semua — dari RM1 sekeping"}
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground mb-4">
              {language === "en"
                ? "🚚 Delivery across Malaysia • 📄 Permit assistance available"
                : "🚚 Penghantaran seluruh Malaysia • 📄 Bantuan permit disediakan"}
            </p>
            <a
              href="https://wa.me/60137340415?text=Hi%2C%20saya%20nak%20tanya%20tentang%20harga%20borong"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-primary bg-primary/10 text-primary px-6 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {language === "en" ? "WhatsApp for Wholesale Pricing" : "WhatsApp untuk Harga Borong"}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {seasonalCopy.subHeading[language]}
          </h2>
          <div className="relative">
            {hasMerdekaFireworks && (
              <>
                <button
                  onClick={slideLeft}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-primary/80 hover:bg-primary text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                  aria-label="Scroll carousel left"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={slideRight}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-primary/80 hover:bg-primary text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                  aria-label="Scroll carousel right"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {hasMerdekaFireworks ? (
              <div
                ref={carouselRef}
                className="overflow-x-auto scrollbar-hide"
                style={{ scrollBehavior: "smooth" }}
              >
                <div className={`flex space-x-6 ${isAutoPlay ? "animate-[slide_15s_linear_infinite]" : ""}`}>
                  {merdekaFireworks.map((firework, index) => (
                    <div
                      key={`first-${firework.id}-${index}`}
                      className="flex-shrink-0 w-80 h-60 rounded-lg overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300"
                      onClick={() => handleProductClick(firework.id)}
                    >
                      <div className="relative w-full h-full">
                        <img
                          src={firework.image}
                          alt={language === "en" ? firework.name.en : firework.name.ms}
                          className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h3 className="font-bold text-lg mb-1">
                            {language === "en" ? firework.name.en : firework.name.ms}
                          </h3>
                          <p className="text-primary font-semibold">RM{firework.price}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {merdekaFireworks.map((firework, index) => (
                    <div
                      key={`second-${firework.id}-${index}`}
                      className="flex-shrink-0 w-80 h-60 rounded-lg overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300"
                      onClick={() => handleProductClick(firework.id)}
                    >
                      <div className="relative w-full h-full">
                        <img
                          src={firework.image}
                          alt={language === "en" ? firework.name.en : firework.name.ms}
                          className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h3 className="font-bold text-lg mb-1">
                            {language === "en" ? firework.name.en : firework.name.ms}
                          </h3>
                          <p className="text-primary font-semibold">RM{firework.price}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-center text-muted-foreground">
                {language === "en"
                  ? "Featured Merdeka fireworks will appear here soon."
                  : "Mercun Merdeka pilihan akan dipaparkan di sini tidak lama lagi."}
              </p>
            )}

            <div className="text-center mt-8">
              <a
                href="/fireworks"
                className="inline-flex items-center justify-center rounded-md bg-secondary text-secondary-foreground px-8 py-3 text-lg font-medium transition-colors hover:bg-secondary/90"
              >
                {language === "en" ? "See More Products" : "Lihat Lebih Banyak Produk"}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {currentFestival
              ? `${language === "en" ? currentFestival.name : currentFestival.nameMs} | Sparklers Wedding Malaysia`
              : language === "en"
                ? "Wedding & Festival Fireworks Malaysia"
                : "Bunga Api Wedding & Festival Malaysia"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FestivalCard
              name={language === "en" ? "Chinese New Year" : "Tahun Baru Cina"}
              image="https://images.unsplash.com/photo-1548140723-de6a4578892d?w=400"
              description={language === "en"
                ? "Celebrate with traditional red and gold fireworks"
                : "Sambut dengan bunga api merah dan emas tradisional"}
            />
            <FestivalCard
              name={language === "en" ? "Deepavali" : "Deepavali"}
              image="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400"
              description={language === "en"
                ? "Light up the festival of lights"
                : "Terangi festival cahaya"}
            />
            <FestivalCard
              name={language === "en" ? "Independence Day" : "Hari Kemerdekaan"}
              image="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400"
              description={language === "en"
                ? "Patriotic displays in red, white, and blue"
                : "Paparan patriotik merah, putih, dan biru"}
            />
            <FestivalCard
              name={language === "en" ? "Weddings" : "Perkahwinan"}
              image="https://images.unsplash.com/photo-1519741497674-611481863552?w=400"
              description={language === "en"
                ? "Magical moments for your special day"
                : "Detik ajaib untuk hari istimewa anda"}
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === "en"
              ? "Ready to Light Up Your Celebration?"
              : "Bersedia untuk Menerangi Perayaan Anda?"}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {language === "en"
              ? "Browse our extensive collection of over 97 different fireworks starting from just RM1"
              : "Layari koleksi kami yang luas dengan lebih 97 jenis bunga api bermula dari RM1 sahaja"}
          </p>
          <a
            href="/fireworks"
            className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-8 py-3 text-lg font-medium transition-colors hover:bg-primary/90"
          >
            {language === "en" ? "View All Products" : "Lihat Semua Produk"}
          </a>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Index;

