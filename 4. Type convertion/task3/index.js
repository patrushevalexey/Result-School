let getType = data => {

    console.log("Сейчас преобразовываем значение: " + data);
    console.log("Приведение к string - " + String(data));
    console.log("Приведение к number  - " + Number(data));
    console.log("Приведение к boolean  - " + Boolean(data));
}

getType(console.log);
getType({ name: 'Maxim' });
/*
getType(Symbol('key'));
Я пытался использовать так, но мы проходили инфу о том, что символ нельзя привести к числу.
Тогда я ставлю проверку в функцию - if(dara !=== Symbol('key')), но он выдает ошибку.
GTP подсказывает что нужно еще проверять if (typeof data !== 'symbol') для приведения к Стринге, но не понимаю почему...
При этом console.log(String(Symbol('key'))); ошибок не выдает.
Поэтому делаю для этого пункта отдельный вызов с приведением к String & Boolean.
*/
console.log(String(Symbol('key')), Boolean(Symbol('key')));
getType(Number);
getType('');
getType(0);
getType(-10);
getType('-105');
