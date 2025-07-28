
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { usePricing } from '@/hooks/usePricing';

const OrderSummary: React.FC = () => {
  const { language } = useLanguage();
  const { cartItems } = useCart();
  const { pricing, loading } = usePricing(cartItems);

  if (loading) {
    return (
      <Card className="festival-card w-full max-w-full overflow-hidden">
        <CardHeader className="p-3 sm:p-4">
          <CardTitle className="text-white text-base sm:text-lg">
            {language === 'en' ? 'Order Summary' : 'Ringkasan Pesanan'}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 sm:p-4 pt-0">
          <div className="text-gray-400 text-center">
            {language === 'en' ? 'Calculating...' : 'Mengira...'}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="festival-card w-full max-w-full overflow-hidden">
      <CardHeader className="p-3 sm:p-4">
        <CardTitle className="text-white text-base sm:text-lg">
          {language === 'en' ? 'Order Summary' : 'Ringkasan Pesanan'}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3 sm:p-4 pt-0 space-y-2 sm:space-y-3">
        <div className="flex justify-between text-gray-300 text-sm sm:text-base">
          <span>{language === 'en' ? 'Subtotal' : 'Subjumlah'}</span>
          <span>RM{pricing.subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between text-gray-300 text-sm sm:text-base">
          <span>{language === 'en' ? 'Delivery Fee' : 'Yuran Penghantaran'}</span>
          <span>
            {pricing.deliveryFee === 0 ? (
              <span className="text-green-400">{language === 'en' ? 'FREE' : 'PERCUMA'}</span>
            ) : (
              `RM${pricing.deliveryFee.toFixed(2)}`
            )}
          </span>
        </div>
        
        {pricing.remainingForFreeDelivery > 0 && (
          <p className="text-xs sm:text-sm text-yellow-400">
            {language === 'en' 
              ? `Spend RM${pricing.remainingForFreeDelivery.toFixed(2)} more for free delivery!`
              : `Belanja RM${pricing.remainingForFreeDelivery.toFixed(2)} lagi untuk penghantaran percuma!`
            }
          </p>
        )}
        
        <div className="border-t border-gray-700 pt-3 sm:pt-4">
          <div className="flex justify-between text-white font-bold text-base sm:text-lg">
            <span>{language === 'en' ? 'Total' : 'Jumlah'}</span>
            <span>RM{pricing.total.toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderSummary;
