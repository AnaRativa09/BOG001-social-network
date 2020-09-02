import { pages } from "../views.js";
import * as firebase from 'firebase';

const content = document.getElementById("root");
// Se establecer un observador en el objeto Auth para obtener el estado del usuario actual  
const router = (route) => {
  firebase.auth().onAuthStateChanged(function (user) {
    content.innerHTML = "";
    let nodeDomPages = "";
    if (user) {
      // User is signed in.
      switch (route) {
        case "":
          nodeDomPages = pages.welcome();
          break;
        case "#/login":
          nodeDomPages = pages.login();
          break;
        case "#/sign-up":
          nodeDomPages = pages.signup();
          break;
        case "#/home":
          nodeDomPages = pages.home();
          break;
        case "#/filtro":
          nodeDomPages = pages.filtro();
          break;
        case "#/post":
          nodeDomPages = pages.post();
          break;
        case "#/profile":
          nodeDomPages = pages.profile();
          break;
        default:
          nodeDomPages = pages.notFound();
      }
      return content.appendChild(nodeDomPages);
    } else {
       // No user is signed in.
      switch (route) {
        case "":
          nodeDomPages = pages.welcome();
          break;
        case "#/login":
          nodeDomPages = pages.login();
          break;
        case "#/sign-up":
          nodeDomPages = pages.signup();
          break;
        default:
          nodeDomPages = pages.notFound();
      }
      return content.appendChild(nodeDomPages);
    }
  });
};


export { router };
