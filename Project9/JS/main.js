
//set slide index to 1//
var slideIndex=1;
showSlides(slideIndex);
//create a function to add n to slide index//
function plusSlides(n){
    showSlides(slideIndex+=n);
}
//create function to show current slide//
function currentSlide(n){
    showSlides(slideIndex=n);
}
//create a function to show slides and advance to next//
function showSlides(n){
    var i;
    var slides=document.getElementsByClassName("mySlides");
    var dots=document.getElementsByClassName("dot");
    if(n>slides.length){slideIndex=1}
    if(n<1) {slideIndex=slides.length}
    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    for(i=0;i<dots.length;i++){
        dots[i].className=dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display="block";
    dots[slideIndex-1].className+=" active";
}