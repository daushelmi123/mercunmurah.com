
import React from 'react';
import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CartItems: React.FC = () => {
  const { language } = useLanguage();
  const { cartItems, removeFromCart, updateQuantity, getTotalItems } = useCart();

  return (
    <Card className="festival-card w-full max-w-full overflow-hidden">
      <CardHeader className="p-3 sm:p-4 w-full">
        <CardTitle className="text-white flex items-center text-base sm:text-lg w-full">
          <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-red-500 flex-shrink-0" />
          <span className="truncate">{language === 'en' ? 'Your Items' : 'Barang-Barang Anda'} ({getTotalItems()})</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3 sm:p-4 pt-0 space-y-2 sm:space-y-3 w-full overflow-x-hidden">
        {cartItems.map((item) => (
          <div key={item.id} className="w-full max-w-full overflow-hidden bg-gray-900/50 rounded-lg p-3 sm:p-4">
            {/* Mobile Layout */}
            <div className="flex gap-3 w-full">
              {/* Product Image */}
              <div className="flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name[language]}
                  className="w-16 h-16 object-cover rounded-lg"
                />
              </div>
              
              {/* Product Info - Flex 1 to take remaining space */}
              <div className="flex-1 min-w-0 overflow-hidden">
                <h3 className="text-white font-semibold text-sm truncate">
                  {item.name[language]}
                </h3>
                <p className="text-gray-400 text-xs">
                  {item.type === 'package' 
                    ? (language === 'en' ? 'Package' : 'Pakej')
                    : (language === 'en' ? 'Single Item' : 'Item Tunggal')
                  }
                </p>
                <p className="text-white font-semibold text-sm mt-1">
                  RM{item.price * item.quantity}
                </p>
              </div>
            </div>

            {/* Controls Row - Full width on mobile */}
            <div className="flex items-center justify-between w-full mt-3 gap-2">
              {/* Quantity Controls */}
              <div className="flex items-center gap-2">
                <Button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  variant="outline"
                  size="icon"
                  className="h-7 w-7 bg-transparent border-red-500 text-red-400 hover:bg-red-500 hover:text-white flex-shrink-0"
                >
                  <Minus className="w-3 h-3" />
                </Button>
                
                <span className="text-white font-semibold w-8 text-center text-sm">
                  {item.quantity}
                </span>
                
                <Button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  variant="outline"
                  size="icon"
                  className="h-7 w-7 bg-transparent border-red-500 text-red-400 hover:bg-red-500 hover:text-white flex-shrink-0"
                >
                  <Plus className="w-3 h-3" />
                </Button>
              </div>

              {/* Unit Price & Remove */}
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-xs whitespace-nowrap">
                  RM{item.price} {language === 'en' ? 'each' : 'setiap'}
                </span>
                <Button
                  onClick={() => removeFromCart(item.id)}
                  variant="outline"
                  size="icon"
                  className="h-7 w-7 bg-transparent border-red-500 text-red-400 hover:bg-red-500 hover:text-white flex-shrink-0"
                >
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default CartItems;
