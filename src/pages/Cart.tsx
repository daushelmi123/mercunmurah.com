
import React from 'react';
import { useCart } from '@/contexts/CartContext';
import CartHeader from '@/components/cart/CartHeader';
import EmptyCart from '@/components/cart/EmptyCart';
import CartItems from '@/components/cart/CartItems';
import OrderSummary from '@/components/cart/OrderSummary';
import CheckoutForm from '@/components/cart/CheckoutForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Cart: React.FC = () => {
  const { cartItems } = useCart();

  if (cartItems.length === 0) {
    return (
      <>
        <Navbar />
        <EmptyCart />
        <WhatsAppButton />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black py-3 sm:py-4 pt-20 sm:pt-24 w-full overflow-x-hidden">
        <div className="w-full px-3 sm:px-4">
        <div className="max-w-6xl mx-auto w-full">
          <CartHeader />

          <div className="w-full space-y-4 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6">
            {/* Cart Items */}
            <div className="w-full lg:col-span-2">
              <CartItems />
            </div>

            {/* Order Summary & Checkout */}
            <div className="w-full space-y-4">
              <OrderSummary />
              <CheckoutForm />
            </div>
          </div>
        </div>
        </div>
      </div>
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default Cart;
