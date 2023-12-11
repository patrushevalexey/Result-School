const tasks = [
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

const createTask = tasks => {
    tasks.forEach(task => {

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

    });
}

createTask(tasks);