const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];

const updatedPrices = prices.map((el) => { return el * 2 });

coffees.forEach((el, index, array) => {
    alert(`Кофе ${coffees[index]} сейчас стоит ${updatedPrices[index]} евро.`)
})