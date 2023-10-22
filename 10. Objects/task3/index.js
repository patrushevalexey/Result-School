const handleObject = (obj, key, action) => {
    if (action === "get") {
        return obj[key]
    } else if (action === "add") {
        obj[key] = "";
        return obj;
    } else if (action === "delete") {
        delete obj[key];
        return obj;
    } else {
        return obj
    }
};

const student = {
    name: 'Maxim',
    programmingLanguage: 'JavaScript',
}

const result = handleObject(student, 'programmingLanguage', 'add');
console.log('result', result);

// Нас просят добавить "... новый ключ key в объект object и присвоить значение пустой строки "". ..."", но ведь если мы передадим так как написано - он перезатрпет значение и вернет "programmingLanguage" со значением пустой строки...
// Просьба дать ОС по этому поводу.