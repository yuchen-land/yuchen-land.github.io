// Hobbies Data - Gallery sections for creative hobbies
export const hobbies = [
    // {
    //     id: "art",
    //     title: "Art & Illustration",
    //     icon: "🎨",
    //     description: "Drawing and digital illustration have been my creative outlet since childhood. I enjoy exploring different styles from character design to landscape paintings.",
    //     gallery: [
    //         { id: 1, src: "/images/hobbies/art/art_1.jpg", alt: "Character illustration with vibrant colors" },
    //         { id: 2, src: "/images/hobbies/art/art_2.jpg", alt: "Digital landscape painting" },
    //         { id: 3, src: "/images/hobbies/art/art_3.jpg", alt: "Creative artwork piece" },
    //         { id: 4, src: "/images/hobbies/art/art_4.jpg", alt: "Artistic illustration project" },
    //     ],
    // },
    // {
    //     id: "pastry",
    //     title: "Pastry Making",
    //     icon: "🍰",
    //     description: "As a certified pâtissier, I find joy in crafting beautiful desserts. From delicate macarons to elegant layer cakes, baking is where art meets science.",
    //     gallery: [
    //         { id: 1, src: "/images/hobbies/pastry/pastry_1.jpg", alt: "Handcrafted artisanal dessert" },
    //         { id: 2, src: "/images/hobbies/pastry/pastry_2.jpg", alt: "Elegant layered cake creation" },
    //         { id: 3, src: "/images/hobbies/pastry/pastry_3.jpg", alt: "Delicate French pastry" },
    //         { id: 4, src: "/images/hobbies/pastry/pastry_4.jpg", alt: "Beautiful patisserie work" },
    //     ],
    // },
    // {
    //     id: "photography",
    //     title: "Photography",
    //     icon: "📷",
    //     description: "Capturing moments through my lens - from street photography to landscape shots. I love exploring light, composition, and storytelling through images.",
    //     gallery: [
    //         { id: 1, src: "/images/hobbies/photography/photo_1.jpg", alt: "Photo 1" },
    //         { id: 2, src: "/images/hobbies/photography/photo_2.jpg", alt: "Photo 2" },
    //         { id: 3, src: "/images/hobbies/photography/photo_3.jpg", alt: "Photo 3" },
    //         { id: 4, src: "/images/hobbies/photography/photo_4.jpg", alt: "Photo 4" },
    //     ],
    // },
    // {
    //     id: "musicals",
    //     title: "Musicals",
    //     icon: "🎭",
    //     description: "A passionate theatergoer who loves experiencing the magic of live musicals. From Broadway classics to contemporary productions, I find inspiration in storytelling through music and performance.",
    //     gallery: [
    //         { id: 1, src: "/images/hobbies/musicals/musical_1.jpg", alt: "Broadway musical theater experience" },
    //         { id: 2, src: "/images/hobbies/musicals/musical_2.jpg", alt: "Live musical performance" },
    //         { id: 3, src: "/images/hobbies/musicals/musical_3.jpg", alt: "Theater production memory" },
    //         { id: 4, src: "/images/hobbies/musicals/musical_4.jpg", alt: "Musical show attendance" },
    //     ],
    // },
    {
        id: "pets",
        title: "My Fur Babies",
        icon: "🐾",
        description: "Life is better with furry companions.",
        isPetSection: true,
        pets: [
            { id: 1, name: "劉漾漾", nameEn: "YoungYoung", type: "豆柴 Mame Shiba", emoji: "🐕", src: "/images/hobbies/pets/yangyang.jpg", instagram: "https://www.instagram.com/liuliangliang_yangyang" },
            { id: 2, name: "劉亮亮", nameEn: "BlingBling", type: "長毛豆柴 Long-haired Mame Shiba", emoji: "🐕", src: "/images/hobbies/pets/liangliang.jpg", instagram: "https://www.instagram.com/liuliangliang_yangyang" },
            { id: 3, name: "灰搭", nameEn: "HuiDa", type: "暹羅貓 Siamese Cat", emoji: "🐱", src: "/images/hobbies/pets/huida.jpg" },
        ],
        gallery: [],
    },
];

