import './css/styles.css';
import cards from './menu.json';
import itemsTempl from './templates/template.hbs';

const menuRef = document.querySelector('.js-menu');
// console.log(menuRef);
const menuList = itemsTempl(cards);
menuRef.insertAdjacentHTML('beforeend', menuList);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
// console.log(bodyRef);

const themeChangerRef = document.querySelector('#theme-switch-toggle');
// console.log(themeChangerRef);
themeChangerRef.addEventListener('change', changeThemeHandler);

function changeThemeHandler(event) {
    bodyRef.classList.toggle(Theme.LIGHT);
    bodyRef.classList.toggle(Theme.DARK);

    localStorage.setItem('theme', bodyRef.className);
    // if (event.target.checked) {
    //     localStorage.setItem('theme', Theme.DARK)
    // } else {
    //     localStorage.setItem('theme', Theme.LIGHT)
    // }
};

function chackThemeHandler() {
    const savedTheme = localStorage.getItem('theme');
    // console.log(savedTheme);

    if (savedTheme === Theme.DARK) {
        bodyRef.classList.add(Theme.DARK);
        themeChangerRef.chacked = true;
    } else {
        bodyRef.classList.add(Theme.LIGHT);
        themeChangerRef.chacked = false;
    }
}

chackThemeHandler();
