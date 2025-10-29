
import React, { useEffect, useState } from 'react';
import { Shield, Download, Phone, CheckCircle, AlertTriangle, Heart, Eye, Ear } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { CONTACT_INFO } from '@/config/constants';
import { getSeasonalCopywriting, getCurrentFestival } from '@/utils/festivalSeason';

const Permits: React.FC = () => {
  const { language } = useLanguage();
  const [seasonalCopy, setSeasonalCopy] = useState(getSeasonalCopywriting());
  const [currentFestival, setCurrentFestival] = useState(getCurrentFestival());

  // Update seasonal content on component mount
  useEffect(() => {
    setSeasonalCopy(getSeasonalCopywriting());
    setCurrentFestival(getCurrentFestival());
  }, []);

  const permitSteps = [
    {
      step: 1,
      title: { 
        en: 'Check Eligibility', 
        ms: 'Semak Kelayakan' 
      },
      description: { 
        en: 'Must be 18 years old and Malaysian citizen. Cannot have criminal record.',
        ms: 'Mesti berumur 18 tahun dan warganegara Malaysia. Tidak boleh mempunyai rekod jenayah.'
      },
      icon: Shield
    },
    {
      step: 2,
      title: { 
        en: 'Gather Required Documents', 
        ms: 'Kumpul Dokumen Diperlukan' 
      },
      description: { 
        en: 'IC copy, passport photo, agent letter, and PBT approval.',
        ms: 'Salinan IC, gambar pasport, surat ejen, dan kelulusan PBT.'
      },
      icon: CheckCircle
    },
    {
      step: 3,
      title: { 
        en: 'Submit Application', 
        ms: 'Hantar Permohonan' 
      },
      description: { 
        en: 'Submit application to nearest police station.',
        ms: 'Hantar permohonan ke balai polis terdekat.'
      },
      icon: Download
    },
    {
      step: 4,
      title: { 
        en: 'Wait for Approval', 
        ms: 'Tunggu Kelulusan' 
      },
      description: { 
        en: 'Processing takes 7-14 working days. You will be contacted.',
        ms: 'Pemprosesan mengambil masa 7-14 hari bekerja. Anda akan dihubungi.'
      },
      icon: Phone
    }
  ];

  const safetyTips = {
    en: [
      'Always read instructions before lighting any fireworks',
      'Keep a bucket of water or hose nearby for emergencies',
      'Light fireworks outdoors only, away from buildings and vehicles',
      'Never hold fireworks in your hands when lighting',
      'Wait 20 minutes before approaching unlit fireworks',
      'Never try to relight fireworks that failed to ignite',
      'Keep children and pets at a safe distance',
      'Wear safety glasses and avoid loose clothing',
      'Have a first aid kit readily available',
      'Do not use fireworks under influence of alcohol'
    ],
    ms: [
      'Sentiasa baca arahan sebelum menyalakan mana-mana bunga api',
      'Sediakan baldi air atau hos berdekatan untuk kecemasan',
      'Salakan bunga api di luar sahaja, jauh dari bangunan dan kenderaan',
      'Jangan pegang bunga api di tangan semasa menyalakan',
      'Tunggu 20 minit sebelum mendekati bunga api yang tidak menyala',
      'Jangan cuba nyalakan semula bunga api yang gagal terbakar',
      'Jauhkan kanak-kanak dan haiwan peliharaan dari jarak yang selamat',
      'Pakai cermin mata keselamatan dan elakkan pakaian longgar',
      'Sediakan kit pertolongan cemas',
      'Jangan guna bunga api dalam pengaruh alkohol'
    ]
  };

  const requirements = {
    en: [
      'Malaysian citizen aged 18 and above',
      'Clean criminal record',
      'Valid reason for fireworks use',
      'Specific location and date of use',
      'Safety measures plan',
      'Safety plan documentation'
    ],
    ms: [
      'Warganegara Malaysia berumur 18 tahun ke atas',
      'Rekod jenayah yang bersih',
      'Sebab yang sah untuk penggunaan bunga api',
      'Lokasi dan tarikh penggunaan yang khusus',
      'Pelan langkah keselamatan',
      'Dokumentasi pelan keselamatan'
    ]
  };

  const documents = {
    en: [
      'Copy of Malaysian IC (front and back)',
      'Recent passport-sized photograph',
      'Authorized agent appointment letter from fireworks supplier',
      'Approval letter from Local Council (PBT)'
    ],
    ms: [
      'Salinan IC Malaysia (depan dan belakang)',
      'Gambar berukuran pasport terkini',
      'Surat lantikan ejen sah dari pihak pembekal bunga api',
      'Surat kelulusan dari Majlis Daerah (PBT)'
    ]
  };

  const handleWhatsAppAssistance = () => {
    const phoneNumber = CONTACT_INFO.whatsappNumber;
    const message = encodeURIComponent(
      language === 'en' 
        ? 'Hi MercunMurah! I need assistance with fireworks permit application and safety guidance.'
        : 'Hi MercunMurah! Saya memerlukan bantuan dengan permohonan permit bunga api dan panduan keselamatan.'
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black py-8 pt-20 sm:pt-24">
        <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold explosive-text mb-6">
            {currentFestival 
              ? `Cara Mohon Permit Bunga Api ${currentFestival.name} PDRM 2024 | Lesen Mercun Malaysia`
              : 'Cara Mohon Permit Bunga Api PDRM 2024 | Lesen Mercun Malaysia Guide'}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {currentFestival 
              ? `Panduan lengkap mohon lesen bunga api Malaysia 2024. Permit PDRM untuk mercun ${currentFestival.name.toLowerCase()}, wedding. Dokumen diperlukan, syarat umur 18+. ${currentFestival.daysUntil > 0 ? `Mohon awal untuk ${currentFestival.name}!` : `Permit ${currentFestival.name} tersedia!`} Proses 7-14 hari.`
              : 'Panduan lengkap mohon lesen bunga api Malaysia 2024. Permit PDRM untuk mercun wedding, festival. Dokumen diperlukan, syarat umur 18+. Proses 7-14 hari.'
            }
          </p>
        </div>

        {/* Important Notice */}
        <Card className="bg-red-900/20 border-red-500/30 mb-12 max-w-4xl mx-auto">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-red-400 font-semibold text-lg mb-2">
                  {language === 'en' ? 'Important Notice' : 'Notis Penting'}
                </h3>
                <p className="text-gray-300">
                  {language === 'en'
                    ? 'Using fireworks without proper permits is illegal in Malaysia. Always obtain proper permits and follow safety guidelines for safe usage.'
                    : 'Menggunakan bunga api tanpa permit yang betul adalah haram di Malaysia. Sentiasa dapatkan permit yang betul dan ikuti garis panduan keselamatan untuk penggunaan selamat.'
                  }
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Safety Guide Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            {language === 'en' ? 'Fireworks Safety Guide' : 'Panduan Keselamatan Bunga Api'}
          </h2>
          
          <Card className="festival-card mb-8">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center">
                <Heart className="w-6 h-6 mr-3 text-red-500" />
                {language === 'en' ? 'Essential Safety Tips' : 'Tips Keselamatan Penting'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {safetyTips[language].map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-300 text-sm">{tip}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="festival-card text-center">
              <CardHeader>
                <Eye className="w-12 h-12 text-orange-500 mx-auto mb-3" />
                <CardTitle className="text-white">
                  {language === 'en' ? 'Eye Protection' : 'Perlindungan Mata'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  {language === 'en'
                    ? 'Always wear safety glasses when handling fireworks. Sparks can cause serious eye injuries.'
                    : 'Sentiasa pakai cermin mata keselamatan semasa mengendalikan bunga api. Percikan boleh menyebabkan kecederaan mata yang serius.'
                  }
                </p>
              </CardContent>
            </Card>

            <Card className="festival-card text-center">
              <CardHeader>
                <Ear className="w-12 h-12 text-orange-500 mx-auto mb-3" />
                <CardTitle className="text-white">
                  {language === 'en' ? 'Hearing Protection' : 'Perlindungan Pendengaran'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  {language === 'en'
                    ? 'Use ear plugs for loud fireworks. Protect your hearing from sudden loud noises.'
                    : 'Guna penyumbat telinga untuk bunga api yang kuat. Lindungi pendengaran anda daripada bunyi kuat yang mengejut.'
                  }
                </p>
              </CardContent>
            </Card>

            <Card className="festival-card text-center">
              <CardHeader>
                <Shield className="w-12 h-12 text-orange-500 mx-auto mb-3" />
                <CardTitle className="text-white">
                  {language === 'en' ? 'Fire Safety' : 'Keselamatan Kebakaran'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  {language === 'en'
                    ? 'Keep water source nearby and clear the area of flammable materials before lighting.'
                    : 'Simpan sumber air berdekatan dan bersihkan kawasan daripada bahan mudah terbakar sebelum menyalakan.'
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Application Steps */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            {language === 'en' ? 'Permit Application Process' : 'Proses Permohonan Permit'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {permitSteps.map((step) => (
              <Card key={step.step} className="festival-card text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                    {step.step}
                  </div>
                  <CardTitle className="text-white text-lg">
                    {step.title[language]}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm">
                    {step.description[language]}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Requirements */}
          <Card className="festival-card">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center">
                <Shield className="w-6 h-6 mr-3 text-red-500" />
                {language === 'en' ? 'Requirements' : 'Keperluan'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {requirements[language].map((req, index) => (
                  <li key={index} className="text-gray-300 flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Required Documents */}
          <Card className="festival-card">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center">
                <Download className="w-6 h-6 mr-3 text-red-500" />
                {language === 'en' ? 'Required Documents' : 'Dokumen Diperlukan'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {documents[language].map((doc, index) => (
                  <li key={index} className="text-gray-300 flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    {doc}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Contact for Assistance */}
        <Card className="festival-card text-center max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-white text-2xl">
              {language === 'en' ? 'Need Assistance?' : 'Perlukan Bantuan?'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-6">
              {language === 'en'
                ? 'Our team can help you with permit applications and safety guidance. Contact us via WhatsApp for assistance.'
                : 'Pasukan kami boleh membantu anda dengan permohonan permit dan panduan keselamatan. Hubungi kami melalui WhatsApp untuk bantuan.'
              }
            </p>
            <Button
              onClick={handleWhatsAppAssistance}
              className="explosive-button"
            >
              <Phone className="w-4 h-4 mr-2" />
              {language === 'en' ? 'WhatsApp for Help' : 'WhatsApp untuk Bantuan'}
            </Button>
          </CardContent>
        </Card>
        </div>
      </div>
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default Permits;
