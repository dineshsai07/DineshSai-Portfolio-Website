// Form handler shows a message below the form
const form = document.getElementById('contact-form');
const response = document.getElementById('form-response');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    response.textContent = 'Thank you for your message!';
    response.classList.remove('hidden');
    form.reset();
});

// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
