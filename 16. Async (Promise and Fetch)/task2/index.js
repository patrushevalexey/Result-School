const loader = document.querySelector('#loader');

const url = `https://jsonplaceholder.typicode.com/users`;

loader.hasAttribute('hidden') ? loader.removeAttribute('hidden') : loader.setAttribute('hidden');

const getUsersByIds = idsUsersForGetData => {
    Promise.all(idsUsersForGetData.map(id => fetch(`${url}/${id}`)))
        .then(respones => {
            if (respones.some(respone => respone.ok !== true)) {
                throw new Error(`Can not GET data`);
            }
            return Promise.all(respones.map(respone => respone.json()));
        })
        .then(users => {
            addUsersList(users);
        })
        .catch(error => console.log(error))
        .finally(() => {
            loader.hasAttribute('hidden') ? loader.removeAttribute('hidden') : loader.setAttribute('hidden', '');
        })
}

const addUsersList = listUsers => {
    listUsers.forEach(user => {
        const liElemHTML = document.createElement('li');

        const aElemHTML = document.createElement('a');
        aElemHTML.href = '#'
        aElemHTML.textContent = user.name;

        liElemHTML.append(aElemHTML);
        document.querySelector('#data-container').append(liElemHTML);
    });
}

getUsersByIds([5, 6, 2, 1]);