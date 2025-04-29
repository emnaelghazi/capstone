import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About us",
  },
  {
    id: "work",
    title: "Our work",
  },
  {
    id: "contact",
    title: "Contact us",
  },
  {
    id: "login",
    title: "Register",
    link: "users-form.html",
  },

  {
    id: "Maps",
    title: "Dashboard",
    link: "http://127.0.0.1:8000/",
  },
];

const services = [
  {
    title: "Predict",
    icon: web,
  },
  {
    title: "Identify",
    icon: mobile,
  },
  {
    title: "Prepare",
    icon: backend,
  },
  {
    title: "Monitor",
    icon: creator,
  },
];

const experiences = [
  {
    title: "Predict",
    company_name: "MSE",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2024- Beyond",
    points: [
      "Resident thresholds continuously checked against relevant data sources. Configured to maximize situational awareness.",
    ],
  },
  {
    title: "Identify",
    company_name: "MSE",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2024- Beyond",
    points: [
      "Automated watchlists generated for monitored assets having met or exceeded defined limits. ",
    ],
  },
  {
    title: "Prepare",
    company_name: "MSE",
    icon: shopify,
    iconBg: "#383E56",
    date: "2024- Beyond",
    points: [
      "Real-time web interface to assess and develop an informed response.",
    ],
  },
  {
    title: "Monitor",
    company_name: "MSE",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2024- Beyond",
    points: [
      "Web and Mobile applications to manage and document field activities.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "We thought it was impossible to make a website as beautiful as our product, but we proved ourselves wrong.",
    name: "flen weld flen",
    designation: "developer",
    company: "GeoSmart",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Elaa does.",
    name: "flena bent flen",
    designation: "developer",
    company: "GeoSmart",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "After we optimized our website, our traffic increased by 50%. We can't thank us enough!",
    name: "aami flen",
    designation: " developer",
    company: "GeoSmart",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Access to Services Index",
    description:
      "Analyze access to critical services like healthcare, education, and clean water in low-income areas. Provide recommendations for improving infrastructure.",
    tags: [
      {
        name: "engineering",
        color: "white",
      },
      {
        name: "poverty",
        color: "white",
      },
      {
        name: "save_resources",
        color: "white",
      },
    ],
    image: carrent,
  },
  {
    name: "Disaster Impact Assessment",
    description:
      "Measure the impact of natural disasters on poverty levels and guide relief efforts to the most affected regions.",
    tags: [
      {
        name: "Monitoring",
        color: "white",
      },
      {
        name: "Environment",
        color: "white",
      },
      {
        name: "Catastrophe",
        color: "white",
      },
    ],
    image: jobit,
  },
  {
    name: "Agricultural Productivity Analysis",
    description:
      "Map areas with low agricultural productivity and propose solutions like better irrigation, training, or access to technology.",
    tags: [
      {
        name: "agriculture",
        color: "white",
      },
      {
        name: "training",
        color: "white",
      },
      {
        name: "technology",
        color: "white",
      },
    ],
    image: tripguide,
  },
];

export { services, experiences, testimonials, projects };
