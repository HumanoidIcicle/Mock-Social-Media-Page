export function UsernameClick(username, users) {
    username.addEventListener('click', () => {
        const clickedUsername = username.textContent.replace('@', '');
        const modalContainer = userModal(users, clickedUsername);

        document.body.appendChild(modalContainer);
        modalContainer.classList.add('show');

        const closeButton = modalContainer.querySelector('.close-btn');
        closeButton.addEventListener('click', () => modalContainer.remove());
    });
}

function userModal(users, username){ //Information to include in the modal
    const user = users.find(him => him.username === username);

    let fragment = document.createDocumentFragment();
    const modalContainer = document.createElement("div");
    modalContainer.classList.add("modalContainer");

    const modal = document.createElement("div");
    modal.classList.add("modal");

    const Name = document.createElement("h3");
    Name.textContent = `Name: ${user.Name}`;

    const gender = document.createElement("p");
    gender.textContent = `Gender: ${user.gender}`;

    const email = document.createElement("p");
    email.textContent = `Email-address: ${user.email}`;

    const phone = document.createElement("p");
    phone.textContent = `Phone: ${user.phone}`;

    const birthday = document.createElement("p");
    birthday.textContent = `Birthday: ${user.birthday}`;

    const blood = document.createElement("p");
    blood.textContent = `Blood-type: ${user.blood}`;

    const height = document.createElement("p");
    height.textContent = `Height: ${user.height} cm`;

    const weight = document.createElement("p");
    weight.textContent = `Weight: ${user.weight} kg`;

    const eyecolor = document.createElement("p");
    eyecolor.textContent = `Eyecolor: ${user.eyecolor}`;

    const haircolor = document.createElement("p");
    haircolor.textContent = `Haircolor: ${user.haircolor}`;

    const profile = document.createElement("img");
    profile.src = "./infinytum.png";
    profile.alt = `${user.username}'s logo`;
    profile.style.width = '50px'

    const close = document.createElement("button");
    close.textContent = `😵‍💫Stop Stalking: ${username}😵`;
    close.classList.add("close-btn");

    modal.append(profile, Name, gender, email, phone, birthday, blood, 
        height, weight, eyecolor, haircolor, close);
    fragment.appendChild(modal);

    modalContainer.append(fragment);
    return modalContainer;
}
