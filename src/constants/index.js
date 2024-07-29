import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";


export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Backend developer",
    company: "Infosys",
    description: `Completed internship at Infosys, gaining valuable experience and contributing effectively to projects. Excited to utilize acquired skills and expertise in upcoming opportunities.`,
    technologies: ["Nodejs", "Express", "mongoDB","Python"],
  },
  {
    year: "2023",
    role: "Full Stack Developer",
    company: "ACME",
    description: `During my internship at Acme, I actively contributed to web development projects, gaining hands-on experience and expanding my skill set`,
    technologies: ["HTML", "CSS", "JavaScript", "mySQL","php"],
  }
];

export const PROJECTS = [
  {
    title: "QuickSource",
    image: project1,
    description:
      "I created QuickSource , a platform where users can easily find the best educational content recommended by others. It saves time by showing popular and recent posts,so students don't have to search through Youtube or Google for the right learning materials.",
    technologies: ["Reactjs", "Nodejs", "Express", "MongoDB","Python", "Firebase"],
  },
  {
    title: "News Webpage",
    image: project2,
    description:
      "Presenting my newest project : a polished news website featuring seamless API integretion. Stay informed with curated headlines for an immersive reading experience. Explore the latest stories in real-time and stay ahead of the curve.",
    technologies: ["HTML", "CSS", "JavaScript"],
  }
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
