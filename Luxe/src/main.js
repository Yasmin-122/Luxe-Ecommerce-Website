import './style.css'

const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

menuIcon.addEventListener("click", () => {
  menuIcon.name = menuIcon.name === 'close' ? 'menu' : 'close'
  navLinks.classList.toggle("hidden")
});