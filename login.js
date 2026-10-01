const signupTab = document.querySelector("#signup-tab");
const loginTab = document.querySelector("#login-tab");

document.querySelector("#switchToSignup").addEventListener("click", function (e) {
    e.preventDefault();
    signupTab.click();
});

document.querySelector("#switchToLogin").addEventListener("click", function (e) {
    e.preventDefault();
    loginTab.click();
});