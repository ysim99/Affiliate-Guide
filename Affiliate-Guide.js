function toggleQA(element) {
    // Close all other active containers
    const allContainers = document.querySelectorAll(".afg-qa-container");
    allContainers.forEach((container) => {
        if (container !== element) {
            container.classList.remove("active");
        }
    });

    // Toggle the clicked container
    element.classList.toggle("active");
}