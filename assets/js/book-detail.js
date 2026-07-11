document.addEventListener("DOMContentLoaded", () => {

    // URL에서 id 가져오기
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (!id || typeof books === "undefined") return;

    // 해당 책 찾기
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

    document.getElementById("bookAR").textContent =
        `AR ${book.ar}`;

    document.getElementById("bookImage").src =
        book.image;

    document.getElementById("bookImage").alt =
        book.title;

    document.getElementById("bookAuthor").textContent =
        book.author || "-";

    document.getElementById("bookSeries").textContent =
        book.series || "-";

    /* ===========================
   Category 표시
=========================== */

const category = document.getElementById("bookCategory");

if (category) {

    category.textContent = book.category || "-";

}



    /* ===========================
   AUDIO PLAYER
=========================== */

const audioPlayer =
document.getElementById("bookAudio");

const audioSource =
document.getElementById("audioSource");

if(audioPlayer && audioSource){

    audioSource.src = book.audio;

    audioPlayer.load();

}


/* ===========================
   Book Summary
=========================== */

const summaryEn = document.getElementById("summaryEn");

if (summaryEn) {
    summaryEn.textContent =
        book.summary_en || "Coming soon.";
}

const summaryKo = document.getElementById("summaryKo");

if (summaryKo) {
    summaryKo.textContent =
        book.summary_ko || "준비중입니다.";
}


});

/* ===========================
   BACK BUTTON
=========================== */

const backBtn = document.getElementById("backBtn");
const backText = document.getElementById("backText");

if(backBtn && backText){

    backBtn.href = `ar${book.level}.html`;

    backText.textContent =
        `AR ${book.level}점대 목록으로`;

}

    /* ===========================
   SUMMARY
=========================== */

document.getElementById("summaryEn").textContent =
book.summary_en || "";

document.getElementById("summaryKo").textContent =
book.summary_ko || "";


/* ===========================
   More from this Series
=========================== */

const seriesGrid = document.getElementById("seriesBooks");

if (seriesGrid && book.series) {

    const relatedBooks = books.filter(b =>
        b.series === book.series &&
        b.id !== book.id
    );

    // ⭐ 같은 시리즈가 없는 경우
    if (relatedBooks.length === 0) {

        seriesGrid.innerHTML = `
            <p class="empty-series">
                같은 시리즈의 다른 도서를 준비 중입니다.
            </p>
        `;

    } else {

        // ⭐ 같은 시리즈가 있는 경우
        relatedBooks.forEach(item => {

            seriesGrid.innerHTML += `

<a class="series-book"
href="book-detail.html?id=${item.id}">

    <img src="${item.image}" alt="${item.title}">

    <h4>${item.title}</h4>

    <span>AR ${item.ar}</span>

</a>

`;

        });

    }

}

