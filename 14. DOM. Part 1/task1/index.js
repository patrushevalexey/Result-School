const form = document.createElement('form');
form.className = 'create-user-form';

const labelName = document.createElement('label');
labelName.textContent = 'Имя'
const inputName = document.createElement('input');
inputName.type = 'text';
inputName.name = 'userName';
inputName.placeholder = 'Введите ваше имя';
labelName.append(inputName)
form.append(labelName);

const labelPassword = document.createElement('label');
labelPassword.textContent = 'Пароль'
const inputPassword = document.createElement('input');
inputPassword.type = 'password';
inputPassword.name = 'password';
inputPassword.placeholder = 'Придумайте Пароль';
labelPassword.append(inputPassword)
form.append(labelPassword);

////////////////////////////////////////////////////////

const form2 = `<form class="create-user-form">
    <label>
        Имя
        <input type="text" name="userName" placeholder="Введите ваше имя">
    </label>
    <label>
        Пароль
        <input type="password" name="password" placeholder="Придумайте Пароль">
    </label>
    <button type="submit">
        Подтвердить
    </button>
</form>`

////////////////////////////////////////////////////////

document.body.append(form);
document.body.innerHTML += form2;