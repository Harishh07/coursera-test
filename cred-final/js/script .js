 ScrollReveal().reveal('#anim',{delay: 700});
 ScrollReveal().reveal('#txt1',{delay: 500});
 ScrollReveal().reveal('#txt2',{delay:500});
 ScrollReveal().reveal('#txt3',{delay: 500});
 ScrollReveal().reveal('#txt4',{delay: 500});
 ScrollReveal().reveal('#touch',{delay: 1200});
 ScrollReveal().reveal('#txt11',{delay: 500});
 ScrollReveal().reveal('#asd',{delay: 900});
 ScrollReveal().reveal('#form-title',{delay: 500});

 
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2500); 
}


 