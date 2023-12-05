const stacks = {
    2: "CSS",
    3: "JavaSctipt",
    4: "React",
    5: "NodeJS",
    6: "Студент выучил все технологии",

    addNewStack(level) {
        student.stack.push(stacks[level]);
    }
}

const student = {
    stack: ['HTML'],
    level: 1,
    improveLevel() {
        this.level++;
        switch (this.level) {
            case 2:
                stacks.addNewStack(this.level)
                break;
            case 3:
                stacks.addNewStack(this.level)
                break
            case 4:
                stacks.addNewStack(this.level)
                break
            case 5:
                stacks.addNewStack(this.level)
                break
            default:
                alert("Студент выучиил все технологии!")
                break;
        }
        return this;
    }
}


student
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel()

console.log(student.stack);