import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Jonathan Emmanuel",
  author: "Jonathan Emmanuel",
  description:
    "Computer Science graduate from Bina Nusantara University .",
  lang: "en",
  siteLogo: "/sample-profpic.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Github", href: "https://github.com/jo-subrata" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/jonathan-emmanuel-02b51823b/" },
    { text: "Instagram", href: "https://instagram.com/jo.subrata" },
  ],
  // socialImage: "/zen-og.png",
  socialImage: "/sample-profpic.jpg",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Jonathan Emmanuel",
    specialty: "Computer Science Graduate",
    summary:
      "A passionate graduate student from Bina Nusantara University, based in Jakarta, Indonesia.",
    email: "jonathan.subrata@gmail.com",
  },
  experience: [
    {
      company: "Karyamas Plantation",
      position: "Web Developer Intern",
      startDate: "Feb 2025",
      endDate: "Feb 2026",
      summary: [
        "In purpose of improving ease of use, I redesigned and reengineered an existing inventory/asset management system (ranging from the regional users in between plantations in Kalimantan till the IT support department at the head office) in monitoring assets (e.g. PCs, printers, etc.) under the company's ownership.",
      ],
    },
  ],
  projects: [
    {
      name: "CHocs",
      summary: "A lab project as of our introduction to web design and fundamentals of UI/UX in 'Human & Computer Interaction'.",
      // linkPreview: "/",
      linkSource: "https://github.com/jo-subrata/portfolio-repo/tree/main/Projects/CHocs",  
      image: "/sample-profpic.jpg",
    },
    {
      name: "Kpop-Ztation",
      summary: "An MVC-patterned website lab project based off C# and ASP.Net for the subject 'Pattern Software Design'",
      // linkPreview: "/",
      linkSource: "https://github.com/jo-subrata/portfolio-repo/tree/main/Projects/KpopZtation",  
      image: "/sample-profpic.jpg",
    },
    {
      name: "Password Manager",
      summary: "A simple Java application that covers fundamentals in Object-Oriented Programming.",
      // linkPreview: "/",
      linkSource: "https://github.com/jo-subrata/portfolio-repo/tree/main/Projects/PasswordManager",  
      image: "/sample-profpic.jpg",
    },
    
    
  ],
  about: {
    description: `
      Greetings, my name is Jonathan Emmanuel. I am a Computer Science fresh graduate from Bina Nusantara University, driven by a deep fascination with technology and a strong desire to make a positive impact on the world through innovative solutions.
    `,  
    image: "/sample-profpic.jpg",
  },
};

// #5755ff
