var formcloser = document.querySelector(".cross-icon-wrapper");
var formmain = document.querySelector(".form");
var formpageclicker = document.querySelector(".form-page-clicker");
var quote = document.querySelector(".get-quote-item");
var quote2 = document.querySelector(".get-quote-color");
var links = document.getElementsByTagName("a");
var mainmenu = document.querySelector(".hamburger-button");
var lineone = document.getElementById("line1");
var linetwo = document.getElementById("line2");
var navbar = document.querySelector(".menu-bar");
var flag = 0;
var overlap = document.querySelector(".overlay");
var hide = document.querySelector(".overlay");


var x = window.matchMedia("(max-width: 991px)");
myFunction(x); 
x.addListener(myFunction);
function myFunction(x) {
  if (x.matches) {
    navbar.style.height = "0";
    navbar.style.opacity = "0";
    lineone.style.transform = "translate(-50%, -4px)";
    linetwo.style.transform = "translate(-50%, 8px)";
    navbar.style.transition = "none";

    mainmenu.onclick = function () {
      if (flag == "0") {
        console.log(123);
        lineone.style.transform = "translate(-50%, 0px) rotate(45deg)";
        linetwo.style.transform = "translate(-50%, 0px) rotate(-45deg)";
        navbar.style.transition = "all 0.2s linear";
        navbar.style.height = "360px";
        navbar.style.opacity = "1";

        flag = 1;
      } else if (flag == 1) {
        lineone.style.transform = "translate(-50%, -4px)";
        linetwo.style.transform = "translate(-50%, 8px)";
        navbar.style.opacity = "0";
        navbar.style.height = "0";

        flag = 0;
      }
    };
  } else {
    navbar.style.height = "auto";
    navbar.style.opacity = "1";
  }
}

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (k) {
    if (this.getAttribute("href") === "#") k.preventDefault();
  });
}

formcloser.onclick = function () {
  formmain.style.transform = "translateX(100%)";
  overlap.style.display = "none";
  overlap.style.opacity = "0";
};
formpageclicker.onclick = function () {
  formmain.style.transform = "translateX(0)";
  overlap.style.display = "block";
  overlap.style.opacity = "1";
};
quote.onclick = function () {
  formmain.style.transform = "translateX(0)";
  overlap.style.display = "block";
  overlap.style.opacity = "1";
};
quote2.onclick = function () {
  formmain.style.transform = "translateX(0)";
  overlap.style.display = "block";
  overlap.style.opacity = "1";
};
hide.onclick = function () {
  overlap.style.display = "none";
  overlap.style.opacity = "0";
  formmain.style.transform = "translateX(100%)";
};
