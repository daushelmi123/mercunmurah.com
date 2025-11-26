
import React, { useState, useEffect, useRef } from 'react';
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
import { CONTACT_INFO } from '@/config/constants';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

const WEBHOOK_URL = 'https://hook.integrator.boost.space/7fiu3esf47km3cubdjlhmdkx88vd92q2';

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
  const [showThankYou, setShowThankYou] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState<string | null>(null);
  const [countdown, setCountdown] = useState<number>(4);
  const countdownTimerRef = useRef<number | null>(null);

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
    
    if (!deliveryDate) {
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
      // Calculate totals
      const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const deliveryFee = subtotal >= 1000 ? 0 : 15;
      const total = subtotal + deliveryFee;

      const formattedDeliveryDate = format(deliveryDate, 'dd/MM/yyyy');
      const now = new Date();

      // Format order items
      const itemsList = cartItems.map((item) => {
        const productName = typeof item.name === 'string'
          ? item.name
          : (language === 'en' ? item.name?.en : item.name?.ms) || item.name?.en || 'Unknown Product';
        return `${item.quantity}x ${productName} - RM${(item.price * item.quantity).toFixed(2)}`;
      }).join('\n');

      const orderPayload = {
        timestamp: now.toISOString(),
        customer: {
          name: checkoutData.name,
          phone: checkoutData.phone,
          email: checkoutData.email,
        },
        shipping: {
          address: checkoutData.address,
          postcode: checkoutData.postcode,
          city: checkoutData.city,
          state: checkoutData.state,
          deliveryDate: formattedDeliveryDate,
        },
        event: {
          type: checkoutData.eventType,
          specialInstructions: checkoutData.specialInstructions,
        },
        pricing: {
          subtotal,
          deliveryFee,
          total,
          currency: 'MYR',
        },
        items: cartItems.map((item) => ({
          id: item.id,
          name: typeof item.name === 'string' ? item.name : item.name.en,
          quantity: item.quantity,
          unitPrice: item.price,
          totalPrice: item.price * item.quantity,
          type: item.type,
        })),
        metadata: {
          language,
          generatedAt: now.toLocaleString('ms-MY'),
        },
      };

      // Send order to webhook
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderPayload),
      });

      if (!response.ok) {
        throw new Error(`Webhook error: ${response.statusText}`);
      }

      // Create WhatsApp message
      const message = `🎆 *PESANAN BARU*

📦 *MAKLUMAT PELANGGAN*
Nama: ${checkoutData.name}
Telefon: ${checkoutData.phone}
Email: ${checkoutData.email || 'Tiada'}

📍 *ALAMAT PENGHANTARAN*
${checkoutData.address}
${checkoutData.postcode} ${checkoutData.city}
${checkoutData.state}

🎯 *BUTIRAN ACARA*
Jenis Acara: ${checkoutData.eventType || 'Tiada'}
Tarikh Penghantaran: ${formattedDeliveryDate}

🛒 *PESANAN*
${itemsList}

💰 *HARGA*
Subtotal: RM${subtotal.toFixed(2)}
Penghantaran: RM${deliveryFee.toFixed(2)}
*JUMLAH: RM${total.toFixed(2)}*

📝 *Arahan Khas:*
${checkoutData.specialInstructions || 'Tiada'}

──────────────────────
Tarikh: ${now.toLocaleDateString('ms-MY')}
Masa: ${now.toLocaleTimeString('ms-MY')}`;

      // Open WhatsApp
      const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`;
      setWhatsappLink(whatsappUrl);
      setShowThankYou(true);

      toast({
        title: language === 'en' ? 'Order Ready!' : 'Pesanan Sedia!',
        description: language === 'en' 
          ? 'We will redirect you to WhatsApp shortly. Send the message to complete your order.'
          : 'Kami akan bawa anda ke WhatsApp sebentar lagi. Hantar mesej untuk lengkapkan pesanan.',
      });

      // Start countdown using setInterval
      let count = 4;
      setCountdown(count);
      
      countdownTimerRef.current = window.setInterval(() => {
        count--;
        console.log('Countdown:', count);
        setCountdown(count);
        
        if (count <= 0) {
          if (countdownTimerRef.current) {
            clearInterval(countdownTimerRef.current);
            countdownTimerRef.current = null;
          }
          
          // Open WhatsApp
          console.log('Opening WhatsApp:', whatsappUrl);
          const whatsappWindow = window.open(whatsappUrl, '_blank');
          
          if (!whatsappWindow) {
            toast({
              title: language === 'en' ? 'Pop-up blocked' : 'Pop-up dihalang',
              description: language === 'en'
                ? 'Please tap the button below if WhatsApp did not open automatically.'
                : 'Sila tekan butang di bawah jika WhatsApp tidak dibuka secara automatik.',
            });
          } else {
            whatsappWindow.focus();
            clearCart();
            // Close modal after 1 second
            setTimeout(() => {
              setShowThankYou(false);
            }, 1000);
          }
        }
      }, 1000);
      
    } catch (error) {
      console.error('Order error:', error);
      
      // Still try to send via direct WhatsApp link as fallback
      const fallbackUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber.replace(/\+/g, '')}`;
      
      toast({
        title: language === 'en' ? 'Opening WhatsApp...' : 'Membuka WhatsApp...',
        description: language === 'en' 
          ? `Please send your order manually. Contact: ${CONTACT_INFO.whatsappNumber}`
          : `Sila hantar pesanan anda secara manual. Hubungi: ${CONTACT_INFO.whatsappNumber}`,
        variant: 'default',
      });
      
      window.open(fallbackUrl, '_blank');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Cleanup interval on unmount or modal close
  useEffect(() => {
    return () => {
      if (countdownTimerRef.current) {
        clearInterval(countdownTimerRef.current);
        countdownTimerRef.current = null;
      }
    };
  }, []);

  const handleCancelCountdown = () => {
    if (countdownTimerRef.current) {
      clearInterval(countdownTimerRef.current);
      countdownTimerRef.current = null;
    }
    setShowThankYou(false);
    setCountdown(4);
  };

  const handleOpenWhatsappNow = () => {
    if (!whatsappLink) {
      return;
    }

    if (countdownTimerRef.current) {
      clearInterval(countdownTimerRef.current);
      countdownTimerRef.current = null;
    }

    const manualWindow = window.open(whatsappLink, '_blank');

    if (!manualWindow) {
      toast({
        title: language === 'en' ? 'Pop-up blocked' : 'Pop-up dihalang',
        description: language === 'en'
          ? 'Please allow pop-ups or send the order manually.'
          : 'Sila benarkan pop-up atau hantar pesanan secara manual.',
      });
      return;
    }

    manualWindow.focus();
    clearCart();
    setShowThankYou(false);
    setCountdown(4);
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

      <AlertDialog open={showThankYou} onOpenChange={setShowThankYou}>
        <AlertDialogContent className="bg-gray-950 border border-red-900/40">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white">
              {language === 'en' ? 'Thank You!' : 'Terima Kasih!'}
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-300">
              {language === 'en'
                ? countdown !== null && countdown > 0
                  ? `Redirecting to WhatsApp in ${countdown} second${countdown === 1 ? '' : 's'}...`
                  : 'Opening WhatsApp now. Please send the message to confirm your order.'
                : countdown !== null && countdown > 0
                  ? `Mengalihkan ke WhatsApp dalam ${countdown} saat...`
                  : 'Sedang membuka WhatsApp sekarang. Sila hantar mesej untuk sahkan pesanan.'}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <div className="flex w-full flex-col gap-2 sm:flex-row sm:justify-end">
              <Button
                variant="outline"
                onClick={handleCancelCountdown}
                className="w-full sm:w-auto"
              >
                {language === 'en' ? 'Cancel' : 'Batal'}
              </Button>
              <Button
                onClick={handleOpenWhatsappNow}
                className="w-full sm:w-auto"
              >
                {language === 'en' ? 'Open WhatsApp Now' : 'Buka WhatsApp Sekarang'}
              </Button>
            </div>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default CheckoutForm;
