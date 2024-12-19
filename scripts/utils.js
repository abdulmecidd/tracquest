document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".icon-nav");
  const menu = document.querySelector(".navbar-menu");

  burger.addEventListener("click", () => {
    menu.classList.toggle("is-active");
    const icon = burger.querySelector(".fas");
    if (menu.classList.contains("is-active")) {
      icon.classList.remove("fa-arrow-right");
      icon.classList.add("fa-arrow-left");
    } else {
      icon.classList.remove("fa-arrow-left");
      icon.classList.add("fa-arrow-right");
    }
  });
});
