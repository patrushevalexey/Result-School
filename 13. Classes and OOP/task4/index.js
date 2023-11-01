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

class HardWordsDictionary extends Dictionary {
    add(word, description) {
        if (typeof this.words[word] === "undefined") {
            this.words = {
                ...this.words,
                [word]: {
                    "word": word,
                    "description": description,
                    "isDifficult": true
                }
            }
        } else {
            console.log(`Слово ${word} уже есть в словаре`);
        }
    }
}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');

hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');

hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');

hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');

hardWordsDictionary.delete('неологизм');

hardWordsDictionary.showAllWords();

// дилетант - Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.
// квант - Неделимая часть какой - либо величины в физике.
