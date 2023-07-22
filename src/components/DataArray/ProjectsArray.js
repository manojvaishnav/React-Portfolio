import NotesImage from "../../utills/Notes.PNG";
import ResumeBuilderImage from "../../utills/resume-builder.PNG";
import ChatGptCloneImage from "../../utills/chat-gpt-clone.PNG";
import GovindaExportImage from "../../utills/govinda-export.PNG";
import BlogImage from "../../utills/Blog.PNG";
import ReactPortfolio from "../../utills/ReactPortfolio.PNG";

const Projects = [
  {
    image: BlogImage,
    name: "Blog App",
    description:
      "The Notes App is an innovative project designed to revolutionize note-taking and organization. With advanced security measures, this application ensures the utmost protection for user data, including encrypted passwords. Built using a robust tech stack, including MongoDB, Express.js, React, and Node.js, the Notes App offers a seamless user experience.This feature-rich app allows users to create, update, and delete notes effortlessly, making it a powerful tool for productivity and organization. It seamlessly synchronizes across devices, enabling users to access their notes anytime, anywhere. Additionally, the app supports personalized profiles, allowing users to upload unique profile images securely stored in buffer form.",
    techStack: "React,Chakra-UI,NodeJs,ExpressJs,MongoDb",
    buttons: [
      {
        text: "Live Demo",
        href: "https://blog-app-l6kf.onrender.com/",
      },
      {
        text: "Github",
        href: "https://github.com/manojvaishnav/Blog-Application",
      },
    ],
  },
  {
    image: NotesImage,
    name: "Notes App",
    description:
      "The Notes App is an innovative project designed to revolutionize note-taking and organization. With advanced security measures, this application ensures the utmost protection for user data, including encrypted passwords. Built using a robust tech stack, including MongoDB, Express.js, React, and Node.js, the Notes App offers a seamless user experience.This feature-rich app allows users to create, update, and delete notes effortlessly, making it a powerful tool for productivity and organization. It seamlessly synchronizes across devices, enabling users to access their notes anytime, anywhere. Additionally, the app supports personalized profiles, allowing users to upload unique profile images securely stored in buffer form.",
    techStack: "React,Chakra-UI,NodeJs,ExpressJs,MongoDb",
    buttons: [
      {
        text: "Live Demo",
        href: "https://doubtful-stockings-yak.cyclic.app/",
      },
      {
        text: "Github",
        href: "https://github.com/manojvaishnav/Notes-App-MERN",
      },
    ],
  },
  {
    image: ReactPortfolio,
    name: "React Portfolio",
    description:
      "Discover my dynamic React portfolio showcasing an array of projects, educational achievements, diverse skillset, and contact information. Unveil my passion for creativity and technology in one place!",
    buttons: [
      {
        text: "Live Demo",
        href: "/",
      },
      {
        text: "Github",
        href: "https://github.com/manojvaishnav/React-Portfolio",
      },
    ],
  },
  {
    image: ResumeBuilderImage,
    name: "Resume Builder",
    description:
      "The Resume Builder website is developed using React, a powerful JavaScript library for building interactive user interfaces. React's efficiency and flexibility make it an ideal choice for creating a seamless and responsive experience for users.With this innovative project, users can effortlessly create professional resumes that stand out from the crowd. It empowers individuals to present their skills and experiences effectively, increasing their chances of securing their desired job opportunities",
    techStack: "React",
    buttons: [
      {
        text: "Live Demo",
        href: "https://easy-resume-generator.netlify.app/",
      },
      {
        text: "Github",
        href: "https://github.com/manojvaishnav/Resume-Builder",
      },
    ],
  },
  {
    image: ChatGptCloneImage,
    name: "Chat Gpt Clone",
    description:
      "Its OpenAI-backed features include a Summary Writer for concise document summaries, a Paragraph Writer for captivating intros, and a Chatbot for engaging conversations. Unlock coding potential with the JS Converter, generating JavaScript code based on text commands. Unleash imagination with the Sci-Fi Image Generator, transforming descriptions into stunning futuristic visuals. Dive into this remarkable project and witness the limitless possibilities of AI",
    techStack: "React,Material-UI,NodeJs,ExpressJs,MongoDb",
    buttons: [
      {
        text: "Github",
        href: "https://github.com/manojvaishnav/Chat-Gpt-Clone",
      },
    ],
  },
  {
    image: GovindaExportImage,
    name: "Govinda Export",
    description: "Its a business portfolio website that i made for client",
    techStack: "HTML,CSS,Java Script,Php",
    buttons: [
      {
        text: "Live Demo",
        href: "https://govindaexport.com/",
      },
    ],
  },
];

export default Projects;
