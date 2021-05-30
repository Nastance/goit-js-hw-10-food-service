import './css/styles.css';
import cards from './menu.json';
import itemsTempl from './templates/template.hbs';

const menuRef = document.querySelector('.js-menu');
console.log(menuRef);
const menuList = itemsTempl(cards);
menuRef.insertAdjacentHTML('beforeend', menuList);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
console.log(bodyRef);

const themeChangerRef = document.querySelector('#theme-switch__toggle');
console.log(themeChangerRef);
themeChangerRef.addEventListener('change', changeThemeHandler);

function changeThemeHandler(event) {
    document.body.classList.toggle(Theme.LIGHT);
    document.body.classList.toggle(Theme.DARK);

    if (event.target.checked) {
        localStorage.setItem('theme', Theme.DARK)
    } else {
        localStorage.setItem('theme', Theme.LIGHT)
    }
};

function chackThemeHandler() {
    const sevedTheme = localStorage.getItem('theme');
    console.log(savedTheme);

    if (sevedTheme === Theme.DARK) {
        bodyRef.classList.add(Theme.DARK);
        themeChangerRef.chacked = true;
    } else {
        bodyRef.classList.add(Theme.LIGHT);
    }
}

chackThemeHandler();