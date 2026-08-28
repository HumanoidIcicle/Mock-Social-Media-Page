import {postComments} from "./createComments.js";
import {UsernameClick} from "./createModal.js"

export function createPosts(users, posts, comments){
    let fragment = document.createDocumentFragment();
    const display = document.getElementById("display");
    if(!display) return;
    
    posts.forEach(post => {
        const postArticle = document.createElement('article'); 
        postArticle.classList.add("article");

        const username = document.createElement('a');
        username.classList.add("p-username");

        const title = document.createElement('h3');
        title.classList.add("p-title");

        const body = document.createElement('p');
        body.classList.add("p-body");

        const reactions = document.createElement('p');
        reactions.classList.add("p-reactions");
        reactions.textContent = `👀: ${post.views} 😍:${post.reactions.likes} 🤬:${post.reactions.dislikes}`;

        const showComments = document.createElement('button');
        showComments.textContent = "See comments:";

        showComments.classList.add("c-btn");

        username.style.textDecoration = "none";
        title.textContent = post.title;
        body.textContent = post.body;

        const tags = document.createElement('p');
        tags.classList.add("p-tags");
        let ptags = ``;
        post.tags.forEach(tag => {
            ptags += `#${tag} `;
        });
        tags.textContent = ptags;
        
        users.forEach(user => {
            if(post.userId === user.id){
                username.textContent = `@${user.username}`;
            }
        });

        if(username.textContent === ""){
            username.textContent = `@unknown `;
        }

        postArticle.append(username, title, body, tags, reactions, showComments);
        postComments(postArticle, post, comments, users);
        fragment.appendChild(postArticle);

        /*Show article on page*/
        display.appendChild(fragment);
        
        /*Event listener for when click username*/
        UsernameClick(username, users);

        /*Event listener to show/hide comments*/
        showComments.addEventListener('click', () => {
            const commentSection = postArticle.querySelector('.comments-section');
            if (commentSection) {
                if (getComputedStyle(commentSection).display === 'none') {
                    commentSection.style.display = 'block';
                    showComments.textContent = "Hide comments";
                } else {
                    showComments.textContent = "See comments: ";
                    commentSection.style.display = 'none';
                }
            }
        });
        
    });
}
