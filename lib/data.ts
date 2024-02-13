



const projectData = [
    {
        id: 1,
        tag: "1",
        title: "Project 1",
        description: "This is the first project",
        image: "/assets/favicon.png",
        build: "https://www.google.com",
        link: "https://www.github.com",
        content: "This is the first project",
    },
    {
        id: 2,
        tag: "2",
        title: "Project 2",
        description: "This is the  project",
        image: "/assets/favicon.png",
        build: "https://www.google.com",
        link: "https://www.github.com",
        content: "This is the first project",
    },
    {
        id: 3,
        tag: "3",
        title: "Project 3",
        description: "This is the 3 project",
        image: "/assets/favicon.png",
        build: "https://www.google.com",
        link: "https://www.github.com",
        content: "This is the first project",
    },
    {
        id: 4,
        tag: "4",
        title: "Project 4",
        description: "This is the 4 project",
        image: "/assets/favicon.png",
        build: "https://www.google.com",
        link: "https://www.github.com",
        content: "This is the first project",
    }
];


const leetCodeUserData = (username?: string) => `https://alfa-leetcode-api.vercel.app/${username}`;
const leetCodeUserSolvedProblems = (username?: string) => `https://alfa-leetcode-api.vercel.app/${username}/solved`; 
const leetCodeUserSubmissions = (username?: string) => `https://alfa-leetcode-api.vercel.app/${username}/submission?limit=3`;


export {
    projectData,
    leetCodeUserData,
    leetCodeUserSolvedProblems,
    leetCodeUserSubmissions
}