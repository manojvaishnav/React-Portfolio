import NotesImage from "../../utills/Notes.PNG";
import ResumeBuilderImage from "../../utills/resume-builder.PNG";
import ChatGptCloneImage from "../../utills/chat-gpt-clone.PNG";
import GovindaExportImage from "../../utills/govinda-export.PNG";
import BlogImage from "../../utills/Blog.PNG";
import ReactPortfolio from "../../utills/ReactPortfolio.PNG";
import ProjectMgmt from '../../utills/Project Management.png'
import Chitchat from '../../utills/Chitchat.png'
import Chatbot from '../../utills/chatbot.gif'

const Projects = [
  {
    image: Chatbot,
    name: "Chatbot Creator",
    description:
      "As the creator of this project, I'm excited to present a user-friendly platform for effortlessly building custom chatbots. Leveraging a robust MERN stack architecture, ChatBot Maker enables secure authentication, Excel data management, web scraping, and seamless integration into websites. Explore how this project revolutionizes chatbot development!",
      techStack: "React, Chakra-UI, NodeJs, ExpressJs, MongoDb, Node-NLP, HuggingFace",
    buttons: [
      {
        text: "Live Demo",
        href: "https://chatbot-website-five.vercel.app/",
      },
      {
        text: "Github",
        href: "https://github.com/manojvaishnav/chatbot-website",
      },
    ],
  },
  {
    image: Chitchat,
    name: "Chit-Chat Social Media",
    description:
      "Experience 'Chit-Chat,' a sleek social media platform designed for seamless digital connections. Built with React, Chakra UI, Node.js, Express.js, MongoDB, and Socket.io, it offers real-time chats, captivating posts, secure user authentication, and essential features like liking, commenting, saving posts, and effortless user interactions.",
      techStack: "React, Chakra-UI, NodeJs, ExpressJs, MongoDb, Socket.io",
    buttons: [
      {
        text: "Live Demo",
        href: "https://chit-chat-6id8.onrender.com/",
      },
      {
        text: "Github",
        href: "https://github.com/manojvaishnav/chit-chat",
      },
    ],
  },
  {
    image: BlogImage,
    name: "Blog App",
    description:
      "I designed and developed a dynamic blog website using the MERN (MongoDB, Express, React, Node.js) stack. The platform empowers users to freely share their thoughts and ideas by creating and publishing personalized blogs. Through intuitive user interfaces and efficient back-end processes, the website provides a seamless experience for writers to showcase their creativity while engaging readers with compelling content. With a focus on user interaction and functionality, the blog website encourages a thriving community of writers and readers to connect and explore diverse perspectives on a wide range of topics.",
    techStack: "React, Chakra-UI, NodeJs, ExpressJs, MongoDb",
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
    image: ProjectMgmt,
    name: "Project Management",
    description:
      "Robust Project Management System leveraging the power of the MERN stack with GraphQL integration. This application allows seamless management of clients, enabling the addition, deletion of client information. Additionally, it streamlines project management processes, offering functionalities to effortlessly add, delete, and update project details.",
      techStack: "React, NodeJs, ExpressJs, MongoDb, GraphQL",
    buttons: [
      {
        text: "Live Demo",
        href: "https://pmgmt.vercel.app/",
      },
      {
        text: "Github",
        href: "https://github.com/manojvaishnav/Project-Management-GraphQL",
      },
    ],
  },
  {
    image: NotesImage,
    name: "Notes App",
    description:
      "The Notes App is an innovative project designed to revolutionize note-taking and organization. With advanced security measures, this application ensures the utmost protection for user data, including encrypted passwords. Built using a robust tech stack, including MongoDB, Express.js, React, and Node.js, the Notes App offers a seamless user experience.This feature-rich app allows users to create, update, and delete notes effortlessly, making it a powerful tool for productivity and organization. It seamlessly synchronizes across devices, enabling users to access their notes anytime, anywhere. Additionally, the app supports personalized profiles, allowing users to upload unique profile images securely stored in buffer form.",
    techStack: "React, Chakra-UI, NodeJs, ExpressJs, MongoDb",
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
    techStack: "Chakra-UI, React",
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
    techStack: "React, Material-UI, NodeJs, ExpressJs, MongoDb",
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
    techStack: "HTML, CSS, JavaScript, Php",
    buttons: [
      {
        text: "Live Demo",
        href: "https://govindaexport.com/",
      },
    ],
  },
];

export default Projects;
