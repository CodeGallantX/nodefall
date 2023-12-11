// carousel
let currentSlide = 0;
const intervalTime = 5000; // Set the interval time in milliseconds
let slideInterval;

function startSlide() {
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, intervalTime);
}

function stopSlide() {
    clearInterval(slideInterval);
}

function changeSlide(direction) {
    const carousel = document.querySelector('.carousel');
    const totalSlides = document.querySelectorAll('.carousel-item').length;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    const translateValue = -currentSlide * 100 + '%';
    carousel.style.transform = 'translateX(' + translateValue + ')';
}

document.addEventListener('DOMContentLoaded', startSlide); // Start the slide show when the page loads
