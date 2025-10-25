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
