const loader = document.querySelector('#loader');

loader.hasAttribute('hidden') ? loader.removeAttribute('hidden') : loader.setAttribute('hidden');

const renderAlbums = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums`);
        if (!response.ok) {
            throw new Error("Ошибка при получении данных")
        }
        try {
            const data = await response.json();
            if (!response.ok) {
                throw new Error("Ошибка при обработке данных")
            }
            for (const album of data) {
                addAlbum(album);
            }
        } catch (error) {
            console.log(error);
        }
    } catch (error) {
        console.log(error);
    } finally {
        loader.hasAttribute('hidden') ? loader.removeAttribute('hidden') : loader.setAttribute('hidden', "");
    }
}

const addAlbum = almun => {
    const liHTML = document.createElement('li');
    liHTML.textContent = almun.title;

    document.querySelector('.data-container').append(liHTML);
}

renderAlbums();