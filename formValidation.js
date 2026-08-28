validateForm()

function validateForm() {
    const form = document.querySelector("form");
    const send = document.getElementById("send");
    const submitBtn = document.getElementById("submit-btn");
    if(!send) return;

    send.addEventListener("change", () => {
        submitBtn.disabled = !send.checked;
    });

    submitBtn.addEventListener("click", (event) => {
        event.preventDefault();
        setError(formError, "");
        if (!validName() || !validEmail(email)) return;
        
        form.submit();
        setError("Form submited");
    });
}

function setError(msg = "") {
    const formError = document.getElementById("formError");

    formError.textContent = msg;
    formError.style.width = msg ? "fit-content": "inherit";
    formError.style.color = msg ? "#f40101ff": "inherit";
    formError.style.background = msg ? "#fffc4aff": "inherit";
}

function validName() {
    const fullname = document.getElementById("Name");

    const reg = /\d/;
    if(fullname.value === ""){setError("Name must be filled"); return;}
    
    if (reg.test(fullname.value)) {setError("Name must not include numbers."); return;}
    return true;
}

function validEmail() {
    const email = document.getElementById("email");

    if(email.value === ""){setError("Email must be filled."); return;}
    
    if(!email.value.includes("@")) {setError("Email must include '@'."); return;}

    if (!email.value.includes(".")){setError("Email must include '.'."); return;} 
    return true;
}

