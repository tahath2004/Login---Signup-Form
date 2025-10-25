<<<<<<< HEAD
const container = document.querySelector(".container");
const registerBtn = document.querySelector(".register-btn");
const loginBtn = document.querySelector(".login-btn");

// Register button click
registerBtn.addEventListener("click", () => {
    container.classList.add("active");
});

// Login button click
loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
});
=======
const container = document.querySelector(".container");
const registerBtn = document.querySelector(".register-btn");
const loginBtn = document.querySelector(".login-btn");

registerBtn.addEventListener("click", () => {
    container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
});
>>>>>>> 311100166865c9f241fe6541851e4880f0e543bd
