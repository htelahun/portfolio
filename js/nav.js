(function() {
var navSml = document.querySelectorAll(".nav-sml");
var smlNav = document.querySelector(".smallnav");
var menuIcon = document.querySelector(".menu-icon");
var x = document.querySelector(".x");
var header = document.querySelector(".header");

function close() {
smlNav.style.display="none";
menuIcon.style.display="block";
x.style.display="none";
header.style.display="block";
}
function close2() {
  smlNav.style.display="none";
  menuIcon.style.display="block";
  x.style.display="none";
  header.style.display="block";
}
function open() {
  smlNav.style.display="block";
  menuIcon.style.display="none";
  x.style.display="block";
  header.style.display="none";
}

x.addEventListener('click',close2,false);
menuIcon.addEventListener("click",open, false);
navSml.forEach(function(element,index){
  element.addEventListener('click',close, false);
});

})();
