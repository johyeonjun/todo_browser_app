const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting")
const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit)
} else {
    // show the username
    paingGreetings(savedUsername);
}

link.addEventListener("click", handleLinkClick)

function onLoginSubmit(event) {
    // 브라우저의 기본동작을 막음
    event.preventDefault();
    
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value
    localStorage.setItem(USERNAME_KEY, username);
    paingGreetings(username);
    
}

function handleLinkClick(event){
    event.preventDefault();
    alert('click');
}

function paingGreetings(username) {
    greeting.innerText = `Hello ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

