document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".logo-slide");

    let current = 0;

    function startLoop() {

        // 현재 이미지 표시
        slides.forEach((slide, i) => {
            slide.classList.toggle("show", i === current);
        });

        // 다음 이미지
        current = (current + 1) % slides.length;

        // GENIUS는 5초, 슬로건은 5초
        const delay = current === 1 ? 5000 : 5000;

        setTimeout(startLoop, delay);
    }

    startLoop();

});