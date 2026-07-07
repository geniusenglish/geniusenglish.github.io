document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".logo-slide");

    let current = 0;

    setInterval(() => {

        slides[current].classList.remove("active");

        const next = (current + 1) % slides.length;

        slides[next].classList.add("active");

        current = next;

    }, 3000);

});