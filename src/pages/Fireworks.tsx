
import React, { useState, useEffect } from 'react';
import { ChevronDown, Filter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { fireworksData, sections, FireworkProduct } from '@/data/fireworksData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ProductCard from '@/components/ProductCard';
import VideoDialog from '@/components/VideoDialog';
import FlyingCartAnimation from '@/components/FlyingCartAnimation';
import { toast } from 'sonner';
import { getSeasonalCopywriting, getCurrentFestival } from '@/utils/festivalSeason';

const Fireworks: React.FC = () => {
  const { language } = useLanguage();
  const [selectedSection, setSelectedSection] = useState<string>('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);
  const [flyingAnimation, setFlyingAnimation] = useState<{
    isVisible: boolean;
    startPosition: { x: number; y: number };
    productImage: string;
  }>({
    isVisible: false,
    startPosition: { x: 0, y: 0 },
    productImage: ''
  });
  const [seasonalCopy, setSeasonalCopy] = useState(getSeasonalCopywriting());

  // Update seasonal content on component mount
  useEffect(() => {
    setSeasonalCopy(getSeasonalCopywriting());
  }, []);

  // Filter products by selected section
  const filteredProducts = selectedSection === 'all' 
    ? fireworksData 
    : fireworksData.filter(product => product.section === selectedSection);

  // Group products by section
  const groupedProducts = filteredProducts.reduce((acc, product) => {
    if (!acc[product.section]) {
      acc[product.section] = [];
    }
    acc[product.section].push(product);
    return acc;
  }, {} as Record<string, FireworkProduct[]>);

  const getSectionDisplayName = (section: string) => {
    if (section === 'all') {
      return language === 'en' ? 'Section Mercun' : 'Section Mercun';
    }
    return section;
  };

  const handleWatchVideo = (videoUrl: string, productName: string) => {
    setSelectedVideo({
      url: videoUrl,
      title: productName
    });
  };

  const closeVideoDialog = () => {
    setSelectedVideo(null);
  };

  const handleFlyingCart = (startPosition: { x: number; y: number }, productImage: string) => {
    setFlyingAnimation({
      isVisible: true,
      startPosition,
      productImage
    });
  };

  const handleFlyingCartComplete = () => {
    setFlyingAnimation(prev => ({ ...prev, isVisible: false }));
  };

  // Get cart position for animation end point
  const getCartPosition = () => {
    const cartElement = document.querySelector('[data-cart-icon]');
    if (cartElement) {
      const rect = cartElement.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2 - 24,
        y: rect.top + rect.height / 2 - 24
      };
    }
    return { x: window.innerWidth - 100, y: 20 }; // Fallback position
  };

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.getElementById('section-dropdown');
      if (dropdown && !dropdown.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Handle URL parameters and update meta tags for social sharing
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product');
    
    if (productId) {
      const product = fireworksData.find(p => p.id === parseInt(productId));
      if (product) {
        // Update meta tags for better social sharing
        updateMetaTags(product);
        
        // Scroll to product after a brief delay
        setTimeout(() => {
          const productElement = document.getElementById(`product-${productId}`);
          if (productElement) {
            productElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Add highlight effect
            productElement.classList.add('ring-2', 'ring-red-500', 'ring-opacity-50');
            setTimeout(() => {
              productElement.classList.remove('ring-2', 'ring-red-500', 'ring-opacity-50');
            }, 3000);
          }
        }, 100);
      }
    } else {
      // Reset to default meta tags when no product is specified
      resetMetaTags();
    }
  }, [language]);

  const updateMetaTags = (product: any) => {
    const productName = product.name[language] || product.name.en;
    const price = `RM${product.price}`;
    const description = language === 'en' 
      ? `${productName} - ${price}. Buy affordable fireworks from MercunMurah for Malaysian festivals.`
      : `${productName} - ${price}. Beli mercun murah dari MercunMurah untuk perayaan Malaysia.`;
    
    // Update page title
    document.title = `${productName} - MercunMurah`;
    
    // Update Open Graph meta tags
    updateMetaTag('og:title', `${productName} - MercunMurah`);
    updateMetaTag('og:description', description);
    updateMetaTag('og:image', product.image);
    updateMetaTag('og:url', `${window.location.origin}/fireworks?product=${product.id}`);
    
    // Update Twitter Card meta tags
    updateMetaTag('twitter:title', `${productName} - MercunMurah`);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', product.image);
    
    // Update regular meta description
    updateMetaTag('description', description);
  };

  const resetMetaTags = () => {
    document.title = 'Fireworks - MercunMurah | Cheap Fireworks for Malaysian Festivals';
    updateMetaTag('og:title', 'MercunMurah | Cheap Fireworks for Malaysian Festivals');
    updateMetaTag('og:description', 'Buy affordable fireworks from RM2. Perfect for Deepavali, Hari Raya, Chinese New Year & more Malaysian celebrations.');
    updateMetaTag('og:image', '/placeholder.svg');
    updateMetaTag('og:url', `${window.location.origin}/fireworks`);
  };

  const updateMetaTag = (property: string, content: string) => {
    let selector = `meta[property="${property}"]`;
    if (property === 'description') {
      selector = `meta[name="${property}"]`;
    } else if (property.startsWith('twitter:')) {
      selector = `meta[name="${property}"]`;
    }
    
    let metaTag = document.querySelector(selector) as HTMLMetaElement;
    if (metaTag) {
      metaTag.setAttribute('content', content);
    } else {
      // Create meta tag if it doesn't exist
      metaTag = document.createElement('meta');
      if (property === 'description') {
        metaTag.setAttribute('name', property);
      } else if (property.startsWith('twitter:')) {
        metaTag.setAttribute('name', property);
      } else {
        metaTag.setAttribute('property', property);
      }
      metaTag.setAttribute('content', content);
      document.head.appendChild(metaTag);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="bg-black py-6 sm:py-8 pt-20 sm:pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold explosive-text mb-6">
              {seasonalCopy.mainHeading[language]} | Online
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Over 97 different fireworks starting from RM1. Perfect for every Malaysian celebration!'
                : 'Lebih 97 jenis bunga api bermula dari RM1. Sempurna untuk setiap perayaan Malaysia!'
              }
            </p>
          </div>

          {/* Section Filter Dropdown */}
          <div className="relative max-w-md mx-auto mb-12" id="section-dropdown">
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full bg-gradient-to-r from-red-900/50 to-red-800/50 border border-red-500/30 rounded-lg px-4 py-3 text-white font-medium flex items-center justify-between hover:from-red-800/60 hover:to-red-700/60 transition-all duration-200 backdrop-blur-sm"
              >
                <div className="flex items-center space-x-2">
                  <Filter className="w-5 h-5 text-red-400" />
                  <span className="text-sm sm:text-base">
                    {getSectionDisplayName(selectedSection)}
                  </span>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-red-400 transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900/95 backdrop-blur-sm border border-red-500/30 rounded-lg shadow-2xl shadow-red-500/10 z-50 max-h-64 overflow-y-auto">
                  <div className="py-2">
                    <button
                      onClick={() => {
                        setSelectedSection('all');
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-sm hover:bg-red-600/20 transition-colors ${
                        selectedSection === 'all' ? 'bg-red-600/30 text-red-400' : 'text-white'
                      }`}
                    >
                      Section Mercun
                    </button>
                    {sections.map((section) => (
                      <button
                        key={section}
                        onClick={() => {
                          setSelectedSection(section);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-sm hover:bg-red-600/20 transition-colors ${
                          selectedSection === section ? 'bg-red-600/30 text-red-400' : 'text-white'
                        }`}
                      >
                        {section}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Products by Section */}
          {Object.keys(groupedProducts).length > 0 ? (
            Object.entries(groupedProducts).map(([sectionName, sectionProducts]) => (
              <div key={sectionName} className="mb-16">
                <h2 className="text-2xl lg:text-3xl font-bold text-red-500 mb-8 text-center">
                  {sectionName}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {sectionProducts.map((product) => (
                    <div 
                      key={product.id} 
                      id={`product-${product.id}`}
                      className="group relative"
                    >
                      <ProductCard
                        product={product}
                        onWatchVideo={(videoUrl, productName) => {
                          if (videoUrl && videoUrl.trim() !== '') {
                            handleWatchVideo(videoUrl, productName);
                          } else {
                            toast.error(
                              language === 'en' 
                                ? 'Video not available for this product' 
                                : 'Video tidak tersedia untuk produk ini',
                              { duration: 3000 }
                            );
                          }
                        }}
                        onAddToCart={handleFlyingCart}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">
                {language === 'en' 
                  ? 'No fireworks found in this section.' 
                  : 'Tiada bunga api dijumpai dalam seksyen ini.'
                }
              </p>
            </div>
          )}
        </div>

        {/* Video Dialog */}
        <VideoDialog
          selectedVideo={selectedVideo}
          onClose={closeVideoDialog}
        />

        {/* Flying Cart Animation */}
        <FlyingCartAnimation
          isVisible={flyingAnimation.isVisible}
          startPosition={flyingAnimation.startPosition}
          endPosition={getCartPosition()}
          productImage={flyingAnimation.productImage}
          onComplete={handleFlyingCartComplete}
        />
      </div>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Fireworks;
