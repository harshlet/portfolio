const navslide = ()=>{
const burger = document.querySelector(".burger");
const nav =  document.querySelector(".nav_links");

nav_li =document.querySelectorAll(".nav_links li a")

burger.addEventListener("click",()=>{
    nav.classList.toggle("nav_active");
});

nav_li.forEach((link,index) => {
    link.addEventListener("click",(e)=>{
    //e.preventDefault();
    setTimeout(()=>{
        nav.classList.toggle("nav_active");
    },100);
    
    //e.click();
    })

});

}
navslide();
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}