const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  // {
  //   name: "Experience",
  //   link: "#experience",
  // },
  {
    name: "Skills",
    link: "#skills",
  },
//   {
//     name: "Testimonials",
//     link: "#testimonials",
//   },
];



const counterItems = [
  // { value: 1, suffix: "+", label: "Years of Experience" },
  // { value: 1, suffix: "+", label: "Satisfied Clients" },
  { value: 3, suffix: "+", label: "Completed Projects" },
  // { value: 0, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  
];

const abilities = [
  {
    imgPath: "/images/Frontend_Backend.webp",
    title: "End-to-End Development",
    desc: "Building seamless solutions across frontend and backend to deliver complete, scalable applications.",
  },
  {
    imgPath: "/images/Client_Centered.webp",
    title: "Client-Centered Collaboration",
    desc: "Working closely with clients to understand needs, provide clarity, and ensure satisfaction at every stage.",
  },
  {
    imgPath: "/images/Efficient_delivery.webp",
    title: "Efficient & Scalable Delivery",
    desc: "Delivering projects on time with optimized performance, scalability, and maintainable code.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
   {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

// const expCards = [
//   {
//     review: "Abrham brought creativity and technical expertise to the team, significantly improving our full stack performance. His work has been invaluable in delivering faster experiences.",
//     imgPath: "/images/exp1.png",
//     logoPath: "/images/logo1.png",
//     title: "Full Stack Developer",
//     date: "May 19 - June 19",
//     responsibilities: [
//       "Developed and maintained user-facing features for the Hostinger website.",
//       "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
//       "Optimized web applications for maximum speed and scalability.",
//     ],
//   },
  
// ];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [];

const socialImgs = [
 
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/abrham-biresaw-4914a1321/"
  },
   {
    name: "GitHub",
    imgPath: "/images/github.png",
    url: "https://github.com/abrhambiresaw"
  }
];

export {
  abilities,
  logoIconsList,
  counterItems,
  // expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
