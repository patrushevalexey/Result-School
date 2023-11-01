class Dictionary {

    constructor(name) {
        this.name = name;
    };

    words = {};

    add(word, description) {
        if (typeof this.words[word] === "undefined") {
            this.words = {
                ...this.words,
                [word]: {
                    "word": word,
                    "description": description
                }
            }
        } else {
            console.log(`Слово ${word} уже есть в словаре`);
        }
    }

    delete(word) {
        if (typeof this.words[word] !== "undefined") {
            delete this.words[word]
        } else {
            console.log("Такого слова не существует");
        }
    }

    get(word) {
        if (typeof this.words[word] !== "undefined") {
            return this.words[word]
        } else {
            console.log("Такого слова не существует");
        }
    }

    showAllWords() {

        // В чем разница и как лучше использовать?)
        // for in кажется легче, но оставил entries, тк сделал его первым, наткнувшись на MDN

        for (const [key, value] of Object.entries(this.words)) {
            console.log(key + " - " + value.description);
        }

        for (let key in this.words) {
            console.log(key + ' - ' + this.words[key].description);
        }
    }

}


const dictionary = new Dictionary('Толковый словарь');

dictionary.add('JavaScript', 'популярный язык программирования');
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');
dictionary.delete('JavaScript');
dictionary.showAllWords();
// Веб-разработчик - Человек, который создает новые сервисы и сайты или поддерживает // и дополняет существующие
