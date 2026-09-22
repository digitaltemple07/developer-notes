const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.getElementById("mobileMenu");
const menuClose = document.getElementById("menuClose");

// Open menu
menuToggle.addEventListener("click", function () {
  mobileMenu.classList.add("active");

  document.body.style.overflow = "hidden";
});

// Close menu
menuClose.addEventListener("click", function () {
  mobileMenu.classList.remove("active");

  document.body.style.overflow = "";
});

// Close menu when a navigation link is clicked
const menuLinks = document.querySelectorAll(".mobile-menu-links a");

menuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    mobileMenu.classList.remove("active");

    document.body.style.overflow = "";
  });
});
