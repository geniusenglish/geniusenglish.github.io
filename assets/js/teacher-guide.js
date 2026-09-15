/*
========================================================
Genius English Academy - Teacher Guide Data

기본 책 정보는 assets/js/books.js에서 가져옵니다.
이 파일에는 Teacher Guide 전용 내용만 넣습니다.

새 책 추가 형식:

"책ID": {
  summary: "Quick Summary",
  vocabulary: [
    ["word", "한글 의미"],
    ["word", "한글 의미"]
  ],
  questions: [
    ["Question", "Model Answer"],
    ["Question", "Model Answer"]
  ],
  writing: [
    "Sentence 1",
    "Sentence 2",
    "Sentence 3"
  ]
}
========================================================
*/

const teacherGuides = {

  "thegokart": {
    summary:
      "Biff and Chip learn to share a go-kart and take turns riding it.",

    vocabulary: [
      ["go-kart", "고카트"],
      ["ride", "타다"],
      ["turn", "차례"],
      ["share", "함께 사용하다"],
      ["wait", "기다리다"]
    ],

    questions: [
      [
        "What was your favorite part? Why?",
        "My favorite part was when Biff and Chip rode the go-kart because it was fun."
      ],
      [
        "Why did Biff and Chip need to take turns?",
        "They needed to take turns because they were sharing the go-kart."
      ],
      [
        "What did Biff and Chip do with the go-kart?",
        "They rode the go-kart and took turns."
      ],
      [
        "Did you like the book? Why?",
        "Yes, I did. I liked it because the story was simple and funny."
      ]
    ],

    writing: [
      "Biff and Chip get a go-kart and want to ride it.",
      "They share the go-kart and take turns riding it.",
      "In the end, they enjoy riding the go-kart together."
    ]
  }

};