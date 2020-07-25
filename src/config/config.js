import Firebase from "firebase";
import { firebaseConfig } from "./credentials";

Firebase.initializeApp(firebaseConfig);
export const firebase = Firebase;
export const frameworks = [
  {
    frameworkName: "Java",
    frameworkLogo: require("../assets/icons/frameworks/ic_java.png"),
  },
  {
    frameworkName: "Kotlin",
    frameworkLogo: require("../assets/icons/frameworks/ic_kotlin.png"),
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
    frameworkLogo: require("../assets/icons/frameworks/ic-python.png"),
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
    frameworkLogo: require("../assets/icons/frameworks/ic-reactnative.png"),
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
    frameworkLogo: require("../assets/icons/frameworks/ic-html.png"),
  },
];