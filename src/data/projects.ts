export interface Project {
  slug: string;
  title: string;
  description: string;
  type: string;
  playbackId: string;
}

export const projects: Project[] = [
  {
    slug: "Cord",
    title: "Cord: Conceptual brand film",
    description:
      "A conceptual brand film for a sustainable clothing brand, exploring themes of nature, growth, and transformation through poetic visuals and storytelling.",
    type: "Conceptual Brand Film",
    playbackId: "xAIeg5qe1k4z3A6bKmQ2oo3inamQv1IwYgMm00JVVQbE",
  },
  {
    slug: "Aashirvaad Atta",
    title: "Aashirvaad Atta: Product advertisement film",
    description:
      "A product advertisement film for Aashirvaad Atta, showcasing the product's quality and versatility through vibrant visuals, dynamic camera work, and a compelling narrative that resonates with the target audience.",
    type: "Product Advertisement Film",
    playbackId: "NZc7bFYTfzQBdjcmlldI9nEmfosHUGZDsg7R48BCvEo",
  },
  {
    slug: "Kia In Himalayas",
    title: "Kia in Himalayas: CGI advertisement film",
    description:
      "A CGI advertisement film for Kia, set in the majestic Himalayas, highlighting the vehicle's performance, durability, and design through breathtaking visuals, dynamic camera angles, and a narrative that emphasizes adventure and exploration.",
    type: "CGI Advertisement Film",
    playbackId: "l5Jei2fpnkXJWTcL8ypUc10201vgDLZG00p01BHfe3IGikg",
  },
];