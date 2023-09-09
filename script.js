const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const body = document.querySelector("body");
const themeToggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
  body.style.backgroundColor = "yellow";
  body.style.opacity = 0.5;
});
closeBtn.addEventListener("click", () => {
  body.style.backgroundColor = "none";
  body.style.opacity = 1;
  sideMenu.style.display = "none";
});

//changeTheme

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});
