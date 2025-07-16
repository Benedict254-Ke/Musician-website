// Loader
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  loader.style.opacity = '0';
  setTimeout(() => loader.style.display = 'none', 500);
});

// Dark Mode Toggle
const toggleBtn = document.getElementById('dark-mode-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Gallery Slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
function moveSlide(n) {
  slides[slideIndex].classList.remove('active');
  slideIndex = (slideIndex + n + slides.length) % slides.length;
  slides[slideIndex].classList.add('active');
}

// Newsletter Submission
const newsletterForm = document.getElementById('newsletter-form');
const successMsg = document.querySelector('.success-message');
newsletterForm.addEventListener('submit', function(e) {
  e.preventDefault();
  successMsg.style.display = 'block';
  setTimeout(() => {
    successMsg.style.display = 'none';
    newsletterForm.reset();
  }, 3000);
});