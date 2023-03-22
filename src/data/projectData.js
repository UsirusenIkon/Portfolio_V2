import todo from "../assets/todolist.svg";
import leaderboard from "../assets/leaderboard.svg";
import allblack  from "../assets/allblack.svg";

const projectData = [
  {
    id: 0,

    featuredImage: {
      url: allblack,
      alt: 'allblack',
    },

    title: 'Basketball Camp Summit',

    details: {
      customer: 'Microverse',
      job: 'Front-end',
      year: 2022,
    },

    description: {
      summary: 'A website were clients can register for a basketball camp.',

      more: "This is a website for a basketball summer camp where clients can register and have full details about the basketball program. The website is fully responsive across devices and is built with HTML, CSS and JAVASCRIPT",
    },

    technologies: {
      html: 'html',
      css: 'css',
      js: 'javaScript',
    },

    link: {
      seeLive: 'https://usirusenikon.github.io/Allblack-Basketball-Camp-First-Capstone-/',
      sources: 'https://github.com/UsirusenIkon/Allblack-Basketball-Camp-First-Capstone-',
    },
  },
  {
    id: 1,

    featuredImage: {
      url: todo,
      alt: 'Todolist',
    },

    title: 'Todo list',

    details: {
      customer: 'Microverse',
      job: 'Front-end',
      year: 2022,
    },

    description: {
      summary: 'This project is a simple HTML list of To-Do tasks',

      more: "This project is a simple HTML list of To-Do tasks. It is built with HTML, CSS, javascript, and webpack. A user can add and remove to-do tasks and edit the task.",
    },

    technologies: {
      html: 'html',
      css: 'css',
      js: 'javaScript',
      webpack: 'webpack',
    },

    link: {
      seeLive: 'https://usirusenikon.github.io/To-Do-List/dist/',
      sources: 'https://github.com/UsirusenIkon/To-Do-List',
    },
  },
  {
    id: 2,

    featuredImage: {
      url: leaderboard,
      alt: 'leaderboard',
    },

    title: 'leaderboard',

    details: {
      customer: 'Microverse',
      job: 'Front-end',
      year: 2022,
    },

    description: {
      summary: 'This project is a leaderboard, here a user can add his name and score to the list',

      more: "In this activity we set up a JavaScript project for the Leaderboard list app, using webpack and ES6 features, notably modules. Here a user inputs his name and score and it displays in the list",
    },

    technologies: {
      html: 'html',
      css: 'css',
      js: 'javaScript',
      webpack: 'webpack',
    },

    link: {
      seeLive: 'https://usirusenikon.github.io/Leaderboard/dist/',
      sources: 'https://github.com/UsirusenIkon/Leaderboard',
    },
  },
];

export default projectData;
