import { getRandomColor } from "./utils";

export const initApp = () => {
    const body = document.body;

    console.log('Hello world');

    const button = document.createElement('button');
    button.classList.add('button');
    button.textContent = "Изменить цвет страницы";
    body.append(button)

    button.addEventListener('click', event => {
        body.style.backgroundColor = getRandomColor();
    })
}