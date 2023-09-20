const data = {
  frontend: [
    {
      name: "Html",
      url: "https://cdn-icons-png.flaticon.com/512/174/174854.png",
      size: "w-[100px]",
    },
    {
      name: "Css",
      url: "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png",
      size: "w-[100px]",
    },
    {
      name: "Tailwindcss",
      url: "data:image/png;base64,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",
      size: "w-[100px]",
    },
    {
      name: "Sass",
      url: "https://cdn.iconscout.com/icon/free/png-256/free-sass-226054.png",
      size: "w-[100px]",
    },
    {
      name: "js",
      url: "https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png",
      size: "w-[100px]",
    },
    {
      name: "Reactjs",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      size: "w-[100px]",
    },
  ],
  backend: [
    {
      name: "php",
      url: "https://cdn-icons-png.flaticon.com/512/5968/5968332.png",
      size: "w-[100px]",
    },
    {
      name: "Laravel",
      url: "https://static-00.iconduck.com/assets.00/laravel-icon-497x512-uwybstke.png",
      size: "w-[100px]",
    },
    {
      name: "mysql",
      url: "https://upload.wikimedia.org/wikipedia/fr/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png",
      size: "w-[150px]",
    },
    {
      name: "mongodb",
      url: "https://w7.pngwing.com/pngs/429/921/png-transparent-mongodb-plain-wordmark-logo-icon.png",
      size: "w-[100px]",
    },
  ],
  outils: [
    {
      name: "vscode",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
      size: "w-[80px]",
    },
    {
      name: "github",
      url: "https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png",
      size: "w-[150px]",
    },
  ],
  projects: [
    {
      url: "https://repository-images.githubusercontent.com/456963513/82528385-a73f-488f-9003-513321283a6b",
      size: "w-[350px]",
      view: "/",
      github: "/",
    },
    {
      url: "https://repository-images.githubusercontent.com/456963513/82528385-a73f-488f-9003-513321283a6b",
      size: "w-[350px]",
      view: "/",
      github: "/",
    },
    {
      url: "https://repository-images.githubusercontent.com/456963513/82528385-a73f-488f-9003-513321283a6b",
      size: "w-[350px]",
      view: "/",
      github: "/",
    },
    {
      url: "https://repository-images.githubusercontent.com/456963513/82528385-a73f-488f-9003-513321283a6b",
      size: "w-[350px]",
      view: "/",
      github: "/",
    },
    {
      url: "https://repository-images.githubusercontent.com/456963513/82528385-a73f-488f-9003-513321283a6b",
      size: "w-[350px]",
      view: "/",
      github: "/",
    },
    {
      url: "https://repository-images.githubusercontent.com/456963513/82528385-a73f-488f-9003-513321283a6b",
      size: "w-[350px]",
      view: "/",
      github: "/",
    },
  ],
};
export default data