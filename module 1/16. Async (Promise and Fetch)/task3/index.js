const loader = document.querySelector('#loader');

const url = `https://jsonplaceholder.typicode.com/photos`;

loader.hasAttribute('hidden') ? loader.removeAttribute('hidden') : loader.setAttribute('hodden', '')

const getFastestLoadedPhoto = ids => {
    Promise.race(ids.map(id => fetch(`${url}/${id}`)))
        .then(response => {
            if (!response.ok) {
                throw new Error();
            }
            return response.json();
        })
        .then(data => {
            addPhoto(data);
        })
        .catch(error => console.log(error))
        .finally(() => loader.hasAttribute('hidden') ? loader.removeAttribute('hidden') : loader.setAttribute('hidden', '')
        )
}

const addPhoto = photo => {
    const liElemHTML = document.createElement('li');
    liElemHTML.classList.add('photo-item')

    const imgElemHTML = document.createElement('img');
    imgElemHTML.classList.add('photo-item__image')
    imgElemHTML.setAttribute('src', photo.url)

    const h3HTML = document.createElement('h3');
    h3HTML.classList.add('photo-item__title')
    h3HTML.textContent = photo.title;

    liElemHTML.append(imgElemHTML);
    liElemHTML.append(h3HTML);

    document.querySelector('#data-container').append(liElemHTML)
}

getFastestLoadedPhoto([60, 12, 55]);
