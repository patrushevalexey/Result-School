const coffees = ['Latte', 'Cappuccino', 'Americano'];
let coffeeName;

const changeChoiseForList = () => {
    coffeeName = prompt(`Поиск кофе по названию:`).trim().toLowerCase();
    return coffeeName = coffeeName.charAt(0).toUpperCase() + coffeeName.slice(1);
}

coffeeName = changeChoiseForList();

coffees.some((el) => { return el === coffeeName }) ?
    alert(`Держите ваш любимый кофе ${coffeeName}. Он ${coffees.findIndex((el) => { return el === coffeeName }) + 1} по популярности в нашей кофейне.`) :
    alert(`К сожалению, такого вида кофе нет в наличии`)