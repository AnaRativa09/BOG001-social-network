import view from './welcome.html';
import './estilos-welcome.scss';

export default () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = view;

  // window.addEventListener('load', () => {
  //   setTimeout(() => {
  //     window.location.hash ='#/login';
  //   }, 4000);
  // });


  return divElement;
};
