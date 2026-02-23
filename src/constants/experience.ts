export type Experience = {
    company: string;
    designation: string;
    logo: string;
    description: string;
    startDate: string;
    endDate: string;
    location: string;
    stack: string[];
    imageClass?: string;
}

export const experience: Experience[] = [
  {
    company: "Google",
    designation: "Senior Frontend Engineer",
    logo: "/images/logos/google-logo.png",
    description: "Led the development of key features for Google Cloud Platform's web console while improving performance metrics by 35%.",
    startDate: "June 2020",
    endDate: "Present",
    location: "Mountain View, CA",
    stack: ["React", "TypeScript", "Redux", "GraphQL", "Jest", "Cypress"]
  },
  {
    company: "Microsoft",
    designation: "Software Engineer",
    logo: "/images/logos/microsoft-logo.png",
    description: "Worked on the Microsoft Teams web application, implementing real-time collaboration features and UI components.",
    startDate: "August 2018",
    endDate: "May 2020",
    location: "Redmond, WA",
    stack: ["React", "JavaScript", "Azure", "WebRTC", "Webpack", "SASS"]
  },
  {
    company: "Airbnb",
    designation: "Frontend Developer",
    logo: "/images/logos/airbnb-logo.png",
    description: "Developed and maintained core components of Airbnb's booking platform.",
    startDate: "January 2017",
    endDate: "July 2018",
    location: "San Francisco, CA",
    stack: ["React", "Redux", "Node.js", "Express", "MongoDB", "Styled Components"]
  },
  {
    company: "Shopify",
    designation: "Freelance Web Developer",
    logo: "/images/logos/shopify-logo.png",
    description: "Designed and developed custom Shopify themes for enterprise clients with optimized checkout flows.",
    startDate: "March 2019",
    endDate: "December 2019",
    imageClass: "dark:filter dark:invert",
    location: "Remote",
    stack: [ "JavaScript", "HTML5", "CSS3", "SCSS", "Shopify API"]
  },
  {
    company: "Adobe",
    designation: "Freelance Frontend Consultant",
    logo: "/images/logos/adobe-logo.png",
    description: "Consulted on the redesign of Adobe's Creative Cloud web application.",
    startDate: "September 2016",
    endDate: "November 2016",
    location: "Remote",
    stack: ["HTML5", "JavaScript", "CSS3"]
  }
  ];