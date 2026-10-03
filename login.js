const signupTab = document.querySelector("#signup-tab");
const loginTab = document.querySelector("#login-tab");

const switchToSignup = document.querySelector("#switchToSignup");
const switchToLogin = document.querySelector("#switchToLogin");

if (switchToSignup) {
    switchToSignup.addEventListener("click", function (e) {
        e.preventDefault();

        if (signupTab) {
            signupTab.click();
        }
    });
}

if (switchToLogin) {
    switchToLogin.addEventListener("click", function (e) {
        e.preventDefault();

        if (loginTab) {
            loginTab.click();
        }
    });
}


// ================= THEME =================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}


// ================= LOGIN FORM =================

const loginForm = document.querySelector("form");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const emailInput = document.querySelector("#email");
        const passwordInput = document.querySelector("#password");

        const emailValue = emailInput ? emailInput.value.trim() : "";
        const passwordValue = passwordInput ? passwordInput.value : "";

        if (emailValue !== "admin@uok.edu.pk") {
            alert("Please enter a valid email");
            return;
        }

        if (passwordValue !== "admin123") {
            alert("Please Enter a Valid Password");
            return;
        }

        window.location.href = "dashboard.html";
    });
}
