import './index.css';

const cookieDiv = document.querySelector('.cookie-consent');
const cookieAcceptButton = document.querySelector('.cookie-consent__button');

if (localStorage.getItem('isHiddenCookie')) {
    cookieDiv.classList.add('hide');
}

cookieAcceptButton.addEventListener('click', event => {
    cookieDiv.classList.add('hide');
    localStorage.setItem('isHiddenCookie', 'true');
});

