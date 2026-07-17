
const images = document.querySelectorAll(".gallery img");
const gallery = document.querySelector(".gallery");

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");

const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const counter = document.querySelector(".counter");

const filterButtons = document.querySelectorAll(".filter-buttons button");
const downloadBtn = document.querySelector(".download");

let currentImages = [...images];
let currentIndex = 0;


filterButtons.forEach(button => {

    button.addEventListener("click",()=>{


        filterButtons.forEach(btn=>{
            btn.classList.remove("active");
        });


        button.classList.add("active");


        const filter = button.dataset.filter;


        currentImages = [];


        images.forEach(img=>{


            if(filter === "all" || img.dataset.category === filter){

                img.style.display="block";

                currentImages.push(img);

            }

            else{

                img.style.display="none";

            }


        });


    });


});



// =========================
// Open Lightbox
// =========================

gallery.addEventListener("click",(e)=>{


    if(e.target.tagName === "IMG"){


        const clickedImage = e.target;


        currentIndex = currentImages.indexOf(clickedImage);


        showImage();


        lightbox.style.display="flex";


    }


});



// =========================
// Show Image
// =========================
function showImage(){

if(currentImages.length === 0) return;

let imagePath = currentImages[currentIndex].src;

lightboxImg.src = imagePath;

downloadBtn.href = imagePath;
downloadBtn.download = `nature-image-${currentIndex + 1}.jpg`;

counter.textContent =
`${currentIndex + 1} / ${currentImages.length}`;

}



// =========================
// Next
// =========================

nextBtn.addEventListener("click",()=>{


    currentIndex++;


    if(currentIndex >= currentImages.length){

        currentIndex=0;

    }


    showImage();


});




// =========================
// Previous
// =========================

prevBtn.addEventListener("click",()=>{


    currentIndex--;


    if(currentIndex < 0){

        currentIndex=currentImages.length-1;

    }


    showImage();


});




// =========================
// Close
// =========================

closeBtn.addEventListener("click",()=>{


    lightbox.style.display="none";


});




// =========================
// Click Outside
// =========================

lightbox.addEventListener("click",(e)=>{


    if(e.target === lightbox){

        lightbox.style.display="none";

    }


});




// =========================
// Keyboard
// =========================

document.addEventListener("keydown",(e)=>{


    if(lightbox.style.display !== "flex") return;



    if(e.key==="ArrowRight"){

        nextBtn.click();

    }



    if(e.key==="ArrowLeft"){

        prevBtn.click();

    }



    if(e.key==="Escape"){

        lightbox.style.display="none";

    }


});




// Image Overlay Labels


const topBtn=document.getElementById("topBtn");


window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        topBtn.style.display="block";

    }
    else{

        topBtn.style.display="none";

    }

});


topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});