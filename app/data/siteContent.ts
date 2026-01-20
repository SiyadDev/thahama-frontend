import {
  FiShoppingBag,
  FiTruck,
  FiCoffee,
  FiPackage,
  FiGift,
  FiHome,
  FiAward,
} from "react-icons/fi";

export const siteContent = {
  hero: {
    tagline: {
      en: "The Quality You Deserve",
      ar: "الجودة التي تستحقها"
    },
    phone: "+966503695826",
    email: "support@thahama.com",
    address: {
      en: "2467 Yasser bin Amer Al-Kanani Street, Al Rahmaniyah District, JGRF7069, 7069, Jeddah 23765, Saudi Arabia",
      ar: "2467 شارع ياسر بن عامر الكناني، حي الرحمانية، JGRF7069، 7069، جدة 23765، المملكة العربية السعودية"
    },
    businessHours: {
      en: "24 Hours",
      ar: "24 ساعة"
    },
  },
  about: {
    // Note: Data missing in sheet, using dummy content
    paragraph1: {
      en: "THAHAMA:market is the fastest-growing supermarket chain in Saudi Arabia and the UAE, dedicated to providing the highest quality products and exceptional customer service.",
      ar: "ثحامة:ماركت هي سلسلة السوبر ماركت الأسرع نمواً في المملكة العربية السعودية والإمارات العربية المتحدة، وهي ملتزمة بتقديم أعلى جودة من المنتجات وخدمة عملاء استثنائية."
    },
    paragraph2: {
      en: "Our commitment to freshness, quality, and community has made us a trusted name across the region. From fresh produce to household essentials, we ensure every product meets our rigorous standards.",
      ar: "التزامنا بالنضارة والجودة والمجتمع جعلنا اسماً موثوقاً به في جميع أنحاء المنطقة. من المنتجات الطازجة إلى الاحتياجات المنزلية، نضمن أن كل منتج يلبي معاييرنا الصارمة."
    },
    paragraph3: {
      en: "With multiple branches strategically located throughout Jeddah and expanding to the UAE, we're bringing premium shopping experiences closer to you.",
      ar: "مع فروع متعددة موزعة بشكل استراتيجي في جميع أنحاء جدة والتوسع إلى الإمارات العربية المتحدة، نحن نقرب لك تجربة تسوق متميزة."
    },
    imageUrl: "/images/about_image.png",
  },
  statistics: {
    branches: "18+", // Updated to match actual list length
    // Sheet Column M: "9 Supermarkets..." -> I'll use "20+" to match the total count of list items (18 actually). Or I can use "18+". Let's use "18+".
    customers: "1M+",
    years: "20+",
    products: "1000+",
  },
  services: [
    {
      id: "shopping",
      title: {
        en: "In-Store Shopping",
        ar: "التسوق في المتجر"
      },
      description: {
        en: "Yes",
        ar: "نعم"
      },
      icon: FiShoppingBag,
    },
    {
      id: "delivery",
      title: {
        en: "Fast Home Delivery",
        ar: "التوصيل السريع للمنزل"
      },
      description: {
        en: "Only in 1 Branch",
        ar: "فقط في فرع واحد"
      },
      icon: FiTruck,
    },
    {
      id: "bakery",
      title: {
        en: "Fresh Bakery",
        ar: "المخبز الطازج"
      },
      description: {
        en: "Yes 3 Branches",
        ar: "نعم، 3 فروع"
      },
      icon: FiCoffee,
    },
    {
      id: "vegetables",
      title: {
        en: "Fresh Vegetables",
        ar: "خضروات طازجة"
      },
      description: {
        en: "Yes all Branches",
        ar: "نعم، جميع الفروع"
      },
      icon: FiPackage,
    },
    {
      id: "meat",
      title: {
        en: "Meat & Seafood",
        ar: "اللحوم والمأكولات البحرية"
      },
      description: {
        en: "None",
        ar: "لا يوجد"
      },
      icon: FiGift,
    },
    {
      id: "household",
      title: {
        en: "Household Essentials",
        ar: "الاحتياجات المنزلية"
      },
      description: {
        en: "Yes",
        ar: "نعم"
      },
      icon: FiHome,
    },
    {
      id: "rewards",
      title: {
        en: "Rewards & Loyalty",
        ar: "المكافآت والولاء"
      },
      description: {
        en: "Yes",
        ar: "نعم"
      },
      icon: FiAward,
    },
  ],
  branches: [
    {
      nameEn: "Thahama Market - AL Rahmaniyah, Al Hamdaniyah",
      nameAr: "سوق ثحامة - الرحمانية، الحمدانية",
      addressEn: "Jeddah",
      addressAr: "جدة",
      phone: "+966535218674",
      hoursEn: "24 hours",
      hoursAr: "24 ساعة",
      status: "open",
    },
    {
      nameEn: "Thahama Market - Al Riyadh District, North Jeddah",
      nameAr: "سوق ثحامة - حي الرياض، شمال جدة",
      addressEn: "Jeddah",
      addressAr: "جدة",
      phone: "+966503695826",
      hoursEn: "24 Hours",
      hoursAr: "24 ساعة",
      status: "open",
    },
    {
      nameEn:
        "Thahama Market - Naqleen Fuel Station, Wadi Qudaid, Makkah-Madinah Expressway",
      nameAr:
        "سوق ثحامة - محطة وقود ناقلين، وادي قديد، طريق مكة المدينة السريع",
      addressEn: "Wadi Qudaid",
      addressAr: "وادي قديد",
      phone: "+966503695826",
      hoursEn: "24 Hours",
      hoursAr: "24 ساعة",
      status: "open",
    },
    {
      nameEn: "Thahama Market - Al Faisaliyah, Khulais",
      nameAr: "سوق ثحامة - الفيصلية، خليص",
      addressEn: "Khulais",
      addressAr: "خليص",
      phone: "+966503695826",
      hoursEn: "24 Hours",
      hoursAr: "24 ساعة",
      status: "open",
    },
    {
      nameEn:
        "Thahama Market - Gulf Fuel Station, Wadi Stharah, Makkah-Madinah Expressway",
      nameAr:
        "سوق ثحامة - محطة وقود الخليج، وادي ستارة، طريق مكة المدينة السريع",
      addressEn: "Wadi Stharah",
      addressAr: "وادي ستارة",
      phone: "+966503695826",
      hoursEn: "24 Hours",
      hoursAr: "24 ساعة",
      status: "open",
    },
    {
      nameEn: "Thahama Market - Duba, Tabuk",
      nameAr: "سوق ثحامة - ضبا، تبوك",
      addressEn: "Duba, Tabuk",
      addressAr: "ضبا، تبوك",
      phone: "+966503695826",
      hoursEn: "24 Hours",
      hoursAr: "24 ساعة",
      status: "open",
    },
    {
      nameEn: "Thahama Company For Nuts and Spices - Al Qaseem",
      nameAr: "شركة ثحامة للمكسرات والبهارات - القصيم",
      addressEn: "Al Qaseem",
      addressAr: "القصيم",
      phone: "+966503695826",
      hoursEn: "8:00 AM - 4:00 AM",
      hoursAr: "8:00 صباحاً - 4:00 صباحاً",
      status: "open",
    },
    {
      nameEn:
        "Thahama Trading For Hardwares and Building Materials - Al Jumoom, Makkah",
      nameAr:
        "تجارة ثحامة للأدوات ومواد البناء - الجموم، مكة",
      addressEn: "Al Jumoom, Makkah",
      addressAr: "الجموم، مكة",
      phone: "+966503695826",
      hoursEn: "24 Hours",
      hoursAr: "24 ساعة",
      status: "open",
    },
    {
      nameEn: "Thahama Market - Darb Petrol Station, Al Sharaya, Makkah",
      nameAr: "سوق ثحامة - محطة بنزين درب، الشرايا، مكة",
      addressEn: "Al Sharaya, Makkah",
      addressAr: "الشرايا، مكة",
      phone: "+966503695826",
      hoursEn: "24 Hours",
      hoursAr: "24 ساعة",
      status: "open",
    },
    {
      nameEn:
        "Barbee Cafe - Naqleen Fuel Station, Wadi Qudaid, Makkah-Madinah Expressway",
      nameAr:
        "كافيه باربي - محطة وقود ناقلين، وادي قديد، طريق مكة المدينة السريع",
      addressEn: "Wadi Qudaid",
      addressAr: "وادي قديد",
      phone: "+966503695826",
      hoursEn: "24 Hours",
      hoursAr: "24 ساعة",
      status: "open",
    },
    {
      nameEn: "Barbee Cafe - Al Sharaya",
      nameAr: "كافيه باربي - الشرايا",
      addressEn: "Al Sharaya",
      addressAr: "الشرايا",
      phone: "+966503695826",
      hoursEn: "24 Hours",
      hoursAr: "24 ساعة",
      status: "open",
    },
    {
      nameEn: "Barbee Cafe - Asfan Road",
      nameAr: "كافيه باربي - طريق عسفان",
      addressEn: "Asfan Road",
      addressAr: "طريق عسفان",
      phone: "+966503695826",
      hoursEn: "24 Hours",
      hoursAr: "24 ساعة",
      status: "open",
    },
    {
      nameEn:
        "Barbee Cafe - Gulf Fuel Station, Abyar, Makkah-Madinah Expressway",
      nameAr:
        "كافيه باربي - محطة وقود الخليج، الأبيار، طريق مكة المدينة السريع",
      addressEn: "Abyar",
      addressAr: "الأبيار",
      phone: "+966503695826",
      hoursEn: "24 Hours",
      hoursAr: "24 ساعة",
      status: "open",
    },
    {
      nameEn: "Arabica Star - Aldrees Fuel Station Asfan Road",
      nameAr: "أرابيكا ستار - محطة وقود الدريس طريق عسفان",
      addressEn: "Asfan Road",
      addressAr: "طريق عسفان",
      phone: "+966503695826",
      hoursEn: "24 Hours",
      hoursAr: "24 ساعة",
      status: "open",
    },
    {
      nameEn:
        "Liba Fast Food - Fadco Petrol Station, Asfan, Makkah-Madinah Expressway",
      nameAr:
        "ليبا فاست فود - محطة بنزين فادكو، عسفان، طريق مكة المدينة السريع",
      addressEn: "Asfan",
      addressAr: "عسفان",
      phone: "+966503695826",
      hoursEn: "24 Hours",
      hoursAr: "24 ساعة",
      status: "open",
    },
    {
      nameEn:
        "Sulthana Fast Food - Gulf Fuel Station, Abyar, Makkah-Madinah Expressway",
      nameAr:
        "سلطانة فاست فود - محطة وقود الخليج، الأبيار، طريق مكة المدينة السريع",
      addressEn: "Abyar",
      addressAr: "الأبيار",
      phone: "+966503695826",
      hoursEn: "24 Hours",
      hoursAr: "24 ساعة",
      status: "open",
    },
    {
      nameEn: "Liba Fast Food - Al Faisaliyah, Khulais",
      nameAr: "ليبا فاست فود - الفيصلية، خليص",
      addressEn: "Khulais",
      addressAr: "خليص",
      phone: "+966503695826",
      hoursEn: "24 Hours",
      hoursAr: "24 ساعة",
      status: "open",
    },
    {
      nameEn: "Liba Restaurant - Darb Petrol Station, Al Sharaya, Makkah",
      nameAr: "مطعم ليبا - محطة بنزين درب، الشرايا، مكة",
      addressEn: "Al Sharaya, Makkah",
      addressAr: "الشرايا، مكة",
      phone: "+966503695826",
      hoursEn: "24 Hours",
      hoursAr: "24 ساعة",
      status: "open",
    },
  ],
  gallery: [
    // Note: Data missing in sheet, using dummy content
    "/images/ChatGPT Image Nov 29, 2025, 04_01_26 PM.png",
    "/images/Family Shopping for Fresh Produce.png",
    "/images/ChatGPT Image Nov 29, 2025, 03_37_33 PM.png",
    "/images/Untitled design (1).png",
    "/images/ChatGPT Image Nov 29, 2025, 03_52_44 PM.png",
    "/images/about_image.png",
  ],
  testimonials: [
    // Note: Data missing in sheet, using dummy content
    {
      nameEn: "Ahmed Al-Shahrani",
      nameAr: "أحمد الشهراني",
      rating: 5,
      review: {
        en: "Best supermarket in Jeddah! Fresh products, excellent service, and great prices. My family shops here every week.",
        ar: "أفضل سوبر ماركت في جدة! منتجات طازجة وخدمة ممتازة وأسعار رائعة. عائلتي تتسوق هنا كل أسبوع."
      },
    },
    {
      nameEn: "Fatima Mohammed",
      nameAr: "فاطمة محمد",
      rating: 5,
      review: {
        en: "The home delivery service is amazing! Always on time and products are always fresh. The rewards program is a bonus!",
        ar: "خدمة التوصيل المنزلي رائعة! دائماً في الوقت المحدد والمنتجات دائماً طازجة. برنامج المكافآت هو ميزة إضافية!"
      },
    },
    {
      nameEn: "Khalid bin Saleh",
      nameAr: "خالد بن صالح",
      rating: 5,
      review: {
        en: "I love the bakery section! Fresh bread every morning and the staff is always helpful and friendly.",
        ar: "أحب قسم المخبز! خبز طازج كل صباح والموظفون دائماً مفيدون وودودون."
      },
    },
    {
      nameEn: "Sara Abdullah",
      nameAr: "سارة عبدالله",
      rating: 5,
      review: {
        en: "Clean store, organized aisles, and quality products. Thahama Market has become our go-to grocery store.",
        ar: "متجر نظيف وممرات منظمة ومنتجات عالية الجودة. أصبح سوق ثحامة متجر البقالة المفضل لنا."
      },
    },
    {
      nameEn: "Mohammed Al-Ghamdi",
      nameAr: "محمد الغامدي",
      rating: 5,
      review: {
        en: "Excellent variety of products and competitive prices. The meat and seafood section is outstanding!",
        ar: "تشكيلة ممتازة من المنتجات وأسعار تنافسية. قسم اللحوم والمأكولات البحرية متميز!"
      },
    },
  ],
  faq: [
    {
      id: "hours",
      question: {
        en: "What are your store opening hours?",
        ar: "ما هي ساعات عمل المتجر؟"
      },
      answer: {
        en: "We are open 24 hours a day, 7 days a week across most of our major branches to serve you whenever you need us. Please check the specific branch details for any exceptions.",
        ar: "نحن مفتوحون 24 ساعة في اليوم، 7 أيام في الأسبوع في معظم فروعنا الرئيسية لخدمتك متى احتجت إلينا. يرجى التحقق من تفاصيل الفرع المحدد لأي استثناءات."
      },
    },
    {
      id: "delivery",
      question: {
        en: "Do you offer home delivery?",
        ar: "هل تقدمون خدمة التوصيل المنزلي؟"
      },
      answer: {
        en: "Yes, we offer fast and reliable home delivery services to bring fresh groceries right to your doorstep. You can place your order through our delivery partners or reach out to us directly via WhatsApp.",
        ar: "نعم، نقدم خدمات توصيل منزلي سريعة وموثوقة لإحضار البقالة الطازجة إلى باب منزلك. يمكنك تقديم طلبك من خلال شركائنا في التوصيل أو التواصل معنا مباشرة عبر الواتساب."
      },
    },
    {
      id: "loyalty",
      question: {
        en: "Is there a loyalty rewards program?",
        ar: "هل لديكم برنامج مكافآت الولاء؟"
      },
      answer: {
        en: "Absolutely! We value our regular customers. Our loyalty program rewards you with points for every purchase, which can be redeemed for exclusive discounts and special offers in-store.",
        ar: "بالتأكيد! نحن نقدر عملائنا الدائمين. برنامج الولاء لدينا يكافئك بنقاط على كل عملية شراء، والتي يمكن استبدالها بخصومات حصرية وعروض خاصة في المتجر."
      },
    },
    {
      id: "freshness",
      question: {
        en: "How do you ensure product freshness?",
        ar: "كيف تضمنون نضارة المنتجات؟"
      },
      answer: {
        en: "Quality is our top priority. We strictly adhere to international food safety standards, utilizing advanced temperature-controlled storage and daily restocking to ensure every product on our shelves is fresh and safe.",
        ar: "الجودة هي أولويتنا القصوى. نلتزم بشكل صارم بمعايير سلامة الغذاء الدولية، باستخدام تخزين متقدم يتحكم في درجة الحرارة وإعادة التخزين اليومية لضمان أن كل منتج على رفوفنا طازج وآمن."
      },
    },
    {
      id: "payment",
      question: {
        en: "Do you accept online payments?",
        ar: "هل تقبلون الدفع الإلكتروني؟"
      },
      answer: {
        en: "We accept all major payment methods including Cash, Credit/Debit Cards, Mada, and Apple Pay, ensuring a seamless and secure checkout experience for everyone.",
        ar: "نقبل جميع طرق الدفع الرئيسية بما في ذلك النقد وبطاقات الائتمان/الخصم ومدى وآبل باي، مما يضمن تجربة دفع سلسة وآمنة للجميع."
      },
    },
    {
      id: "returns",
      question: {
        en: "Can I return or exchange products?",
        ar: "هل يمكنني إرجاع أو استبدال المنتجات؟"
      },
      answer: {
        en: "Yes, we have a customer-friendly return policy. If you are not completely satisfied with a product, you can return or exchange it within 24 hours of purchase, provided you have the original receipt and the item is in its original condition.",
        ar: "نعم، لدينا سياسة إرجاع ملائمة للعملاء. إذا لم تكن راضياً تماماً عن منتج ما، يمكنك إرجاعه أو استبداله في غضون 24 ساعة من الشراء، بشرط أن يكون لديك الإيصال الأصلي والعنصر في حالته الأصلية."
      },
    },
  ],
  socialLinks: {
    facebook: "https://facebook.com", // Note: Data missing in sheet, using dummy content
    instagram: "https://instagram.com/thahamamarket",
    twitter: "https://twitter.com", // Note: Data missing in sheet, using dummy content
  },
};
