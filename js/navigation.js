const bars = document.querySelector("#bars");
const closeBtn = document.querySelector(".menu-close");

const openNav = () => {
  document.querySelector(".menu").classList.toggle("show");
};

bars.addEventListener("click", openNav);
closeBtn.addEventListener("click", openNav);