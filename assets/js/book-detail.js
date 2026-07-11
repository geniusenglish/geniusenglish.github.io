document.addEventListener("DOMContentLoaded", () => {

    /* ===========================
       URL에서 책 ID 가져오기
    =========================== */

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (!id || typeof books === "undefined") return;

    /* ===========================
       책 찾기
    =========================== */

    const book = books.find(item => item.id === id);

    if (!book) {

        document.querySelector(".detail-top").innerHTML = `
            <div class="container" style="text-align:center;padding:100px 20px;">
                <h2>📕 책 정보를 찾을 수 없습니다.</h2>
                <br>
                <a href="reading.html">목록으로 돌아가기</a>
            </div>
        `;

        return;

    }

    /* ===========================
       책 정보 출력
    =========================== */

    document.title = `${book.title} | Genius English Academy`;

    document.getElementById("bookTitle").textContent = book.title;
    document.getElementById("bookAR").textContent = `AR ${book.ar}`;

    document.getElementById("bookImage").src = book.image;
    document.getElementById("bookImage").alt = book.title;

    document.getElementById("bookAuthor").textContent =
        book.author || "-";

    document.getElementById("bookSeries").textContent =
        book.series || "-";

    const category = document.getElementById("bookCategory");

    if (category) {
        category.textContent = book.category || "-";
    }

    /* ===========================
       AUDIO PLAYER
    =========================== */

    const audioPlayer = document.getElementById("bookAudio");
    const audioSource = document.getElementById("audioSource");

    if (audioPlayer && audioSource) {

        audioSource.src = book.audio;
        audioPlayer.load();

    }

    /* ===========================
   ABOUT THIS BOOK
=========================== */

const summary = document.getElementById("summary");

if (summary) {

    summary.textContent = book.summary || "";

}

    /* ===========================
       BACK BUTTON
    =========================== */

    const backBtn = document.getElementById("backBtn");
    const backText = document.getElementById("backText");

    if (backBtn && backText) {

        backBtn.href = `ar${book.level}.html`;

        backText.textContent =
            `AR ${book.level}점대 목록으로`;

    }

    /* ===========================
   MORE FROM THIS SERIES
=========================== */

const seriesTitle = document.getElementById("seriesTitle");
const seriesGrid = document.getElementById("seriesBooks");

if (seriesGrid && book.series) {

    // 시리즈 제목 표시
    if (seriesTitle) {
        seriesTitle.innerHTML = `📚 ${book.series}`;
    }

    // 같은 시리즈 책 (현재 책 제외)
    const relatedBooks = books.filter(item =>
        item.series === book.series &&
        item.id !== book.id
    );

    relatedBooks.forEach(item => {

        seriesGrid.innerHTML += `

<a class="series-book" href="book-detail.html?id=${item.id}">

    <img src="${item.image}" alt="${item.title}">

    <h4>${item.title}</h4>

    <span>AR ${item.ar}</span>

</a>

`;

    });

}
});