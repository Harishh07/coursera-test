/*// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("header-nav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 


document.getElementById("navbar-button").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("navbar-button").innerHTML = "";
}
 $(document).ready(function() {
 	
    $(window).scroll(function(){
     
       if (this.scrollY > 20) {

       	  $('.navbar').addClass("sticky");
       }else{



       }



    })


 }) 

*/
/*
 window.addEventListener("scroll",function() {
 	
  var header = document.querySelector("sticky");
  header.classList.toggle("sticky", window.scrollY > 0);


 }) */

/*
 $('#navvv > li').on('click', function(e) {
    e.stopPropagation();
    $('ul', this).show(); 
 });

 $('#aa').on("click", function () {
    $("#navvv").hide();
 });  

 */

jQuery(document).ready(function ($) {
    $(window).load(function () {


        setTimeout(function(){

            $('.pre').fadeOut('slow', function () {
            });

        },3500); // set the time here
    });  
});

/*
$(window).load(function() {
			// Animate loader off screen
			$(".pre").animate({
				top: -800
			}, 500);
});

*/



/*
window.addEventListener('load',function(){

   $('.pre').style.display='none';



});

setTimeout(function(){        
    $('.pre').fadeOut(); 
}, 3500);

*/
/*

document.onreadystatechange = function() {
            if (document.readyState !== "complete") {

                document.querySelector("body").style.visibility = "hidden";
                document.querySelector(".pre").style.visibility = "visible";
            } else {

                document.querySelector(".pre").style.display = "none";
                document.querySelector("body").style.visibility = "visible";
            }
};
/*

$(document).ready(function() {
//Preloader
preloaderFadeOutTime = 1000;
function hidePreloader() {
var preloader = $('.spinner-wrapper');
preloader.fadeOut(preloaderFadeOutTime);
}
hidePreloader();
});


*/
/*
$(function(){

	$("#burger").blur(function(event){


   		$("#navvv").collapse('hide');


	});

});

*/



$(document).ready(function() {
 var count = 0;
 var counter = setInterval(function(){
   if(count < 101){
    $('.count').text(count + '%');
    $('.loader').css('width',count + '%');
    count++;
  }
  else{
    
    clearInterval(counter);

  }



 },30)

});




var list = document.querySelector('.linkk');


$('li').on('click', function aq(e) {

    list.classList.add('collapse');
 
 });





 window.onscroll = function() {

  myFunction();
  myFunction1();
  abc();
  myFunctionn();
  myFunction2();
  myFunctiony();
  jumb();
  //bg();
 }
  


/* let video = document.querySelector('video');

 function bg(){

  let value = 1 + window.scrollY/-600;
  video.style.opacity = value;




 }  */ 



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
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("carin");
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


/* var width = 100;
 var difference =2;
 var intervalID=0;

function bg(){

if(window.pageYOffset>0){
 function increase(){

  intervalID = setInterval(zoomIn,20);
  
 }
 function zoomIn(){

  if(width<200) {

  	width = width + difference;
  	document.getElementById("vid").style.width=width; 
  }
  else{

  	clearInterval(intervalID);
  }

 }
}
}
 */



 function abc() {

   const elem = document.querySelector('nav');
   
   if(window.pageYOffset > 0)
   {
       $("nav").addClass("stickk");
   
   }
   else{

        $("nav").removeClass("stickk");
  
   }

 } 




 const element = document.querySelector('.guipic');
 const elementt = document.querySelector('.musicdes');
 const elementtt = document.querySelector('.musictitle');
 var testDiv = document.getElementById("skillssname");
 var sticky = testDiv.offsetTop - 10;

 
 
 function myFunction() {
  if (window.pageYOffset >= sticky) {
    element.classList.add('animate__animated','animate__fadeInRight');
    element.style.setProperty('--animate-duration', '2.5s');
    elementt.classList.add('animate__animated','animate__fadeInLeft');
    elementt.style.setProperty('--animate-duration', '2.5s');
    elementtt.classList.add('animate__animated','animate__fadeInLeft');
    elementtt.style.setProperty('--animate-duration', '1.5s');

  } else {
    element.classList.remove('animate__animated','animate__fadeInRight');
    element.style.setProperty('--animate-duration', '2.5s');
    elementt.classList.remove('animate__animated','animate__fadeInLeft');
    elementt.style.setProperty('--animate-duration', '2.5s');
    elementtt.classList.remove('animate__animated','animate__fadeInLeft');
    elementtt.style.setProperty('--animate-duration', '1.5s');

  }
} 

/*.............................*/



 const element1 = document.querySelector('.projec');
 const element2 = document.querySelector('.slid');


 var testDivv = document.getElementById("main-contents");
 var stickyy = testDivv.offsetTop - 90;
 

 
 
 function myFunctionn() {
  if (window.pageYOffset >= stickyy) {
    element1.classList.add('animate__animated','animate__fadeInLeft');
    element1.style.setProperty('--animate-duration', '1.5s');
    element2.classList.add('animate__animated','animate__fadeIn');
    element2.style.setProperty('--animate-duration', '4s');
    

  } else {
    element1.classList.remove('animate__animated','animate__fadeInLeft');
    element1.style.setProperty('--animate-duration', '1.5s');
    element2.classList.remove('animate__animated','animate__fadeInLeft');
    element2.style.setProperty('--animate-duration', '4s');

  }
} 

/*////////////////////////////////////*/


const element3 = document.querySelector('.aboutdes');
const element4 = document.querySelector('.mepic');
const element5 = document.querySelector('.abouttext');

