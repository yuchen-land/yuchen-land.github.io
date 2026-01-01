// Hobbies Data - Gallery sections for creative hobbies
export const hobbies = [
    {
        id: "art",
        title: "Art & Illustration",
        icon: "🎨",
        description: "Drawing and digital illustration have been my creative outlet since childhood. I enjoy exploring different styles from character design to landscape paintings.",
        gallery: [
            { id: 1, src: "/images/hobbies/art/art_1.jpg", alt: "Artwork 1" },
            { id: 2, src: "/images/hobbies/art/art_2.jpg", alt: "Artwork 2" },
            { id: 3, src: "/images/hobbies/art/art_3.jpg", alt: "Artwork 3" },
            { id: 4, src: "/images/hobbies/art/art_4.jpg", alt: "Artwork 4" },
        ],
    },
    {
        id: "pastry",
        title: "Pastry Making",
        icon: "🍰",
        description: "As a certified pâtissier, I find joy in crafting beautiful desserts. From delicate macarons to elegant layer cakes, baking is where art meets science.",
        gallery: [
            { id: 1, src: "/images/hobbies/pastry/pastry_1.jpg", alt: "Pastry 1" },
            { id: 2, src: "/images/hobbies/pastry/pastry_2.jpg", alt: "Pastry 2" },
            { id: 3, src: "/images/hobbies/pastry/pastry_3.jpg", alt: "Pastry 3" },
            { id: 4, src: "/images/hobbies/pastry/pastry_4.jpg", alt: "Pastry 4" },
        ],
    },
    {
        id: "photography",
        title: "Photography",
        icon: "📷",
        description: "Capturing moments through my lens - from street photography to landscape shots. I love exploring light, composition, and storytelling through images.",
        gallery: [
            { id: 1, src: "/images/hobbies/photography/photo_1.jpg", alt: "Photo 1" },
            { id: 2, src: "/images/hobbies/photography/photo_2.jpg", alt: "Photo 2" },
            { id: 3, src: "/images/hobbies/photography/photo_3.jpg", alt: "Photo 3" },
            { id: 4, src: "/images/hobbies/photography/photo_4.jpg", alt: "Photo 4" },
        ],
    },
];

// Hobby Activities & Events Data
export const hobbyActivities = [
    {
        id: 1,
        title: "Vision AI DevKit Workshop",
        type: "Workshop",
        date: "2019",
        description: "Microsoft & Coding Angels Girls TECHgether workshop on Azure, AI, and Machine Learning.",
        image: "/images/activities/workshop_1.jpg",
        tags: ["Azure", "AI", "Machine Learning"],
    },
    {
        id: 2,
        title: "Open HCI Workshop",
        type: "Workshop",
        date: "2018",
        description: "Human-Computer Interaction workshop as technical team member, working with Arduino IDE and embedded systems.",
        image: "/images/activities/workshop_2.jpg",
        tags: ["Arduino IDE", "Embedded", "HCI", "UX Design"],
    },
    {
        id: 3,
        title: "CYBERSEC 2023 臺灣資安大會",
        type: "Conference",
        date: "2023",
        description: "Represented as exhibitor at Taiwan's premier cybersecurity conference.",
        image: "/images/activities/conference_1.jpg",
        tags: ["Cybersecurity", "Conference"],
    },
];

// Volunteer Service Data
export const volunteerService = [
    {
        id: 1,
        organization: "Local Community Center",
        role: "Teaching Assistant",
        period: "2023 - Present",
        description: "Helping elderly learn basic computer and smartphone skills, including social media and video calls with family.",
        image: "/images/volunteer/volunteer_1.jpg",
    },
    {
        id: 2,
        organization: "Animal Shelter",
        role: "Weekend Volunteer",
        period: "2022 - 2023",
        description: "Caring for shelter animals, assisting with adoption events, and helping with social media content.",
        image: "/images/volunteer/volunteer_2.jpg",
    },
    {
        id: 3,
        organization: "Children's Coding Workshop",
        role: "Instructor",
        period: "2024",
        description: "Teaching programming basics to elementary school students using Scratch and fun coding games.",
        image: "/images/volunteer/volunteer_3.jpg",
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
            instagram: "https://instagram.com/holly_world",
            facebook: "https://facebook.com/hollyworld",
        },
    },
    {
        id: 2,
        name: "Bonbunny",
        type: "Character Brand",
        role: "Founder",
        description: "Original character brand featuring cute bunny mascot with merchandise and digital content.",
        url: "#",
        logo: "/images/brands/bonbunny.jpg",
        status: "Growing",
        social: {
            instagram: "https://instagram.com/bonbunny",
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
        social: {
            instagram: "https://instagram.com/muse_classic",
            facebook: "https://facebook.com/museclassic",
        },
    },
    {
        id: 4,
        name: "蓮花生 Lotus Peanut Candy",
        type: "Food Brand",
        role: "Founder",
        description: "Traditional Taiwanese peanut candy brand with modern packaging and online presence.",
        url: "https://lotus-peanut.com",
        logo: "/images/brands/lotus_peanut.jpg",
        status: "Active",
        social: {
            facebook: "https://facebook.com/lotuspeanut",
        },
    },
    {
        id: 5,
        name: "Tech Content Creator",
        type: "Media / Blog",
        role: "Creator",
        description: "Sharing coding tutorials, tech insights, and career tips through blog posts and social media.",
        url: "#",
        logo: "/images/brands/tech_blog.jpg",
        status: "Growing",
        social: {},
    },
];
