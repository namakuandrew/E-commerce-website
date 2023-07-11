let menubtn = document.getElementById("menuBtn");
let sideNav = document.getElementById("sideNav");
let menu = document.getElementById("menu");

//disini kita atur logika tombolnya
menubtn.onclick = function () {
  if (sideNav.style.right == "-250px") {
    sideNav.style.right = "0";
    menu.src = "images/close.png";
  } else {
    sideNav.style.right = "-250px";
    menu.src = "images/menu.png";
  }
};

let i = 0;
let t = "give yourself \n a new style this year";

function typing() {
  if (i < t.length) {
    document.getElementById("text").innerHTML += t.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}

typing();
