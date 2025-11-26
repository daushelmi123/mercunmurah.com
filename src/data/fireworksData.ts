export interface FireworkProduct {
  id: number;
  name: { en: string; ms: string };
  price: number;
  image: string;
  videoUrl: string;
  category: string;
  section: string;
}

export const fireworksData: FireworkProduct[] = [
  {
    id: 30,
    name: { en: 'Super Pop Pop', ms: 'Pop Pop Super' },
    price: 45,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199087/fireworks_400x400/fireworks_400x400/resized_framed_product_38_Pop_Pop.jpg',
    videoUrl: '',
    category: 'pop_pop',
    section: 'POP-POP'
  },
  {
    id: 31,
    name: { en: 'Pop Pop Party Pack', ms: 'Pek Parti Pop Pop' },
    price: 25,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198878/fireworks_400x400/fireworks_400x400/resized_framed_product_39_Pop_Pop_Besar.jpg',
    videoUrl: '',
    category: 'pop_pop',
    section: 'POP-POP'
  },
  {
    id: 97,
    name: { en: '4 138 Shot Merdeka', ms: '4 138 Shot Merdeka' },
    price: 130,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199058/fireworks_400x400/fireworks_400x400/resized_framed_product_91_4_138_Shoot_Cake_4_138.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077619/HunterBoom/cm4shk2s0000g03ju9jme3n1g_wrp2hg.mp4',
    category: 'merdeka',
    section: 'MERDEKA FIREWORKS'
  },
  {
    id: 901,
    name: { en: '5138 Shoot Cake ABC', ms: '5138 Shoot Cake (ABC)' },
    price: 250,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198938/fireworks_400x400/fireworks_400x400/resized_framed_product_0_5138_Shoot_Cake_28ABC29.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753076871/HunterBoom/cm4l31g5200010cmq8qeahfje_gjzsmh.mp4',
    category: 'traditional',
    section: 'MERDEKA FIREWORKS'
  },
  {
    id: 902,
    name: { en: '8 Feet (BOM)', ms: '8 Feet (Bom)' },
    price: 7,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198958/fireworks_400x400/fireworks_400x400/resized_framed_8_Feet_BOM.jpg',
    videoUrl: '',
    category: 'traditional',
    section: 'RED DRAGON FIRECRACKERS'
  },
  {
    id: 903,
    name: { en: '8 Feet 1.0 Super Red 1.0', ms: '8 Feet 1.0 Super Red' },
    price: 20,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199029/fireworks_400x400/fireworks_400x400/resized_framed_product_2_8_Feet_1.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753076882/HunterBoom/cm3fcqwsm00080dkxfqkt9q7h_jhwrtd.mp4',
    category: 'traditional',
    section: 'RED DRAGON FIRECRACKERS'
  },
  {
    id: 904,
    name: { en: '8 Feet 1.0 Super Rose 1.0', ms: '8 Feet 1.0 Super Rose' },
    price: 20,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199085/fireworks_400x400/fireworks_400x400/resized_framed_product_3_8_Feet_1.jpg',
    videoUrl: '',
    category: 'traditional',
    section: 'RED DRAGON FIRECRACKERS'
  },
  {
    id: 905,
    name: { en: '8 Feet 1.0 Super Gold 1.0', ms: '8 Feet 1.0 Super Gold' },
    price: 20,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199075/fireworks_400x400/fireworks_400x400/resized_framed_product_4_8_Feet_1.jpg',
    videoUrl: '',
    category: 'traditional',
    section: 'RED DRAGON FIRECRACKERS'
  },
  {
    id: 906,
    name: { en: '12 Feet 1.2 Super Gold (1.2)', ms: '12 Feet 1.2 Super Gold' },
    price: 45,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199003/fireworks_400x400/fireworks_400x400/resized_framed_product_5_12_Feet_1.jpg',
    videoUrl: '',
    category: 'traditional',
    section: 'RED DRAGON FIRECRACKERS'
  },
  {
    id: 907,
    name: { en: '18 Feet 1.2 Super Red 18 (1.2)', ms: '18 Feet 1.2 Super Red' },
    price: 65,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199060/fireworks_400x400/fireworks_400x400/resized_framed_product_6_18_Feet_1.jpg',
    videoUrl: '',
    category: 'traditional',
    section: 'RED DRAGON FIRECRACKERS'
  },
  {
    id: 908,
    name: { en: '18 Feet 1.2 Super Rose 18 (1.2)', ms: '18 Feet 1.2 Super Rose' },
    price: 65,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198978/fireworks_400x400/fireworks_400x400/resized_framed_product_7_18_Feet_1.jpg',
    videoUrl: '',
    category: 'traditional',
    section: 'RED DRAGON FIRECRACKERS'
  },
  {
    id: 909,
    name: { en: '18 Feet 1.2 Super Gold 18 (1.2)', ms: '18 Feet 1.2 Super Gold' },
    price: 65,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199089/fireworks_400x400/fireworks_400x400/resized_framed_product_8_18_Feet_1.jpg',
    videoUrl: '',
    category: 'traditional',
    section: 'RED DRAGON FIRECRACKERS'
  },
  {
    id: 910,
    name: { en: '28 Feet Super Gold Gift Box 28', ms: '28 Feet Super Gold (Gift Box)' },
    price: 85,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198919/fireworks_400x400/fireworks_400x400/resized_framed_product_9_28_Feet_Super_Gold_Gift_Box_28.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753076893/HunterBoom/cm3fcklnr00020cmk4ox5hesv_c4wd5e.mp4',
    category: 'traditional',
    section: 'RED DRAGON FIRECRACKERS'
  },
  {
    id: 911,
    name: { en: '38 Feet Red', ms: '38 Feet Super Red' },
    price: 105,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198946/fireworks_400x400/fireworks_400x400/resized_framed_product_10_B_006_R_38_Feet_Super_Red_38.jpg',
    videoUrl: '',
    category: 'traditional',
    section: 'RED DRAGON FIRECRACKERS'
  },
  {
    id: 912,
    name: { en: '38 Feet Rose', ms: '38 Feet Rose' },
    price: 105,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199118/fireworks_400x400/fireworks_400x400/resized_framed_product_11_B_006_P_38_Feet_Rose_38.jpg',
    videoUrl: '',
    category: 'traditional',
    section: 'RED DRAGON FIRECRACKERS'
  },
  {
    id: 913,
    name: { en: '38 Feet Gold', ms: '38 Feet Gold' },
    price: 105,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198924/fireworks_400x400/fireworks_400x400/resized_framed_product_12_B_006_G_38_Feet_Gold_38.jpg',
    videoUrl: '',
    category: 'traditional',
    section: 'RED DRAGON FIRECRACKERS'
  },
  {
    id: 914,
    name: { en: '66 Feet Mix Super Red Rose', ms: '66 Feet Mix (Super Red Rose)' },
    price: 220,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199045/fireworks_400x400/fireworks_400x400/resized_framed_product_17_88_Feet_Mix_Super_Red_Rose_88.jpg',
    videoUrl: '',
    category: 'traditional',
    section: 'RED DRAGON FIRECRACKERS'
  },
  {
    id: 915,
    name: { en: '88 Feet Red', ms: '88 Feet Super Red' },
    price: 300,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199024/fireworks_400x400/fireworks_400x400/resized_framed_product_14_88_Feet_Super_Red_88.jpg',
    videoUrl: '',
    category: 'traditional',
    section: 'RED DRAGON FIRECRACKERS'
  },
  {
    id: 916,
    name: { en: '88 Feet Rose', ms: '88 Feet Super Rose' },
    price: 300,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198880/fireworks_400x400/fireworks_400x400/resized_framed_product_15_88_Feet_Super_Rose_88.jpg',
    videoUrl: '',
    category: 'traditional',
    section: 'RED DRAGON FIRECRACKERS'
  },
  {
    id: 917,
    name: { en: '88 Feet Gold', ms: '88 Feet Super Gold' },
    price: 300,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199077/fireworks_400x400/fireworks_400x400/resized_framed_product_16_88_Feet_Super_Gold_88.jpg',
    videoUrl: '',
    category: 'traditional',
    section: 'RED DRAGON FIRECRACKERS'
  },
  {
    id: 918,
    name: { en: '88 Feet Mix Super Red Rose', ms: '88 Feet Mix (Super Red Rose)' },
    price: 300,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199045/fireworks_400x400/fireworks_400x400/resized_framed_product_17_88_Feet_Mix_Super_Red_Rose_88.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753076903/HunterBoom/cm3fek40900040dmk0yynbalc_ynqvah.mp4',
    category: 'traditional',
    section: 'RED DRAGON FIRECRACKERS'
  },
  {
    id: 919,
    name: { en: 'Sunset Kayu Tiga Warna', ms: 'Sunset Kayu Tiga Warna' },
    price: 15,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199081/fireworks_400x400/fireworks_400x400/resized_framed_product_18_Sunset_Kayu_Tiga_Warna.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753076913/HunterBoom/cm3flps0e000a0clb8e5pay1e_rzzlcl.mp4',
    category: 'traditional',
    section: 'SPARKLE & SHINE - KIDS\" FAVORITE FIREWORKS!'
  },
  {
    id: 920,
    name: { en: 'Sunset Besar', ms: 'Sunset Besar' },
    price: 25,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199091/fireworks_400x400/fireworks_400x400/resized_framed_product_19_Sunset_Besar.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753076923/HunterBoom/cm3flt42v00020cjwe6jg8qf6_jccz6a.mp4',
    category: 'traditional',
    section: 'SPARKLE & SHINE - KIDS\" FAVORITE FIREWORKS!'
  },
  {
    id: 921,
    name: { en: 'Asap Color', ms: 'Asap Color' },
    price: 8,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198962/fireworks_400x400/fireworks_400x400/resized_framed_product_20_Asap_Color.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753076934/HunterBoom/cm3flwhbe000a0ckw4pm768ja_rewkth.mp4',
    category: 'traditional',
    section: 'SPARKLE & SHINE - KIDS\" FAVORITE FIREWORKS!'
  },
  {
    id: 922,
    name: { en: 'Asap', ms: 'Asap' },
    price: 8,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198948/fireworks_400x400/fireworks_400x400/resized_framed_product_21_Asap.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753076946/HunterBoom/cm3fm4uk200070cl9aimr6np8_pu9rlo.mp4',
    category: 'traditional',
    section: 'SPARKLE & SHINE - KIDS\" FAVORITE FIREWORKS!'
  },
  {
    id: 923,
    name: { en: 'Sunset 4 Color', ms: 'Sunset 4 Color' },
    price: 25,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198930/fireworks_400x400/fireworks_400x400/resized_framed_product_22_Sunset_4_Color.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753076956/HunterBoom/cm3fm751x00030cjv1jticujs_hcsqvb.mp4',
    category: 'traditional',
    section: 'SPARKLE & SHINE - KIDS\" FAVORITE FIREWORKS!'
  },
  {
    id: 924,
    name: { en: 'C018 7 Inch Besi 7', ms: 'C018 7 Inch Besi 7' },
    price: 35,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198893/fireworks_400x400/fireworks_400x400/resized_framed_product_23_C_018_7_Inch_Besi_7.jpg',
    videoUrl: '',
    category: 'traditional',
    section: 'SPARKLE & SHINE - KIDS\" FAVORITE FIREWORKS!'
  },
  {
    id: 925,
    name: { en: '14 Inch Besi 14', ms: '14 Inch Besi 14' },
    price: 90,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198993/fireworks_400x400/fireworks_400x400/resized_framed_product_24_14_Inch_Besi_14.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753076966/HunterBoom/cm3fmggy000050cl2g5esh2a4_fzrrwr.mp4',
    category: 'traditional',
    section: 'SPARKLE & SHINE - KIDS\" FAVORITE FIREWORKS!'
  },
  {
    id: 926,
    name: { en: '18 Inch Besi 18', ms: '18 Inch Besi 18' },
    price: 120,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198967/fireworks_400x400/fireworks_400x400/resized_framed_product_25_18_Inch_Besi_18.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753076978/HunterBoom/cm3fmin2800060cl27xtic2ae_rhxy2g.mp4',
    category: 'traditional',
    section: 'SPARKLE & SHINE - KIDS\" FAVORITE FIREWORKS!'
  },
  {
    id: 927,
    name: { en: 'Magic Stick (1 Minute)', ms: 'Magic Stick (1 Minute)' },
    price: 10,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199007/fireworks_400x400/fireworks_400x400/resized_framed_Magic_Stick_1_Minute.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753076989/HunterBoom/cm3fnyuab00000ckyfbrt8wvf_cvsdwm.mp4',
    category: 'traditional',
    section: 'SPARKLE & SHINE - KIDS\" FAVORITE FIREWORKS!'
  },
  {
    id: 928,
    name: { en: '15 Kali Magic 15', ms: '15 Kali Magic 15' },
    price: 15,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198975/fireworks_400x400/fireworks_400x400/resized_framed_product_27_15_Kali_Magic_15.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753076999/HunterBoom/cm3fo80ko00000cjhdgg929tm_nqqsui.mp4',
    category: 'traditional',
    section: 'SPARKLE & SHINE - KIDS\" FAVORITE FIREWORKS!'
  },
  {
    id: 929,
    name: { en: '20 Kali Magic 20', ms: '20 Kali Magic 20' },
    price: 20,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199043/fireworks_400x400/fireworks_400x400/resized_framed_product_28_20_Kali_Magic_20.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077010/HunterBoom/cm3foao1000010cl2dwks4ja7_ndcb6a.mp4',
    category: 'traditional',
    section: 'SPARKLE & SHINE - KIDS\" FAVORITE FIREWORKS!'
  },
  {
    id: 930,
    name: { en: '30 Kali Magic 30', ms: '30 Kali Magic 30' },
    price: 30,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199051/fireworks_400x400/fireworks_400x400/resized_framed_product_29_30_Kali_Magic_30.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077020/HunterBoom/cm3fobsv5000d0cmd1g4p6uer_rx8d89.mp4',
    category: 'traditional',
    section: 'SPARKLE & SHINE - KIDS\" FAVORITE FIREWORKS!'
  },
  {
    id: 931,
    name: { en: '10 Kali Pili Rain 10', ms: '10 Kali Pili Rain 10' },
    price: 20,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198952/fireworks_400x400/fireworks_400x400/resized_framed_product_30_10_Kali_Pili_Rain_10.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077031/HunterBoom/cm3foin1h000j0cmddfdtaa4z_dlvbtx.mp4',
    category: 'traditional',
    section: 'KIDS\" FIRECRACKERS'
  },
  {
    id: 932,
    name: { en: '388 Shot Machine Gun 388', ms: '388 Shot Machine Gun 388' },
    price: 35,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198882/fireworks_400x400/fireworks_400x400/resized_framed_388_Shot_Machine_Gun_388.jpg',
    videoUrl: '',
    category: 'traditional',
    section: 'KIDS\" FIRECRACKERS'
  },
  {
    id: 933,
    name: { en: '888 Shot Machine Gun', ms: '888 Shot Machine Gun' },
    price: 60,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198969/fireworks_400x400/fireworks_400x400/resized_framed_product_32_888_Shot_Machine_Gun_888.jpg',
    videoUrl: '',
    category: 'traditional',
    section: 'KIDS\" FIRECRACKERS'
  },
  {
    id: 934,
    name: { en: '688 Shot Machine Gun 688', ms: '688 Shot Machine Gun 688' },
    price: 80,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198895/fireworks_400x400/fireworks_400x400/resized_framed_688_Shot_Machine_Gun_688.jpg',
    videoUrl: '',
    category: 'traditional',
    section: 'KIDS\" FIRECRACKERS'
  },
  {
    id: 935,
    name: { en: 'Blue Ocean Machine Gun', ms: 'Blue Ocean Machine Gun' },
    price: 90,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199025/fireworks_400x400/fireworks_400x400/resized_framed_product_34_Blue_Ocean_Machine_Gun.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077041/HunterBoom/cm4nyh3v8000c0cjj37ic01jv_dhcjl2.mp4',
    category: 'traditional',
    section: 'KIDS\" FIRECRACKERS'
  },
  {
    id: 936,
    name: { en: 'Mancis', ms: 'Mancis' },
    price: 25,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198921/fireworks_400x400/fireworks_400x400/resized_framed_product_35_Mancis.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077051/HunterBoom/cm3h1c4ni00020cjq1xzo6888_mg9lzx.mp4',
    category: 'traditional',
    section: 'KIDS\" FIRECRACKERS'
  },
  {
    id: 937,
    name: { en: 'Gasing', ms: 'Gasing' },
    price: 25,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198999/fireworks_400x400/fireworks_400x400/resized_framed_Gasing.jpg',
    videoUrl: 'https://storage.googleapis.com/takeapp/media/cm3h504ye00000cky15mu1caf.mp4',
    category: 'traditional',
    section: 'KIDS\" FIRECRACKERS'
  },
  {
    id: 938,
    name: { en: 'Lotus', ms: 'Lotus' },
    price: 25,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198903/fireworks_400x400/fireworks_400x400/resized_framed_product_37_Lotus.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077072/HunterBoom/cm3h53ace00020cmi1mn98djd_udrjjb.mp4',
    category: 'traditional',
    section: 'KIDS\" FIRECRACKERS'
  },
  {
    id: 939,
    name: { en: 'Pop Pop', ms: 'Pop Pop' },
    price: 25,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199087/fireworks_400x400/fireworks_400x400/resized_framed_product_38_Pop_Pop.jpg',
    videoUrl: '',
    category: 'traditional',
    section: 'KIDS\" FIRECRACKERS'
  },
  {
    id: 940,
    name: { en: 'Pop Pop Besar', ms: 'Pop Pop Besar' },
    price: 35,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198878/fireworks_400x400/fireworks_400x400/resized_framed_product_39_Pop_Pop_Besar.jpg',
    videoUrl: '',
    category: 'traditional',
    section: 'KIDS\" FIRECRACKERS'
  },
  {
    id: 941,
    name: { en: 'Cili Padi', ms: 'Cili Padi' },
    price: 5,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198995/fireworks_400x400/fireworks_400x400/resized_framed_product_40_Cili_Padi.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077082/HunterBoom/cm3h5i48h00020cl21q1c1hj3_tvjbrd.mp4',
    category: 'traditional',
    section: 'KIDS\" FIRECRACKERS'
  },
  {
    id: 942,
    name: { en: 'Dragon Egg', ms: 'Dragon Egg' },
    price: 15,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198971/fireworks_400x400/fireworks_400x400/resized_framed_product_41_Dragon_Egg.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077094/HunterBoom/cm3h5l1ha00040cid2pkh5fg2_b8fvwl.mp4',
    category: 'traditional',
    section: 'KIDS\" FIRECRACKERS'
  },
  {
    id: 943,
    name: { en: 'Dragon Egg Besar', ms: 'Dragon Egg Besar' },
    price: 25,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199022/fireworks_400x400/fireworks_400x400/resized_framed_product_42_Dragon_Egg_Besar.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077105/HunterBoom/cm3h5mitf00030ci89ilr128t_spn6ne.mp4',
    category: 'traditional',
    section: 'KIDS\" FIRECRACKERS'
  },
  {
    id: 944,
    name: { en: 'Naga 3 Minute', ms: 'Naga 3 Minute' },
    price: 20,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199049/fireworks_400x400/fireworks_400x400/resized_framed_product_43_Naga_3_Minute.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077116/HunterBoom/cm3h61r5g00000cl5glngbzr5_qccqp9.mp4',
    category: 'traditional',
    section: 'KIDS\" FIRECRACKERS'
  },
  {
    id: 945,
    name: { en: 'Naga 3 Minute Besar', ms: 'Naga 3 Minute Besar' },
    price: 30,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198884/fireworks_400x400/fireworks_400x400/resized_framed_product_44_Naga_3_Minute_Besar.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077126/HunterBoom/cm3h6944d00010cl9amkl4vj5_lmvyz7.mp4',
    category: 'traditional',
    section: 'KIDS\" FIRECRACKERS'
  },
  {
    id: 946,
    name: { en: 'Mancis Pop Pop', ms: 'Mancis Pop Pop' },
    price: 40,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199033/fireworks_400x400/fireworks_400x400/resized_framed_product_45_Mancis_Pop_Pop.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077136/HunterBoom/cm4jh480a00090cl86kxk4e08_ddqqdp.mp4',
    category: 'traditional',
    section: 'KIDS\" FIRECRACKERS'
  },
  {
    id: 947,
    name: { en: 'Thunder Clap', ms: 'Thunder Clap' },
    price: 45,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198906/fireworks_400x400/fireworks_400x400/resized_framed_product_46_Thunder_Clap.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077151/HunterBoom/cm3h762d800010cmb8vpi0nz1_pcf2fz.mp4',
    category: 'traditional',
    section: 'KIDS\" FIRECRACKERS'
  },
  {
    id: 948,
    name: { en: 'Thunder Clap Besar', ms: 'Thunder Clap Besar' },
    price: 55,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198917/fireworks_400x400/fireworks_400x400/resized_framed_product_47_Thunder_Clap_Besar.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077161/HunterBoom/cm3h7a2v200010cl4bh3jbbyu_k6ikmj.mp4',
    category: 'traditional',
    section: 'KIDS\" FIRECRACKERS'
  },
  {
    id: 950,
    name: { en: 'Moon Travel', ms: 'Moon Travel' },
    price: 25,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199071/fireworks_400x400/fireworks_400x400/resized_framed_product_49_Moon_Travel.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077183/HunterBoom/cm3h84sp300070cl9h4oie88d_ezcal8.mp4',
    category: 'traditional',
    section: 'ROCKET SKY SHOW'
  },
  {
    id: 951,
    name: { en: 'Jet Flighter', ms: 'Jet Flighter' },
    price: 25,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199102/fireworks_400x400/fireworks_400x400/resized_framed_product_50_Jet_Flighter.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077193/HunterBoom/cm3h899ws00010cjs8ewv7uer_us6uda.mp4',
    category: 'traditional',
    section: 'ROCKET SKY SHOW'
  },
  {
    id: 952,
    name: { en: 'Big Butterfly', ms: 'Big Butterfly' },
    price: 35,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199041/fireworks_400x400/fireworks_400x400/resized_framed_product_51_Big_Butterfly.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077203/HunterBoom/cm3h8b4p200060cl6ccz27jkc_jdfrqz.mp4',
    category: 'traditional',
    section: 'ROCKET SKY SHOW'
  },
  {
    id: 953,
    name: { en: '50 Shot Tikus 50', ms: '50 Shot Tikus 50' },
    price: 25,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199017/fireworks_400x400/fireworks_400x400/resized_framed_product_52_50_Shot_Tikus_50.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077213/HunterBoom/cm3h8dbwc00050cl4ez6v0k0n_kzjh8b.mp4',
    category: 'traditional',
    section: 'KIDS\" FIRECRACKERS'
  },
  {
    id: 954,
    name: { en: '100 Shot Tikus 100', ms: '100 Shot Tikus 100' },
    price: 35,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198912/fireworks_400x400/fireworks_400x400/resized_framed_product_53_100_Shot_Tikus_100.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077224/HunterBoom/cm3h8efm200070cjrbdj7aygl_jpm9tn.mp4',
    category: 'traditional',
    section: 'KIDS\" FIRECRACKERS'
  },
  {
    id: 955,
    name: { en: '100 Shoot Flying Dragon 100', ms: '100 Shoot Flying Dragon 100' },
    price: 25,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199035/fireworks_400x400/fireworks_400x400/resized_framed_product_54_100_Shoot_Flying_Dragon_100.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077235/HunterBoom/cm3h8pi2e000a0cl95egh7b6x_u4cwcs.mp4',
    category: 'traditional',
    section: 'MERDEKA FIREWORKS'
  },
  {
    id: 956,
    name: { en: 'Jelly Fish LINK', ms: 'Jelly Fish (LINK)' },
    price: 25,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198886/fireworks_400x400/fireworks_400x400/resized_framed_product_55_Jelly_Fish_28LINK29.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077247/HunterBoom/cm3h9lci500050cl00a4f0lo5_c88xv6.mp4',
    category: 'traditional',
    section: 'KIDS\" FIRECRACKERS'
  },
  {
    id: 957,
    name: { en: 'Jelly Fish SINGLE', ms: 'Jelly Fish (SINGLE)' },
    price: 25,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198997/fireworks_400x400/fireworks_400x400/resized_framed_product_56_Jelly_Fish_28SINGLE29.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077256/HunterBoom/cm3h9h3d100000cl86cku7v81_kiqkl0.mp4',
    category: 'traditional',
    section: 'KIDS\" FIRECRACKERS'
  },
  {
    id: 958,
    name: { en: 'Romantic Fountain Fountain V Fireworks', ms: 'Romantic Fountain (Fountain V Fireworks)' },
    price: 70,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198910/fireworks_400x400/fireworks_400x400/resized_framed_product_57_Romantic_Fountain_Fountain_V_.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077268/HunterBoom/cm3r0ujr500030cmjew7xet44_hzxgmd.mp4',
    category: 'traditional',
    section: 'FOUNTAIN BLAST'
  },
  {
    id: 959,
    name: { en: 'Volcano Fireworks Fountain V Fireworks', ms: 'Volcano Fireworks (Fountain V Fireworks)' },
    price: 50,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199115/fireworks_400x400/fireworks_400x400/resized_framed_product_58_Volcano_Fireworks_Fountain_V_.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077279/HunterBoom/cm3r1vdh100080cl82g9w37lb_elesoe.mp4',
    category: 'traditional',
    section: 'FOUNTAIN BLAST'
  },
  {
    id: 960,
    name: { en: 'Super Flash Rocket', ms: 'Super Flash Rocket' },
    price: 55,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198989/fireworks_400x400/fireworks_400x400/resized_framed_Super_Flash_Rocket.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077290/HunterBoom/cm5c2q9uj000803l7h1nt59uk_dvl6n9.mp4',
    category: 'traditional',
    section: 'ROCKET SKY SHOW'
  },
  {
    id: 961,
    name: { en: 'Explosive Gold Rocket', ms: 'Explosive Gold Rocket' },
    price: 75,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199037/fireworks_400x400/fireworks_400x400/resized_framed_product_60_Explosive_Gold_Rocket.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077299/HunterBoom/cm5xf09kq000f03l8g60yfqdf_t9camd.mp4',
    category: 'traditional',
    section: 'ROCKET SKY SHOW'
  },
  {
    id: 962,
    name: { en: 'Smoke 5 Color', ms: 'Smoke 5 Color' },
    price: 25,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198992/fireworks_400x400/fireworks_400x400/resized_framed_product_61_Smoke_5_Color.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077311/HunterBoom/cm3fou62o00030cl1fjz21a29_e6fbfx.mp4',
    category: 'traditional',
    section: 'FOUNTAIN BLAST'
  },
  {
    id: 963,
    name: { en: 'Pokok Raya Fa Cai Shu', ms: 'Pokok Raya (Fa Cai Shu)' },
    price: 20,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198963/fireworks_400x400/fireworks_400x400/resized_framed_product_62_Pokok_Raya_Fa_Cai_Shu.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077321/HunterBoom/cm3fpqma9000f0cl22cvnguto_fskowx.mp4',
    category: 'traditional',
    section: 'FOUNTAIN BLAST'
  },
  {
    id: 964,
    name: { en: 'Pokok Raya Besar Big Fa Cai Shu', ms: 'Pokok Raya Besar (Big Fa Cai Shu)' },
    price: 35,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199009/fireworks_400x400/fireworks_400x400/resized_framed_product_63_Pokok_Raya_Besar_Big_Fa_Cai_S.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077333/HunterBoom/cm5cjtbon000403k12i40hb2m_tzhznb.mp4',
    category: 'traditional',
    section: 'FOUNTAIN BLAST'
  },
  {
    id: 965,
    name: { en: 'Mini Ice Cream', ms: 'Mini Ice Cream' },
    price: 25,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199099/fireworks_400x400/fireworks_400x400/resized_framed_product_64_Mini_Ice_Cream.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077342/HunterBoom/cm3fq24zv00060cig5djn3muq_arpgns.mp4',
    category: 'traditional',
    section: 'FOUNTAIN BLAST'
  },
  {
    id: 966,
    name: { en: 'C026 7 Ice Cream 7', ms: 'C026 7 Ice Cream 7' },
    price: 50,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198987/fireworks_400x400/fireworks_400x400/resized_framed_product_65_C_026_7_Ice_Cream_7.jpg',
    videoUrl: '',
    category: 'traditional',
    section: 'FOUNTAIN BLAST'
  },
  {
    id: 967,
    name: { en: '15 Ice Cream 15', ms: '15 Ice Cream 15' },
    price: 150,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198932/fireworks_400x400/fireworks_400x400/resized_framed_product_66_15_Ice_Cream_15.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077354/HunterBoom/cm3fqtqw800010cl16gec78r2_bbrxru.mp4',
    category: 'traditional',
    section: 'FOUNTAIN BLAST'
  },
  {
    id: 968,
    name: { en: 'Peacock TIGA', ms: 'Peacock (TIGA)' },
    price: 30,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199111/fireworks_400x400/fireworks_400x400/resized_framed_product_67_Peacock_28TIGA29.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077363/HunterBoom/cm3fqzobs00000cmh9wgh0cmd_ailyot.mp4',
    category: 'traditional',
    section: 'FOUNTAIN BLAST'
  },
  {
    id: 969,
    name: { en: 'Peacock LIMA', ms: 'Peacock (LIMA)' },
    price: 40,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198934/fireworks_400x400/fireworks_400x400/resized_framed_product_68_Peacock_28LIMA29.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077373/HunterBoom/cm3fr2ch100000cl7bcm5d512_gdhcvp.mp4',
    category: 'traditional',
    section: 'FOUNTAIN BLAST'
  },
  {
    id: 970,
    name: { en: 'Tiga Segi Fountain', ms: 'Tiga Segi Fountain' },
    price: 30,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199106/fireworks_400x400/fireworks_400x400/resized_framed_product_69_Tiga_Segi_Fountain.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077385/HunterBoom/cm3fsdlf900000cjt8l45gux4_qehixs.mp4',
    category: 'traditional',
    section: 'FOUNTAIN BLAST'
  },
  {
    id: 971,
    name: { en: 'Tiga Segi Fountain Besar', ms: 'Tiga Segi Fountain Besar' },
    price: 85,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198956/fireworks_400x400/fireworks_400x400/resized_framed_product_70_Tiga_Segi_Fountain_Besar.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077394/HunterBoom/cm4jiqbre00020cmaculigfcc_tir4jp.mp4',
    category: 'traditional',
    section: 'FOUNTAIN BLAST'
  },
  {
    id: 972,
    name: { en: '12 Patten 160 Saat Fountain', ms: '12 Patten 160 Saat Fountain' },
    price: 80,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199083/fireworks_400x400/fireworks_400x400/resized_framed_12_Patten_160_Saat_Fountain.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077404/HunterBoom/cm3fsxxwv00030clc0z503ddc_uokg9s.mp4',
    category: 'traditional',
    section: 'FOUNTAIN BLAST'
  },
  {
    id: 973,
    name: { en: 'Colorful Fountain Box (210 Saat)', ms: 'Colorful Fountain Box (210 Saat)' },
    price: 120,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198891/fireworks_400x400/fireworks_400x400/resized_framed_product_72_Colorful_Fountain_Box_210_Saa.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077415/HunterBoom/cm3mn2l4b00050cled2iye3sr_wjtw7z.mp4',
    category: 'traditional',
    section: 'FOUNTAIN BLAST'
  },
  {
    id: 974,
    name: { en: 'Gasing Fountain', ms: 'Gasing Fountain' },
    price: 50,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199097/fireworks_400x400/fireworks_400x400/resized_framed_product_73_Gasing_Fountain.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077426/HunterBoom/cm3ftn73h00000cjnfviaf7ku_a8gi9n.mp4',
    category: 'traditional',
    section: 'FOUNTAIN BLAST'
  },
  {
    id: 975,
    name: { en: 'Surprise Fountain', ms: 'Surprise Fountain' },
    price: 70,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199020/fireworks_400x400/fireworks_400x400/resized_framed_product_74_Surprise_Fountain.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077435/HunterBoom/cm3m79p9j000r0cmh5jfe2vzm_o76vzf.mp4',
    category: 'traditional',
    section: 'FOUNTAIN BLAST'
  },
  {
    id: 976,
    name: { en: 'Happy Go Lucky', ms: 'Happy Go Lucky' },
    price: 70,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198899/fireworks_400x400/fireworks_400x400/resized_framed_product_75_Happy_Go_Lucky.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077446/HunterBoom/cm4jiap5w00020cl79c888fe1_fpw885.mp4',
    category: 'traditional',
    section: 'FOUNTAIN BLAST'
  },
  {
    id: 977,
    name: { en: 'Golden Harmony', ms: 'Golden Harmony' },
    price: 70,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198928/fireworks_400x400/fireworks_400x400/resized_framed_product_76_Golden_Harmony.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077458/HunterBoom/cm5ci9aze000103jtdwub6akf_ybrcs8.mp4',
    category: 'traditional',
    section: 'FOUNTAIN BLAST'
  },
  {
    id: 978,
    name: { en: 'Taycan Sparkle', ms: 'Taycan Sparkle' },
    price: 70,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198960/fireworks_400x400/fireworks_400x400/resized_framed_product_77_Taycan_Sparkle.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077471/HunterBoom/cm3r0q9o500010cm7f1pu2au0_hnpfw9.mp4',
    category: 'traditional',
    section: 'FOUNTAIN BLAST'
  },
  {
    id: 979,
    name: { en: 'Water Fall Sunset', ms: 'Water Fall Sunset' },
    price: 50,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199062/fireworks_400x400/fireworks_400x400/resized_framed_product_78_Water_Fall_Sunset.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077482/HunterBoom/cm4jgwftl00020ckwe3z558ku_rw2wk2.mp4',
    category: 'traditional',
    section: 'SPARKLE & SHINE - KIDS\" FAVORITE FIREWORKS!'
  },
  {
    id: 980,
    name: { en: 'Dragon Wand', ms: 'Dragon Wand' },
    price: 30,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199093/fireworks_400x400/fireworks_400x400/resized_framed_product_79_Dragon_Wand.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077493/HunterBoom/cm4jgxxi000090ckxc1j497wx_w51ocw.mp4',
    category: 'traditional',
    section: 'FOUNTAIN BLAST'
  },
  {
    id: 981,
    name: { en: 'Kipas Fountain', ms: 'Kipas Fountain' },
    price: 60,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199001/fireworks_400x400/fireworks_400x400/resized_framed_product_80_Kipas_Fountain.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077503/HunterBoom/cm4jfx1d600000cl7487jh9o3_yozqmj.mp4',
    category: 'traditional',
    section: 'FOUNTAIN BLAST'
  },
  {
    id: 982,
    name: { en: 'Magic Fountain', ms: 'Magic Fountain' },
    price: 60,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198980/fireworks_400x400/fireworks_400x400/resized_framed_product_81_Magic_Fountain.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077515/HunterBoom/cm4jgx1ub00020cmkeq874t8v_rpmvpp.mp4',
    category: 'traditional',
    section: 'SPARKLE & SHINE - KIDS\" FAVORITE FIREWORKS!'
  },
  {
    id: 983,
    name: { en: 'Thunder King', ms: 'Thunder King' },
    price: 15,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198973/fireworks_400x400/fireworks_400x400/resized_framed_product_82_Thunder_King.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077526/HunterBoom/cm3h9pkw600010claepry79lh_vunny5.mp4',
    category: 'traditional',
    section: 'ONE SHOT, BIG BLAST!'
  },
  {
    id: 984,
    name: { en: 'Banana Kecil (0.8)', ms: 'Banana Kecil' },
    price: 25,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198901/fireworks_400x400/fireworks_400x400/resized_framed_product_83_Banana_Kecil_280.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077535/HunterBoom/cm3hci5r800020cjvenpn6bgx_ldzcog.mp4',
    category: 'traditional',
    section: 'ONE SHOT, BIG BLAST!'
  },
  {
    id: 985,
    name: { en: 'Banana Besar (1.2) (1.2)', ms: 'Banana Besar (1.2)' },
    price: 45,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199063/fireworks_400x400/fireworks_400x400/resized_framed_product_84_Banana_Besar_281.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077545/HunterBoom/cm3hcly4100000clee9ix79ap_noe5jk.mp4',
    category: 'traditional',
    section: 'ONE SHOT, BIG BLAST!'
  },
  {
    id: 986,
    name: { en: 'Double Shoot Banana Besar (1.75) 1.75', ms: 'Double Shoot Banana Besar (1.75)' },
    price: 55,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199108/fireworks_400x400/fireworks_400x400/resized_framed_product_85_Double_Shoot_Banana_Besar_281.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077556/HunterBoom/cm3hcptvc00030cjwacdy2wid_ize2rw.mp4',
    category: 'traditional',
    section: 'MERDEKA FIREWORKS'
  },
  {
    id: 987,
    name: { en: 'Dragon Ball (1.75) 1.75', ms: 'Dragon Ball (1.75) 1.75' },
    price: 50,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198914/fireworks_400x400/fireworks_400x400/resized_framed_product_86_Dragon_Ball_281.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077567/HunterBoom/cm3r0mzzo000h0cjpcs6sgax5_ox6hqc.mp4',
    category: 'traditional',
    section: 'ONE SHOT, BIG BLAST!'
  },
  {
    id: 988,
    name: { en: '8 Shoot Roma Candle 0.8', ms: '8 Shoot Roma Candle (0.8)' },
    price: 45,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199013/fireworks_400x400/fireworks_400x400/resized_framed_product_87_8_Shoot_Roma_Candle_280.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077577/HunterBoom/cm3hcscy400070cle9y0fc0qv_n2ni5r.mp4',
    category: 'traditional',
    section: 'MERDEKA FIREWORKS'
  },
  {
    id: 989,
    name: { en: '4 25 Shoot Cake 4', ms: '4 25 Shoot Cake 4' },
    price: 35,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199046/fireworks_400x400/fireworks_400x400/resized_framed_product_88_4_25_Shoot_Cake_4_25.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077588/HunterBoom/cm4shf52l000703mteyab9izo_tpvhu7.mp4',
    category: 'traditional',
    section: 'MERDEKA FIREWORKS'
  },
  {
    id: 990,
    name: { en: '4 36 Shoot Cake 4', ms: '4 36 Shoot Cake 4' },
    price: 45,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198942/fireworks_400x400/fireworks_400x400/resized_framed_product_89_4_36_Shoot_Cake_4_36.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077598/HunterBoom/cm4shhj0r000003mdfbe23njd_ukabrl.mp4',
    category: 'traditional',
    section: 'MERDEKA FIREWORKS'
  },
  {
    id: 991,
    name: { en: '4 49 Shoot Cake (ABCD) 4', ms: '4 49 Shoot Cake (ABCD) 4' },
    price: 55,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198982/fireworks_400x400/fireworks_400x400/resized_framed_product_90_4_49_Shoot_Cake_28ABCD29_4_49.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077608/HunterBoom/cm4shhzku000903mt4o59h96b_es7x0u.mp4',
    category: 'traditional',
    section: 'MERDEKA FIREWORKS'
  },
  {
    id: 992,
    name: { en: 'Special Fireworks #92', ms: 'Special Fireworks #92' },
    price: 50,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198882/fireworks_400x400/fireworks_400x400/resized_framed_388_Shot_Machine_Gun_388.jpg',
    videoUrl: 'https://storage.googleapis.com/takeapp/media/cm4shk2s0000g03ju9jme3n1g.mp4',
    category: 'traditional',
    section: 'FOUNTAIN BLAST'
  },
  {
    id: 993,
    name: { en: '4138 Shoot Cake', ms: '4138 Shoot Cake' },
    price: 130,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199054/fireworks_400x400/fireworks_400x400/resized_framed_product_92_4138_Shoot_Cake.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077630/HunterBoom/cm4jy49dl00120cky70snaevx_esxtka.mp4',
    category: 'traditional',
    section: 'MERDEKA FIREWORKS'
  },
  {
    id: 994,
    name: { en: '5138 Shoot Cake (Single Abcd) 5', ms: '5138 Shoot Cake (Single Abcd) 5' },
    price: 250,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199079/fireworks_400x400/fireworks_400x400/resized_framed_5138_Shoot_Cake_Single_Abcd_5.jpg',
    videoUrl: 'https://storage.googleapis.com/takeapp/media/cm4shko51000i03ju5o9q795y.mp4',
    category: 'traditional',
    section: 'MERDEKA FIREWORKS'
  },
  {
    id: 995,
    name: { en: '5414 Shoot Cake (ABC) (Straight V Shape) Bb51', ms: '5414 Shoot Cake (ABC) (Straight V Shape) Bb51' },
    price: 650,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198989/fireworks_400x400/fireworks_400x400/resized_framed_Super_Flash_Rocket.jpg',
    videoUrl: 'https://storage.googleapis.com/takeapp/media/cm4ii2fc9000c0cjsdadg2xrk.mp4',
    category: 'traditional',
    section: 'MERDEKA FIREWORKS'
  },
  {
    id: 997,
    name: { en: '5138 Shoot Cake (ABC) (V Shape) Bb5138 C', ms: '5138 Shoot Cake (ABC) (V Shape) Bb5138 C' },
    price: 650,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199039/fireworks_400x400/fireworks_400x400/resized_framed_5138_Shoot_Cake_ABC_V_Shape_Bb5138_C.jpg',
    videoUrl: 'https://storage.googleapis.com/takeapp/media/cm4ii591600000ci33jtohs4d.mp4',
    category: 'traditional',
    section: 'MERDEKA FIREWORKS'
  },
  {
    id: 998,
    name: { en: '5138 Shoot Cake (ABC) (V Shape) Bb5138 D', ms: '5138 Shoot Cake (ABC) (V Shape) Bb5138 D' },
    price: 650,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198983/fireworks_400x400/fireworks_400x400/resized_framed_5138_Shoot_Cake_ABC_V_Shape_Bb5138_D.jpg',
    videoUrl: 'https://storage.googleapis.com/takeapp/media/cm4ii5qox00000cjx6adr5uf7.mp4',
    category: 'traditional',
    section: 'MERDEKA FIREWORKS'
  },
  {
    id: 999,
    name: { en: '5414 Shoot Cake Thor (V Shape) 5414', ms: '5414 Shoot Cake Thor (V Shape) 5414' },
    price: 750,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199101/fireworks_400x400/fireworks_400x400/resized_framed_5414_Shoot_Cake_Thor_V_Shape_5414.jpg',
    videoUrl: 'https://storage.googleapis.com/takeapp/media/cm3m7ak5r000g0ckwaav6fnq0.mp4',
    category: 'traditional',
    section: 'MERDEKA FIREWORKS'
  },
  {
    id: 1000,
    name: { en: '5414 Shoot Cake Thanos (V Shape) 5414', ms: '5414 Shoot Cake Thanos (V Shape) 5414' },
    price: 750,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198936/fireworks_400x400/fireworks_400x400/resized_framed_5414_Shoot_Cake_Thanos_V_Shape_5414.jpg',
    videoUrl: 'https://storage.googleapis.com/takeapp/media/cm3m7a56r000g0cmgc2qa7l1w.mp4',
    category: 'traditional',
    section: 'MERDEKA FIREWORKS'
  },
  {
    id: 1001,
    name: { en: '5414 Shoot Cake Rule The Universe 5414', ms: '5414 Shoot Cake Rule The Universe 5414' },
    price: 750,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198950/fireworks_400x400/fireworks_400x400/resized_framed_5414_Shoot_Cake_Rule_The_Universe_5414.jpg',
    videoUrl: '',
    category: 'traditional',
    section: 'MERDEKA FIREWORKS'
  },
  {
    id: 1002,
    name: { en: '5552 Shoot Cake Four Symbols Mini (V Shape) 5', ms: '5552 Shoot Cake Four Symbols Mini (V Shape) 5' },
    price: 950,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198897/fireworks_400x400/fireworks_400x400/resized_framed_5552_Shoot_Cake_Four_Symbols_Mini_V_Shape_5.jpg',
    videoUrl: '',
    category: 'traditional',
    section: 'MERDEKA FIREWORKS'
  },
  {
    id: 1003,
    name: { en: '5552 Shoot Cake Xiong He Xin Xi (Straight V S', ms: '5552 Shoot Cake Xiong He Xin Xi (Straight V S' },
    price: 950,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199011/fireworks_400x400/fireworks_400x400/resized_framed_5552_Shoot_Cake_Xiong_He_Xin_Xi_Straight_V_S.jpg',
    videoUrl: 'https://storage.googleapis.com/takeapp/media/cm4queryp000403mkeyk73q6o.mp4',
    category: 'traditional',
    section: 'MERDEKA FIREWORKS'
  },
  {
    id: 1004,
    name: { en: '5552 Shoot Cake Fu Shou An Kang (V Shape) 555', ms: '5552 Shoot Cake Fu Shou An Kang (V Shape) 555' },
    price: 950,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198940/fireworks_400x400/fireworks_400x400/resized_framed_5552_Shoot_Cake_Fu_Shou_An_Kang_V_Shape_555.jpg',
    videoUrl: '',
    category: 'traditional',
    section: 'MERDEKA FIREWORKS'
  },
  {
    id: 1005,
    name: { en: '8138 Shoot Cake', ms: '8138 Shoot Cake' },
    price: 450,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199068/fireworks_400x400/fireworks_400x400/resized_framed_product_104_8138_Shoot_Cake.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077728/HunterBoom/cm4jivsef00010cl21ztbbh6b_g6udgn.mp4',
    category: 'traditional',
    section: 'MERDEKA FIREWORKS'
  },
  {
    id: 1006,
    name: { en: '7276 Shoot Milan Night (Straight V Shape) 727', ms: '7276 Shoot Milan Night (Straight V Shape) 727' },
    price: 900,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199055/fireworks_400x400/fireworks_400x400/resized_framed_7276_Shoot_Milan_Night_Straight_V_Shape_727.jpg',
    videoUrl: 'https://storage.googleapis.com/takeapp/media/cm5dl1fcx000303jgai1h7hgw.mp4',
    category: 'traditional',
    section: 'MERDEKA FIREWORKS'
  },
  {
    id: 1007,
    name: { en: '6414 Shoot Cake I Am The Only One (V Shape) 6', ms: '6414 Shoot Cake I Am The Only One (V Shape) 6' },
    price: 900,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199065/fireworks_400x400/fireworks_400x400/resized_framed_6414_Shoot_Cake_I_Am_The_Only_One_V_Shape_6.jpg',
    videoUrl: 'https://storage.googleapis.com/takeapp/media/cm3r0gjys00000djkaama012h.mp4',
    category: 'traditional',
    section: 'MERDEKA FIREWORKS'
  },
  {
    id: 1008,
    name: { en: '9138 Shoot Cake', ms: '9138 Shoot Cake' },
    price: 450,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199016/fireworks_400x400/fireworks_400x400/resized_framed_product_117_9138_Shoot_Cake.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077868/HunterBoom/cm598lsfi000003l55pwdcx4b_j0398m.mp4',
    category: 'traditional',
    section: 'MERDEKA FIREWORKS'
  },
  {
    id: 1009,
    name: { en: '8036 Shoot Sound King 836', ms: '8036 Shoot Sound King 836' },
    price: 150,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199005/fireworks_400x400/fireworks_400x400/resized_framed_8036_Shoot_Sound_King_836.jpg',
    videoUrl: 'https://storage.googleapis.com/takeapp/media/cm4qrpog900010cl08qqi6byz.mp4',
    category: 'traditional',
    section: 'MERDEKA FIREWORKS'
  },
  {
    id: 1010,
    name: { en: '9138 Shoot Cake Fu Lu Shou (Straight V Shape', ms: '9138 Shoot Cake Fu Lu Shou (Straight V Shape' },
    price: 650,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198944/fireworks_400x400/fireworks_400x400/resized_framed_9138_Shoot_Cake_Fu_Lu_Shou_Straight_V_Shape.jpg',
    videoUrl: 'https://storage.googleapis.com/takeapp/media/cm4kyn2zf00000cl6evyfasc7.mp4',
    category: 'traditional',
    section: 'MERDEKA FIREWORKS'
  },
  {
    id: 1011,
    name: { en: '9414 Shoot Cake Fu Lu Shou Straight V Shape 9414', ms: '9414 Shoot Cake Fu Lu Shou (Straight V Shape)' },
    price: 1100,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198908/fireworks_400x400/fireworks_400x400/resized_framed_9414_Shoot_Cake_Fu_Lu_Shou_Straight_V_Shape_9414.jpg',
    videoUrl: 'https://storage.googleapis.com/takeapp/media/cm4kynjnt00050cjo9a2xc10a.mp4',
    category: 'traditional',
    section: 'MERDEKA FIREWORKS'
  },
  {
    id: 1012,
    name: { en: '9138 Shoot Cake God For Wealth (Straight V S', ms: '9138 Shoot Cake God For Wealth (Straight V S' },
    price: 650,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198985/fireworks_400x400/fireworks_400x400/resized_framed_9138_Shoot_Cake_God_For_Wealth_Straight_V_S.jpg',
    videoUrl: 'https://storage.googleapis.com/takeapp/media/cm4krsuma00000cl42y8x7x95.mp4',
    category: 'traditional',
    section: 'MERDEKA FIREWORKS'
  },
  {
    id: 1013,
    name: { en: '9552 Shoot Cake God For Wealth (Straight V Sh', ms: '9552 Shoot Cake God For Wealth (Straight V Sh' },
    price: 2500,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199031/fireworks_400x400/fireworks_400x400/resized_framed_9552_Shoot_Cake_God_For_Wealth_Straight_V_Sh.jpg',
    videoUrl: 'https://storage.googleapis.com/takeapp/media/cm4krs82800040cme2rrdeu89.mp4',
    category: 'traditional',
    section: 'MERDEKA FIREWORKS'
  },
  {
    id: 1014,
    name: { en: '9138 Shoot Cake Fortune Four 9', ms: '9138 Shoot Cake Fortune Four 9' },
    price: 650,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199073/fireworks_400x400/fireworks_400x400/resized_framed_9138_Shoot_Cake_Fortune_Four_9.jpg',
    videoUrl: 'https://storage.googleapis.com/takeapp/media/cm3r2lnw200060cla8ua8d5er.mp4',
    category: 'traditional',
    section: 'MERDEKA FIREWORKS'
  },
  {
    id: 1015,
    name: { en: '9552 Shoot Cake Fortune Four 9', ms: '9552 Shoot Cake Fortune Four 9' },
    price: 2500,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199069/fireworks_400x400/fireworks_400x400/resized_framed_9552_Shoot_Cake_Fortune_Four_9.jpg',
    videoUrl: 'https://storage.googleapis.com/takeapp/media/cm3r2lnw200060cla8ua8d5er.mp4',
    category: 'traditional',
    section: 'MERDEKA FIREWORKS'
  },
  {
    id: 1016,
    name: { en: '9138 Shoot Cake Zhong Lu Chai Shen 9138', ms: '9138 Shoot Cake Zhong Lu Chai Shen 9138' },
    price: 650,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753199095/fireworks_400x400/fireworks_400x400/resized_framed_9138_Shoot_Cake_Zhong_Lu_Chai_Shen_9138.jpg',
    videoUrl: 'https://storage.googleapis.com/takeapp/media/cm598y327000003l380dw0qhh.mp4',
    category: 'traditional',
    section: 'MERDEKA FIREWORKS'
  },
  {
    id: 1017,
    name: { en: '949 Shoot Cake', ms: '949 Shoot Cake' },
    price: 200,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198954/fireworks_400x400/fireworks_400x400/resized_framed_product_116_949_Shoot_Cake.jpg',
    videoUrl: 'http://res.cloudinary.com/de8w3ykvy/video/upload/v1753077856/HunterBoom/cm597rqi4000u03mqe0ml5xhk_qmk1ha.mp4',
    category: 'traditional',
    section: 'MERDEKA FIREWORKS'
  },
  {
    id: 1019,
    name: { en: '5276 Shoot Cake Classic (V Shape) 5276', ms: '5276 Shoot Cake Classic (V Shape) 5276' },
    price: 1000,
    image: 'https://res.cloudinary.com/de8w3ykvy/image/upload/v1753198965/fireworks_400x400/fireworks_400x400/resized_framed_5276_Shoot_Cake_Classic_V_Shape_5276.jpg',
    videoUrl: 'https://storage.googleapis.com/takeapp/media/cm4la2rms00130cl71m8b1hdf.mp4',
    category: 'traditional',
    section: 'MERDEKA FIREWORKS'
  },
];

export const sections = [
  'POP-POP',
  'ROCKET SKY SHOW',
  'RED DRAGON FIRECRACKERS',
  'SPARKLE & SHINE - KIDS" FAVORITE FIREWORKS!',
  'KIDS" FIRECRACKERS',
  'MERDEKA FIREWORKS'
];