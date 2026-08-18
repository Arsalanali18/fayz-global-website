import Sunnah from "../../assets/sunnah-health-diet.jpg";
import Medicine from "../../assets/medicine.jpeg";
import Hijama from "../../assets/hijama-cupping.jpg";
import Advanced from "../../assets/advanced-hijama.webp";
import Client from "../../assets/client-objection.jpeg";
import Prosperity from "../../assets/halal-prosperity.png";
import EntrepreneurAccelerator from "../../assets/Entrepreneur.jpeg";
import Ruqyah from "../../assets/Ruqyah.jpeg";

export interface Course {
  id: string;
  title: string;
  description: string[];
  image: string;
  duration: string;
  students: number;
  price: string;
  level: string;
  overview: string[];
}

export const coursesData: Course[] = [
  {
    id: "sunnah-health",
    title: "Sunnah Health & Diet",
    description: [
      "Based on the lifestyle and habits of Prophet Muhammad ﷺ",
      " Eating, drinking, sleeping, hygiene, and daily routines according to Sunnah ",
      " Practical guidance for healthy living, prevention of illness, and balance",
      " Easy to follow and applicable in everyday life ",
    ],
    image: Sunnah,
    duration: "4 Weeks",
    students: 250,
    price: "₹12,000 (Including GST)",
    level: "Beginner",
    overview: [
      "This course explores dietary principles rooted in the Sunnah and Prophetic lifestyle.",
      "Students will learn about moderation, mindful eating, fasting structure, and natural balance.",
      "It integrates traditional wisdom with modern nutritional understanding.",
      "The program aims to help learners align physical health with spiritual discipline.",
    ],
  },

  {
    id: "prophetic-medicine",
    title: "Prophetic Medicine (Tibb-e-Nabawi) Level 1 & Level 2",
    description: [
      "Foundations of Islamic & Prophetic healing methods and understanding body temperaments (Mizaj).",
      " Basic diagnosis and choosing the right remedy for different body types",
      " Natural remedies mentioned in Islamic tradition ",
      " How medicine evolved and its application in holistic healing ",
    ],
    image: Medicine,
    duration: "6 Weeks",
    students: 180,
    price: "₹24,000 (Level 1 & Level 2 combined)",
    level: "Intermediate",
    overview: [
      "This program introduces the foundational principles of Tibb-e-Nabawi.",
      "Students will study body temperaments (Mizaj) and classical healing methods.",
      "The course explains holistic diagnosis approaches rooted in Islamic tradition.",
      "It prepares learners to understand Prophetic medicine responsibly and professionally.",
    ],
  },

  {
    id: "hijama-cupping",
    title: "Hijama Cupping Therapy - Basic Course",
    description: [
      "Authentic Hijama according to Sunnah (not Chinese cupping). Dry, wet, massage & facial cupping.",
      " Safety measures, hygiene, and correct cupping points ",
      " Benefits, indications, and after-care ",
      " Ruqyah Course: Healing through the Qur’an & authentic duas ",
    ],
    image: Hijama,
    duration: "3 Months",
    students: 120,
    price: "₹50,000 (Including GST)",
    level: "Beginner",
    overview: [
      "This course teaches authentic Hijama practices based on Sunnah.",
      "Students will learn dry, wet, massage, and facial cupping techniques.",
      "Emphasis is placed on safety, hygiene, and ethical practice.",
      "By the end, learners will be able to perform basic Hijama confidently.",
    ],
  },

  {
    id: "advanced-hijama",
    title: "Advanced Hijama Therapy (All-Inclusive Program)",
    description: [
      "A complete professional & business-ready Hijama program including advanced techniques and structured modules.",
    ],
    image: Advanced,
    duration: "6 Months",
    students: 95,
    price: "₹94,400 (All Inclusive)",
    level: "Advanced",
    overview: [
      "This advanced program builds on foundational Hijama skills.",
      "It includes complex case handling, structured treatment planning, and advanced techniques.",
      "Business guidance is also provided for clinic setup and management.",
      "Designed for serious practitioners aiming for professional excellence.",
    ],
  },

  {
    id: "client-objection",
    title: "Client Objection Handling",
    description: [
      "Learn to confidently address client concerns with ethical and professional consultation skills.",
      "How to confidently address client concerns",
      "Ethical persuasion techniques without manipulation",
      "Perfect for practitioners seeking stronger client relationships",
    ],
    image: Client,
    duration: "2 Weeks",
    students: 140,
    price: "₹6,999",
    level: "Professional Skills",
    overview: [
      "This course focuses on communication and consultation mastery.",
      " Students learn to handle client doubts with clarity and professionalism.",
      " It teaches ethical persuasion without manipulation.",
      " Perfect for practitioners seeking stronger client relationships.",
    ],
  },

  {
    id: "halal-way",
    title: "Halal Way to Prosperity",
    description: [
      "Ethical (Halal) ways to grow your healing practice and build a sustainable career.",
      " Positioning yourself in the healing market with integrity",
      " Practical insights for building a sustainable healing career ",
    ],
    image: Prosperity,
    duration: "1 Month",
    students: 85,
    price: "₹6,999",
    level: "Business & Growth",
    overview: [
      "This course teaches halal income strategies for healers and practitioners.",
      "Students learn ethical marketing, client growth, and sustainability.",
      "Focus is placed on barakah-driven business practices.",
      "Designed to build long-term prosperity with integrity.",
    ],
  },
  {
    id: "hijama-entrepreneur-accelerator",
    title: "Hijama Entrepreneur Accelerator",
    description: [
      "A structured business roadmap for certified Hijama practitioners ready to build income with clarity",
      " Learn how to legally set up your Hijama center with proper documentation and compliance",
      " Smart pricing strategies to charge confidently and ethically",
      " Client attraction, branding, and ethical marketing methods",
      " Hygiene protocols, waste management, and professional standards",
      " Step-by-step system to grow, sustain, and scale your Hijama practice",
    ],
    image: EntrepreneurAccelerator,
    duration: "2 Weeks",
    students: 120,
    price: "₹12,000 (Including GST)",
    level: "Advanced",
    overview: [
      "This intensive accelerator is designed for certified Hijama practitioners who want to transition from certification to structured entrepreneurship.",
      "Participants will learn how to set up a compliant Hijama center, choose the right equipment, and maintain professional hygiene and waste standards.",
      "The course covers ethical pricing models, client acquisition strategies, and systems to ensure consistent profitability without undercharging.",
      "By the end of the program, students will walk away with a practical and sustainable roadmap to build, grow, and scale a successful Hijama practice.",
    ],
  },
  {
    id: "ruqyah-course",
    title: "Ruqyah Course – Healing Through Qur’an & Sunnah",
    description: [
      "Authentic Islamic guidance on dealing with Jinn, sihr (magic), and the evil eye",
      " Learn safe and correct self-ruqyah methods without talismans or shirk-based practices",
      " Daily protection routines based on Qur’an and Sunnah",
      " Clear understanding of common misconceptions surrounding ruqyah",
      " Practical spiritual strengthening through Tawheed-centered healing",
    ],
    image: Ruqyah,
    duration: "1 Month",
    students: 180,
    price: "₹6,999 (Including GST)",
    level: "Beginner",
    overview: [
      "This course provides authentic Islamic education on spiritual healing through the Qur’an and Sunnah, rooted firmly in Tawheed.",
      "Students will understand the reality of Jinn, sihr (magic), and the evil eye from an evidence-based Islamic perspective.",
      "The program teaches step-by-step self-ruqyah methods that can be practiced safely at home without innovations or prohibited elements.",
      "Participants will also receive downloadable notes and authentic ruqyah du’as to build daily protection, spiritual strength, and long-term clarity.",
    ],
  },
];
