
import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { CONTACT_INFO } from '@/config/constants';
import { getSeasonalCopywriting, getCurrentFestival } from '@/utils/festivalSeason';
import { supabase } from '@/integrations/supabase/client';

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [seasonalCopy, setSeasonalCopy] = useState(getSeasonalCopywriting());
  const [currentFestival, setCurrentFestival] = useState(getCurrentFestival());

  // Update seasonal content on component mount
  useEffect(() => {
    setSeasonalCopy(getSeasonalCopywriting());
    setCurrentFestival(getCurrentFestival());
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Send to Supabase Edge Function (secure like order system)
      const { data, error } = await supabase.functions.invoke('contact-form', {
        body: {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          source: 'Contact Form',
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent
        }
      });

      if (error) {
        throw error;
      }

      alert(language === 'en' 
        ? 'Thank you for your message! We will get back to you soon.'
        : 'Terima kasih atas mesej anda! Kami akan menghubungi anda tidak lama lagi.'
      );
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      console.error('Error sending form:', error);
      alert(language === 'en'
        ? 'Sorry, there was an error sending your message. Please try again or contact us via WhatsApp.'
        : 'Maaf, terdapat ralat menghantar mesej anda. Sila cuba lagi atau hubungi kami melalui WhatsApp.'
      );
    }
  };

  const handleWhatsAppContact = () => {
    const phoneNumber = CONTACT_INFO.whatsappNumber;
    const message = encodeURIComponent(
      language === 'en' 
        ? 'Hi MercunMurah! I would like to inquire about your fireworks products and services.'
        : 'Hi MercunMurah! Saya ingin bertanya tentang produk dan perkhidmatan bunga api anda.'
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: language === 'en' ? 'Phone' : 'Telefon',
      info: '+60137340415',
      description: language === 'en' ? 'Call us anytime' : 'Hubungi kami bila-bila masa'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'info@mercunmurah.com',
      description: language === 'en' ? 'Send us an email' : 'Hantar email kepada kami'
    },
    {
      icon: MapPin,
      title: language === 'en' ? 'Address' : 'Alamat',
      info: language === 'en' ? 'Kuala Lumpur, Malaysia' : 'Kuala Lumpur, Malaysia',
      description: language === 'en' ? 'Visit our store' : 'Lawati kedai kami'
    },
    {
      icon: Clock,
      title: language === 'en' ? 'Business Hours' : 'Waktu Perniagaan',
      info: language === 'en' ? 'Mon-Sun: 9AM-9PM' : 'Isnin-Ahad: 9AM-9PM',
      description: language === 'en' ? 'We are open daily' : 'Kami buka setiap hari'
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black py-8 pt-20 sm:pt-24">
        <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold explosive-text mb-6">
            {currentFestival 
              ? `Hubungi MercunMurah | Kedai Bunga Api ${currentFestival.name} KL Shah Alam Johor | WhatsApp +60137340415`
              : 'Hubungi MercunMurah | Kedai Bunga Api Wedding KL Shah Alam Johor | WhatsApp +60137340415'}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {currentFestival 
              ? `Pembekal bunga api murah Malaysia. Jual mercun ${currentFestival.name.toLowerCase()}, wedding, sparklers. Borong & runcit KL, Shah Alam, Johor. ${currentFestival.daysUntil > 0 ? `${currentFestival.name} dalam ${currentFestival.daysUntil} hari!` : `Selamat ${currentFestival.name}!`} Permit guidance percuma.`
              : 'Pembekal bunga api murah Malaysia. Jual mercun wedding, sparklers cantik. Borong & runcit KL, Shah Alam, Johor Bahru. Permit guidance percuma.'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="festival-card">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center">
                <Send className="w-6 h-6 mr-3 text-red-500" />
                {language === 'en' ? 'Send us a Message' : 'Hantar Mesej kepada Kami'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm font-medium">
                      {language === 'en' ? 'Full Name' : 'Nama Penuh'}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-red-900/30 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                      placeholder={language === 'en' ? 'Enter your name' : 'Masukkan nama anda'}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm font-medium">
                      {language === 'en' ? 'Phone Number' : 'Nombor Telefon'}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-red-900/30 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                      placeholder={language === 'en' ? '+60 12-345 6789' : '+60 12-345 6789'}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">
                    {language === 'en' ? 'Email Address' : 'Alamat Email'}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-red-900/30 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                    placeholder={language === 'en' ? 'your@email.com' : 'email@anda.com'}
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">
                    {language === 'en' ? 'Subject' : 'Subjek'}
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-red-900/30 rounded-lg text-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                  >
                    <option value="">
                      {language === 'en' ? 'Select a subject' : 'Pilih subjek'}
                    </option>
                    <option value="product-inquiry">
                      {language === 'en' ? 'Product Inquiry' : 'Pertanyaan Produk'}
                    </option>
                    <option value="permit-help">
                      {language === 'en' ? 'Permit Assistance' : 'Bantuan Permit'}
                    </option>
                    <option value="bulk-order">
                      {language === 'en' ? 'Bulk Order' : 'Pesanan Borong'}
                    </option>
                    <option value="complaint">
                      {language === 'en' ? 'Complaint' : 'Aduan'}
                    </option>
                    <option value="other">
                      {language === 'en' ? 'Other' : 'Lain-lain'}
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">
                    {language === 'en' ? 'Message' : 'Mesej'}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-900 border border-red-900/30 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all resize-none"
                    placeholder={language === 'en' 
                      ? 'Tell us how we can help you...'
                      : 'Beritahu kami bagaimana kami boleh membantu anda...'
                    }
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full explosive-button"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {language === 'en' ? 'Send Message' : 'Hantar Mesej'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Quick WhatsApp */}
            <Card className="festival-card bg-green-900/20 border-green-500/30">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                  {language === 'en' ? 'Quick WhatsApp Contact' : 'Hubungan WhatsApp Pantas'}
                </h3>
                <p className="text-gray-300 mb-6">
                  {language === 'en'
                    ? 'Get instant response via WhatsApp for urgent inquiries'
                    : 'Dapatkan respons segera melalui WhatsApp untuk pertanyaan mendesak'
                  }
                </p>
                <Button
                  onClick={handleWhatsAppContact}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {language === 'en' ? 'WhatsApp Us Now' : 'WhatsApp Kami Sekarang'}
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="festival-card">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                        <p className="text-red-400 font-medium mb-1">{info.info}</p>
                        <p className="text-gray-400 text-sm">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
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

export default Contact;