var testDiv2 = document.getElementById("music-title");
var sticky3 = testDiv2.offsetTop - 20;

 
 
 function myFunction1() {
  if (window.pageYOffset >= sticky3) {
    element3.classList.add('animate__animated','animate__fadeInRight');
    element3.style.setProperty('--animate-duration', '2.5s');
    element4.classList.add('animate__animated','animate__fadeInLeft');
    element4.style.setProperty('--animate-duration', '2.5s');
    element5.classList.add('animate__animated','animate__fadeInLeft');
    element5.style.setProperty('--animate-duration', '1.5s');

  } else {
    element3.classList.remove('animate__animated','animate__fadeInRight');
    element3.style.setProperty('--animate-duration', '2.5s');
    element4.classList.remove('animate__animated','animate__fadeInLeft');
    element4.style.setProperty('--animate-duration', '2.5s');
    element5.classList.remove('animate__animated','animate__fadeInLeft');
    element5.style.setProperty('--animate-duration', '1.5s');

  }
} 

const elem = document.querySelector('.letmeknow');

var test = document.getElementById("about-des");
var stick = test.offsetTop - 80;

 
 
function myFunction2() {
  if (window.pageYOffset >= stick) {
    
    elem.classList.add('animate__animated','animate__fadeInLeft');
    elem.style.setProperty('--animate-duration', '2s');
    

  } else {
    
    elem.classList.remove('animate__animated','animate__fadeInLeft');
    elem.style.setProperty('--animate-duration', '2s');
   
  }
} 


 /*const element6 = document.querySelector('.profbox');  
 const element7 = document.querySelector('.techbox'); */
 const element8 = document.querySelector('.skillsnnum');
 var testDiv4 = document.getElementById("slider");
 var sticky5 = testDiv4.offsetTop - 110;

 
 
 function myFunctiony() {
  if (window.pageYOffset >= sticky5) {
  /*  element6.classList.add('animate__animated','animate__fadeInLeft');
    element6.style.setProperty('--animate-duration', '2.2s'); 
    element7.classList.add('animate__animated','animate__fadeInLeft');
    element7.style.setProperty('--animate-duration', '2.5s'); */
    element8.classList.add('animate__animated','animate__fadeInLeft');
    element8.style.setProperty('--animate-duration', '1.5s');

  } else {
/*  element6.classList.remove('animate__animated','animate__fadeInLeft');
    element6.style.setProperty('--animate-duration', '2.5s'); 
    element7.classList.remove('animate__animated','animate__fadeInLeft');
    element7.style.setProperty('--animate-duration', '2.5s');  */
    element8.classList.remove('animate__animated','animate__fadeInLeft');
    element8.style.setProperty('--animate-duration', '1.5s');

  }
} 




/*
$(window).scroll(function() {

    $('.ani').each(function(){

        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();

        if (imagePos < topOfWindow+400) {
            $(this).addClass(".percentagem");
        }

    });

});

$('.element-to-hide').css('visibility', 'hidden');





$(window).scroll(function () {
    $('.ani').each(function () {
        var imagePos = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();

        if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
            $(this).addClass("ani");
        } else {
            $(this).removeClass("ani");
        }
    });
});


 


$( '#aa' ).click(function() {

});
*/

 function sendMaill() {
        Email.send({

          SecureToken: "b9409e6f-9fd5-47cd-b3ee-6f7c0ad00783",
          To: "iharishh07@gmail.com",
          From: `Name - ${document.getElementById("firstname").value}`,
          Subject: `Mail - ${document.getElementById("secname").value}`,
          Body: `Message - ${document.getElementById("msg").value}`,
        })
        document.getElementById("firstname").value = ''
        document.getElementById("secname").value = ''
        document.getElementById("msg").value = ''
        //.then((message) => alert(message));
}

function nav(){

  alert("Thanks! Will reach out soon!");
}


/*const bg = document.getElementById("jum");
function jumb(){

    bg.style.opacity = 1 - +window.pageYOffset/700+'';

} */

$(window).scroll(function(){

   $("#jumboo").css("opacity", 1 - $(window).scrollTop()/550);
   

}); 
$(window).scroll(function(){

   $("#jumboo1").css("opacity", 1 - $(window).scrollTop()/550);
   

}); 
$(window).scroll(function(){

   $("#jumboo2").css("opacity", 1 - $(window).scrollTop()/550);
   

}); 
$(window).scroll(function(){

   $("#jumboo3").css("opacity", 1 - $(window).scrollTop()/550);
   

}); 
/*
$(document).ready(function(){
   $("#spotify").on("hover", function(){
     $("music-des").css("background","sing.jpg");
   });

});
*/

 
 ScrollReveal().reveal('.abc .container',{delay: 230});
 ScrollReveal().reveal('.projec',{delay: 160},{ reset: false });
 ScrollReveal().reveal('#slider',{delay: 800});
 ScrollReveal().reveal('#mh-skills',{delay:300});
 //ScrollReveal().reveal('#prof-box',{delay: 300});

 //ScrollReveal().reveal('#plattforms',{delay:300});
 //ScrollReveal().reveal('#dk1',{delay:300});


 ScrollReveal().reveal('#dk2',{delay:500});
 ScrollReveal().reveal('#about-text',{delay:300});
 ScrollReveal().reveal('#music-text',{delay:300});

 //ScrollReveal().reveal('#me-pic',{delay: 300});
 //ScrollReveal().reveal('#about-des',{delay: 300});

 //ScrollReveal().reveal('#skil',{delay:300});
 ScrollReveal().reveal('#summy',{delay:300});

 ScrollReveal().reveal('#guitar-pic',{delay: 300});
 
 ScrollReveal().reveal('#letmeknowyou',{delay: 200});
 ScrollReveal().reveal('#filltheform',{delay: 400});
 ScrollReveal().reveal('#contactform',{delay: 700});
 
 

 