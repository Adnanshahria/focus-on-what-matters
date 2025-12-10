// Focus on What Matters - Complete Chapter Data
// Generated: 2025-12-10T08:58:38.587Z
// Chapters: 83 | Quotes: 180 | Insights: 358

export interface Chapter {
  id: number;
  sectionTitle: string;
  chapterTitle: string;
  goldenQuotes: string[];
  coreInsights: { title: string; content: string }[];
  practicalApplication: string;
  criticalReflection: string;
  expectedOutcomes: { individual: string; social: string };
}

export interface Section {
  id: number;
  title: string;
  titleBengali: string;
  chapters: number[];
}

export const sections: Section[] = [
  { id: 1, title: "The Inner World", titleBengali: "অভ্যন্তরীণ জগৎ", chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44] },
  { id: 2, title: "The Outer World", titleBengali: "বহির্জগৎ", chapters: [45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83] }
];

export const chapters: Chapter[] = [
  {
    "id": 1,
    "sectionTitle": "The Inner World",
    "chapterTitle": "The Foundation of Inner Stability",
    "goldenQuotes": [
      "All improvement starts within.",
      "We can’t be happy and comfortable in the world if we are not the same in our minds.",
      "With Stoic wisdom, we can guard our minds against the things that disrupt our happiness.",
      "A strong mind is a peaceful mind."
    ],
    "coreInsights": [
      {
        "title": "অভ্যন্তরীণ উন্নতির গুরুত্ব",
        "content": "বাহ্যিক জগৎ পরিবর্তনের আগে নিজের মানসিক অবস্থার উন্নতি করা অপরিহার্য। মন স্থিতিশীল না হলে বাইরের সুখ দীর্ঘস্থায়ী হয় না।"
      },
      {
        "title": "স্টয়িক দর্শনের ঢাল",
        "content": "স্টয়িক দর্শন আমাদের মনের জন্য একটি সুরক্ষা কবচ হিসেবে কাজ করে, যা বাহ্যিক বিশৃঙ্খলা থেকে আমাদের সুখকে রক্ষা করে।"
      },
      {
        "title": "মানসিক স্থিতিস্থাপকতা (Resilience)",
        "content": "একটি শক্তিশালী এবং স্থিতিস্থাপক মনই প্রকৃত শান্তির উৎস; বাইরের পরিস্থিতি যাই হোক না কেন, মনের শান্তি ধরে রাখা সম্ভব।"
      },
      {
        "title": "মন ও জগতের সংযোগ",
        "content": "আমাদের মনের অবস্থা সরাসরি আমাদের বাহ্যিক অভিজ্ঞতার ওপর প্রভাব ফেলে।"
      }
    ],
    "practicalApplication": "প্রতিদিন সকালে ঘুম থেকে ওঠার পর ৫ মিনিট সময় নিন নিজের মানসিক অবস্থা পর্যবেক্ষণ করার জন্য। যদি কোনো বাহ্যিক ঘটনা (যেমন ট্রাফিক বা খারাপ আবহাওয়া) আপনার মেজাজ খারাপ করে, তবে নিজেকে মনে করিয়ে দিন যে বাইরের ঘটনা নিয়ন্ত্রণ করা সম্ভব নয়, কিন্তু নিজের প্রতিক্রিয়া নিয়ন্ত্রণ করা সম্ভব। \"আমি শান্ত থাকব\"—এই মন্ত্রটি মনে মনে জপ করুন।",
    "criticalReflection": "The chapter posits that happiness is almost entirely an internal construct. While empowering, this perspective risks diminishing the impact of severe external stressors such as systemic poverty, trauma, or oppression. Sociologically, placing the burden of well-being solely on the individual's \"strong mind\" can lead to victim-blaming, ignoring the environmental factors that genuinely disrupt mental peace regardless of one's Stoic resolve.",
    "expectedOutcomes": {
      "individual": "Enhanced emotional regulation and a significant reduction in reactivity to daily annoyances.",
      "social": "A calmer demeanor in social interactions, potentially reducing interpersonal conflicts, though it might also lead to passivity regarding social injustices if one becomes too detached from \"external\" problems."
    }
  },
  {
    "id": 2,
    "sectionTitle": "The Inner World",
    "chapterTitle": "Harnessing the Divine Power Within",
    "goldenQuotes": [
      "Understand at last that you have something in you more powerful and divine than what causes the bodily passions and pulls you like a mere puppet."
    ],
    "coreInsights": [
      {
        "title": "আবেগের ওপর নিয়ন্ত্রণ",
        "content": "আমাদের ভেতরে এমন একটি শক্তি আছে যা আমাদের শারীরিক আবেগ বা উত্তেজনার চেয়েও বেশি শক্তিশালী।"
      },
      {
        "title": "পুতুল নাচের উপমা",
        "content": "আমরা প্রায়শই আবেগের দ্বারা চালিত হই, যেন আমরা সুতোয় বাঁধা পুতুল। এই অধ্যায় আমাদের সেই সুতো ছিড়ে ফেলার আহ্বান জানায়।"
      },
      {
        "title": "যৌক্তিকতা বনাম আবেগ",
        "content": "তাৎক্ষণিক আবেগের বশবর্তী না হয়ে যুক্তির মাধ্যমে পরিস্থিতি বিচার করার ক্ষমতা অর্জন করা।"
      },
      {
        "title": "আত্ম-সচেতনতা",
        "content": "নিজের ভেতরের \"divine\" বা মহৎ সত্তাটিকে চিনে নেওয়া, যা আমাদের পশুসুলভ প্রবৃত্তি থেকে আলাদা করে।"
      }
    ],
    "practicalApplication": "যখনই খুব রাগ বা ভয় অনুভব করবেন, তাৎক্ষণিকভাবে কোনো প্রতিক্রিয়া দেখাবেন না। \"পজ বাটন\" চাপুন। নিজেকে প্রশ্ন করুন: \"আমি কি এখন আবেগের সুতোয় বাঁধা পুতুলের মতো আচরণ করছি?\" গভীরভাবে শ্বাস নিন এবং ভাবুন আপনার \"উচ্চতর সত্তা\" (Higher Self) এই পরিস্থিতিতে কী করত। তারপর ধীরস্থিরে কাজ করুন।",
    "criticalReflection": "আবেগকে \"পুতুল নাচের সুতো\" হিসেবে দেখা যুক্তি (ভালো) এবং আবেগের (খারাপ) মধ্যে একটি বিভাজন তৈরি করে। আধুনিক মনোবিজ্ঞান বলে, আবেগ কেবল জয়ের বাধাই নয়, বরং গুরুত্বপূর্ণ সংকেত। \"ঐশ্বরিক\" স্তরে পৌঁছানোর জন্য আবেগকে দমন করা মানসিক অসাড়তা বা অ্যালেক্সিথাইমিয়া (আবেগ বুঝতে না পারা) তৈরি করতে পারে। সামাজিকভাবে, এই স্টয়িক অবদমন প্রায়ই \"টক্সিক ম্যাসকুলিনিটি\"-র সাথে যুক্ত, যেখানে দুর্বলতা প্রকাশকে দুর্বলতা হিসেবে দেখা হয়।",
    "expectedOutcomes": {
      "individual": "উদ্দীপনা এবং প্রতিক্রিয়ার মাঝখানে একটি \"বিরতি বা পজ\" তৈরি করা, যা আরও বুদ্ধিদীপ্ত সিদ্ধান্তে সহায়ক।",
      "social": "ব্যক্তিরা কম অস্থির এবং আরও নির্ভরযোগ্য হয়ে ওঠে, যা দলের স্থিতিশীলতা বাড়ায়। তবে সহমর্মিতা প্রত্যাশী প্রিয়জনদের কাছে তাদের আবেগহীন মনে হতে পারে।"
    }
  },
  {
    "id": 3,
    "sectionTitle": "The Inner World",
    "chapterTitle": "The Dichotomy of Control",
    "goldenQuotes": [
      "It’s so important to only focus on what you control.",
      "Time is your most valuable resource.",
      "Without accepting that we don’t control most things in life, we can never have lasting happiness.",
      "What actually matters to your happiness? Good friendships, work that you enjoy, reading books that make you think, walking in nature, working out, watching a good movie — you know this."
    ],
    "coreInsights": [
      {
        "title": "নিয়ন্ত্রণের সীমানা",
        "content": "জীবনের অধিকাংশ বিষয়ই আমাদের নিয়ন্ত্রণের বাইরে; কেবল আমাদের চিন্তা ও কর্ম আমাদের নিয়ন্ত্রণে। এটি মেনে নেওয়াই সুখের চাবিকাঠি।"
      },
      {
        "title": "সময়ের সঠিক ব্যবহার",
        "content": "অনিয়ন্ত্রিত বিষয়ে চিন্তা করা মানেই সময়ের অপচয়। সময় সবচেয়ে মূল্যবান সম্পদ, তাই তা দুশ্চিন্তায় ব্যয় করা উচিত নয়।"
      },
      {
        "title": "তুচ্ছ বিষয়ে উদাসীনতা",
        "content": "জাতীয় বা আন্তর্জাতিক যেসব সংকট আমরা সমাধান করতে পারব না, সেগুলোর প্রতি উদাসীন থাকা মানসিক শান্তির জন্য জরুরি।"
      },
      {
        "title": "সুখের উৎস",
        "content": "প্রকৃত সুখ ছোট ছোট বিষয়—যেমন ভালো বন্ধুত্ব, অর্থবহ কাজ বা প্রকৃতির মাঝে হাঁটা—থেকে আসে।"
      }
    ],
    "practicalApplication": "একটি কাগজে দুটি কলাম তৈরি করুন। বাম পাশে লিখুন \"আমার নিয়ন্ত্রণে আছে\" (যেমন: আমার চেষ্টা, আমার সততা) এবং ডান পাশে লিখুন \"আমার নিয়ন্ত্রণে নেই\" (যেমন: অন্যের মতামত, আবহাওয়া, ট্রাফিক)। যখনই কোনো বিষয়ে চিন্তা হবে, দেখুন সেটি কোন কলামে পড়ে। ডান পাশের কলামের বিষয়গুলো নিয়ে ভাবা এখনই বন্ধ করুন।",
    "criticalReflection": "The advice to practice \"indifference\" toward national or international crises can foster political apathy. While excellent for personal tranquility, if applied collectively, it could erode civic engagement and social responsibility. A society where everyone focuses only on their immediate circle might fail to address systemic issues like climate change or inequality, which require collective concern about \"external\" matters.",
    "expectedOutcomes": {
      "individual": "Immediate reduction in anxiety levels and a sharp increase in productivity regarding personal goals.",
      "social": "A potential decrease in civic activism, but an increase in stronger, more supportive immediate communities (family/friends)."
    }
  },
  {
    "id": 4,
    "sectionTitle": "The Inner World",
    "chapterTitle": "Emotional Boundaries and Autonomy",
    "goldenQuotes": [
      "When we decide to change our view of the world, it’s an internal decision.",
      "That’s how you protect your mood: By not feeling responsible for how others feel."
    ],
    "coreInsights": [
      {
        "title": "আবেগের সংক্রমণ",
        "content": "অন্যের নেতিবাচক আবেগ আমাদের অজান্তেই প্রভাবিত করতে পারে; একে বলা হয় \"Emotional Contagion\"।"
      },
      {
        "title": "সহমর্মিতা বনাম আত্মীকরণ",
        "content": "অন্যের দুঃখে সহমর্মী হওয়া ভালো, কিন্তু সেই দুঃখ নিজের ভেতরে ধারণ করা উচিত নয়।"
      },
      {
        "title": "দায়িত্বের সীমারেখা",
        "content": "অন্যের অনুভূতির দায়িত্ব আপনার নয়। আপনি কাউকে সাহায্য করতে পারেন, কিন্তু তাদের ভালো রাখার দায়িত্ব কাঁধে নিলে নিজের শান্তি নষ্ট হবে।"
      },
      {
        "title": "অভ্যন্তরীণ সিদ্ধান্ত",
        "content": "বিশ্বকে কীভাবে দেখব, তা সম্পূর্ণ আমাদের নিজস্ব অভ্যন্তরীণ সিদ্ধান্তের ওপর নির্ভরশীল।"
      }
    ],
    "practicalApplication": "যদি কোনো বন্ধু বা সহকর্মী ক্রমাগত নেতিবাচক কথা বলে, তবে \"Mental Shield\" বা মানসিক ঢাল কল্পনা করুন। তাদের কথা শুনুন, কিন্তু ভাবুন যে সেই কথাগুলো আপনার ঢালে ধাক্কা খেয়ে ফিরে যাচ্ছে। মনে মনে বলুন, \"আমি তোমার কষ্টে সমব্যথী, কিন্তু এই কষ্ট আমার নয়।\" আলোচনা শেষে দ্রুত নিজের পছন্দের কোনো কাজে মন দিন।",
    "criticalReflection": "The distinction between empathy and internalizing pain is clinically sound, yet the instruction to \"not feel responsible for how others feel\" can act as a barrier to deep intimacy. In close relationships (partners, parents), emotional regulation is often co-dependent. Strict adherence to this rule might make one appear cold or uncaring, potentially damaging trust in vulnerable moments where shared emotional burden is expected.",
    "expectedOutcomes": {
      "individual": "Preservation of emotional energy and prevention of \"empathy burnout.\"",
      "social": "Healthier boundaries in toxic relationships, though potentially strained dynamics in relationships requiring deep emotional fusion."
    }
  },
  {
    "id": 5,
    "sectionTitle": "The Inner World",
    "chapterTitle": "Knowledge as Fuel",
    "goldenQuotes": [
      "When you’re lost, unfocused, or lacking motivation, grab a book about a topic you’re interested in.",
      "If you don’t have a higher purpose, you can make the pursuit of knowledge your purpose.",
      "Effort nourishes noble spirits.",
      "When you keep learning, you will never be unmotivated for longer than a few days."
    ],
    "coreInsights": [
      {
        "title": "জ্ঞানই শক্তি",
        "content": "যখন জীবনে কোনো লক্ষ্য খুঁজে পাওয়া যায় না, তখন নতুন কিছু শেখাই হতে পারে বাঁচার প্রেরণা।"
      },
      {
        "title": "কৌতূহলের ব্যবহার",
        "content": "নিজের আগ্রহের বিষয় (যেমন ইতিহাস, স্টক মার্কেট বা লেখালেখি) নিয়ে পড়াশোনা করলে হারানো মনোযোগ ফিরে আসে।"
      },
      {
        "title": "প্রচেষ্টার মর্যাদা",
        "content": "সেনেকার মতে, সৎ প্রচেষ্টা এবং শ্রম মহৎ আত্মাকে পুষ্ট করে। ফলাফল যা-ই হোক, প্রচেষ্টাই আনন্দ।"
      },
      {
        "title": "ধারাবাহিক শিক্ষা",
        "content": "ক্রমাগত শেখার প্রক্রিয়ার মধ্যে থাকলে দীর্ঘস্থায়ী হতাশা বা demotivation গ্রাস করতে পারে না।"
      }
    ],
    "practicalApplication": "যখনই অলসতা বা হতাশা অনুভব করবেন, সোশ্যাল মিডিয়া স্ক্রল না করে একটি বই হাতে নিন। কোনো নির্দিষ্ট লক্ষ্যের জন্য নয়, কেবল জানার আগ্রহ থেকে পড়ুন। আজই ঠিক করুন, আগামী এক সপ্তাহ প্রতিদিন অন্তত ১০ পৃষ্ঠা পড়বেন। নতুন কোনো দক্ষতা (যেমন কোডিং বা নতুন ভাষা) শেখার ছোট পদক্ষেপ নিন।",
    "criticalReflection": "This chapter intellectualizes motivation, assuming that \"knowledge\" is the universal cure for lethargy. For individuals suffering from clinical depression or burnout, simply \"grabbing a book\" is not feasible and might induce guilt. Furthermore, the fetishization of constant learning can lead to \"productive procrastination,\" where one consumes information to avoid taking real, possibly scary, actions in the real world.",
    "expectedOutcomes": {
      "individual": "A sharp mind, diverse skill set, and a reliable method to jumpstart momentum during stagnant periods.",
      "social": "A more informed and intellectually curious society, though potentially one that values theory over practice if not balanced with execution."
    }
  },
  {
    "id": 6,
    "sectionTitle": "The Inner World",
    "chapterTitle": "Normalizing and Detaching form Anxiety",
    "goldenQuotes": [
      "If you want to make progress, stop feeling anxious about things.",
      "You can’t make people like you — and that’s fine.",
      "When you choose not to be anxious, you do it in spite of your unfulfilled expectations.",
      "Nothing is worth giving up your peace of mind for."
    ],
    "coreInsights": [
      {
        "title": "উদ্বেগের স্বাভাবিকতা",
        "content": "ক্ষুধা যেমন শরীরের একটি সংকেত, উদ্বেগও মনের একটি সংকেত। একে জীবনের স্বাভাবিক অংশ হিসেবে মেনে নিতে হবে।"
      },
      {
        "title": "প্রত্যাশা বনাম বাস্তবতা",
        "content": "আমাদের উদ্বেগ বা দুশ্চিন্তার মূল কারণ হলো আমাদের অবাস্তব প্রত্যাশা। আমরা চাই সবাই আমাদের পছন্দ করুক, যা অসম্ভব।"
      },
      {
        "title": "ফলাফল থেকে বিচ্ছিন্নতা (Detachment)",
        "content": "কর্মফল বা অন্যের মতামত নিয়ে দুশ্চিন্তা না করে ফলাফলের প্রতি নির্লিপ্ত হওয়া শিখতে হবে।"
      },
      {
        "title": "মনের শান্তির অগ্রাধিকার",
        "content": "কোনো চাকরি, সম্পর্ক বা সুযোগই আপনার মানসিক শান্তির চেয়ে মূল্যবান নয়।"
      }
    ],
    "practicalApplication": "যখনই দুশ্চিন্তা হবে, নিজেকে বলুন, \"এই দুশ্চিন্তা আমার সমস্যার সমাধান করবে না।\" নিজেকে প্রশ্ন করুন, \"সবচেয়ে খারাপ কী হতে পারে?\" এবং সেটার জন্য মানসিকভাবে প্রস্তুত হোন। এরপর ফলাফলের আশা ছেড়ে দিয়ে বর্তমান কাজের ওপর মনোযোগ দিন। মনে রাখুন, মানুষের অপছন্দ করার অধিকার আছে, এবং তাতে আপনার কিছু যায় আসে না।",
    "criticalReflection": "The advice to \"choose not to be anxious\" risks oversimplifying anxiety disorders. While cognitive reframing is a valid therapy tool (CBT), telling someone with an anxiety disorder to simply choose peace can be dismissive. Moreover, complete detachment from outcomes can sometimes result in a lack of ambition or drive, as anxiety about the future often fuels preparation and excellence.",
    "expectedOutcomes": {
      "individual": "Significant reduction in social anxiety and fear of failure; increased risk-taking ability.",
      "social": "A culture that values authenticity over people-pleasing, though potentially leading to a workforce that is less driven by fear-based motivation (which corporations often rely on)."
    }
  },
  {
    "id": 7,
    "sectionTitle": "The Inner World",
    "chapterTitle": "The Fortress of Zero Expectations",
    "goldenQuotes": [
      "You are being foolish if you expect your children, spouse, or friends to live forever... It is equally naïve to expect everyone will be honest.",
      "To avoid disappointment, I kept focusing on what I control: My actions and belief in the book."
    ],
    "coreInsights": [
      {
        "title": "প্রত্যাশাই দুঃখের মূল",
        "content": "আমরা যখন অন্যের কাছ থেকে নির্দিষ্ট আচরণের আশা করি (যেমন সততা বা চিরস্থায়ী সঙ্গ), তখনই হতাশার বীজ রোপণ করি।"
      },
      {
        "title": "নিয়ন্ত্রণ বনাম ফলাফল",
        "content": "লেখকের বই প্রকাশের উদাহরণ দিয়ে বলা হয়েছে, কাজের ফলাফলের চেয়ে কাজের প্রক্রিয়ায় ফোকাস করা জরুরি।"
      },
      {
        "title": "বাস্তববাদী দৃষ্টিভঙ্গি",
        "content": "মানুষ ভুল করবে এবং জীবন নশ্বর—এই সত্য মেনে নিলে কষ্ট কমে যায়।"
      },
      {
        "title": "স্টয়িক সুরক্ষা",
        "content": "দীর্ঘমেয়াদী হতাশা থেকে বাঁচতে 'Low Expectations' বা কম প্রত্যাশা রাখার মানসিকতা তৈরি করা।"
      }
    ],
    "practicalApplication": "কোনো প্রজেক্ট বা সম্পর্কের ক্ষেত্রে নিজেকে বলুন, \"আমি আমার সেরাটা দেব, কিন্তু ফলাফল আমার হাতে নেই।\" যদি কেউ আপনার সাথে খারাপ ব্যবহার করে, তবে অবাক না হয়ে ভাবুন এটিই তাদের স্বভাব হতে পারে। একে ব্যক্তিগতভাবে নেবেন না।",
    "criticalReflection": "While effective for personal resilience, extreme detachment from expectations in relationships can be perceived as emotional unavailability. Sociologically, if everyone adopts \"zero expectations\" from others, it might erode social accountability and the mutual standards necessary for a functional community.",
    "expectedOutcomes": {
      "individual": "Immunity to daily letdowns and rejection.",
      "social": "More stable but potentially detached interpersonal relationships."
    }
  },
  {
    "id": 8,
    "sectionTitle": "The Inner World",
    "chapterTitle": "The Paradox of Hope and Fear",
    "goldenQuotes": [
      "Cease to hope … and you will cease to fear.",
      "Fear keeps pace with hope … both belong to a mind in suspense, to a mind in a state of anxiety through looking into the future.",
      "Just have faith in the future, and then forget about it!"
    ],
    "coreInsights": [
      {
        "title": "আশা ও ভয়ের সম্পর্ক",
        "content": "সেনেকার মতে, আশা এবং ভয় একই মুদ্রার এপিঠ-ওপিঠ। আমরা যখন ভবিষ্যতের কোনো ফলের আশা করি, তখনই তা না পাওয়ার ভয় তৈরি হয়।"
      },
      {
        "title": "বর্তমান মুহূর্তের গুরুত্ব",
        "content": "আশা আমাদের ভবিষ্যৎ নিয়ে উদ্বিগ্ন রাখে, যা বর্তমানের শান্তি নষ্ট করে।"
      },
      {
        "title": "'I Hope' বনাম 'I Wonder'",
        "content": "\"আমি আশা করি\" বলার বদলে \"আমি ভাবছি কী হতে পারে\" (Curiosity) বললে দুশ্চিন্তা কমে।"
      },
      {
        "title": "অনিশ্চয়তাকে আলিঙ্গন",
        "content": "ভবিষ্যৎ অজানা, একে মেনে নিয়ে কৌতূহলী হওয়াই ভয়ের ওষুধ।"
      }
    ],
    "practicalApplication": "আজ থেকে \"I hope\" (আমি আশা করি) কথাটি \"I wonder\" (দেখা যাক কী হয়) দিয়ে রিপ্লেস করুন। যেমন: \"আশা করি আমি চাকরিটা পাব\" না বলে বলুন, \"দেখা যাক ইন্টারভিউয়ের পর কী সুযোগ আসে।\" এটি মনকে ফলাফলের চাপ থেকে মুক্ত করে।",
    "criticalReflection": "\"Cease to hope\" is a controversial Stoic stance. Hope is often the primary motivator for social change and survival in oppressed communities. Critically, removing hope might cure fear but could also cure ambition and the drive to improve societal conditions. It risks promoting passivity in the face of solvable problems.",
    "expectedOutcomes": {
      "individual": "Immediate relief from performance anxiety and future-based stress.",
      "social": "A calmer population, but perhaps one less driven to aggressively advocate for change."
    }
  },
  {
    "id": 9,
    "sectionTitle": "The Inner World",
    "chapterTitle": "The Art of Self-Compassion",
    "goldenQuotes": [
      "Anger, if not restrained, is frequently more hurtful to us than the injury that provokes it.",
      "Go easy on yourself.",
      "Instead of beating yourself up and being your own antagonist, be your own comedian."
    ],
    "coreInsights": [
      {
        "title": "রাগের শারীরিক ক্ষতি",
        "content": "রাগ কেবল মানসিক নয়, শরীরে কর্টিসল হরমোন বাড়িয়ে মেটাবলিজম ও ঘুমের ক্ষতি করে।"
      },
      {
        "title": "নিজের ওপর দয়া",
        "content": "আমরা প্রায়ই ছোট ভুলের জন্য নিজেকে শাস্তি দিই। লেখক সোয়েটার ধোয়ার ভুলের উদাহরণ দিয়ে নিজেকে ক্ষমা করার কথা বলেছেন।"
      },
      {
        "title": "কমেডিয়ান বনাম ভিলেন",
        "content": "নিজের জীবনের ছোট ট্র্যাজেডিগুলোকে সিরিয়াসলি না নিয়ে কমেডি হিসেবে দেখলে মানসিক চাপ কমে।"
      },
      {
        "title": "তুচ্ছতা অনুধাবন",
        "content": "অধিকাংশ ভুলের কোনো দীর্ঘমেয়াদী প্রভাব নেই, তাই সেগুলোতে হাসাই শ্রেয়।"
      }
    ],
    "practicalApplication": "আপনি যদি কোনো বোকামি করে ফেলেন (যেমন কফিতে চিনি বেশি দেওয়া বা কোনো ফাইল ডিলিট করা), তবে নিজেকে গালি না দিয়ে হাসুন। নিজেকে বলুন, \"বাহ! আমি তো একটা কার্টুন ক্যারেক্টার।\" নিজের ভুল নিয়ে নিজে হাসতে পারা একটি বিশাল শক্তি।",
    "criticalReflection": "While self-compassion is vital, there is a risk of trivializing genuine errors that require accountability. If one laughs off every mistake without corrective analysis, it can lead to repeated incompetence. A balance between self-forgiveness and self-improvement is necessary to avoid stagnation.",
    "expectedOutcomes": {
      "individual": "Lower blood pressure, better sleep, and higher resilience to failure.",
      "social": "A less aggressive and more forgiving social environment."
    }
  },
  {
    "id": 10,
    "sectionTitle": "The Inner World",
    "chapterTitle": "The Control Center (Introductory Section)",
    "goldenQuotes": [
      "The chief task in life is simply this: to identify and separate matters so that I can say clearly to myself which are externals not under my control, and which have to do with the choices I actually control."
    ],
    "coreInsights": [
      {
        "title": "জীবনের প্রধান কাজ",
        "content": "জীবনের সবচেয়ে বড় কাজ হলো কোনটি আমার নিয়ন্ত্রণে এবং কোনটি নয়, তা আলাদা করা।"
      },
      {
        "title": "চিন্তার ফিল্টার",
        "content": "মনের ভেতরে আসা প্রতিটি চিন্তাকে এই ফিল্টারের মধ্য দিয়ে যাচাই করতে হবে।"
      },
      {
        "title": "মানসিক পরিচ্ছন্নতা",
        "content": "অপ্রয়োজনীয় চিন্তা বা \"Mental Junk\" দূর করার প্রাথমিক ধাপ হলো এই বিভাজন।"
      },
      {
        "title": "নির্বাচনের স্বাধীনতা",
        "content": "বাইরের ঘটনা আমরা নিয়ন্ত্রণ করতে না পারলেও, আমাদের প্রতিক্রিয়া বা 'Choice' সম্পূর্ণ আমাদের হাতে।"
      }
    ],
    "practicalApplication": "একটি \"Worry List\" তৈরি করুন। সেখানে আপনার সব চিন্তার তালিকা করুন। এরপর লাল কালি দিয়ে কেটে দিন যেগুলো আপনার নিয়ন্ত্রণে নেই। যা বাকি থাকল, কেবল সেগুলো নিয়েই আজকের দিন শুরু করুন।",
    "criticalReflection": "This foundational Stoic dichotomy is logically sound but psychologically demanding. Cognitive biases often blur the line between what is controllable and what is not (e.g., believing we can control others' opinions). Mastering this requires combating evolutionary instincts to control one's environment.",
    "expectedOutcomes": {
      "individual": "Extreme mental clarity and efficiency.",
      "social": "Individuals become less prone to mass hysteria or collective panic."
    }
  },
  {
    "id": 11,
    "sectionTitle": "The Inner World",
    "chapterTitle": "The Illusion of Escape",
    "goldenQuotes": [
      "You should change your attitude, not your surroundings.",
      "The problem is actually our mindset. The problem is not you. It’s human nature to get used to your surroundings.",
      "The solution is not out there. The solution is right where you are."
    ],
    "coreInsights": [
      {
        "title": "ভ্রমণের মোহ",
        "content": "আমরা মনে করি নতুন জায়গায় গেলে বা ছুটিতে গেলে দুঃখ দূর হবে, কিন্তু আমাদের মন আমাদের সাথেই যায়।"
      },
      {
        "title": "অভ্যস্ত হওয়ার স্বভাব",
        "content": "মানুষ যেকোনো পরিবেশে অভ্যস্ত (Adapt) হয়ে যায়। তাই প্যারাডাইসে গেলেও কিছুদিন পর একঘেয়েমি চলে আসবে।"
      },
      {
        "title": "আটিচিউড শিফট",
        "content": "বাইরের পরিবেশ পরিবর্তন করার চেয়ে নিজের দৃষ্টিভঙ্গি পরিবর্তন করা বেশি কার্যকর এবং সাশ্রয়ী।"
      },
      {
        "title": "অন্তরের শান্তি",
        "content": "শান্তি কোনো গন্তব্য নয়, এটি একটি মানসিক অবস্থা যা বর্তমান পরিস্থিতিতেই খুঁজে পাওয়া সম্ভব।"
      }
    ],
    "practicalApplication": "যদি মনে হয় \"এই শহর বা এই চাকরি ছেড়ে দিলেই আমি ভালো থাকব,\" তবে থামুন। নিজেকে প্রশ্ন করুন: \"আমি কি পালিয়ে যাচ্ছি?\" বর্তমান রুমেই ৫ মিনিট চোখ বন্ধ করে বসুন এবং ভাবুন এই মুহূর্তেই কীভাবে শান্তি খুঁজে পাওয়া যায়। আপনার বর্তমান পরিবেশের ৩টি ভালো দিক খুঁজে বের করুন।",
    "criticalReflection": "This advice is potent for existential ennui but dangerous if applied to toxic or abusive environments. Sometimes, changing surroundings is the only solution (e.g., leaving a war zone or abusive home). Privileged Stoicism often overlooks that environment dictates mental health for the marginalized.",
    "expectedOutcomes": {
      "individual": "Reduced impulse to flee problems; money saved on \"escapist\" travel.",
      "social": "Greater community stability as people try to improve their current locale rather than leaving."
    }
  },
  {
    "id": 12,
    "sectionTitle": "The Inner World",
    "chapterTitle": "The Observer Self",
    "goldenQuotes": [
      "My mind. What is it? What am I making of it? What am I using it for?",
      "The more you observe, the more you can spot unhelpful behavior."
    ],
    "coreInsights": [
      {
        "title": "আত্ম-জিজ্ঞাসা",
        "content": "মার্কাস অরেলিয়াসের মতো নিজেকে প্রশ্ন করা—\"আমি এখন আমার মন দিয়ে কী করছি?\""
      },
      {
        "title": "চিন্তার প্যাটার্ন",
        "content": "আমরা প্রায়ই অজান্তে দিবাস্বপ্ন বা অতীতের স্মৃতি রোমন্থনে সময় নষ্ট করি। এটি শক্তির অপচয়।"
      },
      {
        "title": "জার্নালিং",
        "content": "মনের আবর্জনা পরিষ্কার করার সেরা উপায় হলো লেখা (Journaling)। এটি চিন্তাকে দৃশ্যমান করে।"
      },
      {
        "title": "বর্তমানমুখী হওয়া",
        "content": "অতীত পরিবর্তন করা অসম্ভব, তাই মনের ফোকাস কেবল বর্তমানে ফিরিয়ে আনা জরুরি।"
      }
    ],
    "practicalApplication": "দিনের যেকোনো সময় দৈবচয়ন ভিত্তিতে (Randomly) নিজেকে থামান এবং প্রশ্ন করুন: \"আমার মন এখন কোথায়?\" যদি দেখেন মন অতীতে বা ভবিষ্যতে ঘুরে বেড়াচ্ছে, তবে আলতো করে তাকে বর্তমানে ফিরিয়ে আনুন। দিনে একবার অন্তত ১০ মিনিট চিন্তাভাবনা লিখুন।",
    "criticalReflection": "Constant self-observation can lead to \"hyper-reflexivity,\" a state often associated with anxiety where one becomes too conscious of their own thoughts to act naturally. While valuable, it needs to be balanced with \"flow states\" where self-consciousness disappears.",
    "expectedOutcomes": {
      "individual": "Increased mindfulness and metacognition (thinking about thinking).",
      "social": "Reduced reactive behavior in conversations."
    }
  },
  {
    "id": 13,
    "sectionTitle": "The Inner World",
    "chapterTitle": "The Mental Diet",
    "goldenQuotes": [
      "I needed to be able to have more than 15 minutes of uninterrupted thought.",
      "When you consume information, it will impact your mood — whether you like it or not.",
      "Get rid of information that makes you feel bad, anxious, weak, jealous, or simply has no use."
    ],
    "coreInsights": [
      {
        "title": "তথ্যের প্রভাব",
        "content": "আমরা যা দেখি বা পড়ি, তা আমাদের মেজাজ নিয়ন্ত্রণ করে। নেতিবাচক খবর বা সোশ্যাল মিডিয়া আমাদের অজান্তেই দুর্বল করে দেয়।"
      },
      {
        "title": "নিরবচ্ছিন্ন চিন্তা",
        "content": "গভীর এবং মৌলিক চিন্তার জন্য দীর্ঘ সময় ধরে কোনো বাধা ছাড়া ভাবার ক্ষমতা প্রয়োজন।"
      },
      {
        "title": "জেসি লিভারমোরের কৌশল",
        "content": "সফল ট্রেডার জেসি লিভারমোর অন্যের মতামত থেকে নিজেকে বিচ্ছিন্ন রাখতেন যাতে তার বিচারবুদ্ধি প্রভাবিত না হয়।"
      },
      {
        "title": "Affect Heuristic",
        "content": "আমাদের আবেগ সিদ্ধান্ত গ্রহণকে প্রভাবিত করে। তাই বাজে তথ্য (যা খারাপ আবেগ তৈরি করে) এড়িয়ে চলা উচিত।"
      }
    ],
    "practicalApplication": "আপনার ফোনের \"News Feed\" বা সোশ্যাল মিডিয়া অ্যাপগুলো আনফলো বা মিউট করুন যা আপনাকে রাগ বা হিংসা অনুভব করায়। দিনে অন্তত ১ ঘণ্টা \"Zero Input\" সময় রাখুন—কোনো ফোন, বই বা টিভি নয়, কেবল নিজের চিন্তার সাথে থাকুন।",
    "criticalReflection": "Strictly guarding the mind against \"unpleasant\" information can create an echo chamber. Avoiding news because it causes anxiety might mean ignoring real-world injustices that require attention. A \"happy ignorance\" is not always a virtue in a democracy requiring informed citizens.",
    "expectedOutcomes": {
      "individual": "Sharper focus, better mood regulation, and original thinking.",
      "social": "Potential disengagement from collective social issues or trends."
    }
  },
  {
    "id": 14,
    "sectionTitle": "The Inner World",
    "chapterTitle": "Purpose as a Compass",
    "goldenQuotes": [
      "No random actions, none not based on underlying principles.",
      "Living a good life is about not getting distracted.",
      "To be everywhere is to be nowhere."
    ],
    "coreInsights": [
      {
        "title": "উদ্দেশ্যহীন কর্ম",
        "content": "প্রতিটি কাজের পেছনে একটি নীতি বা উদ্দেশ্য থাকা উচিত। এলোমেলো কাজ শক্তির অপচয়।"
      },
      {
        "title": "প্রকৃতির সাথে সামঞ্জস্য",
        "content": "স্টয়িকরা বিশ্বাস করতেন, নিজের স্বভাব এবং প্রকৃতির সাথে মিল রেখে কাজ করলে মনোযোগ ধরে রাখা সহজ হয়।"
      },
      {
        "title": "প্যাশন প্রজেক্ট",
        "content": "জীবনকে একঘেয়েমি থেকে বাঁচাতে একটি \"Passion Project\" বা শখের কাজ থাকা জরুরি যা আপনাকে ফোকাসড রাখে।"
      },
      {
        "title": "লক্ষ্য ও স্বচ্ছতা",
        "content": "বড় লক্ষ্য থাকলে ছোটখাটো বিষয়ে মন বিক্ষিপ্ত হয় না।"
      }
    ],
    "practicalApplication": "কোনো কাজ করার আগে নিজেকে প্রশ্ন করুন: \"কেন আমি এটি করছি? এটি কি আমার মূল লক্ষ্যের সাথে যায়?\" যদি উত্তর \"না\" হয়, তবে সেটি বাদ দিন। একটি সাইড প্রজেক্ট শুরু করুন (যেমন বাগান করা বা লেখালেখি) যা আপনাকে 'Flow State'-এ রাখে।",
    "criticalReflection": "The demand for \"no random actions\" sets an incredibly high bar for productivity. Human beings need leisure, aimless wandering, and \"pointless\" play for creativity and mental health. Demonizing distraction completely can lead to a robotic existence devoid of serendipity.",
    "expectedOutcomes": {
      "individual": "High productivity and a sense of direction.",
      "social": "Less participation in trivial social trends or viral distractions."
    }
  },
  {
    "id": 15,
    "sectionTitle": "The Inner World",
    "chapterTitle": "The Power of One",
    "goldenQuotes": [
      "To be everywhere is to be nowhere.",
      "You can have it all, but not all at the same time.",
      "You’re better off, mentally and professionally, by being really focused on the things that matter to you."
    ],
    "coreInsights": [
      {
        "title": "একাগ্রতার শক্তি",
        "content": "একসাথে সব কিছু করতে চাওয়া মানে কোনোটিই ঠিকভাবে না করা। এক সময়ে একটি বড় লক্ষ্যের ওপর ফোকাস করা উচিত।"
      },
      {
        "title": "অগ্রাধিকার নির্বাচন",
        "content": "মানসিক শান্তি এবং ক্যারিয়ারের জন্য জীবনের অপ্রয়োজনীয় \"Secondary Activities\" বাদ দিতে হবে।"
      },
      {
        "title": "বড় লক্ষ্য",
        "content": "ছোট ছোট অনেক লক্ষ্যের চেয়ে একটি বড় লক্ষ্য (Big Goal) থাকলে অগ্রগতি দ্রুত হয়।"
      },
      {
        "title": "ত্যাগ স্বীকার",
        "content": "অসাধারণ কিছু অর্জন করতে চাইলে সাময়িকভাবে অন্য অনেক কিছু (যেমন আড্ডা, বিনোদন) ত্যাগ করতে হবে।"
      }
    ],
    "practicalApplication": "আগামী ৩ মাসের জন্য কেবল একটি প্রধান লক্ষ্য ঠিক করুন। বাকি সব প্রজেক্ট 'হোল্ড'-এ রাখুন। প্রতিদিনের রুটিন এমনভাবে সাজান যেন আপনার দিনের সেরা সময়টা ওই একটি লক্ষ্যের পেছনে ব্যয় হয়। মাল্টি-টাস্কিং সম্পূর্ণ বন্ধ করুন।",
    "criticalReflection": "Single-minded focus is efficient but risky. If the chosen goal fails, the individual has no backup plan (diversification). Furthermore, obsessive focus can strain relationships and health if those are categorized as \"distractions\" during the pursuit of a goal.",
    "expectedOutcomes": {
      "individual": "Rapid mastery of skills and completion of major projects.",
      "social": "Potential isolation during periods of intense focus."
    }
  },
  {
    "id": 16,
    "sectionTitle": "The Inner World",
    "chapterTitle": "Defining Mental Sanity",
    "goldenQuotes": [
      "A healthy pair of eyes should see everything that can be seen and not say, 'No! Too bright!'",
      "A healthy mind should be prepared for anything.",
      "It’s an ongoing process of trying to become better."
    ],
    "coreInsights": [
      {
        "title": "সুস্থ মনের সংজ্ঞা",
        "content": "একটি সুস্থ মন বা \"Gezond Verstand\" (Common Sense) হলো এমন একটি মন যা যেকোনো পরিস্থিতির জন্য প্রস্তুত থাকে।"
      },
      {
        "title": "বাস্তবতা গ্রহণ",
        "content": "চোখ যেমন আলো দেখে অভিযোগ করে না, সুস্থ মনও বাস্তবতা দেখে অভিযোগ করে না। সে ভালো-মন্দ সব কিছু দেখার সাহস রাখে।"
      },
      {
        "title": "অস্থিরতার লক্ষণ",
        "content": "অকারণে মেজাজ পরিবর্তন, নিরাপত্তাহীনতা এবং ফোকাসের অভাব অসুস্থ মনের লক্ষণ।"
      },
      {
        "title": "ধারাবাহিক প্রক্রিয়া",
        "content": "মানসিক স্বাস্থ্য কোনো গন্তব্য নয়, এটি প্রতিদিনের চর্চার বিষয়।"
      }
    ],
    "practicalApplication": "যখনই কোনো অনাকাঙ্ক্ষিত ঘটনা ঘটবে, অভিযোগ না করে বলুন, \"আমার মন এর জন্য প্রস্তুত ছিল।\" নিজেকে ভিক্টিম না ভেবে পর্যবেক্ষক হিসেবে দেখুন। প্রতিদিন নিজের মানসিক অবস্থার \"Health Check\" করুন—আজ আমি কি অকারণে উদ্বিগ্ন ছিলাম?",
    "criticalReflection": "The metaphor of the eye accepting brightness ignores that too much brightness (trauma) binds the eye. Suggesting a healthy mind should never say \"too much\" risks invalidating trauma responses where the mind shuts down as a defense mechanism. It sets a standard of stoic invulnerability that is biologically unrealistic for many.",
    "expectedOutcomes": {
      "individual": "Robust mental stability and adaptability.",
      "social": "Reliable and calm leaders in crisis situations."
    }
  },
  {
    "id": 17,
    "sectionTitle": "The Inner World",
    "chapterTitle": "The Prerequisite to Growth",
    "goldenQuotes": [
      "What progress, you ask, have I made? I have begun to be a friend to myself."
    ],
    "coreInsights": [
      {
        "title": "নিজের সাথে বন্ধুত্ব",
        "content": "উন্নতির প্রথম ধাপ হলো নিজেকে শত্রু না ভেবে বন্ধু ভাবা।"
      },
      {
        "title": "আত্ম-সচেতনতা",
        "content": "নিজেকে না জানলে কোনো উন্নতিই টেকসই হয় না।"
      },
      {
        "title": "সহমর্মিতা",
        "content": "নিজের ভুলগুলোর প্রতি কঠোর না হয়ে সহমর্মী হওয়া।"
      },
      {
        "title": "ভিত্তিপ্রস্তর",
        "content": "আত্ম-জ্ঞান হলো বাকি সব সাফল্যের ভিত্তি।"
      }
    ],
    "practicalApplication": "আয়নার সামনে দাঁড়িয়ে নিজেকে বলুন, \"আমি তোমাকে পছন্দ করি এবং আমি তোমার পাশে আছি।\" নিজেকে একজন প্রিয় বন্ধুর মতো পরামর্শ দিন। যখন কোনো ভুল করবেন, নিজেকে বকা না দিয়ে বন্ধুর মতো সান্ত্বনা দিন।",
    "criticalReflection": "This concept is universally positive. However, \"knowing oneself\" is often a privilege of those with time for introspection. For those in survival mode, self-analysis might seem like a luxury.",
    "expectedOutcomes": {
      "individual": "High self-esteem and reduced self-sabotage.",
      "social": "More authentic interactions, as people pretend less."
    }
  },
  {
    "id": 18,
    "sectionTitle": "The Inner World",
    "chapterTitle": "Authentic Living",
    "goldenQuotes": [
      "To know thyself is the beginning of wisdom.",
      "The problem is that most of us lack the confidence to actually live in agreement with who we are.",
      "What are the ultimate outcomes I’m looking for? Does this align with who I actually am?"
    ],
    "coreInsights": [
      {
        "title": "জ্ঞানের প্রয়োগ",
        "content": "কেবল নিজেকে জানাই যথেষ্ট নয়, সেই অনুযায়ী কাজ করাও জরুরি। উদাহরণস্বরূপ, আপনি যদি ইন্ট্রোভার্ট হন, তবে জোর করে পার্টিতে যাওয়া বন্ধ করুন।"
      },
      {
        "title": "ভুল সিদ্ধান্ত",
        "content": "আমরা প্রায়ই অন্যের দেখাদেখি এমন জিনিস কিনি বা কাজ করি (যেমন বড় গাড়ি কেনা) যা আমাদের স্বভাবের সাথে যায় না।"
      },
      {
        "title": "সামাজিক চাপ",
        "content": "সমাজ বা ভয়ের কারণে আমরা নিজের সত্তার বিরুদ্ধে কাজ করি, যা অসুখী জীবনের মূল কারণ।"
      },
      {
        "title": "প্রশ্ন করা",
        "content": "প্রতিটি বড় সিদ্ধান্তের আগে প্রশ্ন করুন—\"এটা কি সত্যিই আমি চাই, নাকি সমাজ চায়?\""
      }
    ],
    "practicalApplication": "আপনার গত এক মাসের খরচের তালিকা দেখুন। কোন খরচগুলো কেবল \"Show off\" বা অন্যের চাপে করেছেন? সেগুলো চিহ্নিত করুন। নিজের স্বভাবের সাথে যায় না এমন একটি কাজ আজই তালিকা থেকে বাদ দিন।",
    "criticalReflection": "Acting strictly according to \"who you are\" assumes a fixed self. Psychology suggests personality is fluid. Rigidly adhering to labels (e.g., \"I am an introvert, so I won't socialize\") can hinder growth and experimentation.",
    "expectedOutcomes": {
      "individual": "deep satisfaction and efficient use of resources (money/time).",
      "social": "A society of diverse individuals pursuing unique paths rather than uniform trends."
    }
  },
  {
    "id": 19,
    "sectionTitle": "The Inner World",
    "chapterTitle": "The Reservoir of Resilience",
    "goldenQuotes": [
      "Remember that for every challenge you face, you have the resources within you to cope with that challenge.",
      "You are stronger than you think at any given moment.",
      "The mental equivalent of going through your storage is reflection."
    ],
    "coreInsights": [
      {
        "title": "সুপ্ত শক্তি",
        "content": "আমাদের ভেতরে এমন অনেক শক্তি (সহ্যক্ষমতা, ধৈর্য) লুকিয়ে আছে যা আমরা বিপদে না পড়লে টের পাই না।"
      },
      {
        "title": "অতীতের প্রমাণ",
        "content": "হলোকাস্ট বা মহামারীর মতো কঠিন পরিস্থিতি মানুষ পার করেছে। আপনিও পারবেন।"
      },
      {
        "title": "স্টোরেজ রুম",
        "content": "আমাদের মন একটা স্টোরেজ রুমের মতো। মাঝে মাঝে খুঁজে দেখতে হয় সেখানে কী কী হাতিয়ার (দক্ষতা) জমা আছে।"
      },
      {
        "title": "ভয় বনাম শক্তি",
        "content": "যখনই ভবিষ্যৎ নিয়ে ভয় লাগবে, মনে করবেন আপনার কাছে তা মোকাবিলার অস্ত্র আছে।"
      }
    ],
    "practicalApplication": "আপনার জীবনের সবচেয়ে কঠিন ৩টি মুহূর্তের কথা লিখুন যা আপনি পার করে এসেছেন। নিজেকে মনে করিয়ে দিন, \"আমি যদি ওটা পার করতে পারি, তবে এটাও পারব।\" নিজের শক্তির ওপর আস্থা রাখুন।",
    "criticalReflection": "While empowering, telling trauma survivors they \"have the resources\" can sometimes minimize the need for external help (therapy, medication, financial aid). Resilience is not infinite, and systemic failures cannot always be overcome by inner strength alone.",
    "expectedOutcomes": {
      "individual": "Reduced panic during crises and increased self-confidence.",
      "social": "A more resilient populace capable of bouncing back from collective trauma."
    }
  },
  {
    "id": 20,
    "sectionTitle": "The Inner World",
    "chapterTitle": "The Narrative Power",
    "goldenQuotes": [
      "Choose not to be harmed — and you won’t feel harmed. Don’t feel harmed — and you haven’t been.",
      "Never forget: YOU create your own life story. YOU have the power to change your attitude at any given moment.",
      "You cannot change what happens to you. You can change the meaning you give to what happens."
    ],
    "coreInsights": [
      {
        "title": "গল্পের লেখক",
        "content": "আপনি আপনার জীবনের গল্পের লেখক। নিজেকে আপনি \"ভিক্টিম\" হিসেবে দেখাবেন নাকি \"হিরো\" হিসেবে, তা আপনার হাতে।"
      },
      {
        "title": "অর্থ প্রদান",
        "content": "ঘটনার কোনো নিজস্ব অর্থ নেই; আমরা ঘটনাকে যে অর্থ দিই, সেটাই আমাদের প্রভাবিত করে।"
      },
      {
        "title": "প্রত্যাখ্যানের ক্ষমতা",
        "content": "কেউ আপনাকে অপমান করলেও, আপনি যদি অপমানিত বোধ না করার সিদ্ধান্ত নেন, তবে সেই অপমান আপনাকে স্পর্শ করবে না।"
      },
      {
        "title": "নেতিবাচক আখ্যান",
        "content": "\"আমি পারি না\" বা \"আমার ভাগ্য খারাপ\"—এই ধরনের নেতিবাচক গল্প বলা বন্ধ করতে হবে।"
      }
    ],
    "practicalApplication": "যখনই কোনো খারাপ ঘটনা ঘটবে, নিজেকে বলুন, \"এটি আমার গল্পের একটি 'Plot Twist' মাত্র, শেষ নয়।\" নিজেকে একজন যোদ্ধার ভূমিকায় কল্পনা করুন যে বাধা অতিক্রম করছে। নেতিবাচক ঘটনাকে \"চ্যালেঞ্জ\" হিসেবে রি-ফ্রেম (Reframe) করুন।",
    "criticalReflection": "The idea that \"you haven't been harmed if you don't feel harmed\" is powerful for insults but dangerous for physical or systemic harm. It can lead to denial of abuse or injustice. Narrative therapy is effective, but it must acknowledge objective reality alongside subjective interpretation.",
    "expectedOutcomes": {
      "individual": "A strong sense of agency and overcoming the \"victim mentality.\"",
      "social": "Empowerment of individuals to change their circumstances through mindset shifts."
    }
  },
  {
    "id": 21,
    "sectionTitle": "The Inner World",
    "chapterTitle": "Detaching Worth from Possessions",
    "goldenQuotes": [
      "Think that nothing deserves admiration except the mind, which being itself great counts nothing else as great.",
      "The truth is that you are not your possessions.",
      "You don’t need to buy anything today to feel good about yourself. You’re not missing out on anything."
    ],
    "coreInsights": [
      {
        "title": "আত্মমর্যাদার উৎস",
        "content": "আমাদের মূল্য আমাদের দামী গাড়ি, বাড়ি বা গ্যাজেট দিয়ে নির্ধারিত হয় না; এটি নির্ধারিত হয় আমাদের চরিত্র এবং মনন দিয়ে।"
      },
      {
        "title": "ব্ল্যাক ফ্রাইডে মানসিকতা",
        "content": "কনজিউমারিজম বা ভোগবাদ আমাদের বিশ্বাস করায় যে কেনাকাটা করলেই সুখ মিলবে, কিন্তু স্টয়িকরা একে \"দাসত্ব\" মনে করতেন।"
      },
      {
        "title": "অস্থায়ী আনন্দ",
        "content": "নতুন জিনিস কেনার আনন্দ ক্ষণস্থায়ী। কিছুদিন পরেই সেই বস্তুটি আমাদের কাছে সাধারণ হয়ে যায়।"
      },
      {
        "title": "মনের শ্রেষ্ঠত্ব",
        "content": "সেনেকার মতে, একমাত্র প্রশংসার যোগ্য হলো একটি শক্তিশালী মন, কোনো আসবাবপত্র বা পোশাক নয়।"
      }
    ],
    "practicalApplication": "আগামী ১ সপ্তাহ \"No-Buy\" চ্যালেঞ্জ নিন। নিত্যপ্রয়োজনীয় খাবার ও ওষুধ ছাড়া আর কিচ্ছু কিনবেন না। যখনই কোনো শপিং অ্যাপে ঢুকতে ইচ্ছে করবে, নিজেকে বলুন: \"আমি আমার জিনিসের চেয়ে দামী।\" নিজের আলমারির দিকে তাকিয়ে ভাবুন, \"এগুলোর কোনোটিই আমি নই।\"",
    "criticalReflection": "While dissociating self-worth from possessions is mentally liberating, it can be interpreted as dismissive of the security that material wealth provides. For those struggling to meet basic needs, \"possessions\" aren't vanity metrics but survival tools. The philosophy works best when one has already reached a baseline of financial stability.",
    "expectedOutcomes": {
      "individual": "Reduction in impulse buying and financial anxiety.",
      "social": "A shift away from status-driven competition towards character-driven interactions."
    }
  },
  {
    "id": 22,
    "sectionTitle": "The Inner World",
    "chapterTitle": "Unwavering Integrity",
    "goldenQuotes": [
      "Decide first what type of person you want to be and stick to it. Be the same person whether you are by yourself or with others.",
      "The responsibility is all yours; no one can stop you from being honest or straightforward."
    ],
    "coreInsights": [
      {
        "title": "চরিত্রের ধারাবাহিকতা",
        "content": "আপনি যখন একা থাকেন এবং যখন সবার সাথে থাকেন—এই দুই সময়ে আপনার আচরণে যেন কোনো পার্থক্য না থাকে।"
      },
      {
        "title": "সামাজিক চাপ বনাম নীতি",
        "content": "বন্ধুদের বা সমাজের চাপে পড়ে নিজের নীতি বিসর্জন দেওয়া দুর্বলতার লক্ষণ। লেখক পার্টিতে ড্রাগস বা অ্যালকোহলের উদাহরণ দিয়ে নিজের নীতিতে অটল থাকার কথা বলেছেন।"
      },
      {
        "title": "আত্ম-সম্মান",
        "content": "অন্যের অনুমোদনের চেয়ে নিজের কাছে নিজের স্বচ্ছ থাকা বেশি জরুরি।"
      },
      {
        "title": "সিদ্ধান্তের ক্ষমতা",
        "content": "সততা বজায় রাখার ক্ষমতা সম্পূর্ণ আপনার নিয়ন্ত্রণে; কেউ আপনাকে জোর করে অসৎ বানাতে পারে না।"
      }
    ],
    "practicalApplication": "নিজের ৩টি মূল নীতি (Core Values) লিখুন (যেমন: সততা, সময়ানুবর্তিতা, পরোপকার)। আগামী এক মাসে এমন কোনো পরিস্থিতির মুখোমুখি হলে যেখানে এই নীতি ভাঙার চাপ আসবে (যেমন বন্ধুদের আড্ডায় গসিপ করা), তখন সাহসের সাথে \"না\" বলুন অথবা সেখান থেকে সরে আসুন।",
    "criticalReflection": "Rigid adherence to values in all situations can sometimes lead to social friction or intolerance. Being \"the same person\" always might not account for the adaptability needed in complex social nuances (e.g., diplomacy vs. brutal honesty).",
    "expectedOutcomes": {
      "individual": "Increased self-respect and a clear conscience.",
      "social": "Respect from others for being reliable, though potentially fewer \"casual\" friends."
    }
  },
  {
    "id": 23,
    "sectionTitle": "The Inner World",
    "chapterTitle": "The Decision Matrix (Introductory)",
    "goldenQuotes": [
      "We must concern ourselves absolutely with the things that are under our control and entrust the things not in our control to the universe."
    ],
    "coreInsights": [
      {
        "title": "সিদ্ধান্তের ভিত্তি",
        "content": "ভালো সিদ্ধান্তের মূল ভিত্তি হলো নিয়ন্ত্রণযোগ্য এবং অনিয়ন্ত্রণযোগ্য বিষয়ের পার্থক্য বোঝা।"
      },
      {
        "title": "মহাবিশ্বের ওপর বিশ্বাস",
        "content": "যা আমাদের হাতে নেই, তা নিয়ে দুশ্চিন্তা না করে মহাবিশ্ব বা প্রকৃতির ওপর ছেড়ে দেওয়া উচিত।"
      },
      {
        "title": "ফোকাস শিফট",
        "content": "ফলাফলের (Outcome) ওপর ফোকাস না করে প্রক্রিয়ার (Process) ওপর ফোকাস করলে সিদ্ধান্ত নেওয়া সহজ হয়।"
      }
    ],
    "practicalApplication": "যেকোনো বড় সিদ্ধান্ত নেওয়ার আগে একটি ছক আঁকুন। একপাশে লিখুন \"আমার করণীয়\" (যেমন: পরিশ্রম, প্রস্তুতি), অন্যপাশে লিখুন \"ভাগ্যের হাতে\" (যেমন: ফলাফল, অন্যের প্রতিক্রিয়া)। ফোকাস কেবল প্রথম অংশে রাখুন।",
    "criticalReflection": "Entrusting things to \"the universe\" can sometimes encourage passivity or fatalism. It is crucial to distinguish between accepting an outcome after doing one's best versus using fate as an excuse for lack of preparation.",
    "expectedOutcomes": {
      "individual": "Reduced \"Analysis Paralysis\" or hesitation.",
      "social": "More decisive leadership in group settings."
    }
  },
  {
    "id": 24,
    "sectionTitle": "The Inner World",
    "chapterTitle": "Autonomy Over Approval",
    "goldenQuotes": [
      "Once you undertake to do something, stick with it and treat it as something that should be carried through. Don’t pay attention to what people say.",
      "When you want to please everyone in your life, you end up harming your own sense of self-worth."
    ],
    "coreInsights": [
      {
        "title": "পিপল প্লিজার সিনড্রোম",
        "content": "সবাইকে খুশি করার চেষ্টা করা মানে নিজের আত্মসম্মান বিসর্জন দেওয়া।"
      },
      {
        "title": "মতামতের বিষ",
        "content": "অন্যের মতামত বা সমালোচনা আপনার সিদ্ধান্তের ওপর যেন প্রভাব ফেলতে না পারে।"
      },
      {
        "title": "দৃঢ়তা",
        "content": "একবার কোনো সিদ্ধান্ত নিলে, তা শেষ পর্যন্ত চালিয়ে যাওয়ার মানসিকতা থাকতে হবে। বারবার সিদ্ধান্ত বদলানো দুর্বলতার লক্ষণ।"
      },
      {
        "title": "নিজের পথ",
        "content": "আপনার জীবনের এক্সপার্ট আপনি নিজেই; অন্য কেউ আপনার জুতোয় পা দিয়ে হাঁটছে না।"
      }
    ],
    "practicalApplication": "আপনার জীবনের এমন একটি সিদ্ধান্তের কথা ভাবুন যা আপনি অন্যের ভয়ে নিচ্ছেন না (যেমন: নতুন ক্যারিয়ার, বিয়ে বা বিদেশ যাত্রা)। আজই সেই বিষয়ে ছোট একটি পদক্ষেপ নিন এবং কাউকে কৈফিয়ত দেবেন না। মনে মনে বলুন, \"এটি আমার জীবন, আমার সিদ্ধান্ত।\"",
    "criticalReflection": "While autonomy is key, completely ignoring \"what people say\" can be dangerous if it turns into arrogance. Constructive criticism from mentors or experts is vital for growth. The challenge is filtering noise from wisdom.",
    "expectedOutcomes": {
      "individual": "Empowerment and ownership of one's life path.",
      "social": "Others stop offering unsolicited advice once they see your resolve."
    }
  },
  {
    "id": 25,
    "sectionTitle": "The Inner World",
    "chapterTitle": "The Art of Pivot",
    "goldenQuotes": [
      "But we must be prepared to give up everything when something unexpected happens.",
      "We’re guests who temporarily walk this planet... I look at everything in life as borrowed.",
      "Plan all you want! ... Just don’t get attached to your plans."
    ],
    "coreInsights": [
      {
        "title": "অতিথি মানসিকতা",
        "content": "আমরা এই পৃথিবীতে কিছুদিনের অতিথি। আমাদের চাকরি, সম্পর্ক, এমনকি শরীর—সবই \"ধার করা\"। যেকোনো সময় তা ফেরত দিতে হতে পারে।"
      },
      {
        "title": "নমনীয়তা (Flexibility)",
        "content": "পরিকল্পনা করা ভালো, কিন্তু পরিকল্পনার প্রতি আসক্ত হওয়া বোকামি। পরিস্থিতি বদলালে পরিকল্পনাও বদলাতে হবে।"
      },
      {
        "title": "জাহাজের উপমা",
        "content": "জীবন একটি জাহাজের মতো; যখন সাইরেন বাজবে (বিপদ আসবে), তখন তীরের সৌন্দর্য উপভোগ বাদ দিয়ে জাহাজে ফিরে আসতে হবে।"
      },
      {
        "title": "হতাশা মুক্তি",
        "content": "পরিকল্পনা ভেস্তে গেলে হতাশ না হয়ে দ্রুত নতুন পরিকল্পনা করা স্টয়িকদের বৈশিষ্ট্য।"
      }
    ],
    "practicalApplication": "যদি হঠাৎ কোনো পরিকল্পনা বাতিল হয় (বৃষ্টিতে পিকনিক বাতিল বা মিটিং ক্যানসেল), তবে ১ মিনিটের বেশি মন খারাপ করবেন না। তৎক্ষণাৎ \"Plan B\" তৈরি করুন। বলুন, \"যা হয়েছে ভালোর জন্যই হয়েছে, এখন আমি এই সময়টা অন্য কাজে লাগাব।\"",
    "criticalReflection": "Viewing everything as \"borrowed\" is a profound coping mechanism for loss, but it might prevent deep emotional investment. If one constantly prepares to \"give up everything,\" they may live with underlying anxiety or detachment, fearing attachment itself.",
    "expectedOutcomes": {
      "individual": "High adaptability quotient (AQ) and resilience in chaos.",
      "social": "Reduced drama and complaining during collective disruptions (e.g., pandemics)."
    }
  },
  {
    "id": 26,
    "sectionTitle": "The Inner World",
    "chapterTitle": "Amor Fati (Love of Fate)",
    "goldenQuotes": [
      "Don’t wish for things to happen the way you like. Instead, welcome whatever happens as if you wanted it to happen.",
      "Practice acceptance without disdain."
    ],
    "coreInsights": [
      {
        "title": "প্রত্যাশা বনাম গ্রহণ",
        "content": "আমরা চাই পৃথিবী আমাদের মতো চলুক, কিন্তু তা হয় না। যা ঘটছে, তাকেই \"আমি এমনটাই চেয়েছিলাম\" বলে মেনে নেওয়া হলো প্রশান্তির চাবিকাঠি।"
      },
      {
        "title": "Amor Fati",
        "content": "কেবল ভাগ্যকে মেনে নেওয়া নয়, তাকে ভালোবাসা। প্রতিটি বাধা বা সমস্যাকে \"উপহার\" হিসেবে দেখা।"
      },
      {
        "title": "মানসিক কসরত",
        "content": "অবাঞ্ছিত ঘটনাকে (যেমন ট্রাফিক জ্যাম) মনে মনে বলুন, \"এটি আমাকে ধৈর্য শেখানোর জন্য এসেছে।\""
      },
      {
        "title": "বিরক্তিহীনতা",
        "content": "পরিস্থিতি মেনে নেওয়ার সময় বিরক্তি বা ঘৃণা রাখা যাবে না; পূর্ণ হৃদয়ে গ্রহণ করতে হবে।"
      }
    ],
    "practicalApplication": "আজ সারাদিনে যা কিছু \"ভুল\" হবে (কফি পড়ে যাওয়া, ইন্টারনেট স্লো হওয়া), তার প্রতিটিতে হাসিমুখে বলুন, \"আমি ঠিক এটাই চেয়েছিলাম!\" এটি প্রথমে হাস্যকর মনে হলেও মস্তিষ্ককে নেতিবাচকতা থেকে মুক্তি দেয়।",
    "criticalReflection": "\"Welcoming whatever happens\" can be dangerous advice for victims of injustice or abuse. While valid for unavoidable fate (death, weather), applying it to solvable oppression (discrimination, bad bosses) suggests passivity rather than necessary resistance.",
    "expectedOutcomes": {
      "individual": "A \"Teflon mind\" where frustrations slide off easily.",
      "social": "A person who brings calm rather than chaos to stressful situations."
    }
  },
  {
    "id": 27,
    "sectionTitle": "The Inner World",
    "chapterTitle": "Premeditatio Malorum (Negative Visualization)",
    "goldenQuotes": [
      "Just the thought of multiple disasters happening at the same time will help you to be more clear-headed when things go wrong.",
      "I am of the nature to have ill health. I cannot escape having ill health."
    ],
    "coreInsights": [
      {
        "title": "সবচেয়ে খারাপ কল্পনা",
        "content": "স্টয়িকরা প্রতিদিন ভাবতেন, \"আজ আমার সব কিছু ধ্বংস হয়ে যেতে পারে।\" এটি ভয়ের জন্য নয়, প্রস্তুতির জন্য।"
      },
      {
        "title": "ওয়ারেন বাফেটের কৌশল",
        "content": "বাফেটের মতো বিনিয়োগকারীরা সবসময় \"Worst Case Scenario\" বা সবচেয়ে খারাপ পরিস্থিতির জন্য লিকুইড ক্যাশ হাতে রাখেন।"
      },
      {
        "title": "বাস্তববাদী আশাবাদ",
        "content": "কেবল \"সব ঠিক হয়ে যাবে\" ভাবা বোকামি। \"সব শেষ হয়ে গেলেও আমি ঠিক থাকব\"—এটিই প্রকৃত শক্তি।"
      },
      {
        "title": "কৃতজ্ঞতা বৃদ্ধি",
        "content": "যখন আপনি ভাবেন যে আপনি অসুস্থ হতে পারেন, তখন বর্তমান সুস্থতার জন্য কৃতজ্ঞতা বাড়ে।"
      }
    ],
    "practicalApplication": "সকালে ৫ মিনিট চোখ বন্ধ করে ভাবুন—আজ আপনার চাকরি চলে গেলে বা ফোন হারিয়ে গেলে আপনি কী করবেন? এই কল্পনার পর বাস্তবে ফিরে আসুন এবং বর্তমান নিরাপত্তার জন্য কৃতজ্ঞতা প্রকাশ করুন। এই প্রস্তুতি আপনাকে বিপদে প্যানিক করা থেকে বাঁচাবে।",
    "criticalReflection": "While this builds resilience, for individuals with anxiety disorders, \"visualizing disasters\" can trigger panic attacks rather than preparation. It requires a stable baseline mental health to practice effectively without spiraling into catastrophizing.",
    "expectedOutcomes": {
      "individual": "Anti-fragility; shocks do not break you but make you react smarter.",
      "social": "People become better crisis managers and insurance planners."
    }
  },
  {
    "id": 28,
    "sectionTitle": "The Inner World",
    "chapterTitle": "Escaping the Waiting Room (Introductory)",
    "goldenQuotes": [],
    "coreInsights": [
      {
        "title": "অমরত্বের ভ্রম",
        "content": "আমরা এমনভাবে বাঁচি যেন আমাদের হাতে অফুরন্ত সময় আছে, যা সত্য নয়।"
      },
      {
        "title": "অপেক্ষার সংস্কৃতি",
        "content": "আমরা সবসময় \"আগামীকাল\" বা \"ভবিষ্যতের\" জন্য বর্তমানকে বিসর্জন দিই।"
      },
      {
        "title": "ভয় ও আকাঙ্ক্ষা",
        "content": "আমরা ভয়ে মরি মরণশীল মানুষের মতো, কিন্তু আকাঙ্ক্ষা করি অমর দেবতার মতো—এই বৈপরীত্যই আমাদের অসুখী করে।"
      }
    ],
    "practicalApplication": "নিজেকে প্রশ্ন করুন: \"যদি আজই আমার জীবনের শেষ দিন হয়, তবে আমি কি এই কাজটিই করতাম যা এখন করছি?\" যদি উত্তর \"না\" হয়, তবে সন্ধ্যায় অন্তত এমন কিছু করুন যা আপনাকে জীবিত অনুভব করায়।",
    "criticalReflection": "This chapter critiques the \"deferred life plan\" (working hard now to enjoy later). While philosophically sound, economic reality often demands sacrificing the present for future security (e.g., saving for retirement). A balance is needed.",
    "expectedOutcomes": {
      "individual": "Increased urgency to pursue passions.",
      "social": "A shift from \"hustle culture\" to \"living culture.\""
    }
  },
  {
    "id": 29,
    "sectionTitle": "The Inner World",
    "chapterTitle": "Quality Over Quantity",
    "goldenQuotes": [
      "Teach me that the good of life does not depend on its length, but its employment.",
      "It is possible, in fact very often so, that a man who has lived a long time has not lived enough.",
      "When you always feel like your life is not complete... you’re never content."
    ],
    "coreInsights": [
      {
        "title": "জীবনের দৈর্ঘ্য",
        "content": "কতদিন বাঁচলাম তার চেয়ে গুরুত্বপূর্ণ হলো কীভাবে বাঁচলাম। ১০০ বছরের অসচেতন জীবনের চেয়ে ৩০ বছরের সচেতন জীবন শ্রেয়।"
      },
      {
        "title": "অসম্পূর্ণতার বোধ",
        "content": "\"ভবিষ্যতে কিছু একটা পেলে আমার জীবন পূর্ণ হবে\"—এই ধারণা আমাদের বর্তমানের আনন্দ কেড়ে নেয়।"
      },
      {
        "title": "পরিপূর্ণতা",
        "content": "প্রতিটি দিনকে একটি সম্পূর্ণ জীবন হিসেবে দেখা উচিত। আজ যা আছে, তাতেই তৃপ্ত থাকা।"
      },
      {
        "title": "মৃত্যুচেতনা",
        "content": "মৃত্যু অনিবার্য জেনেও আমরা সময়ের অপচয় করি, যা স্টয়িকদের মতে সবচেয়ে বড় ভুল।"
      }
    ],
    "practicalApplication": "দিনের শেষে ডায়েরিতে লিখুন: \"আজ আমি এমন কী করেছি যা আমার জীবনকে অর্থবহ করেছে?\" যদি উত্তর শূন্য হয়, তবে আগামীকালের রুটিনে পরিবর্তন আনুন। সময়কে টাকার মতো হিসাব করে খরচ করুন।",
    "criticalReflection": "Seneca’s advice works well for those with autonomy over their time. For gig workers or those in survival jobs, optimizing the \"quality\" of time is a privilege. The pressure to \"live meaningfully\" every day can also become a new source of stress.",
    "expectedOutcomes": {
      "individual": "Less procrastination and reduced \"doom-scrolling.\"",
      "social": "People spending more quality time with family rather than working overtime unnecessarily."
    }
  },
  {
    "id": 30,
    "sectionTitle": "The Inner World",
    "chapterTitle": "Wisdom as the Only Solace",
    "goldenQuotes": [
      "No one can live happily, or even bearably, without the pursuit of wisdom.",
      "Dedicate your life to wisdom. It’s the only way to live a consistently happy life."
    ],
    "coreInsights": [
      {
        "title": "জ্ঞানের সাধনা",
        "content": "সুখ বাহ্যিক বিনোদনে নেই, আছে জ্ঞান অর্জনে। জ্ঞান আমাদের মনের চোখ খুলে দেয়।"
      },
      {
        "title": "'My Octopus Teacher' উদাহরণ",
        "content": "ডকুমেন্টারির উদাহরণ দিয়ে দেখানো হয়েছে, যে কৌতূহল এবং শেখার আগ্রহ বিষণ্ণ জীবনকেও রোমাঞ্চকর করে তুলতে পারে।"
      },
      {
        "title": "অভিযোগহীনতা",
        "content": "জ্ঞানীরা পরিস্থিতির অভিযোগ করেন না; তারা পরিস্থিতির অর্থ খোঁজার চেষ্টা করেন।"
      },
      {
        "title": "ধারাবাহিক সুখ",
        "content": "বাহ্যিক সুখ আসে-যায়, কিন্তু জ্ঞানের আনন্দ স্থায়ী।"
      }
    ],
    "practicalApplication": "বিনোদনের জন্য নেটফ্লিক্স না দেখে ইউটিউবে কোনো শিক্ষামূলক ডকুমেন্টারি বা টেড টক (TED Talk) দেখুন। সপ্তাহে একটি নতুন বিষয় সম্পর্কে জানুন (যেমন মহাকাশ, ইতিহাস বা মনোবিজ্ঞান)। শেখার আনন্দকে অভ্যাসে পরিণত করুন।",
    "criticalReflection": "Defining happiness only through wisdom can be exclusionary. Many find profound happiness in simple, non-intellectual acts like gardening, caregiving, or physical labor. The intellectualization of happiness is a specific, somewhat elitist, Stoic trait.",
    "expectedOutcomes": {
      "individual": "A more engaged and curious mind; less boredom.",
      "social": "A more educated citizenry capable of critical thought."
    }
  },
  {
    "id": 31,
    "sectionTitle": "The Inner World",
    "chapterTitle": "The Equilibrium of Effort",
    "goldenQuotes": [
      "The truth is we need to do hard things, to maintain equilibrium.",
      "Nothing in life improves on its own without any form of nurturing.",
      "Decide that you are an adult, and you are going to devote the rest of your life to making progress."
    ],
    "coreInsights": [
      {
        "title": "কঠিন কাজের প্রয়োজন",
        "content": "শরীর ও মন ভালো রাখতে হলে আমাদের কঠিন কাজ (যেমন ব্যায়াম, গভীর মনোযোগের কাজ) করতেই হবে। আরাম শুধু ক্ষয় ডেকে আনে।"
      },
      {
        "title": "ভারসাম্য",
        "content": "স্টয়িকরা অলসতা এবং অতি-পরিশ্রম—উভয়কেই খারাপ মনে করতেন। তারা \"সক্রিয় বিশ্রাম\" এবং \"অর্থবহ শ্রমে\" বিশ্বাসী ছিলেন।"
      },
      {
        "title": "রক্ষণাবেক্ষণ",
        "content": "একটি বাড়ি বা বাগানের মতো আমাদের জীবনও নিয়মিত যত্ন বা 'Nurturing' চায়। অবহেলা করলেই আগাছা জন্মাবে।"
      },
      {
        "title": "প্রগতি",
        "content": "প্রাপ্তবয়স্ক হওয়ার অর্থ হলো আজীবন উন্নতির প্রতি প্রতিশ্রুতিবদ্ধ থাকা।"
      }
    ],
    "practicalApplication": "প্রতিদিন অন্তত একটি কাজ করুন যা করতে আপনার কষ্ট হয় কিন্তু শরীরের জন্য ভালো (যেমন: ঠান্ডা পানিতে গোসল, ৩০ মিনিট দৌড়ানো বা কঠিন কোনো বই পড়া)। কষ্টের মধ্য দিয়ে নিজের ইচ্ছাশক্তিকে ঝালিয়ে নিন।",
    "criticalReflection": "The cult of \"doing hard things\" creates resilience but can also glorify suffering. Sometimes, the easiest path is the smartest (efficiency). Constant struggle is not always a virtue; strategic ease is also a skill.",
    "expectedOutcomes": {
      "individual": "Improved physical health and mental discipline.",
      "social": "A culture that respects grit and perseverance."
    }
  },
  {
    "id": 32,
    "sectionTitle": "The Inner World",
    "chapterTitle": "The Liberation of Minimalism",
    "goldenQuotes": [
      "You cannot really lose anything because you don’t own anything in the first place.",
      "They are given to you for temporary keep. So never say, ‘I have lost something.’ You just returned it."
    ],
    "coreInsights": [
      {
        "title": "মালিকানার ভ্রম",
        "content": "আমরা মনে করি আমরা জিনিসের মালিক, আসলে আমরা কেবল সেগুলোর সাময়িক ব্যবহারকারী।"
      },
      {
        "title": "হারানোর ভয়",
        "content": "যার নেই, তার হারানোর ভয়ও নেই। মালিকানা কমালে দুশ্চিন্তা কমে।"
      },
      {
        "title": "ফিরিয়ে দেওয়া",
        "content": "কোনো কিছু হারিয়ে গেলে বা নষ্ট হলে ভাবুন, \"এটি আমি ফেরত দিয়েছি,\" হারিয়ে ফেলিনি। এটি শোক কমানোর শক্তিশালী উপায়।"
      },
      {
        "title": "মিনিমালিস্ট জীবন",
        "content": "কম জিনিস মানে কম মেইনটেন্যান্স, কম খরচ এবং বেশি মানসিক শান্তি।"
      }
    ],
    "practicalApplication": "আপনার ঘর থেকে এমন ৫টি জিনিস আজই ফেলে দিন বা দান করুন যা গত ৬ মাসে ব্যবহার করেননি। নিজেকে বলুন, \"এই জিনিসগুলো আমাকে সংজ্ঞায়িত করে না।\" এটি আপনাকে মুক্তির স্বাদ দেবে।",
    "criticalReflection": "\"You don't own anything\" is spiritually liberating but legally and practically complicated. In a capitalist society, ownership is security (e.g., owning a home vs. renting). This philosophy works best as a mental detachment rather than a literal financial strategy for everyone.",
    "expectedOutcomes": {
      "individual": "Reduced hoarding and cleaner living spaces.",
      "social": "Less consumer waste and more charitable giving."
    }
  },
  {
    "id": 33,
    "sectionTitle": "The Inner World",
    "chapterTitle": "Accidental vs. Intentional Living",
    "goldenQuotes": [
      "It is shameful not to walk but to be carried, and suddenly dazed in the midst of worldly confusion to ask: ‘How did I come to this point?’",
      "Your life shouldn’t be an accident."
    ],
    "coreInsights": [
      {
        "title": "স্রোতে গা ভাসানো",
        "content": "অধিকাংশ মানুষ স্রোতের টানে ভেসে চলে এবং হঠাৎ মাঝবয়েসে গিয়ে অবাক হয়ে ভাবে, \"আমি এখানে কীভাবে এলাম?\" এটি লজ্জাজনক।"
      },
      {
        "title": "দুর্ঘটনাবশত ক্যারিয়ার",
        "content": "লেখক তার বাবার লন্ড্রি ব্যবসার উদাহরণ দিয়ে দেখিয়েছেন, কীভাবে আমরা না বুঝেই কোনো পেশায় ঢুকে পড়ি।"
      },
      {
        "title": "সচেতন নির্বাচন",
        "content": "প্রতিটি পদক্ষেপ—ক্যারিয়ার, সঙ্গী, বাসস্থান—সচেতনভাবে এবং যুক্তির মাধ্যমে নির্বাচন করা উচিত।"
      },
      {
        "title": "প্রশ্ন করা",
        "content": "নিয়মিত নিজেকে প্রশ্ন করুন: \"আমি যা করছি, তা কি আমি সত্যিই করতে চেয়েছিলাম?\""
      }
    ],
    "practicalApplication": "আজ রাতে ১০ মিনিট সময় নিয়ে ভাবুন—আপনার বর্তমান চাকরি বা পড়াশোনা কি আপনার নিজের চয়েস, নাকি পরিস্থিতির শিকার? যদি পরিস্থিতির শিকার হন, তবে ছোট ছোট পদক্ষেপ নিতে শুরু করুন যা আপনাকে আপনার ইচ্ছের পথে নিয়ে যাবে।",
    "criticalReflection": "The idea that life shouldn't be an accident ignores the massive role of luck and randomness. Many successful lives are happy accidents. Over-planning or demanding intentionality in every step can lead to rigidity and an inability to seize unexpected opportunities.",
    "expectedOutcomes": {
      "individual": "A aligned life trajectory with fewer mid-life crises.",
      "social": "More people pursuing fulfilling careers, potentially leading to higher societal productivity."
    }
  },
  {
    "id": 34,
    "sectionTitle": "The Inner World",
    "chapterTitle": "The Urgency of Now",
    "goldenQuotes": [
      "Whether you’re 25 or 85, it always seems like you have a short time left...",
      "Live as if you were alone — out in the wilderness.",
      "But as we’re waiting, we keep on wasting today."
    ],
    "coreInsights": [
      {
        "title": "সময়ের আপেক্ষিকতা",
        "content": "বয়স যা-ই হোক, সময় সবসময় কম মনে হয়। তাই \"পরে করব\" বলার সুযোগ নেই।"
      },
      {
        "title": "অপেক্ষার ফাঁদ",
        "content": "আমরা সবসময় \"সঠিক সময়ের\" জন্য অপেক্ষা করি, কিন্তু সেই সময় কখনোই আসে না। এই অপেক্ষাতেই জীবন শেষ হয়ে যায়।"
      },
      {
        "title": "বন্য জীবন",
        "content": "মার্কাস অরেলিয়াস বলেছিলেন, শহরের ভিড়ে থেকেও এমনভাবে বাঁচুন যেন আপনি বনে একা আছেন—কারো ওপর নির্ভরশীল না হয়ে, বর্তমান মুহূর্তে ফোকাস করে।"
      },
      {
        "title": "আজই যথেষ্ট",
        "content": "ভবিষ্যৎ নিয়ে দুশ্চিন্তা না করে আজকের দিনটিকে পূর্ণভাবে উপভোগ করাই জীবনের সার্থকতা।"
      }
    ],
    "practicalApplication": "আপনার বাকেট লিস্টের (Bucket List) এমন একটি কাজ বেছে নিন যা আপনি \"পরে করবেন\" বলে রেখে দিয়েছেন। সেই কাজটি করার জন্য আজকেই কোনো পদক্ষেপ নিন (যেমন টিকিট কাটা বা ক্লাস বুক করা)। ভাবুন, \"আর সময় নেই।\"",
    "criticalReflection": "Living with a constant sense of urgency (\"short time left\") can lead to chronic stress or hedonism. A balanced view acknowledges mortality without inducing panic, allowing for long-term projects like raising children or building institutions which require patience, not haste.",
    "expectedOutcomes": {
      "individual": "Elimination of procrastination.",
      "social": "A more vibrant culture where people act on their dreams."
    }
  },
  {
    "id": 35,
    "sectionTitle": "The Inner World",
    "chapterTitle": "The Principle of Progression (Introductory)",
    "goldenQuotes": [
      "Progress is not achieved by luck or accident, but by working on yourself daily."
    ],
    "coreInsights": [
      {
        "title": "ভাগ্য বনাম কর্ম",
        "content": "উন্নতি লটারির মতো হঠাৎ করে আসে না; এটি প্রতিদিনের ছোট ছোট অভ্যাসের ফসল।"
      },
      {
        "title": "প্রতিদিনের কাজ",
        "content": "নিজেকে উন্নত করার জন্য প্রতিদিন কিছু না কিছু করতেই হবে। একদিন জিম করে বডি বিল্ডার হওয়া যায় না।"
      },
      {
        "title": "ধারাবাহিকতা",
        "content": "সাফল্যের মূল চাবিকাঠি হলো কনসিস্টেন্সি বা ধারাবাহিকতা।"
      },
      {
        "title": "প্রক্রিয়ায় বিশ্বাস",
        "content": "ফলাফলের চেয়ে প্রতিদিনের রুটিন বা প্রক্রিয়ার ওপর বিশ্বাস রাখা বেশি জরুরি।"
      }
    ],
    "practicalApplication": "\"১% রুল\" মেনে চলুন। প্রতিদিন নিজেকে গতকালের চেয়ে মাত্র ১% উন্নত করার চেষ্টা করুন। সেটা হতে পারে ১০ মিনিট বেশি পড়া বা ৫ মিনিট বেশি হাঁটা। ১ বছরে এই ছোট পরিবর্তন বিশাল আকার ধারণ করবে।",
    "criticalReflection": "The obsession with constant \"betterment\" characterizes modern self-help culture. It implies we are never \"enough\" as we are. Sometimes, acceptance of one's current state is healthier than the neurotic pursuit of endless optimization.",
    "expectedOutcomes": {
      "individual": "Compounding growth in skills and character.",
      "social": "A society focused on merit and hard work rather than entitlement."
    }
  },
  {
    "id": 36,
    "sectionTitle": "The Inner World",
    "chapterTitle": "The Discipline of Resilience",
    "goldenQuotes": [
      "We will train both soul and body when we accustom ourselves to cold, heat, thirst, hunger, scarcity of food, hardness of bed, abstaining from pleasures, and enduring pains.",
      "Only when you exert moderate effort can you maintain your strength, and potentially grow stronger."
    ],
    "coreInsights": [
      {
        "title": "কষ্টের অনুশীলন",
        "content": "মুসোনিয়াস রুফাসের মতে, শরীর ও মনকে ইচ্ছাকৃতভাবে কষ্টের (যেমন ঠান্ডা, ক্ষুধা) মুখোমুখি করা উচিত। এটি আমাদের সহনশীলতা বাড়ায়।"
      },
      {
        "title": "ফিলোসফি বনাম অ্যাকশন",
        "content": "কেবল দর্শন পড়লেই হবে না, তা বাস্তবে প্রয়োগ করতে হবে। যেমন জিমে না গিয়ে সিক্স প্যাক বানানো যায় না, তেমনি চর্চা ছাড়া মনের জোর বাড়ে না।"
      },
      {
        "title": "মডারেট এফোর্ট",
        "content": "সবসময় নিজেকে ১০০% পুশ করার দরকার নেই। 'Moderate Effort' বা পরিমিত প্রচেষ্টাই দীর্ঘমেয়াদী শক্তির চাবিকাঠি।"
      },
      {
        "title": "বডি-মাইন্ড কানেকশন",
        "content": "শরীর দুর্বল হলে মনও দুর্বল হয়ে পড়ে। তাই শরীরচর্চা মনের জোর বাড়ানোর একটি হাতিয়ার।"
      }
    ],
    "practicalApplication": "সপ্তাহে একদিন ইচ্ছাকৃতভাবে কোনো একটি আরাম ত্যাগ করুন (Voluntary Discomfort)। হতে পারে ফ্যানের স্পিড কমিয়ে ঘুমানো, প্রিয় খাবার না খাওয়া বা লিফট ব্যবহার না করে সিঁড়ি দিয়ে ওঠা। এটি আপনার মস্তিষ্ককে কঠিন পরিস্থিতির জন্য প্রস্তুত করবে।",
    "criticalReflection": "While \"voluntary discomfort\" builds resilience, it originates from a position of privilege. For those already living in poverty or chronic pain, life itself is the training. The Stoic emphasis on physical asceticism can sometimes border on self-punishment if not balanced with self-care.",
    "expectedOutcomes": {
      "individual": "Increased pain tolerance and reduced dependency on luxury.",
      "social": "A less consumerist lifestyle."
    }
  },
  {
    "id": 37,
    "sectionTitle": "The Inner World",
    "chapterTitle": "The Art of Making Do",
    "goldenQuotes": [
      "Until we have begun to go without them, we fail to realize how unnecessary many things are.",
      "The only things we really can’t live without are the basics — water, food, shelter. Other things are optional."
    ],
    "coreInsights": [
      {
        "title": "অপ্রয়োজনীয় নির্ভরতা",
        "content": "আমরা অনেক জিনিসের ওপর মানসিকভাবে নির্ভরশীল হয়ে পড়ি (যেমন এসি, দামী কফি), যা আসলে বেঁচে থাকার জন্য অপরিহার্য নয়।"
      },
      {
        "title": "রিসোর্সফুলনেস",
        "content": "জীবনের সার্থকতা আমাদের কী আছে তার ওপর নয়, বরং যা আছে তা আমরা কীভাবে ব্যবহার করছি তার ওপর নির্ভর করে।"
      },
      {
        "title": "ভ্রমণের শিক্ষা",
        "content": "লেখক যখন ছোট ব্যাগে ভ্রমণ করতেন, তখন তিনি বুঝতেন যে দৈনন্দিন জীবনে আমরা কতটা বোঝা বয়ে বেড়াই।"
      },
      {
        "title": "অর্থনৈতিক অনিশ্চয়তা",
        "content": "মন্দার সময় যারা কম রিসোর্সে চলতে পারে, তারাই টিকে থাকে।"
      }
    ],
    "practicalApplication": "আজ আপনার ঘরের দিকে তাকান এবং ৩টি জিনিস চিহ্নিত করুন যা গত ৬ মাসে ব্যবহার করেননি। সেগুলোকে স্টোরে রেখে দিন বা দান করুন। নিজেকে প্রমাণ করুন যে এগুলো ছাড়াই আপনি দিব্যি চলতে পারেন।",
    "criticalReflection": "Resourcefulness is a virtue, but systemic scarcity is a societal failure. While individual adaptability is good, glorifying \"making do with less\" should not become an excuse to ignore economic inequalities that force people to be resourceful out of desperation, not choice.",
    "expectedOutcomes": {
      "individual": "Reduced anxiety about financial loss.",
      "social": "Lower environmental footprint due to reduced consumption."
    }
  },
  {
    "id": 38,
    "sectionTitle": "The Inner World",
    "chapterTitle": "The Pedagogy of Error",
    "goldenQuotes": [
      "To err is human, but to persist (in the mistake) is diabolical.",
      "The unexamined life is not worth living."
    ],
    "coreInsights": [
      {
        "title": "ভুলের অনিবার্যতা",
        "content": "কিছু ভুল এড়ানো যায় (জ্ঞান দিয়ে), আবার কিছু ভুল এড়ানো অসম্ভব। জীবনের অংশ হিসেবেই ভুলকে মেনে নিতে হবে।"
      },
      {
        "title": "শারীরিক শিক্ষা",
        "content": "লেখক তার পিঠের ইনজুরি থেকে শিখেছেন যে ছোট ছোট অবহেলা (খারাপ পশ্চার) বড় ভুলের কারণ হতে পারে।"
      },
      {
        "title": "আত্ম-পর্যালোচনা",
        "content": "নিয়মিত নিজেকে প্রশ্ন করা—\"আমি কি ঠিক পথে আছি?\"—ভুলের পুনরাবৃত্তি রোধ করে।"
      },
      {
        "title": "শেখার মানসিকতা",
        "content": "ভুল মানে ব্যর্থতা নয়, এটি একটি ডেটা পয়েন্ট যা আমাদের শেখায় কীভাবে আর কাজ করা উচিত নয়।"
      }
    ],
    "practicalApplication": "গত মাসে আপনি কী কী ভুল করেছেন তার একটি তালিকা করুন। নিজেকে বিচার না করে (Non-judgmentally) প্রতিটি ভুলের পাশে লিখুন—\"এখান থেকে আমি কী শিখলাম?\" এবং \"আগামীবার আমি কী ভিন্নভাবে করব?\"",
    "criticalReflection": "The phrase \"persist in mistake is diabolical\" adds heavy moral weight to repetitive errors. In reality, breaking habits (like bad posture or addiction) involves relapse. A gentler approach than viewing recurrence as \"diabolical\" might be more effective for behavioral change.",
    "expectedOutcomes": {
      "individual": "Faster learning curve and reduced guilt over failures.",
      "social": "A culture of accountability rather than blame."
    }
  },
  {
    "id": 39,
    "sectionTitle": "The Inner World",
    "chapterTitle": "Rewriting the Internal Script",
    "goldenQuotes": [
      "You have the power to change your self-talk if you want.",
      "No one ever got worse by trying to be better."
    ],
    "coreInsights": [
      {
        "title": "প্যাসিভ বনাম প্রো-অ্যাক্টিভ",
        "content": "অসুস্থতা বা কষ্টের সময় \"আমি শেষ হয়ে গেলাম\" (প্যাসিভ) না বলে \"আমি এর মোকাবেলা করব\" (প্রো-অ্যাক্টিভ) বলা উচিত।"
      },
      {
        "title": "যুক্তির ব্যবহার",
        "content": "স্টয়িকরা আবেগের চেয়ে যুক্তিকে প্রাধান্য দেন। সেলফ-টক হতে হবে যৌক্তিক, আবেগপ্রবণ নয়।"
      },
      {
        "title": "শারীরিক প্রভাব",
        "content": "নেতিবাচক কথা শরীরকে আরও দুর্বল করে দেয়। লেখক তার IBS (পেটের সমস্যা) মোকাবেলায় পজিটিভ সেলফ-টকের শক্তি দেখেছেন।"
      },
      {
        "title": "পারফেকশন নয়, প্রগতি",
        "content": "আমরা নিখুঁত হতে পারব না, কিন্তু প্রতিদিন একটু একটু করে ভালো হওয়ার চেষ্টা করতে পারি।"
      }
    ],
    "practicalApplication": "যখনই মনে মনে বলবেন \"আমি পারব না\" বা \"এটা খুব কঠিন\", তখন বাক্যটি রি-ফ্রেজ (Rephrase) করুন। বলুন, \"এটা কঠিন, কিন্তু আমি এর সমাধান বের করতে পারব।\" নিজের নাম ধরে নিজেকে উৎসাহিত করুন (যেমন: \"শোন",
    "criticalReflection": "While positive self-talk is powerful (CBT principle), it has limits. Severe chronic illnesses or mental health disorders often require medical intervention, not just \"better self-talk.\" Over-reliance on mindset to cure physical ailments can lead to neglecting necessary medical care.",
    "expectedOutcomes": {
      "individual": "Improved pain management and mental endurance.",
      "social": "Less complaining in social interactions."
    }
  },
  {
    "id": 40,
    "sectionTitle": "The Inner World",
    "chapterTitle": "Wisdom into Action",
    "goldenQuotes": [
      "Your job is to perform in this game called life. And to perform, you need two things: A plan, and stamina.",
      "Don’t just learn things. Turn everything you learn into an activity."
    ],
    "coreInsights": [
      {
        "title": "জ্ঞান বনাম প্রয়োগ",
        "content": "হাজারটা বই পড়ে লাভ নেই যদি তা কাজে লাগানো না হয়। জ্ঞান জমা করা আর জ্ঞান প্রয়োগ করা—দুটি ভিন্ন জিনিস।"
      },
      {
        "title": "অ্যাথলেট মানসিকতা",
        "content": "জীবনকে একটি খেলার মতো দেখতে হবে। খেলার জন্য যেমন স্ট্যামিনা বা দম লাগে, জীবনের জন্যও মানসিক স্ট্যামিনা দরকার।"
      },
      {
        "title": "গোপন রহস্য",
        "content": "উন্নতির কোনো গোপন রহস্য নেই; আসল রহস্য হলো একঘেয়ে বা বোরিং কাজগুলো প্রতিদিন করে যাওয়া (Consistency)।"
      },
      {
        "title": "মাইন্ডফুল ট্রেনিং",
        "content": "যা শিখছেন, তা ছোট কোনো কাজের মাধ্যমে চর্চা করুন। লেখা শিখলে রোজ লিখুন, ধ্যান শিখলে রোজ ৫ মিনিট বসুন।"
      }
    ],
    "practicalApplication": "গত এক সপ্তাহে আপনি যা নতুন শিখেছেন (বই বা ভিডিও থেকে), তার ওপর ভিত্তি করে আজই একটি অ্যাকশন নিন। যদি স্বাস্থ্যের টিপস দেখে থাকেন, তবে আজই একটি স্বাস্থ্যকর মিল খান। \"Learning\" কে \"Doing\"-এ রূপান্তর করুন।",
    "criticalReflection": "The \"athlete mindset\" creates a performance-based view of life. Not everyone wants to \"perform\" constantly; some seek contentment or stillness. Constant execution can lead to a utilitarian life where knowledge is only valued if it's useful, neglecting art or philosophy for pleasure's sake.",
    "expectedOutcomes": {
      "individual": "High competency and skill acquisition.",
      "social": "A pragmatic society that values results over credentials."
    }
  },
  {
    "id": 41,
    "sectionTitle": "The Inner World",
    "chapterTitle": "Internal Fortification",
    "goldenQuotes": [
      "Each day acquire something that will fortify you against poverty, against death, indeed against other misfortunes as well.",
      "The REAL reward you acquire is not the money or status, it’s the energy, pride, and sense of accomplishment."
    ],
    "coreInsights": [
      {
        "title": "বাহ্যিক বনাম অভ্যন্তরীণ পুরস্কার",
        "content": "টাকা বা স্ট্যাটাস হলো কাজের উপজাত (By-product)। আসল পুরস্কার হলো কাজ শেষ করার আত্মতৃপ্তি।"
      },
      {
        "title": "প্রতিদিনের সুরক্ষা",
        "content": "প্রতিদিন এমন একটি চিন্তা বা দক্ষতা অর্জন করুন যা আপনাকে ভবিষ্যতের দারিদ্র্য বা মৃত্যুভয় থেকে রক্ষা করবে।"
      },
      {
        "title": "তুলনার ফাঁদ",
        "content": "অন্যের ফলোয়ার বা সম্পদ দেখে নিজের উন্নতি মাপা বোকামি। নিজের গতকালের সাথে আজকের তুলনা করুন।"
      },
      {
        "title": "দক্ষতা অর্জন",
        "content": "আপনি যদি বিখ্যাত নাও হন, তবুও দক্ষতা অর্জন করলে আপনি জীবনের যেকোনো ঝড় মোকাবেলা করতে পারবেন।"
      }
    ],
    "practicalApplication": "দিনের শুরুতে ঠিক করুন আজ কোন একটি নির্দিষ্ট বিষয়ে আপনি গতকালের চেয়ে ভালো করবেন। দিন শেষে নিজেকে প্রশ্ন করুন: \"আজ আমি এমন কী শিখেছি বা করেছি যা আমাকে মানসিকভাবে শক্তিশালী করেছে?\"",
    "criticalReflection": "Seneca's advice to fortify against poverty is ironic coming from one of Rome's richest men. While mental strength helps endure poverty, it doesn't solve it. Structural barriers to becoming \"stronger\" (like lack of education access) are ignored in this individualistic framework.",
    "expectedOutcomes": {
      "individual": "Decreased dependency on external validation (likes/views).",
      "social": "More resilient individuals who are harder to manipulate."
    }
  },
  {
    "id": 42,
    "sectionTitle": "The Inner World",
    "chapterTitle": "The Grace of Self-Forgiveness",
    "goldenQuotes": [
      "When you blame yourself for your negative feelings, you are making progress.",
      "It’s always foolish to blame yourself for things that happen in life."
    ],
    "coreInsights": [
      {
        "title": "দায়িত্ব বনাম দোষ",
        "content": "নিজের অনুভূতির দায়িত্ব নেওয়া আর নিজেকে দোষী ভাবা এক নয়। দায়িত্ব নিলে ক্ষমতা বাড়ে, দোষ দিলে গ্লানি বাড়ে।"
      },
      {
        "title": "অতীত অপরিবর্তনীয়",
        "content": "টাইম মেশিন নেই, তাই \"আমি কেন এটা করলাম না\" ভেবে সময় নষ্ট করা অর্থহীন।"
      },
      {
        "title": "স্বাস্থ্যের অগ্রাধিকার",
        "content": "বার্সেলোনা ট্যুরের উদাহরণ দিয়ে লেখক বলেছেন, উচ্চাকাঙ্ক্ষার চেয়ে শরীর ও মনের সুস্থতা সবসময় আগে।"
      },
      {
        "title": "ভুল মানুষের ধর্ম",
        "content": "ভুল করা স্বাভাবিক। নিজের ভুলের প্রতি সদয় হোন এবং সেখান থেকে শিক্ষা নিয়ে এগিয়ে যান।"
      }
    ],
    "practicalApplication": "যদি অতীতে কোনো ভুল সিদ্ধান্ত নিয়ে থাকেন, তবে আজ নিজেকে একটি চিঠি লিখুন। লিখুন: \"আমি তোমাকে ক্ষমা করলাম, কারণ সেই সময় তোমার কাছে যে বুদ্ধি ছিল, তা দিয়ে তুমি সেরাটাই করার চেষ্টা করেছ।\"",
    "criticalReflection": "\"Blaming yourself for negative feelings is progress\" (Epictetus) is a complex Stoic idea meaning you are the source of your distress (judgments), not the event. However, misinterpreted, it can lead to gaslighting oneself—believing valid reactions to abuse or trauma are just \"my fault for feeling bad.\"",
    "expectedOutcomes": {
      "individual": "Healing from past regrets and reduced self-loathing.",
      "social": "More forgiving interactions with others as a reflection of self-forgiveness."
    }
  },
  {
    "id": 43,
    "sectionTitle": "The Inner World",
    "chapterTitle": "The Loneliness of Growth",
    "goldenQuotes": [
      "There’ll still be people standing around the bed who will welcome the sad event.",
      "The best thing we can do is to never be like the negative people on this planet."
    ],
    "coreInsights": [
      {
        "title": "ঈর্ষার বাস্তবতা",
        "content": "আপনি যতই ভালো হোন না কেন, কিছু মানুষ আপনার পতন চাইবে বা আপনার মৃত্যুতে খুশি হবে। এটি মেনে নিন।"
      },
      {
        "title": "বন্ধু পরিবর্তন",
        "content": "আপনি যখন উন্নতির পথে হাঁটবেন, পুরনো অনেক বন্ধু হারিয়ে যাবে। এটি স্বাভাবিক প্রক্রিয়া।"
      },
      {
        "title": "নেতিবাচকতা এড়ানো",
        "content": "যারা আপনাকে টেনে নিচে নামাতে চায়, তাদের ওপর রাগ না করে তাদের থেকে দূরে থাকুন। তাদের মতো আচরণ করবেন না।"
      },
      {
        "title": "নিজের পথে অটল",
        "content": "অন্যের সমালোচনায় নিজের ভালো কাজ বা স্বভাব পরিবর্তন করবেন না।"
      }
    ],
    "practicalApplication": "আপনার সার্কেলে এমন কাউকে চিহ্নিত করুন যে সবসময় আপনার উৎসাহ কমিয়ে দেয়। তার সাথে সময় কাটানো কমিয়ে দিন। পরিবর্তে এমন কারো সাথে মিশুন যে আপনার চেয়ে এক ধাপ এগিয়ে আছে।",
    "criticalReflection": "Attributing lost friendships solely to \"jealousy\" or \"growth\" can be a defense mechanism to avoid examining one's own arrogance or neglect of friends. Sometimes people drift apart simply due to different priorities, not malice.",
    "expectedOutcomes": {
      "individual": "A curated social circle of high-value individuals.",
      "social": "Social stratification where \"growth-minded\" people isolate from others."
    }
  },
  {
    "id": 44,
    "sectionTitle": "The Inner World",
    "chapterTitle": "Embracing Discomfort",
    "goldenQuotes": [
      "Hardship is good. Too much pleasure is bad.",
      "The soul is strengthened as it is trained for courage by enduring hardships."
    ],
    "coreInsights": [
      {
        "title": "বিরক্তির উপকারিতা",
        "content": "ছোটখাটো বিরক্তি (যেমন ঠান্ডা আবহাওয়া, লাইনে দাঁড়ানো) আমাদের ধৈর্য পরীক্ষা করে এবং সহনশীলতা বাড়ায়।"
      },
      {
        "title": "বিলাসবহুল জীবনের ফাঁদ",
        "content": "অতিরিক্ত আরাম আমাদের দুর্বল করে দেয়। মাঝে মাঝে সাধারণ জীবনযাপন করা উচিত।"
      },
      {
        "title": "কন্ট্রাস্ট এফেক্ট",
        "content": "যখন আপনি কষ্টের স্বাদ পান, তখন আরামের কদর অনেক বেড়ে যায়। হিটেড ম্যাট্রেসের উদাহরণ দিয়ে লেখক এটি বুঝিয়েছেন।"
      },
      {
        "title": "ইচ্ছাকৃত সরলতা",
        "content": "সামর্থ্য থাকলেও সাদামাটা জীবন বেছে নেওয়া মানসিক স্বাধীনতার লক্ষণ।"
      }
    ],
    "practicalApplication": "পরবর্তীবার যখন ট্রাফিক জ্যামে পড়বেন বা ইন্টারনেট স্লো হবে, তখন বিরক্ত না হয়ে একে \"ধৈর্য পরীক্ষার সুযোগ\" হিসেবে দেখুন। মনে মনে বলুন, \"এটি আমাকে মানসিকভাবে শক্ত করছে।\"",
    "criticalReflection": "This chapter romanticizes hardship. For people whose entire life is an \"annoying thing\" due to poverty or disability, adding more discomfort is not training—it's torture. This Stoic exercise is primarily beneficial for the comfortable middle/upper class.",
    "expectedOutcomes": {
      "individual": "High tolerance for inconvenience and frustration.",
      "social": "Less \"Karen-like\" behavior in public service situations."
    }
  },
  {
    "id": 45,
    "sectionTitle": "The Outer World",
    "chapterTitle": "Navigating Society (Section Intro)",
    "goldenQuotes": [
      "Happiness is not only being able to live well with yourself... We have to find a way to be comfortable in society as well."
    ],
    "coreInsights": [
      {
        "title": "সামাজিক প্রাণী",
        "content": "মানুষ একা সুখী হতে পারে না; সমাজের সাথে মানিয়ে চলাও সুখের অংশ।"
      },
      {
        "title": "বাস্তবতা",
        "content": "সন্ন্যাসীর মতো পাহাড়ের গুহায় বাস করা সবার জন্য সম্ভব নয়, তাই সমাজের বিশৃঙ্খলার মাঝেই শান্তি খুঁজতে হবে।"
      },
      {
        "title": "Chapter 46",
        "content": "Pursuing Worldly Success"
      },
      {
        "title": "1. Chapter Title",
        "content": "Virtue Over Victory (Intro)"
      },
      {
        "title": "সফলতার সংজ্ঞা",
        "content": "জাগতিক সফলতা (টাকা, ক্ষমতা) সুখের নিশ্চয়তা দেয় না; সদ্গুণ বা 'Virtue' (সততা, ন্যায়পরায়ণতা) দেয়।"
      },
      {
        "title": "হারমনি",
        "content": "সদ্গুণ আমাদের জীবনে এক ধরনের ছন্দ বা হারমনি নিয়ে আসে।"
      },
      {
        "title": "Chapter 47",
        "content": "Letter 38: On the Price We Pay to Get What We Want"
      },
      {
        "title": "1. Chapter Title",
        "content": "The Hidden Costs of Ambition"
      },
      {
        "title": "ক্যারিয়ার গেম",
        "content": "কর্পোরেট জগতে সফল হতে গেলে অনেক সময় তোষামোদ বা রাজনীতি করতে হয়। এটি হলো সেই গেমের \"মূল্য\"।"
      },
      {
        "title": "মূল্যবোধের সংঘাত",
        "content": "সাফল্যের জন্য যদি নিজের সততা বা নীতি বিসর্জন দিতে হয়, তবে সেই সাফল্য বিষাক্ত।"
      },
      {
        "title": "সরে আসার সাহস",
        "content": "লেখক ব্যাংকের চাকরি ছেড়ে দিয়েছিলেন কারণ সেখানে গসিপ ও রাজনীতি তার নীতির বিরুদ্ধে যাচ্ছিল।"
      },
      {
        "title": "নির্বাচন",
        "content": "আপনি হয় খেলাটি খেলবেন এবং মূল্য দেবেন, অথবা খেলা থেকে সরে আসবেন। মাঝখানের কোনো পথ নেই।"
      }
    ],
    "practicalApplication": "",
    "criticalReflection": "",
    "expectedOutcomes": {
      "individual": "",
      "social": ""
    }
  },
  {
    "id": 46,
    "sectionTitle": "The Outer World",
    "chapterTitle": "Virtue Over Victory (Intro)",
    "goldenQuotes": [
      "It is in virtue that happiness consists, for virtue is the state of mind which tends to make the whole of life harmonious."
    ],
    "coreInsights": [
      {
        "title": "সফলতার সংজ্ঞা",
        "content": "জাগতিক সফলতা (টাকা, ক্ষমতা) সুখের নিশ্চয়তা দেয় না; সদ্গুণ বা 'Virtue' (সততা, ন্যায়পরায়ণতা) দেয়।"
      },
      {
        "title": "হারমনি",
        "content": "সদ্গুণ আমাদের জীবনে এক ধরনের ছন্দ বা হারমনি নিয়ে আসে।"
      },
      {
        "title": "Chapter 47",
        "content": "Letter 38: On the Price We Pay to Get What We Want"
      },
      {
        "title": "1. Chapter Title",
        "content": "The Hidden Costs of Ambition"
      },
      {
        "title": "ক্যারিয়ার গেম",
        "content": "কর্পোরেট জগতে সফল হতে গেলে অনেক সময় তোষামোদ বা রাজনীতি করতে হয়। এটি হলো সেই গেমের \"মূল্য\"।"
      },
      {
        "title": "মূল্যবোধের সংঘাত",
        "content": "সাফল্যের জন্য যদি নিজের সততা বা নীতি বিসর্জন দিতে হয়, তবে সেই সাফল্য বিষাক্ত।"
      },
      {
        "title": "সরে আসার সাহস",
        "content": "লেখক ব্যাংকের চাকরি ছেড়ে দিয়েছিলেন কারণ সেখানে গসিপ ও রাজনীতি তার নীতির বিরুদ্ধে যাচ্ছিল।"
      },
      {
        "title": "নির্বাচন",
        "content": "আপনি হয় খেলাটি খেলবেন এবং মূল্য দেবেন, অথবা খেলা থেকে সরে আসবেন। মাঝখানের কোনো পথ নেই।"
      }
    ],
    "practicalApplication": "",
    "criticalReflection": "",
    "expectedOutcomes": {
      "individual": "",
      "social": ""
    }
  },
  {
    "id": 47,
    "sectionTitle": "The Outer World",
    "chapterTitle": "The Hidden Costs of Ambition",
    "goldenQuotes": [
      "You pay a price to play a game.",
      "The moment you have to exchange your values for money, you always come to the same conclusion: It’s just not worth it."
    ],
    "coreInsights": [
      {
        "title": "ক্যারিয়ার গেম",
        "content": "কর্পোরেট জগতে সফল হতে গেলে অনেক সময় তোষামোদ বা রাজনীতি করতে হয়। এটি হলো সেই গেমের \"মূল্য\"।"
      },
      {
        "title": "মূল্যবোধের সংঘাত",
        "content": "সাফল্যের জন্য যদি নিজের সততা বা নীতি বিসর্জন দিতে হয়, তবে সেই সাফল্য বিষাক্ত।"
      },
      {
        "title": "সরে আসার সাহস",
        "content": "লেখক ব্যাংকের চাকরি ছেড়ে দিয়েছিলেন কারণ সেখানে গসিপ ও রাজনীতি তার নীতির বিরুদ্ধে যাচ্ছিল।"
      },
      {
        "title": "নির্বাচন",
        "content": "আপনি হয় খেলাটি খেলবেন এবং মূল্য দেবেন, অথবা খেলা থেকে সরে আসবেন। মাঝখানের কোনো পথ নেই।"
      }
    ],
    "practicalApplication": "আপনার বর্তমান কাজের পরিবেশ মূল্যায়ন করুন। সফল হওয়ার জন্য আপনাকে কি এমন কিছু করতে হচ্ছে যা আপনি ঘৃণা করেন (যেমন মিথ্যা বলা, তেল দেওয়া)? যদি হ্যাঁ হয়, তবে ভাবুন এই \"মূল্য\" আপনি দিতে প্রস্তুত কি না। প্রস্তুত না থাকলে এক্সিট প্ল্যান তৈরি করুন।",
    "criticalReflection": "Walking away from a \"game\" that compromises values is noble but requires financial privilege (savings/safety net). Many people must pay the price of toxic workplaces to feed their families. The Stoic advice here assumes a level of career mobility not everyone has.",
    "expectedOutcomes": {
      "individual": "Integrity-driven career choices.",
      "social": "Potential loss of income in the short term, but long-term mental peace."
    }
  },
  {
    "id": 48,
    "sectionTitle": "The Outer World",
    "chapterTitle": "Absolute Freedom",
    "goldenQuotes": [
      "To be free is to not give power to fortune.",
      "When you have nothing, everything else in life is a bonus."
    ],
    "coreInsights": [
      {
        "title": "মুক্তির সংজ্ঞা",
        "content": "প্রকৃত মুক্তি টাকা বা ক্ষমতা নয়; প্রকৃত মুক্তি হলো ভাগ্যের ওপর নির্ভর না করা।"
      },
      {
        "title": "রুবিন কার্টারের উদাহরণ",
        "content": "২০ বছর মিথ্যা মামলায় জেলে থেকেও রুবিন কার্টার মানসিকভাবে মুক্ত ছিলেন কারণ তিনি ঘৃণা বা প্রতিশোধের কাছে নতি স্বীকার করেননি।"
      },
      {
        "title": "চাহিদা বনাম স্বাধীনতা",
        "content": "যার চাহিদা যত কম, সে তত বেশি স্বাধীন। \"কিছুই চাই না\"—এই মানসিকতা মানুষকে অজেয় করে তোলে।"
      },
      {
        "title": "বোনাস মানসিকতা",
        "content": "জীবনকে শূন্য থেকে শুরু ভাবলে, যা কিছুই পাওয়া যায় তাকেই বোনাস মনে হয় এবং কৃতজ্ঞতা বাড়ে।"
      }
    ],
    "practicalApplication": "নিজেকে বলুন, \"আমার সুখ বাইরের কোনো ঘটনার ওপর নির্ভর করে না।\" যদি কাল লটারি জিতেন—ভালো; যদি না জিতেন—তাও ভালো। নিজের মেজাজকে বাইরের ঘটনার দাস হতে দেবেন না।",
    "criticalReflection": "The story of Rubin Carter is inspiring but represents an extreme outlier of mental fortitude (surviving wrong imprisonment). Using extreme examples can sometimes discourage ordinary people facing ordinary struggles, making them feel inadequate for not being superhumanly stoic.",
    "expectedOutcomes": {
      "individual": "Unshakeable inner peace regardless of external constraints.",
      "social": "Individuals who are difficult to manipulate or oppress mentally."
    }
  },
  {
    "id": 49,
    "sectionTitle": "The Outer World",
    "chapterTitle": "The Trap of \"More\"",
    "goldenQuotes": [
      "Mo money, mo problems.",
      "How often have you sacrificed your inner peace for some sort of success?",
      "Success is greedy and exposed to the greed of others."
    ],
    "coreInsights": [
      {
        "title": "সফলতার মূল্য",
        "content": "প্রতিটি সাফল্যের সাথে নতুন সমস্যা আসে (যেমন আইনি জটিলতা, স্ট্রেস, শত্রুতা)।"
      },
      {
        "title": "\"কিন্তু যদি...\" ফাঁদ",
        "content": "আমরা ভাবি \"যদি ১ লাখ টাকা বেতন পাই তবে সুখী হব\"—এটি একটি মরীচিকা। লক্ষ্য পূরণ হলে নতুন অভাববোধ তৈরি হয়।"
      },
      {
        "title": "যাত্রার আনন্দ",
        "content": "গন্তব্যে পৌঁছানোর চেয়ে যাত্রাপথ উপভোগ করা বেশি জরুরি। সাধারণ দিনের ছোট ছোট অলৌকিক ঘটনাগুলো খেয়াল করুন।"
      },
      {
        "title": "লোভের চক্র",
        "content": "সাফল্য আরও লোভ ডেকে আনে। থামতে না জানলে শান্তি অসম্ভব।"
      }
    ],
    "practicalApplication": "আপনার \"পর্যাপ্ত\" (Enough) এর সংজ্ঞা ঠিক করুন। কত টাকা বা কী পদ পেলে আপনি থামবেন? সেই সীমারেখা না থাকলে আপনি আজীবন দৌড়াবেন। আজই ঠিক করুন, আপনার \"Enough Point\" কোনটি।",
    "criticalReflection": "\"Mo money, mo problems\" is a cliche often used by the wealthy to discourage the poor from seeking wealth. While wealth brings new problems, poverty brings survival problems. The stress of managing wealth is arguably preferable to the stress of starvation.",
    "expectedOutcomes": {
      "individual": "Better work-life balance and reduced burnout.",
      "social": "A culture that values contentment over relentless growth."
    }
  },
  {
    "id": 50,
    "sectionTitle": "The Outer World",
    "chapterTitle": "Action Over Outcome",
    "goldenQuotes": [
      "The problem is that we often set bad goals. And when we do that, we actually set ourselves up for failure.",
      "Everything is in your hands now. You don’t depend on anyone for the outcomes."
    ],
    "coreInsights": [
      {
        "title": "ভুল লক্ষ্য",
        "content": "\"আমি ১০ কেজি ওজন কমাব\"—এটি ভুল লক্ষ্য কারণ ফলাফল পুরোপুরি আপনার হাতে নেই।"
      },
      {
        "title": "সঠিক লক্ষ্য",
        "content": "\"আমি সপ্তাহে ৪ দিন ব্যায়াম করব\"—এটি সঠিক লক্ষ্য কারণ এটি একটি কাজ (Action) যা আপনি নিয়ন্ত্রণ করতে পারেন।"
      },
      {
        "title": "প্রক্রিয়ায় ফোকাস",
        "content": "ফলাফলের দুশ্চিন্তা বাদ দিয়ে কেবল প্রতিদিনের রুটিন বা কাজের ওপর ফোকাস করলে সাফল্য সহজে আসে।"
      },
      {
        "title": "আত্মবিশ্বাস",
        "content": "যখন লক্ষ্য কেবল নিজের কাজের ওপর নির্ভরশীল হয়, তখন আত্মবিশ্বাস বাড়ে কারণ এখানে ভাগ্যের ভূমিকা নেই।"
      }
    ],
    "practicalApplication": "আপনার বর্তমান লক্ষ্যগুলো রিভিউ করুন। সেগুলোকে \"ফলাফল\" থেকে \"কাজে\" রূপান্তর করুন।",
    "criticalReflection": "Focusing only on input (action) risks ignoring effectiveness. One can run every day (action) but with bad form and get injured. Goals need a feedback loop where outcomes are checked periodically to adjust the process, not just blind adherence to action.",
    "expectedOutcomes": {
      "individual": "Higher consistency and lower anxiety about failure.",
      "social": "A more disciplined workforce."
    }
  },
  {
    "id": 51,
    "sectionTitle": "The Outer World",
    "chapterTitle": "Overcoming Envy",
    "goldenQuotes": [
      "I grow stronger and more triumphant... whenever I realize from your actions and writings how much you have projected yourself beyond yourself.",
      "Jealousy is a prevalent emotion that leads to negativity and unhappiness."
    ],
    "coreInsights": [
      {
        "title": "ঈর্ষা বনাম অনুপ্রেরণা",
        "content": "অন্যের সাফল্য দেখে জ্বলে না গিয়ে সেখান থেকে শক্তি ও অনুপ্রেরণা নেওয়া উচিত।"
      },
      {
        "title": "সহযোগিতার শক্তি",
        "content": "লেখকের বস \"আন্দ্রে\" সবাইকে সাহায্য করতেন এবং অন্যের সাফল্যে খুশি হতেন, যা তাকেও সফল করেছিল। অন্যদিকে \"স্যান্ডার\" হিংসুটে হওয়ায় ব্যর্থ হন।"
      },
      {
        "title": "শূন্য মানসিকতা (Zero-sum) ত্যাগ",
        "content": "অন্যের ভালো মানে আমার ক্ষতি নয়। সাফল্যের পিঠা অনেক বড়, সবাই ভাগ পেতে পারে।"
      },
      {
        "title": "চিয়ারলিডার হওয়া",
        "content": "অন্যের জয়ে হাততালি দিলে নিজের মানসিকতা বড় হয়।"
      }
    ],
    "practicalApplication": "আজ সোশ্যাল মিডিয়ায় বা বাস্তবে পরিচিত কারো সাফল্যে (প্রমোশন, নতুন বাড়ি) মন থেকে অভিনন্দন জানান। হিংসা লাগলেও জোর করে ভালো কথা বলুন। এটি আপনার মস্তিষ্ককে \"Scarcity Mindset\" থেকে \"Abundance Mindset\"-এ শিফট করবে।",
    "criticalReflection": "While celebrating others is virtuous, systemic inequality often means some succeed due to privilege/corruption while others struggle. Blindly celebrating all success without questioning how it was achieved can normalize unfairness. However, on a personal level, envy remains toxic.",
    "expectedOutcomes": {
      "individual": "Better mental health and stronger networks.",
      "social": "collaborative communities and reduced workplace toxicity."
    }
  },
  {
    "id": 52,
    "sectionTitle": "The Outer World",
    "chapterTitle": "The Wise Use of Resources (Intro)",
    "goldenQuotes": [
      "Wise people are in want of nothing, and yet need many things. On the other hand, nothing is needed by fools... but are in want of everything."
    ],
    "coreInsights": [
      {
        "title": "জ্ঞানী বনাম বোকা",
        "content": "জ্ঞানীরা জানে কীভাবে সম্পদ ব্যবহার করতে হয়, তাই তাদের অভাব নেই। বোকারা সম্পদের ব্যবহার জানে না, তাই তারা সবসময় অভাব অনুভব করে।"
      },
      {
        "title": "প্রয়োজন বনাম অভাব",
        "content": "অভাব একটি মানসিক অবস্থা।"
      },
      {
        "title": "Chapter 53",
        "content": "Letter 43: On Getting Rich"
      },
      {
        "title": "1. Chapter Title",
        "content": "Wealth Without Corruption"
      },
      {
        "title": "সৎ উপার্জন",
        "content": "স্টয়িকরা ধনী হওয়ার বিরোধী নন, তবে তা হতে হবে সততা বজায় রেখে।"
      },
      {
        "title": "টাকা একটি টুল",
        "content": "টাকা জীবনের লক্ষ্য নয়, এটি জীবনকে সহজ করার একটি হাতিয়ার মাত্র।"
      },
      {
        "title": "আত্মমর্যাদা",
        "content": "নিজের মূল্য ব্যাংকের ব্যালেন্স দিয়ে বিচার করা উচিত নয়।"
      },
      {
        "title": "পারিবারিক শিক্ষা",
        "content": "লেখক তার মায়ের উদাহরণ দিয়েছেন যিনি টাকার জন্য দুশ্চিন্তা না করে জীবন উপভোগ করতেন, যা তাকে সুখী রেখেছিল।"
      }
    ],
    "practicalApplication": "",
    "criticalReflection": "",
    "expectedOutcomes": {
      "individual": "",
      "social": ""
    }
  },
  {
    "id": 53,
    "sectionTitle": "The Outer World",
    "chapterTitle": "Wealth Without Corruption",
    "goldenQuotes": [
      "If you can make money remaining honest, trustworthy, and dignified, by all means; do it.",
      "Life’s too short to let money dictate our lives to an extreme.",
      "Values and character hold greater significance than wealth."
    ],
    "coreInsights": [
      {
        "title": "সৎ উপার্জন",
        "content": "স্টয়িকরা ধনী হওয়ার বিরোধী নন, তবে তা হতে হবে সততা বজায় রেখে।"
      },
      {
        "title": "টাকা একটি টুল",
        "content": "টাকা জীবনের লক্ষ্য নয়, এটি জীবনকে সহজ করার একটি হাতিয়ার মাত্র।"
      },
      {
        "title": "আত্মমর্যাদা",
        "content": "নিজের মূল্য ব্যাংকের ব্যালেন্স দিয়ে বিচার করা উচিত নয়।"
      },
      {
        "title": "পারিবারিক শিক্ষা",
        "content": "লেখক তার মায়ের উদাহরণ দিয়েছেন যিনি টাকার জন্য দুশ্চিন্তা না করে জীবন উপভোগ করতেন, যা তাকে সুখী রেখেছিল।"
      }
    ],
    "practicalApplication": "টাকা উপার্জনের নতুন উপায় খুঁজুন, কিন্তু শর্ত হলো তা হতে হবে ১০০% সৎ পথে। যদি কোনো সুযোগ আসে যেখানে সামান্য অনৈতিকতা দরকার, তা প্রত্যাখ্যান করুন। নিজেকে বলুন, \"আমার চরিত্র আমার টাকার চেয়ে দামী।\"",
    "criticalReflection": "\"If you can make money remaining honest... do it.\" This is idealistic. In many corrupt economies, honest wealth accumulation is structurally impossible or extremely slow. The advice assumes a fair market which doesn't exist everywhere.",
    "expectedOutcomes": {
      "individual": "Guilt-free wealth and peace of mind.",
      "social": "Reduced corruption and ethical business practices."
    }
  },
  {
    "id": 54,
    "sectionTitle": "The Outer World",
    "chapterTitle": "Reputation vs. Revenue",
    "goldenQuotes": [
      "It takes 20 years to build a reputation and five minutes to ruin it.",
      "A good friend would rather you didn’t compromise your integrity than wish you gave him money."
    ],
    "coreInsights": [
      {
        "title": "সুনামের ভঙ্গুরতা",
        "content": "টাকা হারানো গেলে তা আবার কামানো যায়, কিন্তু একবার চরিত্র বা সুনাম নষ্ট হলে তা ফিরে পাওয়া অসম্ভব।"
      },
      {
        "title": "সততার মূল্য",
        "content": "অসৎ পথে অর্জিত সম্পদ মানসিক শান্তি কেড়ে নেয়। প্রকৃত বন্ধুরা আপনার টাকার চেয়ে আপনার সততাকেই বেশি মূল্য দেয়।"
      },
      {
        "title": "অন্ধ দৌড়",
        "content": "অর্থের পেছনে অন্ধের মতো ছুটলে আমরা নিজের সত্তা হারিয়ে ফেলি। এটি আমাদের সমাজ ও পরিবার থেকে বিচ্ছিন্ন করে দেয়।"
      },
      {
        "title": "সামাজিক উপযোগিতা",
        "content": "কেবল নিজের পকেটের জন্য নয়, সমাজের জন্য ভ্যালু তৈরি করাই প্রকৃত সাফল্যের মাপকাঠি।"
      }
    ],
    "practicalApplication": "কোনো আর্থিক সুযোগ পেলে নিজেকে প্রশ্ন করুন: \"এই কাজটি করলে কি আমি রাতে শান্তিতে ঘুমাতে পারব?\" যদি উত্তর 'না' হয়, তবে যত টাকাই হোক না কেন, তা প্রত্যাখ্যান করুন। আপনার চরিত্রই আপনার সবচেয়ে বড় সম্পদ।",
    "criticalReflection": "While maintaining integrity is crucial, the stark choice between \"reputation\" and \"revenue\" can be a false dichotomy in survival situations. Systemic corruption sometimes forces individuals into ethical grey zones just to survive. The advice assumes a level of economic privilege where one can afford to say 'no' to compromised income.",
    "expectedOutcomes": {
      "individual": "A clear conscience and long-term trust capital.",
      "social": "A reduction in fraud and unethical business practices."
    }
  },
  {
    "id": 55,
    "sectionTitle": "The Outer World",
    "chapterTitle": "The Myth of Exceptionalism",
    "goldenQuotes": [
      "A life of excess only leads to more excess.",
      "Moderation is useful and life-enhancing, whereas excess harms by its abundance."
    ],
    "coreInsights": [
      {
        "title": "সাধারণ জীবনের সৌন্দর্য",
        "content": "সুস্থ শরীর, পাগলামিহীন পরিবার এবং কিছু ভালো বন্ধু—এগুলোই আশীর্বাদ। এর চেয়ে বেশি কিছু চাওয়ার নামই লোভ।"
      },
      {
        "title": "অতিরিক্তের বিপদ",
        "content": "সাফল্য, খ্যাতি বা সম্পদের আতিশয্য মানুষকে সুখের বদলে আরও বেশি অশান্তির দিকে ঠেলে দেয়।"
      },
      {
        "title": "চরিত্র বনাম খ্যাতি",
        "content": "জে-জেড (Jay-Z) এবং ইয়াংবয় এনবিএ (Youngboy NBA)-এর তুলনা দিয়ে লেখক দেখিয়েছেন, অল্প বয়সে খ্যাতির চেয়ে ধীরে অর্জিত চরিত্র বেশি টেকসই।"
      },
      {
        "title": "নিজেকে মেনে নেওয়া",
        "content": "সাফল্যের পেছনে দৌড়ে নিজের স্বকীয়তা হারানোর চেয়ে, একজন নির্ভরযোগ্য ও সাধারণ মানুষ হওয়া অনেক বেশি সম্মানের।"
      }
    ],
    "practicalApplication": "আজ রাতে ঘুমানোর আগে আপনার জীবনের ৩টি \"সাধারণ\" জিনিসের জন্য কৃতজ্ঞতা প্রকাশ করুন (যেমন: নিজের বিছানা, এক গ্লাস পরিষ্কার পানি, বা মায়ের ফোন কল)। নিজেকে বলুন, \"আমার জীবন যথেষ্ট সুন্দর।\"",
    "criticalReflection": "Celebrating a \"normal\" life is a healthy antidote to hustle culture, but it can also be used to justify mediocrity or lack of ambition. \"Normal\" is subjective; for some, it means safety, for others, stagnation. The challenge is finding contentment without losing the drive to improve.",
    "expectedOutcomes": {
      "individual": "Increased life satisfaction and reduced \"Fear Of Missing Out\" (FOMO).",
      "social": "Less pressure on youth to become viral sensations or millionaires overnight."
    }
  },
  {
    "id": 56,
    "sectionTitle": "The Outer World",
    "chapterTitle": "Money as a Tool, Not a Master",
    "goldenQuotes": [
      "The man who needs wealth is afraid of it... He is eager to add something to it, and while he is concentrating on the increase he has forgotten to use it.",
      "Isn’t the true definition of being wealthy not having to worry about money?"
    ],
    "coreInsights": [
      {
        "title": "অর্থের দাসত্ব",
        "content": "যারা টাকার পেছনে ছোটে, তারা টাকার ব্যবহার করতে ভুলে যায়। তারা কেবল জমাতেই ব্যস্ত থাকে, ভোগ করতে পারে না।"
      },
      {
        "title": "ভয় ও লোভ",
        "content": "টাকা হারানোর ভয় এবং আরও টাকার লোভ—এই দুইয়ের চক্রে মানুষ আটকা পড়ে যায়।"
      },
      {
        "title": "আসল ধনী",
        "content": "যার ব্যাংকে কোটি টাকা আছে সে ধনী নয়; ধনী সে-ই যার টাকার অভাব নিয়ে কোনো দুশ্চিন্তা নেই, তা সে অল্প টাকাতেই হোক।"
      },
      {
        "title": "সরল জীবন",
        "content": "মাঝে মাঝে ইচ্ছাকৃতভাবে বিলাসবহুল জীবন ত্যাগ করে সাধারণ জীবনযাপন করলে টাকার প্রতি মোহ কমে।"
      }
    ],
    "practicalApplication": "মাসে একবার \"Poverty Simulation\" করুন। খুব সাধারণ খাবার খান, কোনো খরচ করবেন না। এটি আপনাকে বোঝাবে যে সুখের জন্য টাকার প্রয়োজন খুব কম। এতে অর্থ হারানোর ভয় কমে যাবে।",
    "criticalReflection": "\"Not having to worry about money\" is the definition of wealth, but achieving that state often requires a significant amount of money initially. The Stoic advice to detach from money is psychologically sound but practically difficult for those living paycheck to paycheck.",
    "expectedOutcomes": {
      "individual": "Financial freedom (psychological, not just numerical).",
      "social": "A shift from conspicuous consumption to conscious living."
    }
  },
  {
    "id": 57,
    "sectionTitle": "The Outer World",
    "chapterTitle": "Action Speaks Louder",
    "goldenQuotes": [
      "When we try to tell people about Stoicism... we’re actually making a show of our principles.",
      "Sheep don’t bring their owners grass to show how much they ate."
    ],
    "coreInsights": [
      {
        "title": "উপদেশ বনাম উদাহরণ",
        "content": "মানুষকে মুখে জ্ঞান দেওয়ার চেয়ে নিজের কাজের মাধ্যমে উদাহরণ তৈরি করা বেশি কার্যকর।"
      },
      {
        "title": "ভেড়ার উপমা",
        "content": "এপিক্টেটাস বলেছেন, ভেড়া ঘাস খেয়ে মালিককে ঘাস দেখায় না; সে দুধ ও পশম দেয়। তেমনি, আপনি কত বই পড়েছেন তা না দেখিয়ে, আপনার আচরণে তার প্রতিফলন দেখান।"
      },
      {
        "title": "বিনিময়",
        "content": "জ্ঞান নিজের কাছে চেপে না রেখে অন্যদের সাথে ভাগ করে নেওয়া উচিত, তবে তা হতে হবে বিনম্রভাবে।"
      },
      {
        "title": "শো-অফ বর্জন",
        "content": "নিজের নীতি বা দর্শন জাহির করা এক ধরনের অহংকার। প্রকৃত স্টয়িকরা নীরবে কাজ করে যান।"
      }
    ],
    "practicalApplication": "কাউকে কোনো উপদেশ দেওয়ার আগে ভাবুন, \"আমি কি এই উপদেশ নিজে পালন করি?\" যদি না করেন, তবে চুপ থাকুন। আজ থেকে \"আমি জানি\" বলার বদলে \"আমি করছি\" প্রমাণ করার চেষ্টা করুন।",
    "criticalReflection": "While leading by example is powerful, some situations require vocal advocacy and explicit instruction. Staying silent and hoping actions will inspire might be too passive in the face of urgent ignorance or injustice.",
    "expectedOutcomes": {
      "individual": "Authenticity and credibility as a leader.",
      "social": "Reduced hypocrisy and more genuine mentorship."
    }
  },
  {
    "id": 58,
    "sectionTitle": "The Outer World",
    "chapterTitle": "The Long Game (Introductory)",
    "goldenQuotes": [
      "If you accomplish something good with hard work, the labor passes quickly, but the good endures; if you do something shameful in pursuit of pleasure, the pleasure passes quickly, but the shame endures."
    ],
    "coreInsights": [
      {
        "title": "শ্রম বনাম লজ্জা",
        "content": "কষ্টের কাজ শেষ হয়ে যায়, কিন্তু তার সুফল থেকে যায়। অন্যদিকে, অনৈতিক সুখ দ্রুত শেষ হয়, কিন্তু তার লজ্জা বা গ্লানি আজীবন থেকে যায়।"
      },
      {
        "title": "ক্যারিয়ারের ভিত্তি",
        "content": "ক্যারিয়ার গড়ার সময় শর্টকাট বা অনৈতিক পথ পরিহার করা উচিত, কারণ দীর্ঘমেয়াদে তা কেবল অনুশোচনাই বয়ে আনে।"
      },
      {
        "title": "Chapter 59",
        "content": "Letter 48: On Resting vs Working"
      },
      {
        "title": "1. Chapter Title",
        "content": "Productive Rest"
      },
      {
        "title": "বিশ্রামের সময়",
        "content": "ক্লান্ত হওয়ার আগেই বিশ্রাম নেওয়া উচিত। তৃষ্ণা পাওয়ার আগে পানি খাওয়ার মতো এটি বার্নআউট (Burnout) প্রতিরোধ করে।"
      },
      {
        "title": "অলসতার ফাঁদ",
        "content": "অতিরিক্ত বিশ্রাম বা কাজ থেকে পালানো মানুষকে আরও অস্থির করে তোলে। কাজই অনেক সময় মানসিক শান্তির উৎস।"
      },
      {
        "title": "কাজের আনন্দ",
        "content": "যারা নিজের কাজ উপভোগ করেন, তাদের ঘন ঘন ছুটির প্রয়োজন হয় না। তাদের জন্য কাজই এক ধরনের খেলা।"
      },
      {
        "title": "ব্যালেন্স",
        "content": "কাজ ও বিশ্রামের মধ্যে ভারসাম্য রাখা জরুরি, যাতে কোনোটিই বিরক্তির কারণ না হয়।"
      }
    ],
    "practicalApplication": "",
    "criticalReflection": "",
    "expectedOutcomes": {
      "individual": "",
      "social": ""
    }
  },
  {
    "id": 59,
    "sectionTitle": "The Outer World",
    "chapterTitle": "Productive Rest",
    "goldenQuotes": [
      "Rest before you are tired.",
      "Sometimes rest itself is restless.",
      "If you find pleasure in your work, you won’t yearn for rest all the time."
    ],
    "coreInsights": [
      {
        "title": "বিশ্রামের সময়",
        "content": "ক্লান্ত হওয়ার আগেই বিশ্রাম নেওয়া উচিত। তৃষ্ণা পাওয়ার আগে পানি খাওয়ার মতো এটি বার্নআউট (Burnout) প্রতিরোধ করে।"
      },
      {
        "title": "অলসতার ফাঁদ",
        "content": "অতিরিক্ত বিশ্রাম বা কাজ থেকে পালানো মানুষকে আরও অস্থির করে তোলে। কাজই অনেক সময় মানসিক শান্তির উৎস।"
      },
      {
        "title": "কাজের আনন্দ",
        "content": "যারা নিজের কাজ উপভোগ করেন, তাদের ঘন ঘন ছুটির প্রয়োজন হয় না। তাদের জন্য কাজই এক ধরনের খেলা।"
      },
      {
        "title": "ব্যালেন্স",
        "content": "কাজ ও বিশ্রামের মধ্যে ভারসাম্য রাখা জরুরি, যাতে কোনোটিই বিরক্তির কারণ না হয়।"
      }
    ],
    "practicalApplication": "পোমোডোরো (Pomodoro) টেকনিক ব্যবহার করুন। ২৫ মিনিট কাজ, ৫ মিনিট বিশ্রাম। ক্লান্ত হওয়ার জন্য অপেক্ষা করবেন না। এই ছোট ছোট বিশ্রাম আপনার এনার্জি লেভেল সারাদিন ধরে রাখবে।",
    "criticalReflection": "\"Rest before you are tired\" is excellent advice but difficult to implement in rigid corporate structures or gig economies where time is money. Also, finding pleasure in work is ideal, but for many in menial jobs, work is purely transactional, necessitating strict boundaries for rest.",
    "expectedOutcomes": {
      "individual": "Sustained high energy and prevention of chronic fatigue.",
      "social": "A healthier workforce with fewer sick days."
    }
  },
  {
    "id": 60,
    "sectionTitle": "The Outer World",
    "chapterTitle": "Playing Your Role",
    "goldenQuotes": [
      "Consider yourself as an actor in a play. The nature of the play... is for the director to decide.",
      "It’s not that our lives are bad; we just think our lives are bad and expect that could or should be limitless and extraordinary."
    ],
    "coreInsights": [
      {
        "title": "জীবনের মঞ্চ",
        "content": "আমরা সবাই একটি নাটকের অভিনেতা। আমাদের চরিত্র বা পরিস্থিতি (ধনী/গরিব, সুস্থ/অসুস্থ) আমাদের হাতে নেই; আমাদের কাজ হলো সেই চরিত্রে সেরাটা দেওয়া।"
      },
      {
        "title": "অবাস্তব প্রত্যাশা",
        "content": "সমাজ শেখায় \"তুমি যা ইচ্ছা তাই হতে পারো\"—এটি একটি মিথ্যা। আমাদের সীমাবদ্ধতা আছে এবং তা মেনে নেওয়াই বুদ্ধিমানের কাজ।"
      },
      {
        "title": "ভাগ্যের লটারি",
        "content": "ওয়ারেন বাফেটের মতো সফলরাও স্বীকার করেন যে তাদের সাফল্যে ভাগ্য বা জন্মস্থানের ভূমিকা বিশাল। একে \"ওভারিয়ান লটারি\" বলা হয়।"
      },
      {
        "title": "তুলনা ও দুঃখ",
        "content": "নিজের জীবনকে অন্যের কাল্পনিক \"পারফেক্ট\" জীবনের সাথে তুলনা করাই আমাদের দুঃখের মূল কারণ।"
      }
    ],
    "practicalApplication": "নিজের বর্তমান পরিস্থিতির ৩টি সীমাবদ্ধতা লিখুন (যেমন: আর্থিক অবস্থা, বয়স বা পারিবারিক দায়িত্ব)। এগুলোকে \"সমস্যা\" হিসেবে না দেখে নাটকের \"স্ক্রিপ্ট\" হিসেবে দেখুন। বলুন, \"এই স্ক্রিপ্টেই আমি সেরা অভিনয় করে দেখাব।\"",
    "criticalReflection": "The metaphor of life as a play with a pre-written script encourages acceptance but risks discouraging social mobility. If everyone accepts their \"role\" (e.g., as a poor person), social progress stalls. It balances unhealthily towards determinism.",
    "expectedOutcomes": {
      "individual": "Peace with one's circumstances and reduction of envy.",
      "social": "Potentially less class conflict, but also less drive for social equity."
    }
  },
  {
    "id": 61,
    "sectionTitle": "The Outer World",
    "chapterTitle": "Integrity in Solitude",
    "goldenQuotes": [
      "Be your own witness if you need one. You don’t need any more witness than that.",
      "What do you do when no one’s watching? Your actions during those moments define you."
    ],
    "coreInsights": [
      {
        "title": "একান্ত সততা",
        "content": "কেউ দেখছে না—এমন সময়ে আপনি কী করেন, সেটাই আপনার আসল চরিত্র।"
      },
      {
        "title": "আত্ম-সাক্ষী",
        "content": "অন্যের প্রশংসার জন্য নয়, নিজের কাছে সৎ থাকার জন্য ভালো কাজ করুন। আপনি নিজেই আপনার বিচারক।"
      },
      {
        "title": "ওয়ার্ক ফ্রম হোম",
        "content": "ঘরে বসে কাজ করার সময় বস দেখছে না বলে ফাঁকি দেওয়া বা নিজের স্ট্যান্ডার্ড কমানো—এগুলো আত্মসম্মান হীনতার লক্ষণ।"
      },
      {
        "title": "অন্তরের মোটিভেশন",
        "content": "বাইরের কোনো সাক্ষী বা পুরস্কার ছাড়াই কাজ করার ক্ষমতা হলো প্রকৃত স্বাধীনতা।"
      }
    ],
    "practicalApplication": "আজ এমন একটি ভালো কাজ করুন যা কেউ জানবে না। রাস্তা থেকে ময়লা সরানো বা গোপনে দান করা। এরপর কাউকে সেটা বলবেন না। এই গোপন ভালো কাজটি আপনার আত্মসম্মানবোধ বহুগুণ বাড়িয়ে দেবে।",
    "criticalReflection": "Being one's own witness is the ultimate form of integrity. However, without external accountability, self-deception can creep in. We are often biased judges of ourselves. A blend of internal standards and external feedback loops is ideal.",
    "expectedOutcomes": {
      "individual": "Unshakable self-confidence and moral grounding.",
      "social": "A high-trust society where supervision costs are low."
    }
  },
  {
    "id": 62,
    "sectionTitle": "The Outer World",
    "chapterTitle": "The Precision of Speech",
    "goldenQuotes": [
      "If someone bathes quickly, don’t say he doesn’t bathe properly, say he bathes quickly.",
      "To live like a Stoic, practice precision in your words."
    ],
    "coreInsights": [
      {
        "title": "ফ্যাক্ট বনাম জাজমেন্ট",
        "content": "আমরা প্রায়ই ঘটনা বর্ণনা না করে রায় দিয়ে ফেলি। \"সে খারাপ লোক\" না বলে \"সে আমার সাথে খারাপ ব্যবহার করেছে\"—এভাবে বলা উচিত।"
      },
      {
        "title": "লেখার গুরুত্ব",
        "content": "লেখার মাধ্যমে চিন্তা পরিষ্কার হয়। কথা বলার আগে লিখে বা গুছিয়ে নিলে ভুল বোঝাবুঝি কমে।"
      },
      {
        "title": "ব্যাকস্পেস নেই",
        "content": "মুখের কথার কোনো \"ব্যাকস্পেস\" বা মোছার সুযোগ নেই। তাই শব্দ চয়ন হতে হবে সতর্ক।"
      },
      {
        "title": "যোগাযোগ দক্ষতা",
        "content": "স্পষ্ট ও সঠিক শব্দ ব্যবহার করলে সম্পর্ক ভালো থাকে এবং অপ্রয়োজনীয় ঝগড়া এড়ানো যায়।"
      }
    ],
    "practicalApplication": "আজ সারাদিন বিশেষণ (Adjective) ব্যবহার কম করুন। \"বাজে আবহাওয়া\" না বলে বলুন \"বৃষ্টি হচ্ছে।\" \"বিরক্তিকর ট্রাফিক\" না বলে বলুন \"গাড়ি ধীরে চলছে।\" ঘটনাকে আবেগ থেকে আলাদা করে দেখার চেষ্টা করুন।",
    "criticalReflection": "Precision reduces conflict but can sometimes strip language of emotion and nuance. In intimate relationships, communicating feelings (which are subjective and imprecise) is often more important than communicating cold facts.",
    "expectedOutcomes": {
      "individual": "Clearer thinking and reduced interpersonal drama.",
      "social": "More rational public discourse."
    }
  },
  {
    "id": 63,
    "sectionTitle": "The Outer World",
    "chapterTitle": "Essentialism",
    "goldenQuotes": [
      "If you seek tranquility, do less.",
      "Ask yourself at every moment, ‘Is this necessary?’"
    ],
    "coreInsights": [
      {
        "title": "কম করা",
        "content": "প্রশান্তি চাইলে কাজের পরিমাণ কমাতে হবে। বেশি কাজ মানেই বেশি উৎপাদনশীলতা নয়; বরং এটি বার্নআউট ডেকে আনে।"
      },
      {
        "title": "প্রশ্ন করা",
        "content": "প্রতিটি কাজের আগে নিজেকে প্রশ্ন করুন—\"এটি কি প্রয়োজনীয়?\" উত্তর \"না\" হলে নির্দ্বিধায় বাদ দিন।"
      },
      {
        "title": "চক্র ভাঙা",
        "content": "আমরা ব্যস্ত থাকার নেশায় পড়ে যাই। এই ব্যস্ততার চক্র ভেঙে প্রয়োজনীয় কাজগুলো বেছে নেওয়া জরুরি।"
      },
      {
        "title": "ফোকাস",
        "content": "১০টি কাজ আধাখেঁচড়া করার চেয়ে ১টি কাজ নিখুঁতভাবে করা অনেক বেশি তৃপ্তিদায়ক।"
      }
    ],
    "practicalApplication": "আপনার টু-ডু লিস্ট (To-Do List) থেকে নিচের দিকের ৩টি কাজ কেটে দিন। নিজেকে অনুমতি দিন \"কিছু না করার\"। সপ্তাহে অন্তত একটি সন্ধ্যা রাখুন যেখানে কোনো কাজ বা প্ল্যান থাকবে না।",
    "criticalReflection": "\"Doing less\" is often a privilege of those with economic security. For someone working three jobs to survive, this advice is tone-deaf. However, applied to mental clutter and unnecessary social obligations, it remains universally valid.",
    "expectedOutcomes": {
      "individual": "Lower stress and higher quality of work.",
      "social": "A slower, more thoughtful pace of life."
    }
  },
  {
    "id": 64,
    "sectionTitle": "The Outer World",
    "chapterTitle": "The Habit of Completion",
    "goldenQuotes": [
      "In life, sometimes it’s more important that you see your plans through until the end than to have the perfect plan.",
      "If you do what you say, you become reliable."
    ],
    "coreInsights": [
      {
        "title": "শেষ করার গুরুত্ব",
        "content": "পরিকল্পনা নিখুঁত হওয়ার চেয়েও জরুরি হলো শুরু করা কাজ শেষ করা। অর্ধেক করা ১০টি কাজের চেয়ে ১টি সম্পূর্ণ কাজ ভালো।"
      },
      {
        "title": "নির্ভরযোগ্যতা",
        "content": "আপনি যখন কথা রাখেন এবং কাজ শেষ করেন, তখন নিজের ওপর এবং অন্যের কাছে আপনার বিশ্বাসযোগ্যতা বাড়ে।"
      },
      {
        "title": "ত্যাগ করার প্রবণতা",
        "content": "কোনো কাজ কঠিন মনে হলেই ছেড়ে দেওয়া একটি বদভ্যাস। এটি আত্মবিশ্বাস নষ্ট করে।"
      },
      {
        "title": "সিদ্ধান্তে অটল",
        "content": "স্টয়িকরা একবার সিদ্ধান্ত নিলে বাইরের প্রভাবে তা বদলাতেন না। এই দৃঢ়তাই চরিত্র গঠন করে।"
      }
    ],
    "practicalApplication": "আপনার এমন একটি প্রজেক্ট বা বই খুঁজে বের করুন যা আপনি অর্ধেক করে রেখে দিয়েছেন। আজ প্রতিজ্ঞা করুন, আগামী ৭ দিনের মধ্যে এটি শেষ করবেন। ছোট হলেও কোনো কাজ \"সম্পূর্ণ\" করার স্বাদ নিন।",
    "criticalReflection": "Persistence is a virtue, but the \"sunk cost fallacy\" is a risk. Sometimes quitting is the smart decision if the goal no longer aligns with one's values or reality. Blindly finishing everything can lead to wasted time on unworthy pursuits.",
    "expectedOutcomes": {
      "individual": "A track record of achievement and high self-efficacy.",
      "social": "Increased trust and dependability in professional networks."
    }
  },
  {
    "id": 65,
    "sectionTitle": "The Outer World",
    "chapterTitle": "Action is Destiny",
    "goldenQuotes": [
      "By changing your actions today, you can shape your tomorrow.",
      "Instead of getting frustrated... look at how you feel at the end of the day."
    ],
    "coreInsights": [
      {
        "title": "বর্তমানের শক্তি",
        "content": "ভবিষ্যৎ নিয়ে দুশ্চিন্তা না করে আজকের কাজের ওপর ফোকাস করলে ভবিষ্যৎ এমনিতেই সুন্দর হবে।"
      },
      {
        "title": "স্থবিরতা",
        "content": "যদি দেখেন গত এক বছরে আপনার কোনো মানসিক বা শারীরিক উন্নতি হয়নি, তবে বুঝবেন আপনি স্থবির হয়ে আছেন। এটি পরিবর্তনের সংকেত।"
      },
      {
        "title": "পরিশ্রমের তৃপ্তি",
        "content": "দিন শেষে শরীর ও মন ক্লান্ত হলে বুঝবেন আপনি সঠিক পথে আছেন। অলস দিন যাপন কোনো গর্বের বিষয় নয়।"
      },
      {
        "title": "প্রতিদিনের অভ্যাস",
        "content": "প্রতিদিন বই পড়া বা ব্যায়াম করার মতো ছোট কাজগুলোই দীর্ঘমেয়াদে বড় পরিবর্তন আনে।"
      }
    ],
    "practicalApplication": "আজ রাতে ঘুমানোর আগে নিজেকে রেটিং দিন (১-১০)। প্রশ্ন করুন: \"আজ আমি আমার ভবিষ্যতের জন্য কতটুকু কাজ করেছি?\" যদি স্কোর কম হয়, তবে আগামীকাল ১ ঘণ্টা বেশি ফোকাসড কাজ করার প্ল্যান করুন।",
    "criticalReflection": "Linking daily exhaustion to \"correctness\" glorifies toil. One can be exhausted from busywork without making real progress. Strategic action, not just hard action, shapes the future.",
    "expectedOutcomes": {
      "individual": "A sense of agency and reduced anxiety about the unknown.",
      "social": "A proactive and forward-thinking citizenry."
    }
  },
  {
    "id": 66,
    "sectionTitle": "The Outer World",
    "chapterTitle": "The Paradox of Social Validation (Intro)",
    "goldenQuotes": [
      "It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own."
    ],
    "coreInsights": [
      {
        "title": "আত্মপ্রেম বনাম অনুমোদন",
        "content": "আমরা নিজেকে সবচেয়ে বেশি ভালোবাসি, অথচ অন্যের মতামতের ওপর ভিত্তি করে নিজের জীবন চালাই। এটি একটি অদ্ভুত বৈপরীত্য।"
      },
      {
        "title": "নিজের মূল্যে বিশ্বাস",
        "content": "অন্যের প্রশংসার চেয়ে নিজের আত্মসম্মানবোধ বেশি জরুরি।"
      },
      {
        "title": "Chapter 67",
        "content": "Letter 55: On The Liberation of Keeping Things to Yourself"
      },
      {
        "title": "1. Chapter Title",
        "content": "The Quiet Life"
      },
      {
        "title": "গোপনীয়তার শক্তি",
        "content": "নিজের দর্শন বা জীবনধারা নিয়ে বড়াই করার প্রয়োজন নেই। নীরবে নিজের মতো বাঁচাই হলো প্রকৃত স্বাধীনতা।"
      },
      {
        "title": "অন্যকে মেনে নেওয়া",
        "content": "মানুষকে বদলানোর চেষ্টা না করে, তারা যেমন আছে তেমনভাবেই গ্রহণ করা উচিত।"
      },
      {
        "title": "তর্ক এড়ানো",
        "content": "রাজনীতি বা ধর্ম নিয়ে তর্ক করে কারো মত বদলানো যায় না, কেবল সম্পর্ক নষ্ট হয়।"
      },
      {
        "title": "নিজের মধ্যে বাস",
        "content": "স্টয়িকরা পরামর্শ দেন বাইরের কোলাহল থেকে নিজেকে গুটিয়ে নিজের অন্তর্জগতে বাস করতে।"
      }
    ],
    "practicalApplication": "",
    "criticalReflection": "",
    "expectedOutcomes": {
      "individual": "",
      "social": ""
    }
  },
  {
    "id": 67,
    "sectionTitle": "The Outer World",
    "chapterTitle": "The Quiet Life",
    "goldenQuotes": [
      "If you have chosen a simple life, don’t make a show of it.",
      "Just let others be."
    ],
    "coreInsights": [
      {
        "title": "গোপনীয়তার শক্তি",
        "content": "নিজের দর্শন বা জীবনধারা নিয়ে বড়াই করার প্রয়োজন নেই। নীরবে নিজের মতো বাঁচাই হলো প্রকৃত স্বাধীনতা।"
      },
      {
        "title": "অন্যকে মেনে নেওয়া",
        "content": "মানুষকে বদলানোর চেষ্টা না করে, তারা যেমন আছে তেমনভাবেই গ্রহণ করা উচিত।"
      },
      {
        "title": "তর্ক এড়ানো",
        "content": "রাজনীতি বা ধর্ম নিয়ে তর্ক করে কারো মত বদলানো যায় না, কেবল সম্পর্ক নষ্ট হয়।"
      },
      {
        "title": "নিজের মধ্যে বাস",
        "content": "স্টয়িকরা পরামর্শ দেন বাইরের কোলাহল থেকে নিজেকে গুটিয়ে নিজের অন্তর্জগতে বাস করতে।"
      }
    ],
    "practicalApplication": "আগামী ২৪ ঘণ্টা আপনার কোনো মতামত (Opinion) বা উপদেশ কাউকে দেবেন না, যদি না কেউ চায়। কেউ ভুল কিছু বললে কেবল হাসুন এবং চুপ থাকুন। দেখুন এতে আপনার মানসিক শক্তি কতটা বাঁচে।",
    "criticalReflection": "\"Letting others be\" is peaceful but can be complicit. If \"others\" are causing harm or spreading hate, silence is not a virtue but cowardice. Stoic withdrawal must be balanced with civic responsibility.",
    "expectedOutcomes": {
      "individual": "Immense mental peace and conservation of energy.",
      "social": "Less polarization and conflict in daily interactions."
    }
  },
  {
    "id": 68,
    "sectionTitle": "The Outer World",
    "chapterTitle": "The Mirror of Faults",
    "goldenQuotes": [
      "When faced with people’s bad behavior, turn around and ask when you have acted like that.",
      "Have you noticed how we’re often quick to judge others... but don’t look at ourselves with that same critical eye?"
    ],
    "coreInsights": [
      {
        "title": "আয়না দেখা",
        "content": "অন্যের খারাপ ব্যবহার দেখে রাগ না করে ভাবুন, \"আমিও কি কখনো এমন করেছি?\" এটি রাগ কমিয়ে সহমর্মিতা বাড়ায়।"
      },
      {
        "title": "বিচার না করা",
        "content": "আমরা অন্যের ভুল দেখি কিন্তু নিজের ভুল দেখি না। এই দ্বিচারিতা ত্যাগ করতে হবে।"
      },
      {
        "title": "শালীনতা",
        "content": "অন্যের উগ্র আচরণের জবাবে শান্ত ও ভদ্র থাকা হলো শক্তির পরিচয়। মায়ের উদাহরণ দিয়ে লেখক এটি বুঝিয়েছেন।"
      },
      {
        "title": "শিক্ষা গ্রহণ",
        "content": "প্রতিটি খারাপ মানুষ আমাদের জন্য একটি শিক্ষার সুযোগ—\"আমি যেন এমন না হই।\""
      }
    ],
    "practicalApplication": "যখন কেউ আপনার সাথে খারাপ ব্যবহার করবে, তখন তাকে \"শিক্ষক\" হিসেবে দেখুন। মনে মনে বলুন, \"ধন্যবাদ আমাকে দেখানোর জন্য যে, মেজাজ হারালে মানুষকে কতটা কুৎসিত দেখায়। আমি এমন হব না।\"",
    "criticalReflection": "Using others' bad behavior solely for self-reflection is productive but can lead to passivity. Sometimes bad behavior needs to be confronted and corrected, not just introspected upon, especially if it violates boundaries or safety.",
    "expectedOutcomes": {
      "individual": "Superior emotional regulation and humility.",
      "social": "De-escalation of conflicts and more empathetic communities."
    }
  },
  {
    "id": 69,
    "sectionTitle": "The Outer World",
    "chapterTitle": "Quality over Quantity",
    "goldenQuotes": [
      "A friend is someone who thinks and cares about you... even when you don’t see or need each other.",
      "Seek out people who have the same values as you. Friendship is not about quantity."
    ],
    "coreInsights": [
      {
        "title": "সুবিধাবাদী বন্ধু",
        "content": "সেনেকার মতে, প্রয়োজনে যে বন্ধু হয়, প্রয়োজন ফুরোলে সে হারিয়ে যায়। এদের থেকে সাবধান।"
      },
      {
        "title": "মূল্যবোধের মিল",
        "content": "সত্যিকারের বন্ধুত্ব গড়ে ওঠে অভিন্ন মূল্যবোধের ওপর, কেবল আড্ডা বা পার্টি করার ওপর নয়।"
      },
      {
        "title": "পরিবর্তন মেনে নেওয়া",
        "content": "মানুষ বদলায়, তাই বন্ধুত্বও বদলায়। পুরোনো বন্ধু হারিয়ে গেলে দুঃখ না করে মেনে নিতে হবে।"
      },
      {
        "title": "আসল বন্ধু",
        "content": "যারা বিপদে পাশে থাকে এবং আপনাকে মানসিকভাবে সাপোর্ট করে, তারাই আসল বন্ধু। সংখ্যায় কম হলেও সমস্যা নেই।"
      }
    ],
    "practicalApplication": "আপনার ফ্রেন্ডলিস্ট চেক করুন। কারা আপনাকে নিয়মিত খোঁজ নেয় বা বিপদে পাশে ছিল? তাদের একটি আলাদা তালিকা করুন। আজ তাদের অন্তত একজনকে ফোন করে বলুন তারা আপনার জন্য কতটা স্পেশাল। বাকিদের নিয়ে প্রত্যাশা কমান।",
    "criticalReflection": "The definition of friendship here is very high-stakes. Casual friendships (acquaintances) also have value for social networking and lightheartedness. Viewing relationships purely through a lens of utility or deep value might isolate one from the simple joys of casual socializing.",
    "expectedOutcomes": {
      "individual": "Deep, supportive relationships and less loneliness.",
      "social": "Stronger social safety nets within small groups."
    }
  },
  {
    "id": 70,
    "sectionTitle": "The Outer World",
    "chapterTitle": "The Grace of Patience",
    "goldenQuotes": [
      "Always conduct yourself as though you are at a formal dinner.",
      "Be gentle in your interactions with others and with yourself."
    ],
    "coreInsights": [
      {
        "title": "ফরমাল ডিনার",
        "content": "এপিক্টেটাস জীবনকে একটি ভোজসভার সাথে তুলনা করেছেন। খাবার (সুযোগ) আপনার কাছে আসা পর্যন্ত ধৈর্য ধরুন; কাড়াকাড়ি করবেন না।"
      },
      {
        "title": "অধৈর্যের ক্ষতি",
        "content": "অধৈর্য হলে আমরা প্রিয়জনদের সাথে খারাপ ব্যবহার করে ফেলি, যা পরে অনুশোচনার কারণ হয়।"
      },
      {
        "title": "নিজের প্রতি সদয়",
        "content": "কেবল অন্যের সাথে নয়, নিজের ভুলের প্রতিও সদয় হওয়া উচিত। নিজেকে বকাঝকা করলে মানসিক শান্তি নষ্ট হয়।"
      },
      {
        "title": "তাড়া নেই",
        "content": "জীবন কোনো দৌড় প্রতিযোগিতা নয়। ধীরস্থিরভাবে কাজ করলে এবং সবার সাথে ভালো ব্যবহার করলে জীবন সুন্দর হয়।"
      }
    ],
    "practicalApplication": "আজ সারাদিন \"স্লো মোশন\"-এ চলুন। কথা বলার সময় তাড়াহুড়ো করবেন না। কারো কথার মাঝখানে কথা বলবেন না। ভাবুন আপনি একটি রাজকীয় ডিনারে আছেন যেখানে ভদ্রতাই একমাত্র মুদ্রা।",
    "criticalReflection": "\"Waiting your turn\" is a noble aristocratic ideal but in a hyper-competitive world, passivity often leads to missed opportunities. Assertiveness is sometimes needed over gentleness to secure one's rights or fair share.",
    "expectedOutcomes": {
      "individual": "Developing a charismatic and calming presence.",
      "social": "A more polite and considerate public sphere."
    }
  },
  {
    "id": 71,
    "sectionTitle": "The Outer World",
    "chapterTitle": "The Comparison Trap",
    "goldenQuotes": [
      "Don’t be fooled by the outward appearance of other people.",
      "Our concern should be our freedom, not titles and prestigious positions.",
      "Every time you feel envious, check your priorities."
    ],
    "coreInsights": [
      {
        "title": "তুলনার বিষ",
        "content": "অন্যের সাজানো সোশ্যাল মিডিয়া লাইফ বা বাহ্যিক সাফল্য দেখে ঈর্ষান্বিত হওয়া বোকামি। এটি আমাদের নিজেদের অর্জনের আনন্দ কেড়ে নেয়।"
      },
      {
        "title": "জে. কোল (J. Cole)-এর শিক্ষা",
        "content": "বিখ্যাত র‍্যাপার জে. কোলের উদাহরণ দিয়ে বলা হয়েছে, অন্যের ভ্যালিডেশনের আশায় না থেকে নিজের স্বকীয়তা বজায় রাখাই আসল সাফল্য।"
      },
      {
        "title": "স্বাধীনতার ফোকাস",
        "content": "টাইটেল বা পদমর্যাদার চেয়ে মানসিক স্বাধীনতা বেশি গুরুত্বপূর্ণ। ঈর্ষা আমাদের পরাধীন করে।"
      },
      {
        "title": "কৃতজ্ঞতা",
        "content": "নিজের স্বাস্থ্য এবং প্রিয়জনদের কথা মনে করলে ঈর্ষা কমে যায়। যা নেই তার চেয়ে যা আছে, তা নিয়ে ভাবা উচিত।"
      }
    ],
    "practicalApplication": "যখনই কারো ইনস্টাগ্রাম স্টোরি দেখে হিংসা হবে, নিজেকে বলুন: \"আমি তার ব্যাকস্টেজ জানি না, শুধু হাইলাইট দেখছি।\" এরপর ফোন রেখে নিজের জীবনের ৩টি ভালো দিক লিখে ফেলুন (যেমন: সুস্থ শরীর, মা-বাবার হাসি, বা প্রিয় বই)।",
    "criticalReflection": "While \"eradicating envy\" is noble, it's easier said than done in a hyper-capitalist society designed to trigger envy for consumption. Instead of trying to \"eradicate\" it completely (which feels impossible), transforming envy into inspiration might be a more practical initial step for most people.",
    "expectedOutcomes": {
      "individual": "Deep contentment with one's own pace of life.",
      "social": "Authentic support for peers instead of secret rivalry."
    }
  },
  {
    "id": 72,
    "sectionTitle": "The Outer World",
    "chapterTitle": "The Path of Non-Conformity",
    "goldenQuotes": [
      "The happy people usually don’t care about what others think.",
      "You do not care if others think you are naïve or stupid. Your only concern is to keep your focus on yourself."
    ],
    "coreInsights": [
      {
        "title": "ভয় বনাম কৌতূহল",
        "content": "মানুষ কী ভাববে—এই ভয়কে কৌতূহলে রূপান্তর করুন। ভাবুন, \"দেখা যাক তারা কী বলে,\" কিন্তু তা গায়ে মাখবেন না।"
      },
      {
        "title": "স্বাধীন সত্তা",
        "content": "প্রাপ্তবয়স্ক হওয়ার অর্থ হলো নিজের চয়েস নিজেই নেওয়া। সমাজ বা পরিবারের চাপে নিজের স্বপ্ন বিসর্জন দেওয়া মানে নিজের সত্তাকে অপমান করা।"
      },
      {
        "title": "সমালোচনার প্রস্তুতি",
        "content": "আপনি যখন নিজের পথে চলবেন, সমালোচনা আসবেই। একে পথের বাধা না ভেবে রাস্তার ধুলো মনে করুন।"
      },
      {
        "title": "সুখের চাবিকাঠি",
        "content": "সুখী হতে চাইলে 'Validation Seeking' বা অনুমোদনের আশা ত্যাগ করতে হবে।"
      }
    ],
    "practicalApplication": "এমন একটি পোশাক পরুন বা এমন একটি কাজ করুন যা আপনি \"লোকে কী বলবে\" ভয়ে করছেন না। ছোট একটি ঝুঁকি নিন। কেউ কিছু বললে হাসিমুখে শুনুন এবং নিজের কাজ চালিয়ে যান। এটি আপনার \"Thick Skin\" তৈরি করবে।",
    "criticalReflection": "\"Not caring\" can slip into narcissism or lack of empathy if taken to the extreme. We exist in a community, and sometimes feedback is valid (e.g., if one's actions hurt others). The goal is to filter noise, not valid moral criticism.",
    "expectedOutcomes": {
      "individual": "Unapologetic authenticity and creative freedom.",
      "social": "A more diverse society with varied life paths."
    }
  },
  {
    "id": 73,
    "sectionTitle": "The Outer World",
    "chapterTitle": "Shared Happiness",
    "goldenQuotes": [
      "There’s no enjoying the possession of anything valuable unless one has someone to share it with.",
      "No matter how cool or badass you are, it’s good to let people know you appreciate them."
    ],
    "coreInsights": [
      {
        "title": "একাকী সাফল্যের শূন্যতা",
        "content": "সেনেকার মতে, যদি কেউ একা পৃথিবীর সব সম্পদের মালিক হয় কিন্তু তা শেয়ার করার কেউ না থাকে, তবে সে অসুখী।"
      },
      {
        "title": "সম্পর্কের যত্ন",
        "content": "ব্যস্ততার অজুহাতে প্রিয়জনদের অবহেলা করা উচিত নয়। সত্যিকারের বন্ধুরা সাফল্যের সময় যেমন পাশে থাকে, বিপদেও থাকে।"
      },
      {
        "title": "বন্ধু হওয়া",
        "content": "ভালো বন্ধু পেতে চাইলে আগে নিজেকে ভালো বন্ধু হতে হবে। এটি একটি দ্বিমুখী রাস্তা।"
      },
      {
        "title": "কৃতজ্ঞতা প্রকাশ",
        "content": "প্রিয় মানুষদের জানিয়ে দিন তারা আপনার জীবনে কতটা গুরুত্বপূর্ণ। এটি সম্পর্ক মজবুত করে।"
      }
    ],
    "practicalApplication": "আজ কোনো বিশেষ কারণ ছাড়াই আপনার ৩ জন প্রিয় বন্ধু বা আত্মীয়কে মেসেজ দিন। লিখুন: \"তোমাকে আমার জীবনে পেয়ে আমি খুশি।\" কোনো ফরোয়ার্ডেড মেসেজ নয়, নিজের ভাষায় লিখুন।",
    "criticalReflection": "The book shifts here from self-reliance to interdependence. It acknowledges that Stoicism isn't about isolation. However, finding \"worthy\" people to share joy with is challenging in adulthood. The advice assumes one already has a healthy social circle, which isn't true for everyone.",
    "expectedOutcomes": {
      "individual": "Reduced loneliness and deeper emotional bonds.",
      "social": "Strengthened community ties and social capital."
    }
  },
  {
    "id": 74,
    "sectionTitle": "The Outer World",
    "chapterTitle": "The Clouds and the Sun (Intro)",
    "goldenQuotes": [
      "Even if some obstacle comes on the scene, its appearance is only to be compared to that of clouds which drift in front of the sun without ever defeating its light."
    ],
    "coreInsights": [
      {
        "title": "মেঘ বনাম সূর্য",
        "content": "সমস্যা বা বাধা হলো মেঘের মতো, আর আপনার ভেতরের শক্তি হলো সূর্যের মতো। মেঘ সূর্যকে ঢাকতে পারে, কিন্তু নেভাতে পারে না।"
      },
      {
        "title": "ক্ষণস্থায়ীত্ব",
        "content": "প্রতিটি বাধা সাময়িক। এটি আসবে এবং যাবে, কিন্তু আপনার মনের আলো বা সাহস স্থায়ী।"
      },
      {
        "title": "Chapter 75",
        "content": "Letter 62: On Living Through Anxious Times"
      },
      {
        "title": "1. Chapter Title",
        "content": "Crisis Management"
      },
      {
        "title": "সতর্কতা",
        "content": "ইউক্রেন যুদ্ধ বা কোভিডের মতো সংকট আমাদের শেখায় যে পৃথিবী অনির্দেশ্য। তাই মানসিকভাবে সবসময় প্রস্তুত থাকতে হবে।"
      },
      {
        "title": "ইতিহাসের শিক্ষা",
        "content": "স্যাম জেলের (Sam Zell) পরিবারের পোল্যান্ড থেকে পালানোর উদাহরণ দিয়ে লেখক বলেছেন, বিপদ সংকেত চিনতে পারা এবং দ্রুত ব্যবস্থা নেওয়া জরুরি।"
      },
      {
        "title": "খবর বাছাই",
        "content": "সংকটের সময় সব খবর না দেখে কেবল নির্ভরযোগ্য উৎস দেখা উচিত। অতিরিক্ত প্যানিক ছড়ায় এমন সোর্স (যেমন টুইটার/ফেসবুক) বর্জনীয়।"
      },
      {
        "title": "সাহস",
        "content": "ভয় পেয়ে জমে না গিয়ে (Freeze), কাজ করা (Act) বা সিদ্ধান্ত নেওয়া উচিত।"
      }
    ],
    "practicalApplication": "",
    "criticalReflection": "",
    "expectedOutcomes": {
      "individual": "",
      "social": ""
    }
  },
  {
    "id": 75,
    "sectionTitle": "The Outer World",
    "chapterTitle": "Crisis Management",
    "goldenQuotes": [
      "Fortune falls heavily on those for whom she’s unexpected. The one always on the lookout easily endures."
    ],
    "coreInsights": [
      {
        "title": "সতর্কতা",
        "content": "ইউক্রেন যুদ্ধ বা কোভিডের মতো সংকট আমাদের শেখায় যে পৃথিবী অনির্দেশ্য। তাই মানসিকভাবে সবসময় প্রস্তুত থাকতে হবে।"
      },
      {
        "title": "ইতিহাসের শিক্ষা",
        "content": "স্যাম জেলের (Sam Zell) পরিবারের পোল্যান্ড থেকে পালানোর উদাহরণ দিয়ে লেখক বলেছেন, বিপদ সংকেত চিনতে পারা এবং দ্রুত ব্যবস্থা নেওয়া জরুরি।"
      },
      {
        "title": "খবর বাছাই",
        "content": "সংকটের সময় সব খবর না দেখে কেবল নির্ভরযোগ্য উৎস দেখা উচিত। অতিরিক্ত প্যানিক ছড়ায় এমন সোর্স (যেমন টুইটার/ফেসবুক) বর্জনীয়।"
      },
      {
        "title": "সাহস",
        "content": "ভয় পেয়ে জমে না গিয়ে (Freeze), কাজ করা (Act) বা সিদ্ধান্ত নেওয়া উচিত।"
      }
    ],
    "practicalApplication": "একটি \"Crisis Plan\" তৈরি করুন। যদি কাল বড় কোনো প্রাকৃতিক দুর্যোগ বা আর্থিক ধস নামে, আপনার প্রথম ৩টি পদক্ষেপ কী হবে? এটি লিখে রাখলে উদ্বেগ কমে এবং আত্মবিশ্বাস বাড়ে।",
    "criticalReflection": "\"Always on the lookout\" can lead to hyper-vigilance or paranoia. While preparation is key, living in constant anticipation of disaster ruins the present. The balance between preparedness and paranoia is delicate.",
    "expectedOutcomes": {
      "individual": "Calmness during chaos; better emergency planning.",
      "social": "Reduced panic buying and collective hysteria."
    }
  },
  {
    "id": 76,
    "sectionTitle": "The Outer World",
    "chapterTitle": "The Math of Mortality",
    "goldenQuotes": [
      "We hardly ever regret the things we did. Instead, we regret the things we didn’t do.",
      "Just being alive is the biggest thing one can be grateful for."
    ],
    "coreInsights": [
      {
        "title": "শেষ দেখা",
        "content": "লেখকের বন্ধু হিসাব করে দেখেছিল যে সে তার বাবা-মাকে আর মাত্র ২০ বার দেখতে পাবে। এই উপলব্ধি তাকে প্রতি মুহূর্তের কদর করতে শিখিয়েছে।"
      },
      {
        "title": "তুচ্ছ অভিযোগ",
        "content": "মৃত্যুর কথা মনে রাখলে ছোটখাটো ঝগড়া বা অভিযোগ অর্থহীন মনে হয়।"
      },
      {
        "title": "বেঁচে থাকার আনন্দ",
        "content": "কেবল বেঁচে থাকাটাই যে কত বড় উপহার, তা আমরা প্রায়ই ভুলে যাই।"
      },
      {
        "title": "রিগ্রেট মিনিমাইজেশন",
        "content": "শেষ বয়সে অনুশোচনা এড়াতে এখনই প্রিয়জনদের সময় দেওয়া উচিত।"
      }
    ],
    "practicalApplication": "\"Memento Mori\" (মৃত্যুকে স্মরণ কর) অনুশীলন করুন। ভাবুন, যদি আজকেই আপনার প্রিয়জনের সাথে শেষ দেখা হয়, তবে আপনি তার সাথে কেমন আচরণ করবেন? আজ বাড়ি ফিরে বা ফোনে ঠিক সেই আচরণটি করুন।",
    "criticalReflection": "Counting \"how many times left\" with parents is a terrifying but effective reality check. It forces prioritization. However, it can also induce anticipatory grief, making interactions heavy instead of joyful.",
    "expectedOutcomes": {
      "individual": "Enhanced presence in relationships; reduced petty conflicts.",
      "social": "Stronger intergenerational bonds."
    }
  },
  {
    "id": 77,
    "sectionTitle": "The Outer World",
    "chapterTitle": "Embracing the Cycle",
    "goldenQuotes": [
      "The world’s cycles never change — up and down, from age to age.",
      "When things are good, simply enjoy. When things are bad, go through it."
    ],
    "coreInsights": [
      {
        "title": "জীবনের চক্র",
        "content": "জীবন সরলরেখা নয়, এটি একটি সাইন ওয়েভ (Sine Wave)—কখনও ওপরে, কখনও নিচে। খারাপ সময় চিরস্থায়ী নয়, ভালো সময়ও নয়।"
      },
      {
        "title": "অভিনেতার ভূমিকা",
        "content": "আমরা জীবনের নাটকে কেবল অভিনেতা। চিত্রনাট্য (ভাগ্য) আমাদের হাতে নেই, কিন্তু অভিনয় (প্রতিক্রিয়া) আমাদের হাতে।"
      },
      {
        "title": "জোকারের উপমা",
        "content": "একই জোকার চরিত্রে বিভিন্ন অভিনেতা ভিন্নভাবে অভিনয় করেছেন। তেমনি আমাদের পরিস্থিতি এক হলেও আমাদের প্রতিক্রিয়া ভিন্ন হতে পারে।"
      },
      {
        "title": "স্বাভাবিকতা",
        "content": "উত্থান-পতনকে জীবনের স্বাভাবিক নিয়ম বা ঋতু পরিবর্তনের মতো মেনে নেওয়া।"
      }
    ],
    "practicalApplication": "আপনার জীবনের বর্তমান অবস্থাকে একটি ঋতুর সাথে তুলনা করুন। যদি এখন \"শীতকাল\" (খারাপ সময়) চলে, তবে মনে রাখুন বসন্ত আসবেই। এই সময়ে কেবল টিকে থাকার (Survival) দিকে মনোযোগ দিন, বড় কিছু করার দরকার নেই।",
    "criticalReflection": "Accepting cycles helps reduce despair during lows but also curbs arrogance during highs. It keeps the ego in check. Sociologically, acknowledging cycles helps societies prepare for economic recessions or pandemics without losing hope.",
    "expectedOutcomes": {
      "individual": "Emotional stability during crises.",
      "social": "A culture of patience and long-term thinking."
    }
  },
  {
    "id": 78,
    "sectionTitle": "The Outer World",
    "chapterTitle": "Breaking the Spiral",
    "goldenQuotes": [
      "One little negative thing can set you on this whole downward spiral.",
      "When you work on something that’s important to you, you feel that your days have meaning."
    ],
    "coreInsights": [
      {
        "title": "নেতিবাচক চক্র",
        "content": "একটি ছোট খারাপ ঘটনা (যেমন অসুস্থতা) আমাদের রুটিন নষ্ট করে দেয় এবং সেখান থেকে হতাশার চক্র শুরু হয়।"
      },
      {
        "title": "উদ্দেশ্য খুঁজে পাওয়া",
        "content": "হতাশা কাটানোর সেরা উপায় হলো নতুন কোনো অর্থবহ লক্ষ্য ঠিক করা।"
      },
      {
        "title": "অন্যের উপকার",
        "content": "নিজের দুঃখ নিয়ে না ভেবে অন্যের জন্য কিছু করলে দ্রুত মোটিভেশন ফিরে আসে।"
      },
      {
        "title": "তাৎক্ষণিক অ্যাকশন",
        "content": "বড় পরিবর্তনের জন্য অপেক্ষা না করে ছোট কোনো কাজ শুরু করা।"
      }
    ],
    "practicalApplication": "যদি নিজেকে \"আটকে থাকা\" (Stuck) মনে হয়, তবে আজই এমন একটি কাজ করুন যা অন্যের উপকারে আসে। হতে পারে ঘরের কাজ করে দেওয়া বা কলিগকে সাহায্য করা। নিজের ফোকাস \"আমি\" থেকে সরিয়ে \"আমরা\"-তে নিন।",
    "criticalReflection": "\"Focusing on others\" is a clinically proven antidepressant method (altruism). It shifts the ruminating brain from internal misery to external utility. It’s a simple but profound bio-hack for mental health.",
    "expectedOutcomes": {
      "individual": "Quick recovery from depressive episodes or creative blocks.",
      "social": "Increased volunteerism and community support."
    }
  },
  {
    "id": 79,
    "sectionTitle": "The Outer World",
    "chapterTitle": "Relentless Consistency",
    "goldenQuotes": [
      "The way you treat small problems becomes how you treat big ones.",
      "If you know you’re doing the right thing, don’t let anyone stop you.",
      "Never miss."
    ],
    "coreInsights": [
      {
        "title": "ছোট সমস্যার গুরুত্ব",
        "content": "ছোট সমস্যাকে অবহেলা করলে তা বড় সমস্যার মোকাবেলায় আমাদের দুর্বল করে দেয়। কার রেন্টাল কোম্পানির উদাহরণ দিয়ে লেখক দৃঢ়তার কথা বলেছেন।"
      },
      {
        "title": "নেভার মিস",
        "content": "জিমে যাওয়া হোক বা লেখালেখি—\"Never Miss\" বা একদিনও বাদ না দেওয়ার মানসিকতা অজেয় করে তোলে।"
      },
      {
        "title": "দ্বৈত সত্তা",
        "content": "মায়ের উপদেশ—ঘরের ভেতরে দয়ালু এবং বাইরে অনমনীয় বা 'Unstoppable' হওয়া।"
      },
      {
        "title": "বিরোধিতা মোকাবেলা",
        "content": "সঠিক পথে থাকলে পৃথিবীর কারো কথায় থামা উচিত নয়।"
      }
    ],
    "practicalApplication": "\"Seinfeld Strategy\" বা ক্যালেন্ডার চেইন মেথড ব্যবহার করুন। কোনো একটি অভ্যাসের জন্য ক্যালেন্ডারে রোজ দাগ দিন। চেইন ভাঙবেন না। ছোট ছোট জয়ে নিজেকে অভ্যস্ত করুন।",
    "criticalReflection": "\"Never miss\" creates high discipline but risks obsessive-compulsive behavior or burnout. Life happens (sickness, emergencies). A more compassionate rule is \"Never miss twice\" (James Clear), allowing for human error without losing momentum.",
    "expectedOutcomes": {
      "individual": "Elite level discipline and grit.",
      "social": "High-achieving individuals who push boundaries."
    }
  },
  {
    "id": 80,
    "sectionTitle": "The Outer World",
    "chapterTitle": "Taking Charge",
    "goldenQuotes": [
      "Make the best use of what is in your power, and take the rest as it happens.",
      "Let us commit to making the best of any situation."
    ],
    "coreInsights": [
      {
        "title": "খবরের প্রভাব",
        "content": "প্রতিদিন নেতিবাচক খবর দেখলে মনে হয় পৃথিবী ধ্বংস হয়ে যাচ্ছে, যা আমাদের নিষ্ক্রিয় করে দেয়।"
      },
      {
        "title": "ইতিহাসের শিক্ষা",
        "content": "২০০৮-এর মন্দার সময়ও অনেকে ভেবেছিল সব শেষ, কিন্তু অর্থনীতি ঘুরে দাঁড়িয়েছে। তাই প্যানিক না হয়ে নিজের কাজ করা উচিত।"
      },
      {
        "title": "দায়িত্ব গ্রহণ",
        "content": "বাইরের পরিস্থিতির দোষ না দিয়ে নিজের অবস্থার দায়িত্ব নিজেকেই নিতে হবে।"
      },
      {
        "title": "প্রতিক্রিয়া নিয়ন্ত্রণ",
        "content": "অর্থনীতি বা রাজনীতি আমাদের হাতে নেই, কিন্তু আমাদের স্কিল এবং সঞ্চয় আমাদের হাতে।"
      }
    ],
    "practicalApplication": "আগামী ৩ দিন কোনো নিউজ চ্যানেল বা নিউজ পোর্টাল দেখবেন না। সেই সময়টুকু নিজের স্কিল ডেভেলপমেন্টে ব্যয় করুন। দেখুন উদ্বেগ কমে কি না এবং প্রোডাক্টিভিটি বাড়ে কি না।",
    "criticalReflection": "Ignoring news can lead to being uninformed voters. Personal power is vital, but collective power (voting, activism) shapes the external conditions. One should be informed enough to act as a citizen, but not enough to be paralyzed as an individual.",
    "expectedOutcomes": {
      "individual": "Proactive mindset and reduced anxiety.",
      "social": "A society focused on solutions rather than complaints."
    }
  },
  {
    "id": 81,
    "sectionTitle": "The Outer World",
    "chapterTitle": "The Inner Ally",
    "goldenQuotes": [
      "What progress, you ask, have I made? I have begun to be a friend to myself.",
      "He who is a friend to himself is a friend to all mankind."
    ],
    "coreInsights": [
      {
        "title": "আত্ম-সমালোচনা",
        "content": "আমরা বন্ধুদের ভুলের প্রতি যতটা সদয়, নিজের ভুলের প্রতি ততটাই কঠোর। এই বৈষম্য দূর করতে হবে।"
      },
      {
        "title": "বন্ধুর মতো আচরণ",
        "content": "নিজেকে একজন বেস্ট ফ্রেন্ডের মতো ট্রিট করুন। ভুল করলে বকা না দিয়ে উৎসাহ দিন।"
      },
      {
        "title": "সম্পর্কের উন্নতি",
        "content": "যে নিজের সাথে ভালো ব্যবহার করে, সে অন্যের সাথেও ভালো ব্যবহার করতে পারে।"
      },
      {
        "title": "পড়ে যাওয়া",
        "content": "পড়ে যাওয়া বা ব্যর্থ হওয়া স্বাভাবিক। নিজেকে উঠে দাঁড়াতে সাহায্য করাই বন্ধুর কাজ।"
      }
    ],
    "practicalApplication": "যখনই নিজের ওপর রাগ হবে, চোখ বন্ধ করে ভাবুন আপনার সবচেয়ে প্রিয় বন্ধু এই ভুলটি করেছে। আপনি তাকে কী বলতেন? ঠিক সেই কথাগুলোই নিজেকে বলুন।",
    "criticalReflection": "Self-friendship is the antidote to self-loathing. It is foundational for mental health. Without it, external validation becomes a drug. This is arguably the most important lesson for long-term happiness.",
    "expectedOutcomes": {
      "individual": "High emotional intelligence and self-love.",
      "social": "More compassionate and less judgmental interactions."
    }
  },
  {
    "id": 82,
    "sectionTitle": "The Outer World",
    "chapterTitle": "Economic Stoicism",
    "goldenQuotes": [
      "Do not seek to have events happen as you want them but instead want them to happen and your life will go well.",
      "The good thing about the economy is that unlike a company or a person, it never dies."
    ],
    "coreInsights": [
      {
        "title": "চক্রাকার অর্থনীতি",
        "content": "মন্দা অর্থনীতির একটি স্বাভাবিক অংশ, কোনো বিপর্যয় নয়। এটি ঋতু পরিবর্তনের মতো।"
      },
      {
        "title": "দীর্ঘমেয়াদী দৃষ্টিভঙ্গি",
        "content": "শর্ট-টার্ম বা স্বল্পমেয়াদী পতনে ভয় না পেয়ে ইতিহাসের দিকে তাকালে দেখা যায়, অর্থনীতি সবসময় ঘুরে দাঁড়ায় (S&P 500 উদাহরণ)।"
      },
      {
        "title": "আবেগ নিয়ন্ত্রণ",
        "content": "মিডিয়া বা মানুষের কথায় প্যানিক না হয়ে যুক্তির মাধ্যমে বিনিয়োগ বা ক্যারিয়ারের সিদ্ধান্ত নেওয়া উচিত।"
      },
      {
        "title": "টিকে থাকার মানসিকতা",
        "content": "মন্দার সময় যারা মাথা ঠান্ডা রেখে টিকে থাকে, সুসময়ে তারাই সবচেয়ে বেশি লাভবান হয়।"
      }
    ],
    "practicalApplication": "আপনার বিনিয়োগ বা সঞ্চয়ের দিকে তাকান। প্যানিক হয়ে সব বিক্রি বা খরচ না করে দীর্ঘমেয়াদী প্ল্যানে অটল থাকুন। মন্দাকে \"Sale\" বা সুযোগ হিসেবে দেখার চেষ্টা করুন।",
    "criticalReflection": "Staying calm in a recession is easier for those with savings. For those losing jobs/homes, \"staying calm\" sounds patronizing. However, panic only worsens poverty. Rational action (cutting costs, upskilling) is the only way out, regardless of class.",
    "expectedOutcomes": {
      "individual": "Financial resilience and wealth accumulation over time.",
      "social": "Reduced market volatility driven by fear."
    }
  },
  {
    "id": 83,
    "sectionTitle": "The Outer World",
    "chapterTitle": "Making Peace with Mortality (The Conclusion)",
    "goldenQuotes": [
      "You don’t want to be a slave to anything. You want to be free. So be free — of everything.",
      "When we’re sick, we should respect the signals our body sends us. When we age, we should be proud instead of trying to hide."
    ],
    "coreInsights": [
      {
        "title": "শরীরের দাসত্ব",
        "content": "আমরা শরীরের যত্ন নেব, কিন্তু শরীরের দাস হব না। বার্ধক্য বা অসুস্থতাকে ভয় না পেয়ে জীবনের অংশ হিসেবে মেনে নেব।"
      },
      {
        "title": "খাবিবের শিক্ষা",
        "content": "ফাইটার খাবিবের বাবার মৃত্যুর পর তার অবসরের সিদ্ধান্ত প্রমাণ করে যে জীবনের নশ্বরতা মেনে নেওয়াই প্রকৃত শক্তি।"
      },
      {
        "title": "বার্ধক্যকে আলিঙ্গন",
        "content": "বয়স লুকানোর চেষ্টা না করে অভিজ্ঞতার জন্য গর্বিত হওয়া উচিত।"
      },
      {
        "title": "চূড়ান্ত মুক্তি",
        "content": "শরীর, সম্পদ বা পরিস্থিতি—কোনো কিছুর ওপর আসক্তি না রাখাই হলো চূড়ান্ত স্টয়িক মুক্তি বা Freedom।"
      }
    ],
    "practicalApplication": "আয়নায় নিজের বয়সের ছাপ বা শরীরের কোনো দাগ দেখে মন খারাপ করবেন না। ভাবুন, \"এটি আমার বেঁচে থাকার প্রমাণ।\" শরীর খারাপ হলে জোর না করে বিশ্রাম নিন। নশ্বরতাকে ভয় না পেয়ে আজকেই সেরা ব্যবহার করুন।",
    "criticalReflection": "The book ends on a somber but liberating note. Accepting physical decay is the ultimate test of a Stoic. It challenges the modern obsession with eternal youth and bio-hacking, proposing that dignity lies in acceptance, not denial.",
    "expectedOutcomes": {
      "individual": "Graceful aging and reduced health anxiety.",
      "social": "A society that respects elders and the natural cycle of life."
    }
  }
];

export const getChapterById = (id: number) => chapters.find(c => c.id === id);
export const getSectionForChapter = (id: number) => sections.find(s => s.chapters.includes(id));
export const getAllGoldenQuotes = () => chapters.flatMap(c => c.goldenQuotes.map(q => ({ quote: q, chapterId: c.id, chapterTitle: c.chapterTitle })));
