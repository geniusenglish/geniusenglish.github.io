document.addEventListener("DOMContentLoaded", () => {

    /* ===========================
       HERO LOGO SLIDE
    =========================== */

    const slides = document.querySelectorAll(".logo-slide");

    if (slides.length > 0) {

        let current = 0;

        function startLoop() {

            slides.forEach((slide, i) => {
                slide.classList.toggle("show", i === current);
            });

            current = (current + 1) % slides.length;

            setTimeout(startLoop, 5000);

        }

        startLoop();

    }

    /* ===========================
       BOOK SEARCH
    =========================== */

    const searchInput = document.getElementById("searchInput");

    if (searchInput) {

        searchInput.addEventListener("keyup", function () {

            const keyword = this.value.toLowerCase().trim();

            document.querySelectorAll(".book").forEach(book => {

                const title = book.dataset.title.toLowerCase();

                if (title.includes(keyword)) {
                    book.style.display = "";
                } else {
                    book.style.display = "none";
                }

            });

        });

    }

});

const bookGrid = document.getElementById("bookGrid");

if (bookGrid && typeof books !== "undefined") {

    books.forEach(book => {

        bookGrid.innerHTML += `

<div class="book" data-title="${book.title}">

    <img src="${book.image}" alt="${book.title}">

    <h3>${book.title}</h3>

    <button class="audio-btn">
        🎧 음원 듣기
    </button>

    <audio preload="none">
        <source src="${book.audio}" type="audio/mpeg">
    </audio>

</div>

`;

    });

}


/* 버튼 누르면 플레이어 열기 */

document.addEventListener("click",function(e){

    if(e.target.classList.contains("audio-btn")){

        const card=e.target.parentElement;

        const audio=card.querySelector("audio");

        if(audio.style.display==="block"){

            audio.pause();

            audio.style.display="none";

            e.target.innerHTML="🎧 음원 듣기";

        }else{

            document.querySelectorAll(".book audio").forEach(a=>{

                a.pause();

                a.style.display="none";

            });

            document.querySelectorAll(".audio-btn").forEach(btn=>{

                btn.innerHTML="🎧 음원 듣기";

            });

            audio.style.display="block";

            e.target.innerHTML="❌ 닫기";

        }

    }

});