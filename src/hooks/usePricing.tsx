import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { CartItem } from '@/contexts/CartContext';

interface PricingInfo {
  subtotal: number;
  deliveryFee: number;
  total: number;
  freeDeliveryThreshold: number;
  remainingForFreeDelivery: number;
}

export const usePricing = (cartItems: CartItem[]) => {
  const [pricing, setPricing] = useState<PricingInfo>({
    subtotal: 0,
    deliveryFee: 0,
    total: 0,
    freeDeliveryThreshold: 1000,
    remainingForFreeDelivery: 1000
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const calculatePricing = async () => {
      if (cartItems.length === 0) {
        setPricing({
          subtotal: 0,
          deliveryFee: 0,
          total: 0,
          freeDeliveryThreshold: 1000,
          remainingForFreeDelivery: 1000
        });
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const { data, error: pricingError } = await supabase.functions.invoke('get-pricing-info', {
          body: { cartItems }
        });

        if (pricingError) {
          throw new Error(pricingError.message);
        }

        setPricing(data);
      } catch (err) {
        console.error('Pricing calculation error:', err);
        setError('Failed to calculate pricing');
        // Fallback to basic calculation for UX
        const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
        setPricing({
          subtotal,
          deliveryFee: subtotal >= 1000 ? 0 : 15,
          total: subtotal + (subtotal >= 1000 ? 0 : 15),
          freeDeliveryThreshold: 1000,
          remainingForFreeDelivery: Math.max(0, 1000 - subtotal)
        });
      } finally {
        setLoading(false);
      }
    };

    calculatePricing();
  }, [cartItems]);

  return { pricing, loading, error };
};