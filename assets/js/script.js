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

const bookGrid=document.getElementById("bookGrid");

if(bookGrid && typeof books!=="undefined"){

books.forEach(book=>{

bookGrid.innerHTML+=`

<a
class="book"
href="${book.youtube}"
target="_blank"
data-title="${book.title}">

<img src="${book.image}" alt="${book.title}">

<p>${book.title}</p>

</a>

`;

});

}