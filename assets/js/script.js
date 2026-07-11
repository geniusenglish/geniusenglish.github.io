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

    const searchInput = document.getElementById("bookSearch");

    if (searchInput) {

        searchInput.addEventListener("keyup", function () {

            const keyword = this.value.toLowerCase().trim();

            document.querySelectorAll(".book").forEach(book => {

                const title = book.dataset.title.toLowerCase();

                book.style.display =
                    title.includes(keyword) ? "" : "none";

            });

        });

    }

    /* ===========================
       BOOK GRID
    =========================== */

    const bookGrid = document.getElementById("bookGrid");

    if (bookGrid && typeof books !== "undefined") {

        const level =
            typeof currentLevel !== "undefined"
                ? currentLevel
                : null;

        const filteredBooks =
            level === null
                ? books
                : books.filter(book => book.level === level);

        filteredBooks.forEach(book => {

            bookGrid.innerHTML += `

<a class="book"
href="book-detail.html?id=${book.id}"
data-title="${book.title}">

    <img src="${book.image}" alt="${book.title}">

    <h3>${book.title}</h3>

    <div class="book-like">
        ❤️ ${book.likes}
    </div>

</a>

`;

        });

    }

});