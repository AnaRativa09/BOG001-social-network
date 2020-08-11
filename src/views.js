import notFound from "./0.404/dom-404";
import welcome from "./1.welcome/dom-welcome";
import login from "./2.login/dom-login";
import signup from "./3.sign-up/dom-signup";
import post from "./5.post/dom-post";
import profile from "./7. user-profile/dom-profile";

const pages = {
  notFound,
  welcome,
  login,
  signup,
  home,
  filtro,
  post,
  profile,

};

export { pages };

// Mostrar paginas según el estado del usuario

const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");

export const setupUI = (user) => {
  if (user) {
    loggedInLinks.forEach((item) => (item.style.display = "block"));
    loggedOutLinks.forEach((item) => (item.style.display = "none"));
  } else {
    // userName.innerHTML = '';
    loggedInLinks.forEach((item) => (item.style.display = "none"));
    loggedOutLinks.forEach((item) => (item.style.display = "block"));
  }
};

