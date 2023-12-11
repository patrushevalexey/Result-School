const carName = "Toyota";
let carOwner, maxCarSpeed = 220;

alert(`Название машины - ${carName}`);
alert(`Максимальная скорость машины - ${maxCarSpeed}`);
carOwner ? alert(`Владелец машины - ${carName}`) : alert("У этой машины нет владельца =(");

carOwner = "Alexey";
maxCarSpeed -= 10;
console.log("У машины изменился владелец. Новый владелец - " + carOwner);
console.log('У машины изменилась скорость. Теперь максимальная скорость = ' + maxCarSpeed);

carOwner = "Mihail";
maxCarSpeed -= 10;
console.log("У машины изменился владелец. Новый владелец - " + carOwner);
console.log('У машины изменилась скорость. Теперь максимальная скорость = ' + maxCarSpeed);

carOwner = "Andrey";
maxCarSpeed -= 10;
console.log("У машины изменился владелец. Новый владелец - " + carOwner);
console.log('У машины изменилась скорость. Теперь максимальная скорость = ' + maxCarSpeed);