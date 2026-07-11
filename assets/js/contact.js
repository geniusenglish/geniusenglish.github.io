document.addEventListener("DOMContentLoaded",()=>{

    const course=document.querySelectorAll("input[name='course']");
    const reading=document.getElementById("readingSection");

    course.forEach(radio=>{

        radio.addEventListener("change",()=>{

            if(radio.value==="원서리딩" && radio.checked){

                reading.style.display="block";

            }else if(radio.checked){

                reading.style.display="none";

            }

        });

    });

    const srTest=document.getElementById("srTest");
    const srLevel=document.getElementById("srLevelBox");

    srTest.addEventListener("change",()=>{

        if(srTest.value==="yes"){

            srLevel.style.display="block";

        }else{

            srLevel.style.display="none";

        }

    });

});