let tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
];

const createTask = task => {

    let id = task.id, completed = task.completed, text = task.text;

    const divTaskItem = document.createElement('div');
    divTaskItem.className = 'task-item';
    divTaskItem.dataset.taskId = id;

    const divTaskItemMainContainer = document.createElement('div');
    divTaskItemMainContainer.className = 'task-item__main-container';

    const divTaskItemMainContent = document.createElement('div');
    divTaskItemMainContent.className = 'task-item__main-content';

    const form = document.createElement('form');
    form.className = 'checkbox-form';

    const input = document.createElement('input');
    input.className = 'checkbox-form__checkbox';
    input.type = 'checkbox'
    input.id = id;
    input.checked = completed;

    const label = document.createElement('label');
    label.htmlFor = id;

    const span = document.createElement('span');
    span.className = 'task-item__text';
    span.textContent = text;

    const button = document.createElement('button');
    button.classList.add('task-item__delete-button', 'default-button', 'delete-button')
    button.dataset.deleteTaskId = id;
    button.textContent = 'Удалить'

    form.append(input);
    form.append(label);
    divTaskItemMainContent.append(form);
    divTaskItemMainContent.append(span);
    divTaskItemMainContainer.append(divTaskItemMainContent);
    divTaskItemMainContainer.append(button);
    divTaskItem.append(divTaskItemMainContainer);

    document.querySelector('.tasks-list').append(divTaskItem);

}

tasks.forEach(task => createTask(task))

const divCreateTaskBlock = document.querySelector('.create-task-block');

const errorMessage = document.createElement('span');
errorMessage.className = 'error-message-block';

divCreateTaskBlock.addEventListener('submit', (event) => {
    event.preventDefault();
    const { target } = event;
    const value = target.taskName.value;

    switch (true) {
        case value === "":
            errorMessage.textContent = "Название задачи не должно быть пустым";
            divCreateTaskBlock.append(errorMessage)
            break;
        case tasks.some(task => task.text === value):
            errorMessage.textContent = "Задача с таким названием уже существует";
            divCreateTaskBlock.append(errorMessage)
            break;
        default:
            if (errorMessage.textContent === "Название задачи не должно быть пустым") {
                errorMessage.remove();
            }
            if (errorMessage.textContent === "Задача с таким названием уже существует") {
                errorMessage.remove();
            }
            const task = {
                id: `${(new Date()).getTime()}`,
                completed: false,
                text: value
            }

            tasks.push(task);
            createTask(task)
            break;
    }

    console.log(tasks);
});


