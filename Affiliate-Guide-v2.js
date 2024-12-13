document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // Optional: Stop observing once the element is visible
          observer.unobserve(entry.target);
        }
      });
    });
  
    const containers = document.querySelectorAll(".afg-container");
    containers.forEach((container) => observer.observe(container));
  });
  

function toggle(element) {
    const allContainers = document.querySelectorAll(".afg-toggle-container");
    allContainers.forEach((container) => {
        if (container !== element && !container.querySelector('.afg-about')) {
            container.classList.remove("active");
        }
    });

    element.classList.toggle("active");
}



let slideIndex = 0;

function calculateSlideWidth() {
    const slide = document.querySelector('.afg-slide');
    const slideWidth = slide.offsetWidth;
    const gap = parseInt(getComputedStyle(document.querySelector('.afg-carousel')).gap, 10);
    return slideWidth + gap;
}

function showSlide(index) {
    const slides = document.querySelectorAll('.afg-slide');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }

    const slideWidthWithGap = calculateSlideWidth();
    const offset = -slideIndex * slideWidthWithGap;

    const carousel = document.querySelector('.afg-carousel');
    carousel.style.transform = `translateX(${offset}px)`;
}

function moveSlide(step) {
    slideIndex += step;
    showSlide(slideIndex);
}

// Initialize the carousel by showing the first slide
showSlide(slideIndex);

// Mobile swipe functionality
let startTouch = 0;
let endTouch = 0;

function handleTouchStart(event) {
    startTouch = event.touches[0].clientX; // Get the starting X position
}

function handleTouchEnd(event) {
    endTouch = event.changedTouches[0].clientX; // Get the ending X position

    if (startTouch > endTouch + 50) {
        moveSlide(1); // Swipe left (next slide)
    } else if (startTouch < endTouch - 50) {
        moveSlide(-1); // Swipe right (previous slide)
    }
}

// Check if it's a mobile device
if (window.innerWidth <= 767) {
    const carouselContainer = document.querySelector('.afg-carousel');
    carouselContainer.addEventListener('touchstart', handleTouchStart);
    carouselContainer.addEventListener('touchend', handleTouchEnd);
}



