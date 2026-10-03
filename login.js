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
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

// ================= LOGIN FORM VALIDATION & REDIRECT =================
const loginForm = document.querySelector('form');

if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const emailInput = document.querySelector('#email');
        const passwordInput = document.querySelector('#password');
        
        const emailValue = emailInput ? emailInput.value.trim() : '';
        const passwordValue = passwordInput ? passwordInput.value : '';

        const isKUEmail = (emailValue=== `ku@gmail.com`)

        if (!isKUEmail) {
            alert('Please enter a valid email');
            return;
        }

        if (passwordValue !== 'admin123') {
            alert('Please Enter a Valid Password');
            return;
        }
        window.location.href = 'dashboard.html'; 
    });
}