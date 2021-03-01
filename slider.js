var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("item");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


let ourDots = document.querySelectorAll(".dot");

for(let j = 0; j < ourDots.length; j++){
    ourDots[j].addEventListener("click", (e)=> {
        currentSlide(j + 1);
    })
}

let ourPrev = document.querySelector(".prev");

ourPrev.addEventListener("click", (e)=> {
    plusSlides(-1);
})

let ourNext = document.querySelector(".next");
ourNext.addEventListener("click", (e)=> {
    plusSlides(1);
})
