// Function for the Hamburger Menu Toggle

function toggleMenu(){
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  // Adding class "open" to both elements 
  menu.classList.toggle("open");
  icon.classList.toggle("open");

  // ~~ FOR TESTING PURPOSES ONLY ~~

  // console.log(menu);
  // console.log(icon);

} 