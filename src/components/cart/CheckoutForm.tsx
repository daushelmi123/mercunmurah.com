
import React, { useState } from 'react';
import { CreditCard, CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';

const CheckoutForm: React.FC = () => {
  const { language } = useLanguage();
  const { cartItems, getTotalPrice, getTotalItems, clearCart } = useCart();
  const { toast } = useToast();

  const [checkoutData, setCheckoutData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    postcode: '',
    state: '',
    city: '',
    eventType: '',
    specialInstructions: ''
  });

  const malaysianStates = {
    'Johor': ['Johor Bahru', 'Batu Pahat', 'Muar', 'Kluang', 'Mersing', 'Pontian', 'Segamat', 'Kulai'],
    'Kedah': ['Alor Setar', 'Sungai Petani', 'Kulim', 'Langkawi', 'Yan', 'Pendang', 'Kuala Nerang'],
    'Kelantan': ['Kota Bharu', 'Kuala Krai', 'Machang', 'Pasir Mas', 'Tanah Merah', 'Tumpat', 'Bachok'],
    'Kuala Lumpur': ['Kuala Lumpur'],
    'Labuan': ['Labuan'],
    'Melaka': ['Melaka Tengah', 'Jasin', 'Alor Gajah'],
    'Negeri Sembilan': ['Seremban', 'Port Dickson', 'Nilai', 'Bahau', 'Tampin', 'Kuala Pilah', 'Jempol'],
    'Pahang': ['Kuantan', 'Temerloh', 'Bentong', 'Raub', 'Jerantut', 'Pekan', 'Kuala Lipis'],
    'Perak': ['Ipoh', 'Taiping', 'Sitiawan', 'Kuala Kangsar', 'Teluk Intan', 'Parit Buntar', 'Lumut'],
    'Perlis': ['Kangar', 'Padang Besar', 'Arau'],
    'Pulau Pinang': ['Georgetown', 'Butterworth', 'Bukit Mertajam', 'Nibong Tebal', 'Permatang Pauh'],
    'Putrajaya': ['Putrajaya'],
    'Sabah': ['Kota Kinabalu', 'Sandakan', 'Tawau', 'Lahad Datu', 'Keningau', 'Beaufort', 'Kudat'],
    'Sarawak': ['Kuching', 'Miri', 'Sibu', 'Bintulu', 'Limbang', 'Sarikei', 'Sri Aman'],
    'Selangor': ['Shah Alam', 'Petaling Jaya', 'Subang Jaya', 'Klang', 'Kajang', 'Ampang', 'Puchong', 'Seri Kembangan', 'Bangi'],
    'Terengganu': ['Kuala Terengganu', 'Kemaman', 'Dungun', 'Marang', 'Besut', 'Setiu', 'Hulu Terengganu']
  };

  const availableCities = checkoutData.state ? malaysianStates[checkoutData.state] || [] : [];

  const [deliveryDate, setDeliveryDate] = useState<Date>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Pricing calculation now handled in backend for security

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCheckoutData(prev => {
      const newData = { ...prev, [name]: value };
      // Reset city when state changes
      if (name === 'state') {
        newData.city = '';
      }
      return newData;
    });
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('=== CHECKOUT STARTED ===');
    console.log('Cart Items:', cartItems);
    console.log('Checkout Data:', checkoutData);
    console.log('Delivery Date:', deliveryDate);
    
    if (!deliveryDate) {
      console.log('ERROR: No delivery date selected');
      toast({
        title: language === 'en' ? 'Date Required' : 'Tarikh Diperlukan',
        description: language === 'en' 
          ? 'Please select a delivery date'
          : 'Sila pilih tarikh penghantaran',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('Submitting order with data:', { 
        cartItems: cartItems.length, 
        checkoutData: checkoutData.name,
        deliveryDate: deliveryDate.toISOString() 
      });
      
      // Call backend edge function for secure order processing
      console.log('About to call supabase.functions.invoke...');
      
      const result = await supabase.functions.invoke('process-order', {
        body: {
          cartItems,
          checkoutData,
          deliveryDate: deliveryDate.toISOString()
        }
      });

      console.log('Full supabase response:', result);
      const { data: orderResult, error: orderError } = result;

      console.log('Order result:', orderResult);
      console.log('Order error:', orderError);

      if (orderError) {
        console.error('Order processing error:', orderError);
        throw new Error(`Failed to process order: ${orderError.message}`);
      }

      if (!orderResult?.success) {
        console.error('Order result not successful:', orderResult);
        throw new Error(orderResult?.error || 'Order processing failed - no success flag');
      }

      // Send notification via backend
      const { error: notificationError } = await supabase.functions.invoke('send-order-notification', {
        body: {
          orderId: orderResult.orderId,
          orderNumber: orderResult.orderNumber,
          message: orderResult.message
        }
      });

      if (notificationError) {
        console.warn('Notification failed but order is saved:', notificationError);
      }

      toast({
        title: language === 'en' ? 'Order Placed!' : 'Pesanan Dibuat!',
        description: language === 'en' 
          ? `Order ${orderResult.orderNumber} placed successfully! We will contact you to confirm delivery details.`
          : `Pesanan ${orderResult.orderNumber} berjaya dibuat! Kami akan menghubungi anda untuk mengesahkan butiran penghantaran.`,
      });

      clearCart();
      
    } catch (error) {
      console.error('Order processing error:', error);
      toast({
        title: language === 'en' ? 'Order Failed' : 'Pesanan Gagal',
        description: language === 'en' 
          ? 'Failed to place order. Please try again or contact us directly.'
          : 'Gagal membuat pesanan. Sila cuba lagi atau hubungi kami terus.',
        variant: 'destructive',
      });
    }

    setIsSubmitting(false);
  };


  return (
    <div className="space-y-3 sm:space-y-4 w-full max-w-full overflow-hidden">
      {/* Checkout Form */}
      <Card className="festival-card w-full max-w-full overflow-hidden">
        <CardHeader className="p-3 sm:p-4">
          <CardTitle className="text-white flex items-center text-base sm:text-lg">
            <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-red-500" />
            {language === 'en' ? 'Order Details - Complete Form to Place Order' : 'Butiran Pesanan - Lengkapkan Borang untuk Buat Pesanan'}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 sm:p-4 pt-0">
          <form onSubmit={handleCheckout} className="space-y-3">
            <div>
              <input
                type="text"
                name="name"
                value={checkoutData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 sm:py-3 bg-gray-900 border border-red-900/30 rounded text-white placeholder-gray-400 text-sm sm:text-base"
                placeholder={language === 'en' ? 'Full Name' : 'Nama Penuh'}
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                value={checkoutData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 sm:py-3 bg-gray-900 border border-red-900/30 rounded text-white placeholder-gray-400 text-sm sm:text-base"
                placeholder={language === 'en' ? 'Phone Number' : 'Nombor Telefon'}
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={checkoutData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 sm:py-3 bg-gray-900 border border-red-900/30 rounded text-white placeholder-gray-400 text-sm sm:text-base"
                placeholder={language === 'en' ? 'Email Address (Optional)' : 'Alamat Email (Pilihan)'}
              />
            </div>

            {/* Address Fields */}
            <div>
              <textarea
                name="address"
                value={checkoutData.address}
                onChange={handleInputChange}
                required
                rows={2}
                className="w-full px-3 py-2 sm:py-3 bg-gray-900 border border-red-900/30 rounded text-white placeholder-gray-400 text-sm sm:text-base resize-none"
                placeholder={language === 'en' ? 'Street Address' : 'Alamat'}
              />
            </div>

            <div className="grid grid-cols-1 gap-3">
              <div>
                <input
                  type="text"
                  name="postcode"
                  value={checkoutData.postcode}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 sm:py-3 bg-gray-900 border border-red-900/30 rounded text-white placeholder-gray-400 text-sm sm:text-base"
                  placeholder={language === 'en' ? 'Postcode' : 'Poskod'}
                />
              </div>
              <div>
                <select
                  name="state"
                  value={checkoutData.state}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 sm:py-3 bg-gray-900 border border-red-900/30 rounded text-white text-sm sm:text-base"
                >
                  <option value="">
                    {language === 'en' ? 'Select State' : 'Pilih Negeri'}
                  </option>
                  {Object.keys(malaysianStates).map(state => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <select
                name="city"
                value={checkoutData.city}
                onChange={handleInputChange}
                required
                disabled={!checkoutData.state}
                className="w-full px-3 py-2 sm:py-3 bg-gray-900 border border-red-900/30 rounded text-white text-sm sm:text-base disabled:opacity-50"
              >
                <option value="">
                  {language === 'en' ? 'Select City/District' : 'Pilih Bandar/Daerah'}
                </option>
                {availableCities.map(city => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal bg-gray-900 border-red-900/30 text-white hover:bg-gray-800 h-10 sm:h-11 text-sm sm:text-base",
                      !deliveryDate && "text-gray-400"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {deliveryDate ? (
                      format(deliveryDate, "PPP")
                    ) : (
                      <span>{language === 'en' ? 'Select delivery date' : 'Pilih tarikh penghantaran'}</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={deliveryDate}
                    onSelect={setDeliveryDate}
                    disabled={(date) => date < new Date()}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <select
                name="eventType"
                value={checkoutData.eventType}
                onChange={handleInputChange}
                className="w-full px-3 py-2 sm:py-3 bg-gray-900 border border-red-900/30 rounded text-white text-sm sm:text-base"
              >
                <option value="">
                  {language === 'en' ? 'Select Event Type (Optional)' : 'Pilih Jenis Acara (Pilihan)'}
                </option>
                <option value="wedding">
                  {language === 'en' ? 'Wedding' : 'Perkahwinan'}
                </option>
                <option value="birthday">
                  {language === 'en' ? 'Birthday' : 'Hari Jadi'}
                </option>
                <option value="corporate">
                  {language === 'en' ? 'Corporate Event' : 'Acara Korporat'}
                </option>
                <option value="festival">
                  {language === 'en' ? 'Festival' : 'Perayaan'}
                </option>
                <option value="other">
                  {language === 'en' ? 'Other' : 'Lain-lain'}
                </option>
              </select>
            </div>

            <div>
              <textarea
                name="specialInstructions"
                value={checkoutData.specialInstructions}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-3 py-2 sm:py-3 bg-gray-900 border border-red-900/30 rounded text-white placeholder-gray-400 text-sm sm:text-base resize-none"
                placeholder={language === 'en' ? 'Special Instructions (Optional)' : 'Arahan Khas (Pilihan)'}
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full explosive-button h-10 sm:h-11 text-sm sm:text-base font-bold"
            >
              {isSubmitting 
                ? (language === 'en' ? 'Processing...' : 'Memproses...')
                : (language === 'en' ? 'Place Order' : 'Buat Pesanan')
              }
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CheckoutForm;
