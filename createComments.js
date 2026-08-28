import {UsernameClick} from "./createModal.js"

export function postComments(article, post, comments, users){
    let fragment = document.createDocumentFragment();
    let allComments = document.createElement('section');
    allComments.classList.add("comments-section");

    const thisPost = comments.filter(com => com.postId === post.id); //filter to return list of only comments for this post

    /*If no comments for post*/
    if(thisPost.length === 0){
        allComments.textContent = "No comments yet. Be the first to comment!";
        return article.appendChild(allComments);
    }
    /*If comments exist for post*/
    thisPost.forEach(com => {
        let commentArticle = document.createElement("article");
        commentArticle.classList.add("comment-article");

        let comment = document.createElement('p');
        comment.classList.add("comment-body");
        comment.textContent = com.body;

        let commentId = document.createElement('p');
        commentId.classList.add("comment-id");
        commentId.textContent = `Post-ID: ${com.id}`

        let username = document.createElement('p');
        username.classList.add("p-username");
        /*Find username for comment*/
        users.forEach(user => {
            if(com.user.id === user.id){
                username.textContent = `@${user.username}`;
            }
        });

        /*If username isn't found*/
        if(username.textContent === ""){
            username.textContent = `@unknown`;
        }
        
        commentArticle.append(username, comment, commentId);
        allComments.appendChild(commentArticle);
        fragment.appendChild(allComments);

        /*Event listener for when click username*/
        UsernameClick(username, users);
    });

    article.appendChild(fragment); //Add the whole comments section to the post article
}
