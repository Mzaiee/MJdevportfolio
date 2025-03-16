import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
  FaAws,
  FaJenkins,
  FaLinux,
} from "react-icons/fa6";

import { RiReactjsLine } from "react-icons/ri";
import { TbBorderRadius, TbBrandNextjs } from "react-icons/tb";
import { SiAnsible, SiGrafana, SiKubernetes, SiMongodb, SiPrometheus, SiTerraform } from "react-icons/si";
import { DiAws, DiDocker, DiJenkins, DiLinux, DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { TbBrandAzure } from "react-icons/tb";

import image1 from "../assets/project1.jpeg";
import image2 from "../assets/project2.jpeg";
import image3 from "../assets/project3.jpeg";
import image4 from "../assets/project4.jpeg";
import image5 from "../assets/project5.jpeg";
import image6 from "../assets/project6.jpeg";
import image7 from "../assets/project7.jpeg";
import image8 from "../assets/project8.jpeg";

import user1 from "../assets/profile-pictures/monti.jpg";
import user2 from "../assets/profile-pictures/nikhil.jpg";
import user3 from "../assets/profile-pictures/minal.jpg";
import user4 from "../assets/profile-pictures/meet.jpg";

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Awards", href: "#award" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Monish Jodha",
  info: "Cloud Developer with a passion for Full-Stack and DevOps.",
};

export const ABOUT = {
  text1:
    "Crafting innovative, user-friendly websites and applications with precision and creativity.",
  text2:
    "Hello! I'm Monish Jodha, a Cloud Developer and Full-Stack enthusiast. I am passionate about building seamless digital experiences and optimizing systems for peak performance. From web development to cloud infrastructure, my expertise lies in bridging functionality and aesthetics. Beyond technology, I love playing football, exploring new cultures, and immersing myself in mangas. I'm always on the lookout for the latest tech trends and enjoy delivering excellence in every endeavor I take on.",
};

export const PROJECTS = [
  {
    title: "Screaming Hawk",
    subtitle:
      "A full-stack e-code ,ultiroom platform built with React, Node.js, and MongoDB.",
    image: image1,
  },
  {
    title: "Resume Builder",
    subtitle:
      "Create Responsive Modern UI-based Resume with just single hit and with minimal efforts",
    image: image2,
  },
  {
    title: "Optima genes",
    subtitle:
      "An innovative project crafted for the Smart India Hackathon competition, blending AI and cloud technologies.",
    image: image3,
  },
  {
    title: "Sellora",
    subtitle:
      "A sleek portfolio website designed with HTML, CSS, and JavaScript to showcase my work.",
    image: image4,
  },
  {
    title: "Cloud Resource Dashboard",
    subtitle:
      "A cloud infrastructure monitoring tool developed using Python and Flask.",
    image: image5,
  },
  {
    title: "Fitness Tracker",
    subtitle: "A fitness tracking app created using Flutter and Firebase.",
    image: image6,
  },
  {
    title: "DevOps Automation Tool",
    subtitle: "An automation tool for CI/CD pipelines using Jenkins and Docker.",
    image: image7,
  },
  {
    title: "Recipe Finder",
    subtitle:
      "A recipe finder application developed with Angular and Node.js.",
    image: image8,
  },
];

export const SKILLS = [
  {
    icon: <FaLinux className="text-4xl lg:text-6xl text-white-700" />,
    name: "Linux",
    experience: "1+ year",
  },
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React",
    experience: "2+ years",
  },

  {
    icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },
  {
    icon: <DiRedis className="text-4xl lg:text-6xl text-red-600" />,
    name: "Redis",
    experience: "1+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <SiMysql className="text-4xl lg:text-6xl text-sky-700" />,
    name: "MySQL",
    experience: "2+ year",
  },
  {
    icon: <FaGithub className="text-4xl lg:text-6xl text-white-700" />,
    name: "Git & Github",
    experience: "1+ year",
  },
  {
    icon: <FaAws className="text-4xl lg:text-6xl text-yellow-700" />,
    name: "Aws",
    experience: "1+ year",
  },
  {
    icon: <SiTerraform className="text-4xl lg:text-6xl text-sky-700" />,
    name: "Terraform",
    experience: "1+ year",
  },
  {
    icon: <SiAnsible className="text-4xl lg:text-6xl text-white-700" />,
    name: "Ansible",
    experience: "1+ year",
  },
  {
    icon: <FaJenkins className="text-4xl lg:text-6xl text-white-700" />,
    name: "Jenkins",
    experience: "1+ year",
  },
  {
    icon: <SiKubernetes className="text-4xl lg:text-6xl text-sky-700" />,
    name: "Kubernetes",
    experience: "1+ year",
  },
  {
    icon: <DiDocker className="text-4xl lg:text-6xl text-sky-700" />,
    name: "Docker",
    experience: "1+ year",
  },
  {
    icon: <SiPrometheus className="text-4xl lg:text-6xl text-red-700" />,
    name: "Prometheus",
    experience: "1+ year",
  },{
    icon: <SiGrafana className="text-4xl lg:text-6xl text-yellow-700" />,
    name: "Grafana",
    experience: "1+ year",
  },


  
];

export const ACHIEVEMENT = {
  title: "Smart India Hackathon",
  award: "College Level Winner - 2024",
  description:
    "Successfully cleared the college-level hackathon for the prestigious Smart India Hackathon. This recognition highlights problem-solving skills and innovation in technology-driven solutions.",
};

export const TESTIMONIALS = [
  {
    name: "Monti Jha",
    title: "SDE, Coozmo Pvt Ltd",
    quote:
      "Monish's ability to deliver high-quality work under tight deadlines is remarkable. His technical expertise and problem-solving skills are invaluable assets to any team.",
    image: user1,
  },
  {
    name: "Nikhil ",
    title: "SDE, SpanIdea Pvt Ltd",
    quote:
      "Monish's dedication and technical acumen have consistently exceeded expectations. His innovative approach has greatly contributed to our projects' success.",
    image: user2,
  },
  {
    name: "Minal Sharma",
    title: "Mentor, University",
    quote:
      "Monish has an exceptional ability to grasp new technologies and apply them effectively. His commitment to excellence is evident in every project he undertakes.",
    image: user3,
  },
  {
    name: "Meet Agarwal",
    title: "3D Developer, I-InnovateHub",
    quote:
      "Monish's professionalism and technical skills make him stand out as a developer. His contributions have been invaluable to our team.",
    image: user4,
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/monish.jodha",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://discord.com/monish.jodha",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/m_zaiey/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/iammonishjodha?t=djkWQajxP9ssDs1WGzxrBA&s=09&mx=2",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/MONISH-JODHA",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/monishj/"
    ,
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
