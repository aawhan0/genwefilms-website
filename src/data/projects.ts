export interface Project {
  slug: string;
  title: string;
  description: string;
  type: string;
  playbackId: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "cord",
    title: "Cord",
    description:
      "A conceptual brand film exploring sustainability through poetic visuals, crafted using AI-driven storytelling.",
    type: "Conceptual Brand Film",
    playbackId: "xAIeg5qe1k4z3A6bKmQ2oo3inamQv1IwYgMm00JVVQbE",
    featured: true,
  },
  {
    slug: "aashirvaad-atta",
    title: "Aashirvaad Atta",
    description:
      "A premium product film blending emotion and realism, powered by AI to bring everyday moments to life.",
    type: "Product Advertisement",
    playbackId: "NZc7bFYTfzQBdjcmlldI9nEmfosHUGZDsg7R48BCvEo",
    featured: true,
  },
  {
    slug: "kia-himalayas",
    title: "Kia in Himalayas",
    description:
      "A high-impact CGI-driven film showcasing performance and scale, created using AI-enhanced production workflows.",
    type: "CGI Advertisement",
    playbackId: "l5Jei2fpnkXJWTcL8ypUc10201vgDLZG00p01BHfe3IGikg",
    featured: true,
  },
  {
    slug: "tata-sierra",
    title: "Tata Sierra",
    description:
      "A cinematic revival of an iconic SUV, blending nostalgia with modern storytelling powered by AI.",
    type: "Brand Film",
    playbackId: "Hf00KqtzPVmF7hYxvScGZ00orMFM28YTQB01L71LW3aAV4",
  },
  {
    slug: "royal-enfield",
    title: "Royal Enfield",
    description:
      "A raw and immersive brand film capturing heritage and power through AI-enhanced cinematic visuals.",
    type: "Brand Film",
    playbackId: "eocxI16G1GZhTHHUetrbsQ00ywJw01Gpx9wcv02NcsYipA",
  },
  {
    slug: "tanishq-jewellery",
    title: "Tanishq Jewellery",
    description:
      "An elegant concept film highlighting craftsmanship and luxury, brought to life with AI-driven precision.",
    type: "Conceptual Film",
    playbackId: "5EyRKtnKOnVwW5CfuDYs00IaL02FXkGfR0294jFdp578KE",
  },
  {
    slug: "dogs-years",
    title: "Dog's Years",
    description:
      "An emotional short film exploring human-animal bonds, enhanced with AI-led visual storytelling.",
    type: "Short Film",
    playbackId: "7u9u4jjg00wlAUZm1H8cHhMgEZgI8vrJ5zfM5Z02VP0102s",
  },
  {
    slug: "vedica-water",
    title: "Vedica Spring Water",
    description:
      "A serene product film capturing purity and nature, crafted using AI-powered cinematic workflows.",
    type: "Product Film",
    playbackId: "5Wtwu02L00K6GBKdwbyHaQmHTKoatewmlO24rcGbxJDcY",
  },
  {
    slug: "film-bspoke",
    title: "Film B'spoke",
    description:
      "A bespoke cinematic experience tailored for unique brand narratives, built with AI-driven production.",
    type: "Brand Film",
    playbackId: "YSXAPz8MwiI3b97NOHJw4otR2clHpmLAzk702SahB1WE",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const gridProjects = projects;