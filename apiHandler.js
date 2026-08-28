import { createPosts } from "./createPosts.js";

async function fetchData(link) {
    try {
        let response = await fetch(link);
        let data = await response.json();
        return data
    } catch (error) {
        console.log(`The error was: ${error}`)
    }
}
export default async function fetchAll(usersLink, postsLink, commentsLink) {
    try{
        const Posts = await fetchData(postsLink);
        let posts = Posts.posts;

        const Comments = await fetchData(commentsLink);
        let comments = Comments.comments;

        const Users = await fetchData(usersLink);
        let users = Users.users.map(user => ({
            id: user.id,
            Name: `${user.firstName} ${user.lastName}`,
            username: user.username,
            gender: user.gender,
            email: user.email,
            height: user.height,
            weight: user.weight,
            phone: user.phone,
            eyecolor:user.eyeColor,
            birthday: user.birthDate,
            blood: user.bloodGroup,
            haircolor: user.hair.color
        }));

        createPosts(users, posts, comments);
    }
    catch (err) {
        console.log('What went wrong?:', err);
    }
};
