const dog = {
    name: 'Чарли',
    type: 'Собака',
    makeSound() {
        return 'Гав-Гав';
    }
}

const bird = {
    name: 'Петя',
    type: 'Воробей',
    makeSound() {
        return 'Чик-чирик';
    }
}

function makeDomestic(isDomestic) {
    const newAnimal = { ...this };
    console.log(`${newAnimal.type} по имени ${newAnimal.name} говорит ${newAnimal.makeSound()}`);
    newAnimal.isDomestic = isDomestic || false;
    return newAnimal;
}

console.log(makeDomestic.bind(dog, true)());
console.log(makeDomestic.call(bird, false));
console.log(makeDomestic.apply(bird, [false]));