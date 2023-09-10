const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const body = document.querySelector("body");
const themeToggler = document.querySelector(".theme-toggler");
const anchorElement = document.querySelector("a");

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

//changeTheme

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

var list_items = document.querySelectorAll("a");
var previousElement = "";
for (var i = 1; i <= list_items.length; i++) {
  list_items[i - 1].addEventListener("click", function toggle(i) {
    this.classList.toggle("active");
    this.previousElementSibling.classList.remove("active");
  });
}
