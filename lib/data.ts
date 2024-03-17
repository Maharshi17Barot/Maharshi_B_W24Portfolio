import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import fashionApp from "@/public/fashion app.png";
import maskDetect from "@/public/maskdetection.png";
import stockPredict from "@/public/stockPredict.jpg";
import textToSpeech from "@/public/tts.png";
import personalAi from "@/public/personalAi.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Diploma - Government Polytechninc",
    location: "Ahemdabad, Gujrat, India",
    description:
      "I graduated in 2019 from Government Polytechnic with a diploma in computer engineering. I learned C, C++, Java, Python, HTML, CSS, JavaScript, and SQL. I also learned about data structures and algorithms.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Advance Diploma - George Brown College",
    location: "Toronto, Canada",
    description:
      "I am currently studying at George Brown College. I am learning about web development, databases, and software development. I am also learning about React, Node.js, Express, MongoDB, and SQL. I am also learning about TypeScript, GraphQL, and Apollo. I am also learning about Python. I am also learning about machine learning and data science",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
] as const;

interface ProjectData {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  gitLink?: string; // Ensure gitLink is included in the interface
}

export const projectsData = [
  {
    title: "BLO Fashion",
    description:
      "BLO stands at the forefront, committed to providing a cutting-edge online shopping experience that seamlessly blends technology and style. This project revolves around the ambitious goal of transforming BLO into a pioneer in the world of fashion e-commerce by introducing innovative features such as chatbots and virtual reality (VR) clothing experiences",
    tags: ["Python", "React", "MongoDB", "Express", "Node.js"],
    imageUrl: fashionApp,
    gitLink: "https://github.com/Vedant-2116/BLO",
  },
  {
    title: "Mask Detection",
    description:
      "Utilizing Python, I developed a robust mask detection program leveraging image processing techniques. With real-time analysis, it accurately identifies individuals wearing masks, contributing to public health initiatives amidst the pandemic.",
    tags: ["Python", "OpenCV", "TensorFlow", "Keras", "Machine Learning"],
    imageUrl: maskDetect,
    gitLink: "https://github.com/Maharshi17Barot/Face-Mask-Detection",
  },
  {
    title: "Stock Prediction",
    description:
      "Employing Python's data analysis libraries, I engineered a sophisticated stock prediction program. By leveraging machine learning algorithms and historical market data, it forecasts future stock prices with precision, empowering investors to make informed decisions in volatile markets.",
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Machine Learning"],
    imageUrl: stockPredict,
    gitLink: "https://github.com/Maharshi17Barot/stock-prediction",
  },
  {
    title: "Text to Speech",
    description:
      "I created a versatile text-to-speech program using Python, integrating advanced natural language processing algorithms. It converts text input into lifelike speech output, offering accessibility and convenience across various applications, from assistive technologies to interactive virtual assistants.",
    tags: [
      "Python",
      "NLTK",
      "Pyttsx3",
      "SpeechSynthesis",
      "Flite(Festival Lite)",
      "Natural Language Processing",
    ],
    imageUrl: textToSpeech,
    gitLink: "https://github.com/Maharshi17Barot/text-to-speech",
  },
  {
    title: "Personal A.I.",
    description:
      "I developed a personalized AI assistant in Python, integrating speech recognition and natural language processing for seamless interaction. From managing tasks to providing information, it learns and adapts to user preferences, enhancing productivity and convenience.",
    tags: [
      "Python",
      "NLTK",
      "Pyttsx3",
      "SpeechRecognition",
      "Natural Language Processing",
    ],
    imageUrl: personalAi,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Python",
  "GraphQL",
  "Apollo",
  "Express",
  "Rust",
  "Java",
  "C/C++",
  "C#",
] as const;
