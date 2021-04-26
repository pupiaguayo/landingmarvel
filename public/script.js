let btnMenu = document.getElementById("button-menu");
let mainNav = document.getElementById("nav-links");
btnMenu.addEventListener("click", function () {
  if (mainNav.style.display === "block") {
    mainNav.style.display = "none";
  } else {
    mainNav.style.display = "block";
  }
});
