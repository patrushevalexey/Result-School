const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

const getTodosByIds = (ids) => {
    const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));

    Promise.all(requests)
        .then((responses) => {
            const dataResults = responses.map((data) => data.json());
            return Promise.all(dataResults)
        })
        .then((allTasks) => {
            console.log(allTasks);
        })
        .catch((error) => {
            console.log(error);
        })
}

const getTodosByIdsNew = async ids => {
    const allTasks = [];

    try {
        for (const id of ids) {
            allTasks.push(await (await fetch(`${TODOS_URL}/${id}`)).json())
        }
    } catch (error) {
        console.log(console.log(error));
    }

    console.log(allTasks);
}

getTodosByIds([43, 21, 55, 100, 10]);
getTodosByIdsNew([43, 21, 55, 100, 10]);