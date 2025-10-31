 /* ---------- Rain ---------- */
    const rain = document.querySelector('.rain');
    for(let i=0;i<90;i++){
      const d=document.createElement('div'); d.className='drop';
      d.style.left = Math.random()*100+'%';
      d.style.animationDuration = (0.6 + Math.random()*0.9)+'s';
      d.style.opacity = (0.35 + Math.random()*0.55);
      rain.appendChild(d);
    }

    /* ---------- SPA Tabs (hash-aware) ---------- */
    const sections = Array.from(document.querySelectorAll('main section'));
    const links = Array.from(document.querySelectorAll('nav .links a'));
    function show(id){
      sections.forEach(s=>s.classList.toggle('active', s.id===id));
      links.forEach(a=>a.classList.toggle('active', a.getAttribute('href')==='#'+id));
      if(location.hash !== '#'+id) history.replaceState(null,'','#'+id);
    }
    links.forEach(a=>a.addEventListener('click', e=>{
      e.preventDefault(); show(a.getAttribute('href').slice(1));
    }));
    show(location.hash?location.hash.slice(1):'home');

    /* ---------- Logo modal ---------- */
    brandBtn.addEventListener('click',()=>brandModal.showModal());
    closeModal.addEventListener('click',()=>brandModal.close());

    /* ---------- Translations ---------- */
    const tdata = {
      en:{
        nav_home:"Home",nav_about:"About",nav_signin:"Sign-in",nav_leaderboard:"Leaderboard",nav_members:"Members",
        home_title:"Welcome to Jaljeevan.AI",
        home_text:"Smart rainwater harvesting & artificial recharge advisor with live data, AR preview, and gamified water credits.",
        input_title:"Enter Your Details",
        ph_name:"Your name",ph_location:"Location (GPS/Manual)",ph_roof:"Roof area (m²)",ph_dwellers:"No. of dwellers",ph_space:"Open space available (m²)",
        btn_submit:"Calculate",
        tank_label:"Water Storage Potential",
        about_quick_title:"What this tool does",
        about_quick_text:"Estimates rooftop harvest, demand coverage, and suggests recharge pit size. Earn Water Credits for impact.",
        pill_ai:"AI Calculator", pill_gis:"GIS + Runoff", pill_ar:"AR Preview", pill_credits:"Water Credits",
        about_title:"System Architecture",
        about_text:"End-to-end pipeline from inputs to AI+GIS processing, AR visualization, cost-benefit, and community gamification.",
        about_dl:"Data Layer", about_dl_items:"Rainfall (IMD), Groundwater (CGWB), aquifer & soil.",
        about_pl:"Processing", about_pl_items:"AI calculator, runoff estimation, cost-benefit, structure recommender.",
        about_viz:"Visualization", about_viz_items:"3D/AR overlays of pits, trenches, and tanks.",
        about_game:"Gamification", about_game_items:"Credits, leaderboards, challenges, social sharing.",
        about_market:"Marketplace", about_market_items:"Vendors, subsidies, RTRWH kits.",
        signin_title:"Sign-in", signin_text:"Auth will be enabled later for SIH. Explore the calculator and leaderboard.",
        ph_email:"Email", ph_password:"Password", btn_signin:"Sign-in", btn_create:"Create Account",
        leaderboard_title:"Water Credits Leaderboard", leaderboard_text:"Earn badges at 100 / 200 / 500 / 1000 credits. Share your impact!",
        th_rank:"#", th_name:"Name", th_credits:"Credits", th_badge:"Badge", th_share:"Share",
        members_title:"Team Members", members_text:"The people building Jaljeevan.AI",
        footer_text:"© 2025 Jaljeevan.AI — Together for water conservation.",
        res_harvest:"Potential harvest", res_coverage:"Household demand coverage", res_pit:"Suggested recharge pit volume",
        res_credits_prefix:"You earned", res_credits_suffix:"Water Credits • added to leaderboard!",
        share_copied:"Share text copied to clipboard!",
        modal_title:"Every drop counts", modal_text:"A 100 m² roof in a 900 mm rainfall zone can recharge ~90,000 L/year. Imagine your entire street harvesting together.",
        btn_close:"Close",
        badge_legend:"Legend • 1000+", badge_master:"Monsoon Master • 500+", badge_champ:"Aqua Champ • 200+", badge_hero:"Drop Hero • 100+", badge_rookie:"Raindrop Rookie"
      },
      hi:{
        nav_home:"होम",nav_about:"हमारे बारे में",nav_signin:"साइन-इन",nav_leaderboard:"लीडरबोर्ड",nav_members:"सदस्य",
        home_title:"Jaljeevan.AI में आपका स्वागत है",
        home_text:"लाइव डेटा, AR प्रीव्यू और गेमिफाइड वॉटर क्रेडिट्स के साथ स्मार्ट वर्षा जल संचयन व कृत्रिम रिचार्ज सलाहकार।",
        input_title:"अपनी जानकारी दर्ज करें",
        ph_name:"आपका नाम",ph_location:"स्थान (GPS/मैनुअल)",ph_roof:"छत क्षेत्र (m²)",ph_dwellers:"निवासियों की संख्या",ph_space:"उपलब्ध खुली जगह (m²)",
        btn_submit:"गणना करें",
        tank_label:"जल भंडारण क्षमता",
        about_quick_title:"यह टूल क्या करता है",
        about_quick_text:"छत से संग्रह, घरेलू मांग कवरेज व रिचार्ज पिट आकार का अनुमान। प्रभाव के लिए वॉटर क्रेडिट्स अर्जित करें।",
        pill_ai:"एआई कैलकुलेटर", pill_gis:"GIS + रनऑफ", pill_ar:"AR प्रीव्यू", pill_credits:"वॉटर क्रेडिट्स",
        about_title:"सिस्टम आर्किटेक्चर",
        about_text:"यूज़र इनपुट से AI+GIS प्रोसेसिंग, AR विज़ुअलाइज़ेशन, लागत-लाभ और कम्युनिटी गेमिफिकेशन तक।",
        about_dl:"डेटा लेयर", about_dl_items:"वर्षा (IMD), भूजल (CGWB), जलभृत व मृदा।",
        about_pl:"प्रोसेसिंग", about_pl_items:"एआई कैलकुलेटर, रनऑफ, लागत-लाभ, संरचना सुझाव।",
        about_viz:"विज़ुअलाइज़ेशन", about_viz_items:"गड्ढा/ट्रेंच/टैंक के 3D/AR ओवरले।",
        about_game:"गेमिफिकेशन", about_game_items:"क्रेडिट्स, लीडरबोर्ड, चुनौतियाँ, शेयरिंग।",
        about_market:"मार्केटप्लेस", about_market_items:"वेंडर्स, सब्सिडी, RTRWH किट।",
        signin_title:"साइन-इन", signin_text:"SIH डेमो हेतु लॉगिन बाद में जोड़ा जाएगा। अभी कैलकुलेटर व लीडरबोर्ड देखें।",
        ph_email:"ईमेल", ph_password:"पासवर्ड", btn_signin:"साइन-इन", btn_create:"खाता बनाएँ",
        leaderboard_title:"वॉटर क्रेडिट्स लीडरबोर्ड", leaderboard_text:"100/200/500/1000 पर बैज पाएं। अपना प्रभाव साझा करें!",
        th_rank:"#", th_name:"नाम", th_credits:"क्रेडिट्स", th_badge:"बैज", th_share:"शेयर",
        members_title:"टीम सदस्य", members_text:"Jaljeevan.AI बनाने वाली टीम",
        footer_text:"© 2025 Jaljeevan.AI — जल संरक्षण के लिए साथ मिलकर।",
        res_harvest:"संभावित संचयन", res_coverage:"घरेलू माँग कवरेज", res_pit:"सुझावित रिचार्ज पिट आयतन",
        res_credits_prefix:"आपने कमाए", res_credits_suffix:"वॉटर क्रेडिट्स • लीडरबोर्ड में जोड़ा गया!",
        share_copied:"शेयर टेक्स्ट क्लिपबोर्ड में कॉपी हुआ!",
        modal_title:"हर बूंद मायने रखती है", modal_text:"100 m² छत, 900 mm बारिश में ~90,000 ली./वर्ष रिचार्ज कर सकती है। पूरी गली के साथ की कल्पना करें।",
        btn_close:"बंद करें",
        badge_legend:"लेजेंड • 1000+", badge_master:"मानसून मास्टर • 500+", badge_champ:"एक्वा चैंप • 200+", badge_hero:"ड्रॉप हीरो • 100+", badge_rookie:"रेनड्रॉप रूकी"
      },
      bn:{
        nav_home:"হোম",nav_about:"আমাদের সম্পর্কে",nav_signin:"সাইন-ইন",nav_leaderboard:"লিডারবোর্ড",nav_members:"সদস্য",
        home_title:"Jaljeevan.AI-এ স্বাগতম",
        home_text:"লাইভ ডেটা, AR প্রিভিউ ও গেমিফাইড ওয়াটার ক্রেডিটসহ স্মার্ট বৃষ্টির জল সংরক্ষণ ও রিচার্জ পরামর্শদাতা।",
        input_title:"আপনার তথ্য দিন",
        ph_name:"আপনার নাম",ph_location:"অবস্থান (GPS/ম্যানুয়াল)",ph_roof:"ছাদের এলাকা (m²)",ph_dwellers:"বাসিন্দার সংখ্যা",ph_space:"খোলা জায়গা (m²)",
        btn_submit:"গণনা করুন",
        tank_label:"জল সঞ্চয় সম্ভাবনা",
        about_quick_title:"এই টুলটি কী করে",
        about_quick_text:"ছাদ থেকে সংগ্রহ, চাহিদা কভারেজ ও রিচার্জ পিটের আকারের হিসাব। প্রভাবের জন্য ক্রেডিট অর্জন করুন।",
        pill_ai:"এআই ক্যালকুলেটর", pill_gis:"GIS + রানঅফ", pill_ar:"AR প্রিভিউ", pill_credits:"ওয়াটার ক্রেডিটস",
        about_title:"সিস্টেম আর্কিটেকচার",
        about_text:"ইনপুট থেকে AI+GIS প্রসেসিং, AR ভিজ্যুয়াল, কস্ট-বেনিফিট ও গ্যামিফিকেশন।",
        about_dl:"ডেটা লেয়ার", about_dl_items:"বৃষ্টি (IMD), ভূগর্ভস্থ জল (CGWB), অ্যাকুইফার ও মাটি।",
        about_pl:"প্রসেসিং", about_pl_items:"এআই ক্যালকুলেশন, রানঅফ, কস্ট-বেনিফিট, স্ট্রাকচার সাজেশন।",
        about_viz:"ভিজ্যুয়াল", about_viz_items:"গর্ত/ট্রেঞ্চ/ট্যাঙ্কের 3D/AR।",
        about_game:"গ্যামিফিকেশন", about_game_items:"ক্রেডিট, লিডারবোর্ড, চ্যালেঞ্জ, শেয়ারিং।",
        about_market:"মার্কেটপ্লেস", about_market_items:"ভেন্ডর, সাবসিডি, RTRWH কিট।",
        signin_title:"সাইন-ইন", signin_text:"SIH ডেমোর জন্য লগইন পরে যোগ হবে। আপাতত ক্যালকুলেটর ও লিডারবোর্ড দেখুন।",
        ph_email:"ইমেইল", ph_password:"পাসওয়ার্ড", btn_signin:"সাইন-ইন", btn_create:"অ্যাকাউন্ট খুলুন",
        leaderboard_title:"ওয়াটার ক্রেডিটস লিডারবোর্ড", leaderboard_text:"100/200/500/1000-এ ব্যাজ। আপনার প্রভাব শেয়ার করুন!",
        th_rank:"#", th_name:"নাম", th_credits:"ক্রেডিটস", th_badge:"ব্যাজ", th_share:"শেয়ার",
        members_title:"দল", members_text:"Jaljeevan.AI নির্মাতারা",
        footer_text:"© 2025 Jaljeevan.AI — জল সংরক্ষণে একসাথে।",
        res_harvest:"সম্ভাব্য সংগ্রহ", res_coverage:"গৃহস্থালি চাহিদা কভারেজ", res_pit:"প্রস্তাবিত রিচার্জ পিট আয়তন",
        res_credits_prefix:"আপনি অর্জন করেছেন", res_credits_suffix:"ওয়াটার ক্রেডিটস • লিডারবোর্ডে যুক্ত!",
        share_copied:"শেয়ারের লেখা কপি হয়েছে!",
        modal_title:"প্রতিটি ফোঁটা মূল্যবান", modal_text:"১০০ m² ছাদে ৯০০ mm বৃষ্টিতে ~৯০,০০০ লি./বছর রিচার্জ সম্ভব। সবাই মিলে করলে কল্পনা করুন।",
        btn_close:"বন্ধ করুন",
        badge_legend:"লিজেন্ড • 1000+", badge_master:"মনসুন মাস্টার • 500+", badge_champ:"অ্যাকুয়া চ্যাম্প • 200+", badge_hero:"ড্রপ হিরো • 100+", badge_rookie:"রেইনড্রপ রুকি"
      },
      mr:{
        nav_home:"होम",nav_about:"आमच्याबद्दल",nav_signin:"साइन-इन",nav_leaderboard:"लीडरबोर्ड",nav_members:"सदस्य",
        home_title:"Jaljeevan.AI मध्ये स्वागत आहे",
        home_text:"लाईव्ह डेटा, AR प्रीव्ह्यू आणि गेमिफाईड वॉटर क्रेडिटसह स्मार्ट रेनवॉटर हार्वेस्टिंग व रिचार्ज सल्ला.",
        input_title:"तुमची माहिती भरा",
        ph_name:"तुमचे नाव",ph_location:"ठिकाण (GPS/मॅन्युअल)",ph_roof:"छताचे क्षेत्र (m²)",ph_dwellers:"राहिवाशांची संख्या",ph_space:"उपलब्ध मोकळी जागा (m²)",
        btn_submit:"हिशेब करा",
        tank_label:"पाणी साठवण क्षमता",
        about_quick_title:"हे साधन काय करते",
        about_quick_text:"छतावरील संकलन, मागणी कव्हरेज व पिट आकाराचा अंदाज. प्रभावासाठी क्रेडिट मिळवा.",
        pill_ai:"AI कॅल्क्युलेटर", pill_gis:"GIS + रनऑफ", pill_ar:"AR प्रीव्ह्यू", pill_credits:"वॉटर क्रेडिट्स",
        about_title:"सिस्टम आर्किटेक्चर",
        about_text:"इनपुटपासून AI+GIS प्रक्रिया, AR दृश्य, खर्च-लाभ व गेमिफिकेशनपर्यंत.",
        about_dl:"डेटा लेयर", about_dl_items:"पावसाचे (IMD), भूमिगत पाणी (CGWB), जलवाहिनी व माती.",
        about_pl:"प्रोसेसिंग", about_pl_items:"AI कॅल्क, रनऑफ, खर्च-लाभ, स्ट्रक्चर सुचवणी.",
        about_viz:"व्हिज्युअलायझेशन", about_viz_items:"खड्डे/चर/टाक्यांचे 3D/AR.",
        about_game:"गेमिफिकेशन", about_game_items:"क्रेडिट्स, लीडरबोर्ड, चॅलेंजेस, शेअरिंग.",
        about_market:"मार्केटप्लेस", about_market_items:"विक्रेते, अनुदाने, RTRWH किट्स.",
        signin_title:"साइन-इन", signin_text:"SIH साठी लॉगिन नंतर येईल. सध्या कॅल्क्युलेटर व लीडरबोर्ड वापरा.",
        ph_email:"ईमेल", ph_password:"पासवर्ड", btn_signin:"साइन-इन", btn_create:"खाते तयार करा",
        leaderboard_title:"वॉटर क्रेडिट्स लीडरबोर्ड", leaderboard_text:"100/200/500/1000 ला बॅज. तुमचा प्रभाव शेअर करा!",
        th_rank:"#", th_name:"नाव", th_credits:"क्रेडिट्स", th_badge:"बॅज", th_share:"शेअर",
        members_title:"टीम सदस्य", members_text:"Jaljeevan.AI तयार करणारी टीम",
        footer_text:"© 2025 Jaljeevan.AI — पाणी संवर्धनासाठी एकत्र.",
        res_harvest:"संभाव्य संकलन", res_coverage:"घरगुती मागणी कव्हरेज", res_pit:"सुचवलेले पिट आयतन",
        res_credits_prefix:"तुम्ही मिळवले", res_credits_suffix:"वॉटर क्रेडिट्स • लीडरबोर्डमध्ये जोडले!",
        share_copied:"शेअर मजकूर कॉपी झाला!",
        modal_title:"प्रत्येक थेंब महत्त्वाचा", modal_text:"100 m² छत, 900 mm पावसात ~90,000 लि./वर्ष रिचार्ज करू शकते.",
        btn_close:"बंद", badge_legend:"लेजेंड • 1000+", badge_master:"मॉन्सून मास्टर • 500+", badge_champ:"अक्वा चॅम्प • 200+", badge_hero:"ड्रॉप हिरो • 100+", badge_rookie:"रेनड्रॉप रूकी"
      },
      gu:{
        nav_home:"હોમ",nav_about:"અમારા વિશે",nav_signin:"સાઇન-ઈન",nav_leaderboard:"લીડરબોર્ડ",nav_members:"સભ્યો",
        home_title:"Jaljeevan.AI માં આપનું સ્વાગત છે",
        home_text:"લાઇવ ડેટા, AR પ્રિવ્યુ અને ગેમિફાઇડ વોટર ક્રેડિટ્સ સાથે સ્માર્ટ રેઇનવોટર હાર્વેસ્ટિંગ અને રિચાર્જ સલાહકાર.",
        input_title:"તમારી માહિતી દાખલ કરો",
        ph_name:"તમારું નામ",ph_location:"સ્થાન (GPS/મેન્યુઅલ)",ph_roof:"છત વિસ્તાર (m²)",ph_dwellers:"રહેવાસીઓની સંખ્યા",ph_space:"ખાલી જગ્યા (m²)",
        btn_submit:"ગણતરી કરો",
        tank_label:"પાણી સંગ્રહ ક્ષમતા",
        about_quick_title:"આ સાધન શું કરે છે",
        about_quick_text:"છત પરથી સંકલન, માંગ કવરેજ અને રિચાર્જ પિટ કદ સૂચન. અસર માટે ક્રેડિટ મેળવો.",
        pill_ai:"AI કેલ્ક્યુલેટર", pill_gis:"GIS + રનઓફ", pill_ar:"AR પ્રિવ્યુ", pill_credits:"વોટર ક્રેડિટ્સ",
        about_title:"સિસ્ટમ આર્કિટેક્ચર",
        about_text:"ઇનપુટથી AI+GIS પ્રોસેસિંગ, AR વિઝ્યુઅલ, ખર્ચ-લાભ અને ગેમિફિકેશન.",
        about_dl:"ડેટા લેવલ", about_dl_items:"વર્ષા (IMD), ભૂગર્ભજળ (CGWB), અક્વિફર અને માટી.",
        about_pl:"પ્રોસેસિંગ", about_pl_items:"AI ગણતરી, રનઓફ, ખર્ચ-લાભ, રચના ભલામણ.",
        about_viz:"વિઝ્યુઅલાઇઝેશન", about_viz_items:"ખાડા/ખાડીઓ/ટાંકીના 3D/AR.",
        about_game:"ગેમિફિકેશન", about_game_items:"ક્રેડિટ્સ, લીડરબોર્ડ, ચેલેન્જ, શેરિંગ.",
        about_market:"માર્કેટપ્લેસ", about_market_items:"વેન્ડર, સબસિડી, RTRWH કિટ્સ.",
        signin_title:"સાઇન-ઈન", signin_text:"SIH માટે લોગિન બાદમાં આવશે. હમણાં કૅલ્ક્યુલેટર અને લીડરબોર્ડ અજમાવો.",
        ph_email:"ઈમેઈલ", ph_password:"પાસવર્ડ", btn_signin:"સાઇન-ઈન", btn_create:"ખાતું બનાવો",
        leaderboard_title:"વોટર ક્રેડિટ્સ લીડરબોર્ડ", leaderboard_text:"100/200/500/1000 પર બેજ. તમારો પ્રભાવ શેર કરો!",
        th_rank:"#", th_name:"નામ", th_credits:"ક્રેડિટ્સ", th_badge:"બેજ", th_share:"શેર",
        members_title:"ટીમ સભ્યો", members_text:"Jaljeevan.AI બનાવવા वाली ટીમ",
        footer_text:"© 2025 Jaljeevan.AI — પાણી સંરક્ષણ માટે મળીને.",
        res_harvest:"સંભવિત સંકલન", res_coverage:"ઘરેલુ માંગ આવરણ", res_pit:"ભલામણ કરેલું પિટ વોલ્યુમ",
        res_credits_prefix:"તમે મેળ્યા", res_credits_suffix:"વોટર ક્રેડિટ્સ • લીડરબોર્ડમાં ઉમેર્યા!",
        share_copied:"શેર ટેક્સ્ટ નકલ થયું!",
        modal_title:"દરેક ટીપું મહત્વનું", modal_text:"100 m² છત, 900 mm વરસાદે ~90,000 લિ./વર્ષ રિચાર્જ કરી શકે છે.",
        btn_close:"બંધ", badge_legend:"લેજેન્ડ • 1000+", badge_master:"મોન્સૂન માસ્ટર • 500+", badge_champ:"અક્વા ચેમ્પ • 200+", badge_hero:"ડ્રોપ હીરો • 100+", badge_rookie:"રેન્ડ્રોપ રૂકી"
      },
      ta:{
        nav_home:"முகப்பு",nav_about:"எங்களை பற்றி",nav_signin:"உள்நுழை",nav_leaderboard:"முன்னிலைப் பட்டியல்",nav_members:"உறுப்பினர்கள்",
        home_title:"Jaljeevan.AI-க்கு வரவேற்கிறோம்",
        home_text:"நேரடி தரவு, AR முன்னோட்டம், கேமிபை செய்யப்பட்ட நீர் கிரெடிட்களுடன் ஸ்மார்ட் மழைநீர் சேகரிப்பு ஆலோசகர்.",
        input_title:"உங்கள் விவரங்கள்",
        ph_name:"உங்கள் பெயர்",ph_location:"இடம் (GPS/கையேடு)",ph_roof:"மேல் கூரை பரப்பு (m²)",ph_dwellers:"வசிப்போர் எண்ணிக்கை",ph_space:"கிடைக்கும் திறந்த இடம் (m²)",
        btn_submit:"கணக்கிடு",
        tank_label:"நீர் சேமிப்பு திறன்",
        about_quick_title:"இந்த கருவி செய்யுவது",
        about_quick_text:"சேகரிப்பு, தேவைக்கான கவரேஜ், பிட்டின் பருமன். தாக்கத்திற்காக கிரெடிட்கள் பெறுங்கள்.",
        pill_ai:"AI கணிப்பான்", pill_gis:"GIS + ஓட்டம்", pill_ar:"AR முன்னோட்டம்", pill_credits:"நீர் கிரெடிட்கள்",
        about_title:"அமைப்பு வடிவமைப்பு",
        about_text:"உள்ளீட்டிலிருந்து AI+GIS செயலாக்கம், AR காட்சி, செலவு-லாபம், சமூக கேமிபிகேஷன் வரை.",
        about_dl:"தரவு அடுக்கு", about_dl_items:"மழை (IMD), நிலத்தடி நீர் (CGWB), அக்விபர் & மண்.",
        about_pl:"செயலாக்கம்", about_pl_items:"AI கணிப்பு, ஓட்டம், செலவு-லாபம், அமைப்பு பரிந்துரை.",
        about_viz:"காட்சிப்படுத்தல்", about_viz_items:"குழி/குழி/தொட்டியின் 3D/AR.",
        about_game:"கேமிபிகேஷன்", about_game_items:"கிரெடிட்கள், முன்னிலை, சவால்கள், பகிர்வு.",
        about_market:"மார்க்கெட்பிளேஸ்", about_market_items:"விற்பனையாளர், உதவித்தொகை, RTRWH கிட்கள்.",
        signin_title:"உள்நுழை", signin_text:"SIH டெமோவிற்கு உள்நுழைவு பின்னர். இப்போது கணிப்பானையும் முன்னிலை பட்டியலையும் பாருங்கள்.",
        ph_email:"மின்னஞ்சல்", ph_password:"கடவுச்சொல்", btn_signin:"உள்நுழை", btn_create:"கணக்கு உருவாக்கு",
        leaderboard_title:"நீர் கிரெடிட்ஸ் லீடர்போர்ட்", leaderboard_text:"100/200/500/1000 இல் பேட்ஜ்கள். உங்கள் தாக்கத்தைப் பகிருங்கள்!",
        th_rank:"#", th_name:"பெயர்", th_credits:"கிரெடிட்கள்", th_badge:"பேட்ஜ்", th_share:"பகிர்",
        members_title:"அணி", members_text:"Jaljeevan.AI உருவாக்கியவர்கள்",
        footer_text:"© 2025 Jaljeevan.AI — நீர் பாதுகாப்பிற்கு ஒன்றிணைவோம்.",
        res_harvest:"சாத்தியமான சேகரிப்பு", res_coverage:"குடும்ப தேவைக் கவரேஜ்", res_pit:"பரிந்துரைக்கப்பட்ட குழி அளவு",
        res_credits_prefix:"நீங்கள் பெற்றது", res_credits_suffix:"நீர் கிரெடிட்கள் • லீடர்போர்டில் சேர்க்கப்பட்டது!",
        share_copied:"பகிர் உரை நகலாகியுள்ளது!",
        modal_title:"ஒவ்வொரு துளியும் முக்கியம்", modal_text:"100 m² கூரை, 900 mm மழையில் ~90,000 லி./ஆண்டு ரீசார்ஜ் செய்ய முடியும்.",
        btn_close:"மூடு", badge_legend:"லெஜண்ட் • 1000+", badge_master:"மோன்சூன் மாஸ்டர் • 500+", badge_champ:"அக்வா சாம்ப் • 200+", badge_hero:"ட்ராப் ஹீரோ • 100+", badge_rookie:"ரெயின்ட்ராப் ரூக்கி"
      },
      te:{
        nav_home:"హోమ్",nav_about:"గురించి",nav_signin:"సైన్-ఇన్",nav_leaderboard:"లీడర్‌బోర్డ్",nav_members:"సభ్యులు",
        home_title:"Jaljeevan.AI కి స్వాగతం",
        home_text:"లైవ్ డేటా, AR ప్రివ్యూ, గేమిఫైడ్ వాటర్ క్రెడిట్స్‌తో స్మార్ట్ రైన్వాటర్ హార్వెస్టింగ్ & రీచార్జ్ సలహాదారు.",
        input_title:"మీ వివరాలు",
        ph_name:"మీ పేరు",ph_location:"స్థానం (GPS/మాన్యువల్)",ph_roof:"మేడ విస్తీర్ణం (m²)",ph_dwellers:"వాసుల సంఖ్య",ph_space:"ఖాళీ స్థలం (m²)",
        btn_submit:"లెక్కించండి",
        tank_label:"నీటి నిల్వ సామర్థ్యం",
        about_quick_title:"ఈ సాధనం ఏమి చేస్తుంది",
        about_quick_text:"సేకరణ, డిమాండ్ కవరేజ్ మరియు రీచార్జ్ పిట్ పరిమాణ సూచన. ప్రభావానికి క్రెడిట్లు సంపాదించండి.",
        pill_ai:"AI కాల్క్యులేటర్", pill_gis:"GIS + రన్ఆఫ్", pill_ar:"AR ప్రివ్యూ", pill_credits:"వాటర్ క్రెడిట్స్",
        about_title:"సిస్టమ్ ఆర్కిటెక్చర్",
        about_text:"ఇన్‌పుట్ నుండి AI+GIS ప్రాసెసింగ్, AR విజువలైజేషన్, ఖర్చు-లాభం & గేమిఫికేషన్ వరకు.",
        about_dl:"డేటా లేయర్", about_dl_items:"వర్షపాతం (IMD), భూగర్భజలం (CGWB), ఆక్విఫర్ & నేల.",
        about_pl:"ప్రాసెసింగ్", about_pl_items:"AI గణన, రన్ఆఫ్, ఖర్చు-లాభం, నిర్మాణ సూచనలు.",
        about_viz:"దృశ్యీకరణ", about_viz_items:"గుంత/ట్రెంచ్/ట్యాంక్ 3D/AR.",
        about_game:"గేమిఫికేషన్", about_game_items:"క్రెడిట్స్, లీడర్‌బోర్డ్, చాలెంజెస్, షేరింగ్.",
        about_market:"మార్కెట్‌ప్లేస్", about_market_items:"వెండర్లు, సబ్సిడీలు, RTRWH కిట్స్.",
        signin_title:"సైన్-ఇన్", signin_text:"SIH డెమో కోసం లాగిన్ తరువాత వస్తుంది. ఇప్పటికి కాల్క్యులేటర్ ని అన్వేషించండి.",
        ph_email:"ఈమెయిల్", ph_password:"పాస్‌వర్డ్", btn_signin:"సైన్-ఇన్", btn_create:"ఖాతా సృష్టించండి",
        leaderboard_title:"వాటర్ క్రెడిట్స్ లీడర్‌బోర్డ్", leaderboard_text:"100/200/500/1000 వద్ద బ్యాడ్జ్‌లు. మీ ప్రభావాన్ని పంచుకోండి!",
        th_rank:"#", th_name:"పేరు", th_credits:"క్రెడిట్స్", th_badge:"బ్యాడ్జ్", th_share:"షేర్",
        members_title:"సభ్యులు", members_text:"Jaljeevan.AI నిర్మాణ బృందం",
        footer_text:"© 2025 Jaljeevan.AI — నీటి సంరక్షణ కోసం కలిసికట్టుగా.",
        res_harvest:"అంచనా సేకరణ", res_coverage:"ఇంటి డిమాండ్ కవరేజ్", res_pit:"సూచించిన రీచార్జ్ పిట్ పరిమాణం",
        res_credits_prefix:"మీరు సంపాదించారు", res_credits_suffix:"వాటర్ క్రెడిట్స్ • లీడర్‌బోర్డ్‌లో చేర్చబడింది!",
        share_copied:"షేర్ టెక్స్ట్ కాపీ అయింది!",
        modal_title:"ప్రతి చుక్క విలువైనది", modal_text:"100 m² మేడ, 900 mm వర్షం ~90,000 లీ./ఏడాది రీచార్జ్ చేయగలదు.",
        btn_close:"మూసేయండి", badge_legend:"లెజెండ్ • 1000+", badge_master:"మాన్సూన్ మాస్టర్ • 500+", badge_champ:"ఆక్వా చాంప్ • 200+", badge_hero:"డ్రాప్ హీరో • 100+", badge_rookie:"రెయిన్‌డ్రాప్ రుకీ"
      },
      kn:{
        nav_home:"ಮುಖಪುಟ",nav_about:"ನಮ್ಮ ಬಗ್ಗೆ",nav_signin:"ಸೈನ್-ಇನ್",nav_leaderboard:"ಲೀಡರ್‌ಬೋರ್ಡ್",nav_members:"ಸದಸ್ಯರು",
        home_title:"Jaljeevan.AI ಗೆ ಸ್ವಾಗತ",
        home_text:"ಲೈವ್ ಡೇಟಾ, AR ಪೂರ್ವावलೋಕನ ಮತ್ತು ಗೇಮಿಫೈಡ್ ವಾಟರ್ ಕ್ರೆಡಿಟ್‌ಗಳೊಂದಿಗೆ ಸ್ಮಾರ್ಟ್ ಮಳೆನೀರು ಸಂಗ್ರಹಣೆ ಸಲಹೆಗಾರ.",
        input_title:"ನಿಮ್ಮ ವಿವರಗಳು",
        ph_name:"ನಿಮ್ಮ ಹೆಸರು",ph_location:"ಸ್ಥಳ (GPS/ಮಾನುಯಲ್)",ph_roof:"ಮೇಲುಮನೆಯ ವಿಸ್ತೀರ್ಣ (m²)",ph_dwellers:"ನಿವಾಸಿಗಳ ಸಂಖ್ಯೆ",ph_space:"ಲಭ್ಯ ಖಾಲಿ ಜಾಗ (m²)",
        btn_submit:"ಲೆಕ್ಕಿಸಿ",
        tank_label:"ನೀರಿನ ಸಂಗ್ರಹ ಸಾಮರ್ಥ್ಯ",
        about_quick_title:"ಈ ಸಾಧನದ ಕೆಲಸ",
        about_quick_text:"ಸಂಗ್ರಹ, ಬೇಡಿಕೆಯ ಕವರೆಜ್ ಮತ್ತು ರಿಚಾರ್ಜ್ ಪಿಟ್ ಗಾತ್ರ. ಪರಿಣಾಮಕ್ಕೆ ಕ್ರೆಡಿಟ್ ಗಳಿಸಿ.",
        pill_ai:"AI ಕ್ಯಾಲ್ಕ್ಯುಲೇಟರ್", pill_gis:"GIS + ರನ್‌ಆಫ್", pill_ar:"AR ಪೂರ್ವावलೋಕನ", pill_credits:"ವಾಟರ್ ಕ್ರೆಡಿಟ್ಸ್",
        about_title:"ಸಿಸ್ಟಂ ಆರ್ಕಿಟೆಕ್ಷರ್",
        about_text:"ಇನ್‌ಪುಟ್‌ನಿಂದ AI+GIS ಪ್ರಕ್ರಿಯೆ, AR ವೀಕ್ಷಣೆ, ವೆಚ್ಚ-ಲಾಭ ಮತ್ತು ಗೇಮಿಫಿಕೇಶನ್.",
        about_dl:"ಡೇಟಾ ಲೇಯರ್", about_dl_items:"ವರ್ಷಾ (IMD), ಭೂಗರ್ಭ ಜಲ (CGWB), ಅಕ್ವಿಫರ್ & ಮಣ್ಣು.",
        about_pl:"ಪ್ರೊಸೆಸಿಂಗ್", about_pl_items:"AI ಗಣನೆ, ರನ್‌ಆಫ್, ವೆಚ್ಚ-ಲಾಭ, ರಚನೆ ಶಿಫಾರಸು.",
        about_viz:"ವಿಜುವಲೈಜೇಶನ್", about_viz_items:"ಗುಂಡಿ/ಟ್ರೆಂಚ್/ಟ್ಯಾಂಕ್ 3D/AR.",
        about_game:"ಗೇಮಿಫಿಕೇಶನ್", about_game_items:"ಕ್ರೆಡಿಟ್ಸ್, ಲೀಡರ್‌ಬೋರ್ಡ್, ಚಾಲೆಂಜ್, ಹಂಚಿಕೆ.",
        about_market:"ಮಾರ್ಕೆಟ್‌ಪ್ಲೇಸ್", about_market_items:"ವ್ಯಾಪಾರಿಗಳು, ಸಬ್ಸಿಡಿ, RTRWH ಕಿಟ್‌ಗಳು.",
        signin_title:"ಸೈನ್-ಇನ್", signin_text:"SIH ಡೆಮೋಗೆ ಲಾಗಿನ್ ನಂತರ. ಈಗ ಕ್ಯಾಲ್ಕ್ಯುಲೇಟರ್ ಮತ್ತು ಲೀಡರ್‌ಬೋರ್ಡ್ ನೋಡಿ.",
        ph_email:"ಇಮೇಲ್", ph_password:"ಪಾಸ್ವರ್ಡ್", btn_signin:"ಸೈನ್-ಇನ್", btn_create:"ಖಾತೆ ಸೃಷ್ಟಿಸಿ",
        leaderboard_title:"ವಾಟರ್ ಕ್ರೆಡಿಟ್ಸ್ ಲೀಡರ್‌ಬೋರ್ಡ್", leaderboard_text:"100/200/500/1000ರಲ್ಲಿ ಬ್ಯಾಡ್ಜ್‌ಗಳು. ನಿಮ್ಮ ಪ್ರಭಾವ ಹಂಚಿಕೊಳ್ಳಿ!",
        th_rank:"#", th_name:"ಹೆಸರು", th_credits:"ಕ್ರೆಡಿಟ್ಸ್", th_badge:"ಬ್ಯಾಡ್ಜ್", th_share:"ಹಂಚಿಕೆ",
        members_title:"ತಂಡ ಸದಸ್ಯರು", members_text:"Jaljeevan.AI ನಿರ್ಮಾತೃಗಳು",
        footer_text:"© 2025 Jaljeevan.AI — ನೀರು ಸಂರಕ್ಷಣೆಗೆ ಒಟ್ಟಿಗೆ.",
        res_harvest:"ಸಂಭಾವ್ಯ ಸಂಗ್ರಹ", res_coverage:"ಗೃಹ ಬೇಡಿಕೆ ಕವರೆಜ್", res_pit:"ಶಿಫಾರಸು ಪಿಟ್ ಘನ ಪ್ರಮಾಣ",
        res_credits_prefix:"ನೀವು ಗಳಿಸಿದ್ದಾರೆ", res_credits_suffix:"ವಾಟರ್ ಕ್ರೆಡಿಟ್ಸ್ • ಲೀಡರ್‌ಬೋರ್ಡ್‌ಗೆ ಸೇರಿಸಲಾಗಿದೆ!",
        share_copied:"ಹಂಚಿಕೆ ಪಠ್ಯ ನಕಲಾಯಿತು!",
        modal_title:"ಪ್ರತಿ ಹನಿ ಅಮೂಲ್ಯ", modal_text:"100 m² ಮೂಡೆ, 900 mm ಮಳೆಯಲ್ಲಿ ~90,000 ಲಿ./ವರ್ಷ ರೀಚಾರ್ಜ್ ಸಾಧ್ಯ.",
        btn_close:"ಮುಚ್ಚಿ", badge_legend:"ಲೆಜೆಂಡ್ • 1000+", badge_master:"ಮೋನ್ಸೂನ್ ಮಾಸ್ಟರ್ • 500+", badge_champ:"ಅಕ್ವಾ ಚ್ಯಾಂಪ್ • 200+", badge_hero:"ಡ್ರಾಪ್ ಹೀರೋ • 100+", badge_rookie:"ರೇನ್ಡ್ರಾಪ್ ರೂಕಿ"
      },
      pa:{
        nav_home:"ਹੋਮ",nav_about:"ਸਾਡੇ ਬਾਰੇ",nav_signin:"ਸਾਈਨ-ਇਨ",nav_leaderboard:"ਲੀਡਰਬੋਰਡ",nav_members:"ਮੈਂਬਰ",
        home_title:"Jaljeevan.AI ’ਚ ਸਵਾਗਤ ਹੈ",
        home_text:"ਲਾਈਵ ਡਾਟਾ, AR ਪ੍ਰੀਵਿਊ ਤੇ ਗੇਮਿਫਾਇਡ ਵਾਟਰ ਕਰੈਡਿਟਸ ਨਾਲ ਸਮਾਰਟ ਵਰਖਾ ਜਲ ਸੰਭਾਲ ਸਲਾਹਕਾਰ।",
        input_title:"ਆਪਣੀ ਜਾਣਕਾਰੀ ਦੇਵੋ",
        ph_name:"ਤੁਹਾਡਾ ਨਾਮ",ph_location:"ਸਥਿਤੀ (GPS/ਮੈਨੁਅਲ)",ph_roof:"ਛੱਤ ਖੇਤਰ (m²)",ph_dwellers:"ਰਹਿਣ ਵਾਲੇ",ph_space:"ਖੁੱਲ੍ਹੀ ਥਾਂ (m²)",
        btn_submit:"ਗਿਣਨਾ ਕਰੋ",
        tank_label:"ਪਾਣੀ ਸਟੋਰੇਜ ਸਮਰੱਥਾ",
        about_quick_title:"ਇਹ ਟੂਲ ਕੀ ਕਰਦਾ ਹੈ",
        about_quick_text:"ਸੰਗ੍ਰਹਿ, ਮੰਗ ਕਵਰੇਜ ਅਤੇ ਰੀਚਾਰਜ ਪਿੱਟ ਅਕਾਰ ਦੀ ਸਿਫਾਰਸ਼। ਪ੍ਰਭਾਵ ਲਈ ਕਰੈਡਿਟਸ ਕਮਾਓ।",
        pill_ai:"AI ਕੈਲਕੁਲੇਟਰ", pill_gis:"GIS + ਰਨਆਫ", pill_ar:"AR ਪ੍ਰੀਵਿਊ", pill_credits:"ਵਾਟਰ ਕਰੈਡਿਟਸ",
        about_title:"ਸਿਸਟਮ ਆਰਕੀਟੈਕਚਰ",
        about_text:"ਇਨਪੁੱਟ ਤੋਂ AI+GIS ਪ੍ਰੋਸੈਸਿੰਗ, AR ਵਿਜੁਅਲ, ਲਾਗਤ-ਲਾਭ ਅਤੇ ਗੇਮਿਫਿਕੇਸ਼ਨ।",
        about_dl:"ਡਾਟਾ ਲੇਅਰ", about_dl_items:"ਵਰਖਾ (IMD), ਭੂਗਰਭ ਜਲ (CGWB), ਐਕੁਈਫਰ ਤੇ ਮਿੱਟੀ।",
        about_pl:"ਪ੍ਰੋਸੈਸਿੰਗ", about_pl_items:"AI ਹਿਸਾਬ, ਰਨਆਫ, ਲਾਗਤ-ਲਾਭ, ਢਾਂਚਾ ਸਿਫਾਰਸ਼ਾਂ।",
        about_viz:"ਦ੍ਰਿਸ਼ਟੀਕਰਨ", about_viz_items:"ਖੱਡਾ/ਖਾਈ/ਟੈਂਕ 3D/AR.",
        about_game:"ਗੇਮਿਫਿਕੇਸ਼ਨ", about_game_items:"ਕਰੈਡਿਟਸ, ਲੀਡਰਬੋਰਡ, ਚੁਣੌਤੀਆਂ, ਸਾਂਝਾ ਕਰਨਾ।",
        about_market:"ਮਾਰਕੀਟਪਲੇਸ", about_market_items:"ਵਿਕਰੇਤਾ, ਸਬਸਿਡੀ, RTRWH ਕਿੱਟਾਂ।",
        signin_title:"ਸਾਈਨ-ਇਨ", signin_text:"SIH ਡੈਮੋ ਲਈ ਲਾਗਇਨ ਬਾਅਦ ਵਿੱਚ। ਹੁਣ ਕੈਲਕੁਲੇਟਰ ਤੇ ਲੀਡਰਬੋਰਡ ਵੇਖੋ।",
        ph_email:"ਈਮੇਲ", ph_password:"ਪਾਸਵਰਡ", btn_signin:"ਸਾਈਨ-ਇਨ", btn_create:"ਖਾਤਾ ਬਣਾਓ",
        leaderboard_title:"ਵਾਟਰ ਕਰੈਡਿਟਸ ਲੀਡਰਬੋਰਡ", leaderboard_text:"100/200/500/1000 ’ਤੇ ਬੈਜ। ਆਪਣਾ ਅਸਰ ਸਾਂਝਾ ਕਰੋ!",
        th_rank:"#", th_name:"ਨਾਮ", th_credits:"ਕ੍ਰੈਡਿਟਸ", th_badge:"ਬੈਜ", th_share:"ਸ਼ੇਅਰ",
        members_title:"ਟੀਮ ਮੈਂਬਰ", members_text:"Jaljeevan.AI ਬਣਾਉਣ ਵਾਲੇ",
        footer_text:"© 2025 Jaljeevan.AI — ਪਾਣੀ ਬਚਾਅ ਲਈ ਇਕੱਠੇ.",
        res_harvest:"ਸੰਭਾਵੀ ਸੰਗ੍ਰਹਿ", res_coverage:"ਘਰੇਲੂ ਮੰਗ ਕਵਰੇਜ", res_pit:"ਸਿਫਾਰਸ਼ੀ ਰੀਚਾਰਜ ਪਿੱਟ ਘਣਤਾ",
        res_credits_prefix:"ਤੁਸੀਂ ਕਮਾਏ", res_credits_suffix:"ਵਾਟਰ ਕਰੈਡਿਟਸ • ਲੀਡਰਬੋਰਡ ਵਿੱਚ ਜੋੜਿਆ!",
        share_copied:"ਸ਼ੇਅਰ ਲਿਖਤ ਕਾਪੀ ਹੋਈ!",
        modal_title:"ਹਰ ਬੂੰਦ ਕੀਮਤੀ", modal_text:"100 m² ਛੱਤ, 900 mm ਵਰਖਾ ’ਚ ~90,000 ਲੀ./ਸਾਲ ਰੀਚਾਰਜ ਹੋ ਸਕਦਾ ਹੈ।",
        btn_close:"ਬੰਦ ਕਰੋ", badge_legend:"ਲੈਜੈਂਡ • 1000+", badge_master:"ਮੋਨਸੂਨ ਮਾਸਟਰ • 500+", badge_champ:"ਅਕਵਾ ਚੈਂਪ • 200+", badge_hero:"ਡ੍ਰਾਪ ਹੀਰੋ • 100+", badge_rookie:"ਰੇਨਡ੍ਰਾਪ ਰੂਕੀ"
      },
      ml:{
        nav_home:"ഹോം",nav_about:"ഞങ്ങളെ കുറിച്ച്",nav_signin:"സൈൻ-ഇൻ",nav_leaderboard:"ലീഡർബോർഡ്",nav_members:"അംഗങ്ങൾ",
        home_title:"Jaljeevan.AI-ലേക്ക് സ്വാഗതം",
        home_text:"ലൈവ് ഡേറ്റ, AR പ്രിവ്യൂ, ഗെയിമിഫൈഡ് വാട്ടർ ക്രെഡിറ്റ്‌സുമായി സ്മാർട്ട് മഴവെള്ള സംഭരണ ഉപദേഷ്ടാവ്.",
        input_title:"നിങ്ങളുടെ വിശദാംശങ്ങൾ",
        ph_name:"നിങ്ങളുടെ പേര്",ph_location:"സ്ഥലം (GPS/മാനുവൽ)",ph_roof:"മേൽക്കൂര വിസ്തൃതി (m²)",ph_dwellers:"താമസക്കാർ",ph_space:"തുറസ്സായ സ്ഥലം (m²)",
        btn_submit:"കണക്കാക്കുക",
        tank_label:"ജല സംഭരണ ശേഷി",
        about_quick_title:"ഈ ടൂൾ ചെയ്യുന്നത്",
        about_quick_text:"സമാഹാരം, ആവശ്യം കവർേജ്, റീചാർജ് പിറ്റ് വോള്യം എന്നിവ കണക്കാക്കുന്നു. സ്വാധീനത്തിന് ക്രെഡിറ്റുകൾ നേടൂ.",
        pill_ai:"AI കാൽക്കുലേറ്റർ", pill_gis:"GIS + റൺഓഫ്", pill_ar:"AR പ്രിവ്യൂ", pill_credits:"വാട്ടർ ക്രെഡിറ്റ്സ്",
        about_title:"സിസ്റ്റം ആർക്കിടെക്ചർ",
        about_text:"ഇൻപുട്ടിൽ നിന്ന് AI+GIS പ്രോസസ്സിംഗ്, AR ദൃശ്യവൽക്കരണം, ചെലവ്-ലാഭം, ഗെയിമിഫിക്കേഷൻ.",
        about_dl:"ഡാറ്റ ലെയർ", about_dl_items:"മഴ (IMD), ഭൂഗർഭജലം (CGWB), അക്വിഫർ & മണ്ണ്.",
        about_pl:"പ്രോസസ്സിംഗ്", about_pl_items:"AI കണക്കുകൂട്ടൽ, റൺഓഫ്, ചെലവ്-ലാഭം, ഘടന ശുപാർശ.",
        about_viz:"ദൃശ്യവൽക്കരണം", about_viz_items:"കുഴി/ട്രെഞ്ച്/ടാങ്ക് 3D/AR.",
        about_game:"ഗെയിമിഫിക്കേഷൻ", about_game_items:"ക്രെഡിറ്റുകൾ, ലീഡർബോർഡ്, ചലഞ്ചുകൾ, ഷെയറിംഗ്.",
        about_market:"മാർക്കറ്റ്പ്ലേസ്", about_market_items:"വെണ്ടേഴ്സ്, സബ്സിഡി, RTRWH കിറ്റുകൾ.",
        signin_title:"സൈൻ-ഇൻ", signin_text:"SIH ഡെമോയ്ക്ക് ലോഗിൻ ശേഷം ലഭ്യമാകും. ഇപ്പോൾ കാൽക്ക് & ലീഡർബോർഡ് കാണാം.",
        ph_email:"ഇമെയിൽ", ph_password:"പാസ്‌വേഡ്", btn_signin:"സൈൻ-ഇൻ", btn_create:"അക്കൗണ്ട് സൃഷ്‌ടിക്കുക",
        leaderboard_title:"വാട്ടർ ക്രെഡിറ്റ്സ് ലീഡർബോർഡ്", leaderboard_text:"100/200/500/1000-ൽ ബാഡ്ജുകൾ. നിങ്ങളുടെ സ്വാധീനം പങ്കിടൂ!",
        th_rank:"#", th_name:"പേര്", th_credits:"ക്രെഡിറ്റ്സ്", th_badge:"ബാഡ്ജ്", th_share:"ഷെയർ",
        members_title:"ടീം അംഗങ്ങൾ", members_text:"Jaljeevan.AI ഉണ്ടാക്കുന്നവർ",
        footer_text:"© 2025 Jaljeevan.AI — ജല സംരക്ഷണത്തിന് ഒരുമിച്ച്.",
        res_harvest:"സാധ്യമായ ശേഖരണം", res_coverage:"ഗൃഹാവശ്യ കവറേജ്", res_pit:"ശുപാർശ ചെയ്ത കുഴി വോള്യം",
        res_credits_prefix:"നിങ്ങൾ നേടി", res_credits_suffix:"വാട്ടർ ക്രെഡിറ്റ്സ് • ലീഡർബോർഡിൽ ചേർത്തു!",
        share_copied:"ഷെയർ ടെക്സ്റ്റ് പകർത്തി!",
        modal_title:"ഓരോ തുള്ളിയും വിലപ്പെട്ടത്", modal_text:"100 m² മേൽക്കൂര, 900 mm മഴയിൽ ~90,000 ലി./വർഷം റീചാർജ് ചെയ്യാം.",
        btn_close:"അടയ്ക്കുക", badge_legend:"ലെജൻഡ് • 1000+", badge_master:"മോൺസൂൺ മാസ്റ്റർ • 500+", badge_champ:"അക്വാ ചാമ്പ് • 200+", badge_hero:"ഡ്രോപ്പ് ഹീറോ • 100+", badge_rookie:"റെയിൻഡ്രോപ്പ് റുക്കി"
      }
    };

    const langSel = document.getElementById('lang');
    function t(key){
      const L = langSel.value;
      return (tdata[L] && tdata[L][key]) || (tdata.en[key]||key);
    }
    function applyI18n(){
      document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent = t(el.getAttribute('data-i18n')));
      document.querySelectorAll('[data-i18n-ph]').forEach(el=>el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph'))));
      // rerender dynamic bits if any calculated
      renderLB(); renderResult();
    }
    langSel.addEventListener('change', applyI18n);
    applyI18n();

    /* ---------- Calculator + Tank + Credits ---------- */
    let lastCalc = null;
    document.getElementById('calcBtn').addEventListener('click', ()=>{
      const roof = +document.getElementById('roof').value||0;
      const dwellers = Math.max(1, +document.getElementById('dwellers').value||1);
      const space = +document.getElementById('space').value||0;
      const name = (document.getElementById('name').value||'You').trim();

      // Simple, defensible demo model
      const annualRain_mm = 900, runoffCoeff = 0.9;
      const harvestLiters = roof * (annualRain_mm/1000) * runoffCoeff * 1000; // L/yr
      const perCapitaNeed = 135*365; // L/person/yr
      const coverage = Math.min(100, Math.round( (harvestLiters / (dwellers*perCapitaNeed)) * 100 ));
      const pitVol_m3 = Math.max(0, Math.min(harvestLiters*0.15/1000, space*1.2)); // cap at space*1.2
      const credits = Math.min(1000, Math.round(harvestLiters/500)); // gamified

      // Visual tank = demand coverage %
      const tank = document.getElementById('tank');
      const water = document.getElementById('tankWater');
      tank.hidden = false;
      requestAnimationFrame(()=>{ water.style.height = coverage + '%'; });

      lastCalc = {harvestLiters, coverage, pitVol_m3, credits, name};
      renderResult();

      // update leaderboard
      addOrUpdatePlayer(name, credits);
      show('leaderboard');
    });

    function renderResult(){
      const box = document.getElementById('result');
      if(!lastCalc){ box.hidden = true; return; }
      const L = lastCalc;
      box.hidden = false;
      box.innerHTML = `
        <div><b>${t('res_harvest')}:</b> ${Math.round(L.harvestLiters).toLocaleString()} L/yr</div>
        <div><b>${t('res_coverage')}:</b> ${L.coverage}%</div>
        <div><b>${t('res_pit')}:</b> ${L.pitVol_m3.toFixed(1)} m³</div>
        <div class="badge" style="margin-top:8px">💧 ${t('res_credits_prefix')} <b>${L.credits}</b> ${t('res_credits_suffix')}</div>
      `;
    }

    /* ---------- Leaderboard & Badges ---------- */
    const lbBody = document.getElementById('lb');
    const players = [
      {name:'Aisha', credits:940},
      {name:'Rohit', credits:380},
      {name:'Neeraj', credits:160},
      {name:'Zoya', credits:60}
    ];

    function badgeFor(c){
      if(c>=1000) return {label:t('badge_legend'), emoji:'🌧️👑'};
      if(c>=500)  return {label:t('badge_master'), emoji:'🌧️🏆'};
      if(c>=200)  return {label:t('badge_champ'),  emoji:'💧✨'};
      if(c>=100)  return {label:t('badge_hero'),   emoji:'💧⭐'};
      return {label:t('badge_rookie'), emoji:'💧'};
    }
    function renderLB(){
      lbBody.innerHTML='';
      players.sort((a,b)=>b.credits-a.credits).forEach((p,i)=>{
        const b = badgeFor(p.credits);
        const tr = document.createElement('tr');
        const shareBtn = `<button class="btn" style="background:#fff;border:1px dashed var(--border)" onclick="shareScore('${p.name}',${p.credits})">${t('th_share')}</button>`;
        tr.innerHTML = `
          <td>${i+1}</td>
          <td>${p.name}</td>
          <td>${p.credits}</td>
          <td><span class="badge">${b.emoji} ${b.label}</span></td>
          <td>${shareBtn}</td>`;
        lbBody.appendChild(tr);
      });
    }
    function addOrUpdatePlayer(name, credits){
      const f = players.find(p=>p.name.toLowerCase()===name.toLowerCase());
      if(f){ f.credits = Math.max(f.credits, credits); } else { players.push({name, credits}); }
      renderLB();
    }
    window.shareScore = async (name, credits)=>{
      const text = `${name} • ${credits} Water Credits – Jaljeevan.AI`;
      if(navigator.share){
        try{ await navigator.share({title:'Jaljeevan.AI', text, url:location.href}); }catch(_){}
      }else{
        try{ await navigator.clipboard.writeText(text+' '+location.href); alert(t('share_copied')); }catch(_){}
      }
    };
    renderLB();

    /* ---------- Members ---------- */
  const members = [
    {name:'Sovan',  role:'Lead – Frontend & Product', bio:'Clean UI/UX. Technical deep dives.', initials:'SO'},
    {name:'Aayush', role:'AI/ML – Hydrology',        bio:'Rainfall → runoff modeling.',       initials:'AY'},
    {name:'Manish', role:'Geospatial & Data',        bio:'CGWB/IMD integration, GIS stacks.', initials:'MA'},
    {name:'Sandip', role:'AR/3D',                    bio:'WebXR / ARCore overlays.',          initials:'SA'},
    {name:'Tithes', role:'Community & Partnerships', bio:'Vendors, NGOs, subsidies.',         initials:'TI'}
  ];

  window.addEventListener("DOMContentLoaded", () => {
    const membersList = document.getElementById("membersList");
    if (!membersList) return;

    members.forEach(m => {
      const card = document.createElement("div");
      card.className = "member-card";
      card.innerHTML = `
        <div class="member-initials">${m.initials}</div>
        <div class="member-name">${m.name}</div>
        <div class="member-role">${m.role}</div>
        <div class="member-bio">${m.bio}</div>
      `;
      membersList.appendChild(card);
    });
  });