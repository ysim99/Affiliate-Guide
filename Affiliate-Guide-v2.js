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


showSlide(slideIndex);


