/* ===========================
   NOTICE LIST
=========================== */

const notices = [

    {
        id: "notice_260908",
        date: "2026.09.08",
        category: "수업안내",
        title: "9월 그룹 라이팅 클래스 안내",
        description:
            "9월에도 원서를 활용한 그룹 라이팅 수업이 진행됩니다. Story와 Nonfiction 원서를 통해 읽기와 쓰기를 자연스럽게 연결합니다.",
        link: "notice/notice_260908.html"
    }

];


/* ===========================
   NOTICE ELEMENTS
=========================== */

const noticeList = document.getElementById("noticeList");
const noticeEmpty = document.getElementById("noticeEmpty");
const filterButtons = document.querySelectorAll(".filter-btn");


/* ===========================
   NOTICE RENDER
=========================== */

function renderNotices(category = "all") {

    noticeList.innerHTML = "";

    const filteredNotices =
        category === "all"
            ? notices
            : notices.filter(notice => notice.category === category);


    /* 공지사항이 없는 경우 */

    if (filteredNotices.length === 0) {

        noticeEmpty.style.display = "block";

        return;

    }

    noticeEmpty.style.display = "none";


    /* 공지사항 출력 */

    filteredNotices.forEach(notice => {

        const item = document.createElement("a");

        item.href = notice.link;

        item.className = "notice-item";


        item.innerHTML = `

            <div class="notice-date">
                ${notice.date}
            </div>

            <div class="notice-content">

                <div class="notice-meta">

                    <span class="notice-category">
                        ${notice.category}
                    </span>

                </div>

                <h2>
                    ${notice.title}
                </h2>

                <p>
                    ${notice.description}
                </p>

            </div>

            <div class="notice-arrow">

                <i class="fa-solid fa-chevron-right"></i>

            </div>

        `;


        noticeList.appendChild(item);

    });

}


/* ===========================
   CATEGORY FILTER
=========================== */

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const category =
            button.dataset.category;

        renderNotices(category);

    });

});


/* ===========================
   INITIAL RENDER
=========================== */

renderNotices();