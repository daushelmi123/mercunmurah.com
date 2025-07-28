import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface CartItem {
  id: number;
  name: { en: string; ms: string };
  price: number;
  quantity: number;
  image: string;
  type: 'product' | 'package';
}

interface PricingRequest {
  cartItems: CartItem[];
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { cartItems }: PricingRequest = await req.json();

    console.log('Calculating pricing for:', cartItems.length, 'items');

    // Validate cart items
    if (!cartItems || cartItems.length === 0) {
      return new Response(
        JSON.stringify({ 
          subtotal: 0, 
          deliveryFee: 0, 
          total: 0,
          freeDeliveryThreshold: 1000,
          remainingForFreeDelivery: 1000
        }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Calculate subtotal securely on backend
    const subtotal = cartItems.reduce((total, item) => {
      // Validate item structure
      if (!item.price || !item.quantity || item.price < 0 || item.quantity < 0) {
        console.warn('Invalid item detected:', item);
        return total;
      }
      return total + (item.price * item.quantity);
    }, 0);

    // Business logic for delivery fee (secure on backend)
    const freeDeliveryThreshold = 1000;
    const deliveryFee = subtotal >= freeDeliveryThreshold ? 0 : 15;
    const total = subtotal + deliveryFee;
    const remainingForFreeDelivery = Math.max(0, freeDeliveryThreshold - subtotal);

    console.log('Pricing calculated:', { subtotal, deliveryFee, total });

    return new Response(
      JSON.stringify({ 
        subtotal: Math.round(subtotal * 100) / 100, // Round to 2 decimal places
        deliveryFee,
        total: Math.round(total * 100) / 100,
        freeDeliveryThreshold,
        remainingForFreeDelivery: Math.round(remainingForFreeDelivery * 100) / 100
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Pricing calculation error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to calculate pricing' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});