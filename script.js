const themeToggleBtn = document.getElementById('themeToggleBtn');
const bodyElement = document.body;
const iconElement = themeToggleBtn.querySelector('i');

themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-mode');
    
    if (bodyElement.classList.contains('dark-mode')) {
        iconElement.classList.remove('fa-moon', 'text-dark');
        iconElement.classList.add('fa-sun', 'text-warning');
    } else {
        iconElement.classList.remove('fa-sun', 'text-warning');
        iconElement.classList.add('fa-moon', 'text-dark');
    }
});