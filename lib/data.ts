const projectData = [
  {
    id: 1,
    tag: "1",
    title: "Devscoreboard",
    description: "📓 Multiple choice quiz game made for the browser",
    image: "/assets/qiz.jpg",
    build: "https://github.com/QuadNard/Devscore",
    link: "https://devs-quiz.vercel.app/",
    content: "Embark on a thrilling journey of skill and memory testing with DevQuiz, our innovative multiple-choice quiz game designed exclusively for developers.",
  },
  {
    id: 2,
    tag: "2",
    title: "Giphy Application",
    description: "Built a visually appealing and user-friendly GIPHY landing page using CSS preprocessors for efficient stylingThis is the  project",
    image: "/assets/gip.png",
    build: "https://github.com/QuadNard/giphy-app",
    link: "https://giphy-app-pied.vercel.app/",
    content: "The website has been designed with a focus on user experience, providing a visually appealing and user-friendly interface. The mobile-responsive design allows users to search for and view GIFs on any device.",
  },
  {
    id: 3,
    tag: "3",
    title: "MaadSounds",
    description: "MaadSounds is a cutting-edge Ecommerce Site designed to provide users with a seamless experience of discovering, playing, and licensing music.",
    image: "/assets/yee.jpg",
    build: "https://github.com/QuadNard/MaadSounds",
    link: "https://www.google.com",
    content: "Built a prototype audio streaming and licensing application, employing real sound engineer data to enhance testing accuracy and user experience. The application is designed to provide users with a seamless experience of discovering, playing, and licensing music.",
  },
  {
    id: 4,
    tag: "4",
    title: "WebGL-Harbor",
    description: "WebGL-Harbor is a 3D model of a harbor, built using WebGL and Three.js. The project is designed to provide users with a realistic and interactive experience of a harbor.",
    image: "/assets/harbor.jpg",
    build: "https://github.com/QuadNard/WebGl-Harbor",
    link: "https://www.google.com",
    content: "The project is designed to provide users with a realistic and interactive experience of a harbor. The 3D model is built using WebGL and Three.js, allowing users to explore the harbor from different angles and perspectives. The project is optimized for performance and user experience, providing a seamless and visually appealing experience for users.",
  },
];

const leetCodeUserData = (username?: string) =>
  `https://alfa-leetcode-api.vercel.app/${username}`;
const leetCodeUserSolvedProblems = (username?: string) =>
  `https://alfa-leetcode-api.vercel.app/${username}/solved`;
const leetCodeUserSubmissions = (username?: string) =>
  `https://alfa-leetcode-api.vercel.app/${username}/submission?limit=3`;

export {
  projectData,
  leetCodeUserData,
  leetCodeUserSolvedProblems,
  leetCodeUserSubmissions,
};
