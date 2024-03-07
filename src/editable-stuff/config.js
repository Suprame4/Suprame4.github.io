// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Adrian",
  middleName: "",
  lastName: "Gonzalez Cortes",
  message: " Developing a passion for development and growing with each opportunity! 👨‍💻💡 ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Suprame4",
    },
    {
      image: "fa-kaggle",
      url: "https://www.kaggle.com/adriangonzalezcortes",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/adrian-gonzalez-cortes/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/adrian_206/",
    },
    {
      image: "fa-discord",
      url: "https://www.discordapp.com/users/548004099749052427",
    },
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/hashirshoaeb/",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/AdrianPic.png"),
  imageSize: 350,
  message:
    "I am currently a software engineering apprentice @ Expedia Group with a focus on frontend tools and technologies. I am passionate about continuing to grow my skills in web development and Computer Science through project based leanring and certifications.",
  resume: "https://www.linkedin.com/in/adrian-gonzalez-cortes",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "The-Syntax-Slingers", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["inventory-app"],
};
const repo2 = {
  show: false,
  gitHubUsername: "NotNotion", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["backend_app"],
};
const repo3 = {
  show: false,
  gitHubUsername: "Open-Sounds", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["frontend"],
};
const repo4 = {
  show: false,
  gitHubUsername: "Suprame4", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["Full_stack_open_2022"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/AdrianPic.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/AdrianPic.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  languages: [
    { name: "JavaScript", value: require("../assets/img/javascript_logo.png") },
    { name: "TypeScript", value: require("../assets/img/typescript_logo.png") },
    { name: "Kotlin", value: require("../assets/img/kotlin_logo.png") },
    { name: "Python", value: require("../assets/img/logo_python.png") },
    { name: "SQL", value: require("../assets/img/sql_logo.png") },
  ],
  libraries: [
    { name: "React", value: require("../assets/img/react_logo.png") },
    { name: "Next.js", value: require("../assets/img/nextjs_logo.png") },
    { name: "Express.js", value: require("../assets/img/express_logo.png") },
    { name: "React-bootstrap", value: require("../assets/img/react_bootstrap_logo.png") },
    { name: "Sass", value: require("../assets/img/sass_logo.png") },
  ],
  otherSkills: [
    { name: "Testing/Quality Assurance" },
    { name: "CI/CD" },
    { name: "Problem Solving" },
    { name: "Teamwork" },
    { name: "Critical Thinking" },
  ]
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Always open to opportunities! Reach out to me at",
  email: "adriancortesgonz@gmail.com",
};

const experience = {
  show: true,
  heading: "Experience",
  data: [
    {
      company: 'Expedia Group - Conversation Platform',
      location: 'Seattle, WA',
      role: 'Software Development Engineer Apprentice',// Here Add Company Name
      date: 'Jan 2023 – Present',
      description: [
        <ul>
          <li>Develop and maintain internal web applications using React.js and other web technologies </li>
          <li>Collaborate with backend engineer, designers, program and product managers to deliver high quality software solutions </li>
          <li>Implement responsive web design and best practices</li>
          <li>Write unit and integration tests to ensure code quality and reliability</li>
          <li>Participate in code reviews and provide constructive feedback to peers</li>
          <li>Develop and maintain internal web applications using React.js and other web technologies</li> 
        </ul>
      ]
    },
    {
      company: 'Amazon - Sustainability Tech',
      location: 'Remote',
      role: 'Quality Assurance Engineer Intern',// Here Add Company Name
      date: 'Sep 2020 – Mar 2021',
      description: [
        <ul>
          <li>Contribute to designing, building, and maintaining a test infrastructure</li>
          <li>Develop test plans</li>
          <li>Work with Sr. Software Development Engineers in Test (SDETs) and Sr. Quality Assurance Engineers (QAEs) to understand feature requirements and determine their respective acceptance criteria</li>
          <li>Ensure that test results are accurate and delivered in a timely fashion</li>
          <li>Define quality and operational metrics that measure success</li>
          <li>Perform automation testing</li>
        </ul>
      ]
    },
  ]
}

const awards = {
  show: true,
  heading: "Awards",
  message: 
    <div>
      <p>
        <b>
          Tableau Iron Viz Competition (2021)
        </b>
      </p>
      <ul>
        <li> 1st place winner, 3-day Tableau bootcamp - <a href="https://public.tableau.com/app/profile/adrian.gonz/viz/YearUpIntrotoVisualBestPractices_16003639039710/ExplorationofWildlifeStrikes">Dashboard</a> </li>
      </ul>
    </div>,
  images: [
    {
      img: require("../editable-stuff/AdrianPic.png"),
      label: "",
      paragraph: "",
    },
  ], 
  imageSize: {
    width: "400",
    height: "400"
  }
}

const certifications = {
  show: true,
  heading: "Certifications",
  data: [
    {
      title: "Full Stack Open - React",
      platform: "University of Helsinki",
      issued: "Pending",
      link: "link"
    },
    {
      title: "IBM Data Engineering",
      platform: "Coursera",
      issued: "Nov 2022",
      credential: "S5ABTPRNVAXD",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/S5ABTPRNVAXD"
    },
    {
      title: "SQL Basics for Data Science",
      platform: "Coursera",
      issued: "Apr 2022",
      credential: "WB64FBBBZ5UR",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/WB64FBBBZ5UR"
    },
  ],
  images: [
    {
      img: require("../editable-stuff/Coursera_data_cert.png"),
      label: "",
      paragraph: "",
    },
    {
      img: require("../editable-stuff/Coursera_sql_cert.png"),
      label: "",
      paragraph: "",
    },
  ], 
  imageSize: {
    width: "400",
    height: "400"
  }
}
// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, repo2, repo3, repo4, skills, leadership, getInTouch, experience, awards, certifications };
