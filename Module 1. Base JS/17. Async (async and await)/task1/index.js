const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

let isLoading = false;

const createNewPostNew = async () => {
    isLoading = true;

    try {
        console.log(await (await fetch(POSTS_URL, { method: "POST" })).json());
    } catch (error) {
        console.log(error);
    } finally { () => { isLoading = false } }
}

createNewPostNew();