const project = {
  projectName: "Test",
  projectId: "12312",
  projectTitle: "Title",
  downloadUrl: "link",
  projectIcon: require("../assets/icons/frameworks/ic_firebase.png"),
  projectDescription: "Many words man",
  platformIcon: require("../assets/icons/frameworks/ic-android.png"),
};

const projects = [project, project, project, project, project, project];
const frameworks = [
  {
    frameworkName: "Java",
    frameworkLogo: require("../assets/icons/frameworks/ic_java.png"),
  },
  {
    frameworkName: "Kotlin",
    frameworkLogo: require("../assets/icons/frameworks/ic_java.png"),
  },
  {
    frameworkName: "JavaScript",
    frameworkLogo: require("../assets/icons/frameworks/ic-javascript.png"),
  },
  {
    frameworkName: "TypeScript",
    frameworkLogo: require("../assets/icons/frameworks/ic-type-script.png"),
  },
  {
    frameworkName: "Python",
    frameworkLogo: require("../assets/icons/frameworks/ic_java.png"),
  },
  {
    frameworkName: "Node",
    frameworkLogo: require("../assets/icons/frameworks/ic-node.png"),
  },
  {
    frameworkName: "React",
    frameworkLogo: require("../assets/icons/frameworks/ic-react.svg"),
  },
  {
    frameworkName: "React-Native",
    frameworkLogo: require("../assets/icons/frameworks/ic_java.png"),
  },
  {
    frameworkName: "Android",
    frameworkLogo: require("../assets/icons/frameworks/ic-android.png"),
  },
  {
    frameworkName: "Electron",
    frameworkLogo: require("../assets/icons/frameworks/ic_electron.svg"),
  },
  {
    frameworkName: "Html/Css",
    frameworkLogo: require("../assets/icons/frameworks/ic_java.png"),
  },
];
const libraries = [
  {
    libraryName: "Java",
    libraryLogo: require("../assets/icons/frameworks/ic_java.png"),
    gitLink: "https://google.com",
  },
  {
    libraryName: "Kotlin",
    libraryLogo: require("../assets/icons/frameworks/ic_java.png"),
    gitLink: "https://google.com",
  },
  {
    libraryName: "JavaScript",
    libraryLogo: require("../assets/icons/frameworks/ic-javascript.png"),
    gitLink: "https://google.com",
  },
  {
    libraryName: "TypeScript",
    libraryLogo: require("../assets/icons/frameworks/ic-type-script.png"),
    gitLink: "https://google.com",
  },
  {
    libraryName: "Python",
    libraryLogo: require("../assets/icons/frameworks/ic_java.png"),
    gitLink: "https://google.com",
  },
  {
    libraryName: "Node",
    libraryLogo: require("../assets/icons/frameworks/ic-node.png"),
    gitLink: "https://google.com",
  },
  {
    libraryName: "React",
    libraryLogo: require("../assets/icons/frameworks/ic-react.svg"),
    gitLink: "https://google.com",
  },
  {
    libraryName: "React-Native",
    libraryLogo: require("../assets/icons/frameworks/ic_java.png"),
    gitLink: "https://google.com",
  },
  {
    libraryName: "Android",
    libraryLogo: require("../assets/icons/frameworks/ic-android.png"),
    gitLink: "https://google.com",
  },
  {
    libraryName: "Electron",
    libraryLogo: require("../assets/icons/frameworks/ic_electron.svg"),
    gitLink: "https://google.com",
  },
  {
    libraryName: "Html/Css",
    libraryLogo: require("../assets/icons/frameworks/ic_java.png"),
    gitLink: "https://google.com",
  },
];

export async function fetchProjetcts() {
  return projects;
}
export async function fetchFrameworks() {
  return frameworks;
}
export async function fetchLibraries() {
  return libraries;
}
