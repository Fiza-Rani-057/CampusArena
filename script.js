const themeToggleBtn = document.getElementById("themeToggleBtn");
const bodyElement = document.body;
const iconElement = themeToggleBtn.querySelector("i");

themeToggleBtn.addEventListener("click", function () {

    bodyElement.classList.toggle("dark-mode");

    if (bodyElement.classList.contains("dark-mode")) {

        iconElement.classList.remove("fa-moon", "text-dark");
        iconElement.classList.add("fa-sun", "text-warning");

        localStorage.setItem("theme", "dark");

    } else {

        iconElement.classList.remove("fa-sun", "text-warning");
        iconElement.classList.add("fa-moon", "text-dark");

        localStorage.setItem("theme", "light");
    }
});


const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    bodyElement.classList.add("dark-mode");

    iconElement.classList.remove("fa-moon", "text-dark");
    iconElement.classList.add("fa-sun", "text-warning");

} else {

    bodyElement.classList.remove("dark-mode");

    iconElement.classList.remove("fa-sun", "text-warning");
    iconElement.classList.add("fa-moon", "text-dark");
}
