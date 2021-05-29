import './css/styles.css';
import cards from './menu.json';
import itemsTempl from './templates/template.hbs';

const menuRef = document.querySelector('.js-menu');
const menuList = itemsTempl(cards);
menuRef.insertAdjacentHTML('beforeend', menuList);
