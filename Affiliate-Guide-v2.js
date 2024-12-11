function toggle(element) {
    const allContainers = document.querySelectorAll(".afg-toggle-container");
    allContainers.forEach((container) => {
        if (container !== element && !container.querySelector('.afg-about')) {
            container.classList.remove("active");
        }
    });

    element.classList.toggle("active");
}
