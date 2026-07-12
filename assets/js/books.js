const books = [

/* ===========================
   AR 0
=========================== */

{
    id:"big-egg",
    level:0,
    ar:"0.4",
    title:"Big Egg",
    series:"Step into Reading",
    category:"Fiction",
    image:"../images/ar0/ar0_bigegg.jpg",
    audio:"../audio/books/ar0/ar0_bigegg.mp3",
    author:"Molly Coxe",
    summary:""
},

{
    id:"cat-traps",
    level:0,
    ar:"0.5",
    title:"Cat Traps",
    series:"Step into Reading",
    category:"Fiction",
    image:"../images/ar0/ar0_cattraps.jpg",
    audio:"../audio/books/ar0/ar0_cattraps.mp3",
    author:"",
    summary:""
},

{
    id:"the-go-kart",
    level:0,
    ar:"0.8",
    title:"The Go-kart",
    series:"Step into Reading",
    category:"Fiction",
    image:"../images/ar0/ar0_thegokart.jpg",
    audio:"../audio/books/ar0/ar0_thegokart.mp3",
    author:"",
    summary:""
},

/* ===========================
   AR 1
=========================== */

{
    id:"bestpartyever",
    level:1,
    ar:"1.8",
    title:"Best Party Ever!",
    series:"Pizza and Taco",
    category:"Fiction",
    image:"../images/ar1/ar1_bestpartyever.jpg",
    audio:"../audio/books/ar1/ar1_bestpartyever.mp3",
    author:"Stephen Shaskan",
    summary:`Pizza and Taco throw a party, but everything goes hilariously wrong!

    피자와 타코가 최고의 파티를 준비하지만, 모든 일이 엉망이 되며 웃음을 선사하는 이야기입니다.`
},

{
    id:"toocoolforschool",
    level:1,
    ar:"1.9",
    title:"Too Cool for School",
    series:"Pizza and Taco",
    category:"Fiction",
    image:"../images/ar1/ar1_toocoolforschool.jpg",
    audio:"../audio/books/ar1/ar1_toocoolforschool.mp3",
    author:"Stephen Shaskan",
    summary:`Pizza and Taco try to be cool at school, but they learn that being yourself is the coolest of all.

    피자와 타코가 멋진 친구를 따라 하다가, 가장 멋진 것은 자기답게 행동하는 것임을 배우는 이야기입니다.`
},

{
    id:"daretobescared",
    level:1,
    ar:"1.9",
    title:"Dare to be Scared!",
    series:"Pizza and Taco",
    category:"Fiction",
    image:"../images/ar1/ar1_daretobescared.jpg",
    audio:"../audio/books/ar1/ar1_daretobescared.mp3",
    author:"Stephen Shaskan",
    summary:`Pizza and Taco challenge each other to be brave, but they discover everyone gets scared sometimes.

    피자와 타코가 용감함을 증명하려 하지만, 누구나 무서울 때가 있다는 것을 깨닫는 이야기입니다.`
},

{
    id:"miaandthebigsisterballet",
    level:1,
    ar:"1.4",
    title:"Mia and the Big Sister Ballet",
    series:"I Can Read Mia",
    category:"Fiction",
    image:"../images/ar1/ar1_miaandthebigsisterballet.jpg",
    audio:"../audio/books/ar1/ar1_miaandthebigsisterballet.mp3",
    author:"Olga Ivanov,Aleksey Ivanov,Robin Farley",
    summary:`Mia dreams of dancing like her big sister and learns to believe in herself.

    미아는 언니처럼 멋진 발레리나가 되기를 꿈꾸며 자신감을 키워 가는 이야기입니다.`
},

{
    id:"miaandthedaisydance",
    level:1,
    ar:"1.2",
    title:"Mia and the Daisy Dance",
    series:"I Can Read Mia",
    category:"Fiction",
    image:"../images/ar1/ar1_miaandthedaisydance.jpg",
    audio:"../audio/books/ar1/ar1_miaandthedaisydance.mp3",
    author:"Olga Ivanov,Aleksey Ivanov,Robin Farley",
    summary:`Mia helps her friend get ready for a dance show and learns that practicing together is the best part.

    미아는 친구와 함께 공연을 준비하며, 함께 연습하는 즐거움과 우정의 소중함을 배우는 이야기입니다.`
},

{
    id:"miaandthedancefortwo",
    level:1,
    ar:"1.4",
    title:"Mia and the Dance for Two",
    series:"I Can Read Mia",
    category:"Fiction",
    image:"../images/ar1/ar1_miaandthedancefortwo.jpg",
    audio:"../audio/books/ar1/ar1_miaandthedancefortwo.mp3",
    author:"Olga Ivanov,Aleksey Ivanov,Robin Farley",
    summary:`When her partner is absent, Mia finds a kind way to make sure no one feels left out.

    댄스 파트너가 결석하자, 미아는 모두가 함께할 수 있는 방법을 찾아가는 따뜻한 이야기입니다.`
},

{
    id:"miaandthegirlwithatwirl",
    level:1,
    ar:"1.7",
    title:"Mia and the Girl with a Twirl",
    series:"I Can Read Mia",
    category:"Fiction",
    image:"../images/ar1/ar1_miaandthegirlwithatwirl.jpg",
    audio:"../audio/books/ar1/ar1_miaandthegirlwithatwirl.mp3",
    author:"Olga Ivanov,Aleksey Ivanov,Robin Farley",
    summary:`Mia welcomes a new dancer and learns that everyone has their own special way to shine.

    미아는 새 친구를 만나며, 저마다 자신만의 특별한 매력이 있다는 것을 배우는 이야기입니다.`
},

{
    id:"miaandthetinytoeshoes",
    level:1,
    ar:"1.6",
    title:"Mia and the Tiny Toe Shoes",
    series:"I Can Read Mia",
    category:"Fiction",
    image:"../images/ar1/ar1_miaandthetinytoeshoes.jpg",
    audio:"../audio/books/ar1/ar1_miaandthetinytoeshoes.mp3",
    author:"Olga Ivanov,Aleksey Ivanov,Robin Farley",
    summary:`Mia helps young dancers learn ballet and discovers that a great teacher encourages everyone to do their best.

    미아는 어린 발레리나들을 가르치며, 좋은 선생님은 모두가 최선을 다할 수 있도록 도와준다는 것을 배우는 이야기입니다.`
},

{
    id:"miaandthetoobigtutu",
    level:1,
    ar:"1.3",
    title:"Mia and the Too Big Tutu",
    series:"I Can Read Mia",
    category:"Fiction",
    image:"../images/ar1/ar1_miaandthetoobigtutu.jpg",
    audio:"../audio/books/ar1/ar1_miaandthetoobigtutu.mp3",
    author:"Olga Ivanov,Aleksey Ivanov,Robin Farley",
    summary:`On her first ballet day, Mia overcomes a small problem with the help of a new friend.

    첫 발레 수업에서 예상치 못한 어려움을 겪은 미아가 새로운 친구의 도움으로 용기를 얻는 이야기입니다.`
},

{
    id:"miajazzesitup",
    level:1,
    ar:"1.8",
    title:"Mia Jazzes It Up!",
    series:"I Can Read Mia",
    category:"Fiction",
    image:"../images/ar1/ar1_miajazzesitup.jpg",
    audio:"../audio/books/ar1/ar1_miajazzesitup.mp3",
    author:"Olga Ivanov,Aleksey Ivanov,Robin Farley",
    summary:`Mia tries jazz dance and learns that creativity and confidence help her shine.

    미아는 재즈댄스에 도전하며, 창의력과 자신감으로 자신만의 매력을 표현하는 방법을 배우는 이야기입니다.`
},

{
    id:"miasetsthestage",
    level:1,
    ar:"1.2",
    title:"Mia Sets the Stage",
    series:"I Can Read Mia",
    category:"Fiction",
    image:"../images/ar1/ar1_miasetsthestage.jpg",
    audio:"../audio/books/ar1/ar1_miasetsthestage.mp3",
    author:"Olga Ivanov,Aleksey Ivanov,Robin Farley",
    summary:`Mia learns that helping others can be just as important as being in the spotlight.

    미아는 무대의 주인공이 아니어도 다른 사람을 돕는 일이 얼마나 소중한지 배우는 이야기입니다.`
},





/* ===========================
   AR 2
=========================== */

{
    id:"awesomeamphibians",
    level:2,
    ar:"2.6",
    title:"Awesome Amphibians",
    series:"Science Vocabulary Readers",
    category:"Nonfiction",
    image:"../images/ar2/ar2_awesomeamphibians.jpg",
    audio:"../audio/books/ar2/ar2_awesomeamphibians.mp3",
    author:"Jeff Bauer",
    summary: `This science nonfiction book introduces amphibians through engaging photographs and simple text. Readers will learn what amphibians are, how they grow, where they live, and what makes them unique.

양서류는 어떤 동물인지, 어떻게 자라고 어디에서 살며 어떤 특징을 가지고 있는지를 다양한 사진과 함께 배우는 과학 논픽션 책입니다.`
},

{
    id:"beautifulbirds",
    level:2,
    ar:"2.3",
    title:"Beautiful Birds",
    series:"Science Vocabulary Readers",
    category:"Nonfiction",
    image:"../images/ar2/ar2_beautifulbirds.jpg",
    audio:"../audio/books/ar2/ar2_beautifulbirds.mp3",
    author:"Justin McCory Martin",
    summary: `This science nonfiction book helps readers learn about different kinds of birds, their physical features, how they live, and how they adapt to their environments.

다양한 새들의 생김새와 생활 방식, 그리고 새들이 환경에 적응하며 살아가는 특징을 배우는 과학 논픽션 책입니다.`
},

{
    id:"chicklifecycle",
    level:2,
    ar:"2.9",
    title:"Chick Life Cycle",
    series:"Science Vocabulary Readers",
    category:"Nonfiction",
    image:"../images/ar2/ar2_chicklifecycle.jpg",
    audio:"../audio/books/ar2/ar2_chicklifecycle.mp3",
    author:"",
    summary:""
},

{
    id:"froglifecycle",
    level:2,
    ar:"2.1",
    title:"Frog Life Cycle",
    series:"Science Vocabulary Readers",
    category:"Nonfiction",
    image:"../images/ar2/ar2_froglifecycle.jpg",
    audio:"../audio/books/ar2/ar2_froglifecycle.mp3",
    author:"",
    summary:""
},

{
    id:"honeyhunthelpers",
    level:2,
    ar:"2.8",
    title:"Honey Hunt Helpers",
    series:"The Berenstain Bears",
    category:"Fiction",
    image:"../images/ar2/ar2_honeyhunthelpers.jpg",
    audio:"../audio/books/ar2/ar2_honeyhunthelpers.mp3",
    author:"",
    summary:""
},

{
    id:"justforyou",
    level:2,
    ar:"2.5",
    title:"Just for You",
    series:"Little Critter",
    category:"Fiction",
    image:"../images/ar2/ar2_justforyou.jpg",
    audio:"../audio/books/ar2/ar2_justforyou.mp3",
    author:"",
    summary:""
},

{
    id:"justgotobed",
    level:2,
    ar:"2.4",
    title:"Just Go To Bed",
    series:"Little Critter",
    category:"Fiction",
    image:"../images/ar2/ar2_justgotobed.jpg",
    audio:"../audio/books/ar2/ar2_justgotobed.mp3",
    author:"",
    summary:""
},

{
    id:"ladybuglifecycle",
    level:2,
    ar:"2.2",
    title:"Ladybug Life Cycle",
    series:"Science Vocabulary Readers",
    category:"Nonfiction",
    image:"../images/ar2/ar2_ladybuglifecycle.jpg",
    audio:"../audio/books/ar2/ar2_ladybuglifecycle.mp3",
    author:"",
    summary:""
},

{
    id:"sunflowerlifecycle",
    level:2,
    ar:"2.3",
    title:"Sunflower Life Cycle",
    series:"Science Vocabulary Readers",
    category:"Nonfiction",
    image:"../images/ar2/ar2_sunflowerlifecycle.jpg",
    audio:"../audio/books/ar2/ar2_sunflowerlifecycle.mp3",
    author:"",
    summary:""
},

{
    id:"thecoolcaterpillar",
    level:2,
    ar:"2.1",
    title:"The Cool Caterpillar",
    series:"Pete the Cat",
    category:"Nonfiction",
    image:"../images/ar2/ar2_thecoolcaterpillar.jpg",
    audio:"../audio/books/ar2/ar2_thecoolcaterpillar.mp3",
    author:"",
    summary:""
},

{
    id:"theearth",
    level:2,
    ar:"2.5",
    title:"The Earth",
    series:"Science Vocabulary Readers",
    category:"Nonfiction",
    image:"../images/ar2/ar2_theearth.jpg",
    audio:"../audio/books/ar2/ar2_theearth.mp3",
    author:"",
    summary:""
},

{
    id:"themoon",
    level:2,
    ar:"2.4",
    title:"The Moon",
    series:"Science Vocabulary Readers",
    category:"Nonfiction",
    image:"../images/ar2/ar2_themoon.jpg",
    audio:"../audio/books/ar2/ar2_themoon.mp3",
    author:"",
    summary:""
},

{
    id:"whenspringcomes",
    level:2,
    ar:"2.7",
    title:"When Spring Comes",
    series:"",
    category:"Fiction",
    image:"../images/ar2/ar2_whenspringcomes.jpg",
    audio:"../audio/books/ar2/ar2_whenspringcomes.mp3",
    author:"",
    summary:""
},

{
    id:"yourheart",
    level:2,
    ar:"2.2",
    title:"Your Heart",
    series:"Science Vocabulary Readers",
    category:"Nonfiction",
    image:"../images/ar2/ar2_yourheart.jpg",
    audio:"../audio/books/ar2/ar2_yourheart.mp3",
    author:"",
    summary:""
},

{
    id:"rockout",
    level:2,
    ar:"2.0",
    title:"Rock Out!",
    series:"Pizza and Taco",
    category:"Fiction",
    image:"../images/ar2/ar2_rockout.jpg",
    audio:"../audio/books/ar2/ar2_rockout.mp3",
    author:"Stephen Shaskan",
    summary:`Pizza and Taco start a band and learn that making music takes teamwork and practice.

    피자와 타코가 밴드를 만들며 음악에는 팀워크와 연습이 필요하다는 것을 배우는 이야기입니다.`
},

{
    id:"superawesomecomic",
    level:2,
    ar:"2.6",
    title:"Super-Awesome Comic!",
    series:"Pizza and Taco",
    category:"Fiction",
    image:"../images/ar2/ar2_superawesomecomic.jpg",
    audio:"../audio/books/ar2/ar2_superawesomecomic.mp3",
    author:"Stephen Shaskan",
    summary:`Pizza and Taco create a comic book together and learn to share ideas and work as a team.

    피자와 타코가 함께 만화책을 만들며 서로의 아이디어를 존중하고 협력하는 방법을 배우는 이야기입니다.`
}

];