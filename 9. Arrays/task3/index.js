const coffees = ['Latte', 'Cappuccino', 'Americano'];

let coffeeName = prompt().trim();

coffees.some((el) => { return el === coffeeName }) ?
    alert(`Держите ваш любимый кофе ${coffeeName}. Он ${coffees.findIndex((el) => { return el === coffeeName }) + 1} по популярности в нашей кофейне.`) :
    alert(`К сожалению, такого вида кофе нет в наличии`)