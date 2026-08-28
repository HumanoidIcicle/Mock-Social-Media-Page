import fetchAll from "./apiHandler.js";

let more = document.querySelector(".more")
let total = 251;
let limit = 6;
let skip = 0;

const users = `https://dummyjson.com/users?limit=208` //208
let posts = `https://dummyjson.com/posts?limit=${limit}&skip=${skip}` //251
const comments =`https://dummyjson.com/comments?limit=340` //340

document.addEventListener("DOMContentLoaded", () => {
    fetchAll(users, posts, comments);
})

more.addEventListener("click", () =>{
    if(skip < total) {
        skip += limit
        posts = `https://dummyjson.com/posts?limit=${limit}&skip=${skip}` //251
        fetchAll(users, posts, comments);
    }
})



