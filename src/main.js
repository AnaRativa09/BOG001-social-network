import { router } from './router/index.routes.js';
import './main.scss';

/* ------ Router views -------*/
router(window.location.hash);
window.addEventListener('hashchange', () => {
  router(window.location.hash);
});

if (window.location.hash === '')
window.addEventListener('load', () => {
  setTimeout(() => {
    window.location.hash ='#/login';
  }, 5000);
});

/* ------ Button active -------*/
window.addEventListener('hashchange', () => {
 
  // Mobile
  const iconHomeMob = document.querySelector('#icon-home-mob');
  const iconFilterMob = document.querySelector('#icon-filter-mob');
  const iconPostMob = document.querySelector('#icon-post-mob');
  const iconProfileMob = document.querySelector('#icon-user-mob');

  // Web
  const iconHome = document.querySelector('#icon-home-desk');
  const iconFilter = document.querySelector('#icon-filter-desk');
  const iconPost = document.querySelector('#icon-post-desk');
  const iconProfile = document.querySelector('#icon-user-desk');

  const changeRoutes = (iconHomeMobile, iconFilterMobile, iconPostMobile, iconProfileMobile) => {
    if (window.location.hash === '#/home') {
      iconHomeMobile.classList.add('active');
    }
    if (window.location.hash === '#/filtro') {
      iconFilterMobile.classList.add('active');
      iconHomeMobile.classList.remove('active');
    }
    if (window.location.hash === '#/post') {
      iconPostMobile.classList.add('active');
      iconHomeMobile.classList.remove('active');
    }
    if (window.location.hash === '#/profile') {
      iconProfileMobile.classList.add('active');
      iconHomeMobile.classList.remove('active');
    }
  };

  changeRoutes(iconHomeMob, iconFilterMob, iconPostMob, iconProfileMob);
  changeRoutes(iconHome, iconFilter, iconPost, iconProfile);
});
