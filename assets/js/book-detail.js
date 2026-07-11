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

    // Publisher 대신 Category 표시
    const publisher = document.getElementById("bookPublisher");

    if (publisher) {

        publisher.textContent =
            book.category || "-";

    }

    // 음원 버튼
    const listenBtn =
        document.getElementById("listenBtn");

    if (listenBtn) {

        listenBtn.href = book.audio;

    }

});