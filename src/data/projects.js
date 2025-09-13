export const projects = [
  {
    title: "E-Commerce Website",
    description: "A e-commerce website made for performaing React practicals. ",
    type: "Practicals",
    domain: "Frontend",
    technologies: ["React", "Tailwind", "Vite"],
    link: "https://practicals-woad.vercel.app/"
  },
  {
    title: "StreakIn",
    description: "A sleek, minimal habit tracker.",
    type: "Personal",
    domain: "Frontend",
    technologies: ["React", "Tailwind", "Vite"],
    // link: ""
  },
  {
    title: ".calc",
    description: "A clean, minimalistic calculator website.",
    type: "Personal",
    domain: "Frontend",
    technologies: ["React", "Tailwind", "Vite"],
    // link: ""
  },
  {
    title: "Bolt Marketplace",
    description: "Built during the Bolt.new Hackathon.",
    type: "Hackathon",
    domain: "Frontend",
    technologies: ["React", "Tailwind", "Vite"],
    // link: ""
  }
];

// export individual project categories if needed
export const personalProjects = projects.filter(p => p.type === "Personal");
export const courseProjects = projects.filter(p => p.type === "Course");

// export project types and domains for easy access
export const projectTypes = [...new Set(projects.map(p => p.type))];
export const projectDomains = [...new Set(projects.map(p => p.domain))];
