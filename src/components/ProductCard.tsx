
import React, { useRef } from 'react';
import { Play, ShoppingCart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import ShareButton from '@/components/ShareButton';

interface FireworkProduct {
  id: number;
  name: { en: string; ms: string };
  price: number;
  image: string;
  videoUrl: string;
  category: string;
  section: string;
}

interface ProductCardProps {
  product: FireworkProduct;
  onWatchVideo: (videoUrl: string, productName: string) => void;
  onAddToCart?: (startPosition: { x: number; y: number }, productImage: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onWatchVideo, onAddToCart }) => {
  const { language, t } = useLanguage();
  const { addToCart } = useCart();
  const addToCartButtonRef = useRef<HTMLButtonElement>(null);

  const handleAddToCart = () => {
    // Add to cart first
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      type: 'product'
    });
    
    // Get button position for animation
    if (addToCartButtonRef.current && onAddToCart) {
      const rect = addToCartButtonRef.current.getBoundingClientRect();
      const startPosition = {
        x: rect.left + rect.width / 2 - 24, // Center of button minus half icon width
        y: rect.top + rect.height / 2 - 24  // Center of button minus half icon height
      };
      onAddToCart(startPosition, product.image);
    }
    
    toast.success(
      language === 'en' 
        ? `${product.name.en} added to cart!` 
        : `${product.name.ms} ditambah ke troli!`,
      {
        duration: 2000,
      }
    );
  };

  return (
    <Card className="festival-card group hover:firework-glow transition-all duration-300">
      <CardHeader className="p-4 pb-3">
        <div className="relative overflow-hidden rounded-lg mb-3">
          <img
            src={product.image}
            alt={product.name[language]}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <CardTitle className="text-white text-lg font-semibold">
          {product.name[language]}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-red-500">
            RM{product.price}
          </span>
        </div>
        
        <div className="space-y-2">
          <div className="flex gap-2">
            {product.videoUrl && product.videoUrl.trim() !== '' ? (
              <Button
                onClick={() => onWatchVideo(product.videoUrl, product.name[language])}
                variant="outline"
                className="flex-1 bg-transparent border-red-500 text-red-400 hover:bg-red-500 hover:text-white"
              >
                <Play className="w-4 h-4 mr-2" />
                {t('watchVideo')}
              </Button>
            ) : (
              <Button
                disabled
                variant="outline"
                className="flex-1 bg-transparent border-gray-500 text-gray-500 cursor-not-allowed"
              >
                <Play className="w-4 h-4 mr-2" />
                {language === 'en' ? 'Video N/A' : 'Video T/A'}
              </Button>
            )}
            
            <ShareButton
              title={product.name[language]}
              text={language === 'en' 
                ? `Check out ${product.name.en} - RM${product.price}` 
                : `Lihat ${product.name.ms} - RM${product.price}`
              }
              url={`${window.location.origin}/fireworks?product=${product.id}`}
              image={product.image}
              variant="outline"
              size="icon"
              className="bg-transparent border-red-500 text-red-400 hover:bg-red-500 hover:text-white flex-shrink-0"
            />
          </div>
          
          <Button
            ref={addToCartButtonRef}
            onClick={handleAddToCart}
            className="w-full explosive-button"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {t('addToCart')}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
