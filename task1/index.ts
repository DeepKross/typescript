const url = "https://jsonplaceholder.typicode.com/posts";

type Post = {
    id: string;
    title: string;
    body: string;
    userId: string;
};

type returnType ={
    posts: Post[];
    status: true | false;
}

async function getPosts():Promise<returnType> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts: Post[] = await response.json();

        return {posts: posts, status: true};
    } catch (error) {
        console.error(error);
        let errorObj = {posts: [], status: false};
        return errorObj;
    }
}

async function logPosts() {
    const result = await getPosts();

    if(result.status === false) {
        console.log("Error");
        return;
    }
    else {
        console.log(result);
        let wrapper = document.querySelector(".post-content");

        if (!wrapper) {
            console.log("wrapper not found");
            return;
        } else{
            for(let key = 0; key < result.posts.length; key++) {
                wrapper.innerHTML += `<div class="post-userid">User ID: ${result.posts[key].userId}</div>
                <div class="post-id">Post ID: ${result.posts[key].id}</div>
                <div class="post-title">Title: ${result.posts[key].title}</div>
                <div class="post-body">Body: ${result.posts[key].body}</div><br/>`;
            };
        }
    }


}

logPosts();