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

let body = document.querySelector('body');

let tasksList = body.querySelector('.tasks-list');

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

    tasksList.append(divTaskItem);

}

tasks.forEach(task => createTask(task))

const divCreateTaskBlock = body.querySelector('.create-task-block');

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



const modalHTML = `
  <div class="modal-overlay modal-overlay_hidden">
    <div class="delete-modal">
      <h3 class="delete-modal__question">
        Вы действительно хотите удалить эту задачу?
      </h3>
      <div class="delete-modal__buttons">
        <button class="delete-modal__button delete-modal__cancel-button">
          Отмена
        </button>
        <button class="delete-modal__button delete-modal__confirm-button">
          Удалить
        </button>
      </div>
    </div>
  </div>
`;

const tempContainer = document.createElement('div');
tempContainer.innerHTML = modalHTML;
const warning = tempContainer.querySelector('.modal-overlay');
document.body.append(warning);

tasksList.addEventListener('click', (event) => {
    const deleteButton = event.target.closest('.task-item__delete-button');
    if (deleteButton) {
        warning.classList.remove('modal-overlay_hidden');
    }

    let deleteModalButtons = body.querySelector('.delete-modal__buttons');
    deleteModalButtons.addEventListener('click', event => {
        switch (event.target.innerText) {
            case "Отмена":
                warning.classList.add('modal-overlay_hidden');
                break;
            case "Удалить":
                let idDeleteButton = deleteButton.dataset.deleteTaskId;
                let indexForDelete = tasks.findIndex(task => task.id === idDeleteButton);
                tasks.splice(indexForDelete, 1);
                const objForDeleteFromDOM = tasksList.querySelector(`[data-task-id="${idDeleteButton}"]`);
                objForDeleteFromDOM.remove();
                warning.classList.add('modal-overlay_hidden');
                break;
            default:
                break;
        }
    })
})


document.addEventListener('keyup', event => {
    if (event.key === "Tab" && !body.classList.contains('dark-theme')) {
        body.classList.add('dark-theme');
        body.style.background = '#24292E';
        body.querySelectorAll('.task-item').forEach(el => el.style.color = '#ffffff');
        body.querySelectorAll('button').forEach(button => button.style.border = '1px solid #ffffff')
    } else if (event.key === "Tab" && body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.style.background = 'initial';
        body.querySelectorAll('.task-item').forEach(el => el.style.color = 'initial');
        body.querySelectorAll('button').forEach(button => button.style.border = 'none')
    }
})