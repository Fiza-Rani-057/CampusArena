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
// GSAP ScrollTrigger Register
gsap.registerPlugin(ScrollTrigger);

// 1. Sections Fade-in & Slide-up Animation
gsap.utils.toArray("section").forEach((section) => {
    gsap.from(section, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: section,
            start: "top 85%", 
            end: "top 50%",
            toggleActions: "play none none none" 
        }
    });
});

// 2. Tournament ya Sports Cards ke liye Staggered Animation
gsap.from(".card", {
    scrollTrigger: {
        trigger: ".card",
        start: "top 85%",
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.2 
});