// Hobby Activities & Events Data
export const hobbyActivities = [
    {
        id: 1,
        title: "CYBERSEC 2023 臺灣資安大會",
        type: "Conference",
        date: "2023",
        description: "Represented as exhibitor at Taiwan's premier cybersecurity conference.",
        image: "/images/activities/conference_1.jpg",
        tags: ["Cybersecurity", "Conference"],
    },
    {
        id: 2,
        title: "Open HCI Workshop",
        type: "Workshop",
        date: "2021",
        description: "Human-Computer Interaction workshop as technical team member, working with Arduino IDE and embedded systems.",
        image: "/images/activities/workshop_2.jpg",
        tags: ["Arduino IDE", "Embedded", "HCI", "UX Design"],
    },
    {
        id: 3,
        title: "Vision AI DevKit Workshop",
        type: "Workshop",
        date: "2019",
        description: "Microsoft & Coding Angels Girls TECHgether workshop on Azure, AI, and Machine Learning.",
        image: "/images/activities/workshop_1.jpg",
        tags: ["Azure", "AI", "Machine Learning"],
    }
];

// Scholarships Data
export const scholarships = [
    {
        id: 1,
        name: "國科會博士班研究獎學金",
        nameEn: "NSTC PhD Research Scholarship",
        organization: "國家科學及技術委員會",
        years: ["2024"],
        description: "獲選國科會博士班研究獎學金，支持博士班研究計畫。",
        icon: "trophy",
        url: "https://www.nstc.gov.tw/sci/ch/detail/13b9f964-9623-4681-b53c-833c3e136e97",
    },
    {
        id: 2,
        name: "鴻海獎學鯨",
        nameEn: "Foxconn Scholarship",
        organization: "鴻海教育基金會",
        years: ["2021", "2022"],
        description: "榮獲第六屆、第七屆鴻海獎學鯨，肯定學業表現與未來發展潛力。",
        icon: "trophy",
    },
    {
        id: 3,
        name: "余鑑教授獎學金",
        nameEn: "Prof. Yu Chien Scholarship",
        organization: "國立臺灣師範大學科技應用與人力資源發展學系",
        years: ["2020", "2021","2022"],
        description: "表彰優異學業成績與積極參與系上活動之貢獻。",
        icon: "academic",
    },
];

// Founder / Brand Ventures Data
export const brandVentures = [
    {
        id: 1,
        name: "Holly World",
        type: "Cosplay & Fashion",
        role: "Founder",
        description: "Masquerade and cosplay fashion e-commerce platform offering unique costume pieces and accessories.",
        url: "https://holly-world-v2-0.vercel.app",
        logo: "/images/brands/holly_world.jpg",
        status: "Active",
        social: {
            instagram: "https://www.instagram.com/hollyworld_888?igsh=cGw0dnBzcm93Y2Y3",
            facebook: "https://www.facebook.com/chaiyou23316801",
        },
    },
    {
        id: 2,
        name: "Bonbunny 甜點工作室",
        type: "Pastry Brand",
        role: "Founder",
        description: "Artisanal pastry studio specializing in handcrafted desserts and custom cakes.",
        url: "https://bonbunny.vercel.app",
        logo: "/images/brands/bonbunny.jpg",
        status: "Growing",
        social: {
            instagram: "https://www.instagram.com/bonbunny_pastry?igsh=dW1vd2V2MzZ1dXE%3D&utm_source=qr",
            facebook: "https://www.facebook.com/profile.php?id=61581678515752",
        },
    },
    {
        id: 3,
        name: "Muse Classic",
        type: "Fashion Brand",
        role: "Co-founder",
        description: "Korean fashion e-commerce platform focusing on curated women's clothing and accessories.",
        url: "https://muse-classic.com",
        logo: "/images/brands/muse_classic.jpg",
        status: "Active",
        social: {},
    },
    {
        id: 4,
        name: "蓮花生 Lotus Peanut Candy",
        type: "Food Brand",
        role: "Co-founder",
        description: "Traditional Taiwanese peanut candy brand with modern packaging and online presence.",
        url: "https://lotus-peanut.com",
        logo: "/images/brands/lotus_peanut.jpg",
        status: "Active",
        social: {},
    },
    {
        id: 5,
        name: "Tech Content Creator",
        type: "Media / Blog",
        role: "Creator",
        description: "Sharing coding tutorials, tech insights, and career tips through blog posts and social media.",
        url: null,
        logo: "/images/brands/tech_blog.jpg",
        status: "Growing",
        social: {},
    },
];
