let sign=document.querySelector(".sign");
let log=document.querySelector(".login");
let mssg=document.querySelector(".mssg");
let logout=document.querySelector(".logout");
const hashPassword = (password) => {
    return password.split("").reduce((hash, char) => hash + char.charCodeAt(0), 0).toString(16);
  };
sign.addEventListener("click",()=>{
    const username = prompt("Enter a username: ");
    if (localStorage.getItem(username)) {
        alert("Username already exists. Try a different one.");
    }
    else{
        const password = prompt("Enter a password: ");
        const hashedPassword = hashPassword(password);
        localStorage.setItem(username, hashedPassword);
        alert("Registration successful!");
        mssg.classList.remove("show");
    }
});
log.addEventListener("click",()=>{
    const username = prompt("Enter your username: ");
    const password = prompt("Enter your password: ");
    const hashedPassword = hashPassword(password);

    if (localStorage.getItem(username) === hashedPassword) {
      alert("Login successful!");
      mssg.classList.remove("show");
    }
    else{
        alert("invalid username or pasword");
    }
});
logout.addEventListener("click",()=>{
    mssg.classList.add("show");
});