import * as firebase from 'firebase';
import view from './404.html';
import './estilos-404.scss';

export default () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = view;
  const user = firebase.auth().currentUser;
  const noFoundBtn = divElement.querySelector('.btn-no-found');

  if (user) { // User is signed in.
    noFoundBtn.addEventListener('click', () => {
      window.location.hash = '#/home';
    });
  } else { // No user is signed in.
    noFoundBtn.textContent= "INICIA SESIÓN Y ANTÓJATE"
    noFoundBtn.addEventListener('click', () => {
      window.location.hash = '#/login';
  });
  }

  return divElement;
};
