import xenoImage from "../assets/projects/xeno.png";
import tsbannerImage from "../assets/projects/ts-banner.png";
import cocktailmakerImage from "../assets/projects/cocktailmaker.png";
import rfidImage from "../assets/projects/rfid-station.png";
import slotImage from "../assets/projects/slot-machine.png";
import designsImage from "../assets/projects/designs.png";
import portfoloImage from "../assets/projects/my-portfolio.png";

export const projects = [
  {
    name: "Project X.E.N.O.",
    type: "code",
    category: ["Gaming", "Software"],
    description:
      "A Lua-scripted tool featuring a dynamic entity that follows players and interacts with the environment, showcasing modular design and gameplay integration.",
    image: xenoImage,
    preview: "/projects/xeno-preview.png",
    link: "/project/xeno",
    slug: "xeno",
    color: "rgba(75, 54, 55, 0.8)",
    lightColor: { r: 198, g: 119, b: 72 },
    client: "Personal Project",
    openSource: "https://github.com/dennisabrams/xeno",
    sections: [
      {
        title: "Introduction",
        icon: "/icons/pen.svg",
        contentPath: "projects/xeno/intro.mdx",
      },
      {
        title: "Technologies",
        icon: "/icons/tech.svg",
        contentPath: "projects/xeno/tech-details.mdx",
      },
      {
        title: "Development Process",
        icon: "/icons/wrench.svg",
        contentPath: "projects/xeno/process.mdx",
      },
      {
        title: "Challenges",
        icon: "/icons/barrier.svg",
        contentPath: "projects/xeno/challenges.mdx",
      },
      {
        title: "Outcome",
        icon: "/icons/project-ending.svg",
        contentPath: "projects/xeno/outcome.mdx",
      },
    ],
  },
  {
    name: "TeamSpeak Banner",
    type: "code",
    category: ["Web"],
    description:
      "A PHP-powered banner for TeamSpeak 3 servers, offering dynamic server and client details with full customization and simple design integration.",
    image: tsbannerImage,
    preview: "/projects/ts-banner-preview.png",
    link: "/project/teamspeak-banner",
    slug: "teamspeak-banner",
    color: "rgba(64,93,255, 0.3)",
    lightColor: { r: 24, g: 60, b: 235 },
    client: "Personal Project",
    openSource: "https://github.com/dennisabrams/teamspeak-banner",
    sections: [
      {
        title: "Introduction",
        icon: "/icons/pen.svg",
        contentPath: "projects/teamspeak-banner/intro.mdx",
      },
      {
        title: "Technologies",
        icon: "/icons/tech.svg",
        contentPath: "projects/teamspeak-banner/tech-details.mdx",
      },
    ],
  },
  {
    name: "Cocktailmaker MK6",
    type: "code",
    category: ["Web", "Hardware", "Software"],
    description:
      "A cocktail machine featuring pump control, weight precision, and a touchscreen interface with prebuilt and user-defined recipes, powered by PHP, C++, Python, and an SQL-backed system.",
    image: cocktailmakerImage,
    preview: "/projects/cocktailmaker-preview.png",
    link: "/project/cocktailmaker-mk6",
    slug: "cocktailmaker-mk6",
    color: "rgba(184,124,123, 0.4)",
    lightColor: { r: 112, g: 85, b: 241 },
    client: "Private Client",
    openSource: "",
    sections: [
      {
        title: "Coming soon",
        icon: "/icons/wrench.svg",
        contentPath: "projects/cocktailmaker-mk6/soon.mdx",
      },
    ],
  },
  {
    name: "RFID Station",
    type: "code",
    category: ["Web", "Hardware"],
    description:
      "A networked RFID self-service system displaying account balances and enabling payments via a PHP-driven web interface, with multiple connected units.",
    image: rfidImage,
    preview: "/projects/rfid-station-preview.png",
    link: "/project/rfid-station",
    slug: "rfid-station",
    color: "rgba(0,105,232, 0.4)",
    lightColor: { r: 0, g: 105, b: 232 },
    client: "School Project",
    openSource: "",
    sections: [
      {
        title: "Coming soon",
        icon: "/icons/wrench.svg",
        contentPath: "projects/rfid-station/soon.mdx",
      },
    ],
  },
  {
    name: "SlotMachine BBS|ME",
    type: "code",
    category: ["Web", "Gaming","Hardware", "Software"],
    description:
      "A Python-powered slot machine with reactive lighting, physical controls, and a web-based login system for player stats, integrating PHP, C++, and database management.",
    image: slotImage,
    preview: "/projects/slot-machine-preview.png",
    link: "/project/slotmachine",
    slug: "slotmachine",
    color: "rgba(182,142,213, 0.3)",
    lightColor: { r: 112, g: 85, b: 241 },
    client: "School Project",
    openSource: "",
    sections: [
      {
        title: "Coming soon",
        icon: "/icons/wrench.svg",
        contentPath: "projects/slotmachine/soon.mdx",
      },
    ],
  },
  {
    name: "Animation Showcase",
    type: "design",
    category: ["Design"],
    description:
      "A collection of looped animations that bring static visuals to life with After Effects, using puppet tools, depth effects, and blur techniques for motion design.",
    image: designsImage,
    preview: "/projects/designs-preview.png",
    link: "/project/animation-showcase",
    slug: "animation-showcase",
    color: "rgba(128,18,19, 0.4)",
    lightColor: { r: 128, g: 18, b: 19 },
    client: "Personal Project",
    openSource: "",
    sections: [
      {
        title: "Coming soon",
        icon: "/icons/wrench.svg",
        contentPath: "projects/animation-showcase/soon.mdx",
      },
    ],
  },
  {
    name: "My Portfolio",
    type: "code",
    category: ["Web"],
    description:
      "A portfolio website built from scratch with the Astro framework, addressing modern web development challenges with view transitions, animations, and a project showcase.",
    image: portfoloImage,
    preview: "/projects/my-portfolio-preview.png",
    link: "/project/portfolio",
    slug: "portfolio",
    color: "rgba(255,255,255, 0.2)",
    lightColor: { r: 100, g: 100, b: 100 },
    client: "Personal Project",
    openSource: "https://github.com/dennisabrams/dennis-abrams.com",
    sections: [
      {
        title: "Coming soon",
        icon: "/icons/wrench.svg",
        contentPath: "projects/portfolio/soon.mdx",
      },
    ],
  },
];
