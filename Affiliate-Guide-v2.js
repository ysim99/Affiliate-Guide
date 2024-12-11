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



let index = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.afg-slide');
    const totalSlides = slides.length;

    index += step;

    // Loop back to the first slide if at the end
    if (index < 0) {
        index = totalSlides - 3;
    } else if (index >= totalSlides-2) {
        index = 0;
    }

    // Move the carousel to the new position
    const carousel = document.querySelector('.afg-carousel');
    carousel.style.transform = `translateX(-${index * 18}%)`;
}