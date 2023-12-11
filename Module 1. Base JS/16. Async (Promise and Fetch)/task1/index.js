const loader = document.querySelector('#loader');
const url = `https://jsonplaceholder.typicode.com/users`;

loader.hasAttribute('hidden') ? loader.removeAttribute('hidden') : loader.setAttribute('hidden');
fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Can not GET data from ${url}`);
        }
        return response.json();
    })
    .then(data => {
        addUsersList(data);
    })
    .catch(error => {
        console.error(error)
    })
    .finally(() => {
        loader.hasAttribute('hidden') ? loader.removeAttribute('hidden') : loader.setAttribute('hidden', '');
    })

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