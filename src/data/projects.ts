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
      "A conceptual brand film exploring sustainability and the intricate threads that connect us to nature through poetic visuals.",
    type: "Conceptual Brand Film",
    playbackId: "xAIeg5qe1k4z3A6bKmQ2oo3inamQv1IwYgMm00JVVQbE",
    featured: true,
  },
  {
    slug: "aashirvaad-atta",
    title: "Aashirvaad Atta",
    description:
      "Bringing the warmth of home and the quality of tradition to life in this premium product advertisement.",
    type: "Product Advertisement",
    playbackId: "NZc7bFYTfzQBdjcmlldI9nEmfosHUGZDsg7R48BCvEo",
    featured: true,
  },
  {
    slug: "kia-himalayas",
    title: "Kia in Himalayas",
    description:
      "A high-octane CGI advertisement film featuring Kia's performance across the rugged and majestic Himalayan terrain.",
    type: "CGI Advertisement",
    playbackId: "l5Jei2fpnkXJWTcL8ypUc10201vgDLZG00p01BHfe3IGikg",
    featured: true,
  },
  {
    slug: "tata-sierra",
    title: "Tata Sierra",
    description:
      "A cinematic brand film for the legendary Tata Sierra, capturing its spirit of adventure and timeless design.",
    type: "Brand Film",
    playbackId: "Hf00KqtzPVmF7hYxvScGZ00orMFM28YTQB01L71LW3aAV4",
  },
  {
    slug: "royal-enfield",
    title: "Royal Enfield",
    description:
      "Exploring the raw power and heritage of Royal Enfield through dynamic visuals and soulful storytelling.",
    type: "Brand Film",
    playbackId: "eocxI16G1GZhTHHUetrbsQ00ywJw01Gpx9wcv02NcsYipA",
  },
  {
    slug: "tanishq-jewellery",
    title: "Tanishq Jewellery",
    description:
      "A conceptual film showcasing the elegance and craftsmanship of Tanishq's exquisite jewellery collections.",
    type: "Conceptual Film",
    playbackId: "5EyRKtnKOnVwW5CfuDYs00IaL02FXkGfR0294jFdp578KE",
  },
  {
    slug: "dogs-years",
    title: "Dog's Years",
    description:
      "An emotional short film exploring the deep bond between humans and their canine companions.",
    type: "Short Film",
    playbackId: "7u9u4jjg00wlAUZm1H8cHhMgEZgI8vrJ5zfM5Z02VP0102s",
  },
  {
    slug: "vedica-water",
    title: "Vedica Spring Water",
    description:
      "Capturing the purity and serenity of the Himalayas in this product film for Vedica Himalayan Spring Water.",
    type: "Product Film",
    playbackId: "5Wtwu02L00K6GBKdwbyHaQmHTKoatewmlO24rcGbxJDcY",
  },
  {
    slug: "film-bspoke",
    title: "Film B'spoke",
    description:
      "A bespoke visual journey tailored to showcase unique perspectives and artistic expression through cinematic lenses.",
    type: "Brand Film",
    playbackId: "YSXAPz8MwiI3b97NOHJw4otR2clHpmLAzk702SahB1WE",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const gridProjects = projects;