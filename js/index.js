  /*
  //SLIDESHOW CODE
  let slideIndex = 1;
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
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 
*/

/*
  //SLIDESHOW CODE
  
  let slideIndex2 = 2;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(x) {
  showSlides2(slideIndex2 += x);
}

// Thumbnail image controls
function currentSlide2(x) {
  showSlides2(slideIndex2 = x);
}

function showSlides2(x) {
  let m;
  let slides2 = document.getElementsByClassName("mySlides2");
  if (x > slides2.length) {slideIndex2 = 2}
  if (x < 2) {slideIndex2 = slides2.length}
  for (m = 0; m < slides2.length; m++) {
    slides2[m].style.display = "none";
  }
  slides2[slideIndex2-2].style.display = "block";
  dots2[slideIndex2-2].className += "active";
} */


var slideIndex = [1, 1];
var slideId = ["mySlides1","mySlides2"]
showDivs(1, 0);
showDivs(1, 1);

function plusDivs(n, no) {
  showDivs(slideIndex[no] += n, no);
}

function showDivs(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1
  }
  if (n < 1) {
    slideIndex[no] = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


function myFunction2() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}