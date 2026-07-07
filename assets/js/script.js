// ===============================
// Infinite Logo Slider
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const track = document.querySelector(".logo-track");

    const slides = document.querySelectorAll(".logo-slide");

    let index = 0;

    function move(){

        index++;

        track.style.transition="transform .8s ease";

        track.style.transform=`translateX(-${index*420}px)`;

        if(index===slides.length-1){

            setTimeout(()=>{

                track.style.transition="none";

                track.style.transform="translateX(0)";

                index=0;

            },800);

        }

    }

    setInterval(move,3000);

});