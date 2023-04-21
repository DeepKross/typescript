"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const url = "https://jsonplaceholder.typicode.com/posts";
function getPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://jsonplaceholder.typicode.com/posts');
            const posts = yield response.json();
            return { posts: posts, status: true };
        }
        catch (error) {
            console.error(error);
            let errorObj = { posts: [], status: false };
            return errorObj;
        }
    });
}
//write a function that displays the array of posts from getPosts in the console
/*async function displayPosts() {
  try {
      let posts = await getPosts();

      let wrapper = document.querySelector(".post-container");

      posts.forEach((post) => {
          if(wrapper) {
              wrapper.innerHTML = `<div class="post-userid">${post.userId}</div>
                <div class="post-id">${post.id}</div>
                <div class="post-title">${post.title}</div>
                <div class="post-body">${post.body}</div>`;
          }
          else {
              console.log("wrapper not found");
          }
      });
  } catch (error) {
        console.log(error);
  }
}*/
//displayPosts();
function logPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield getPosts();
        if (result.status === false) {
            console.log("Error");
            return;
        }
        else {
            console.log(result);
            let wrapper = document.querySelector(".post-content");
            if (!wrapper) {
                console.log("wrapper not found");
                return;
            }
            else {
                for (let key = 0; key < result.posts.length; key++) {
                    wrapper.innerHTML += `<div class="post-userid">User ID: ${result.posts[key].userId}</div>
                <div class="post-id">Post ID: ${result.posts[key].id}</div>
                <div class="post-title">Title: ${result.posts[key].title}</div>
                <div class="post-body">Body: ${result.posts[key].body}</div><br/>`;
                }
                ;
            }
        }
    });
}
logPosts();
