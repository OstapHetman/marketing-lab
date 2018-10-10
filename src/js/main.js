$(".navbar-toggler").click(function() {
  $(this).toggleClass("open");
});

const cardBtns = document.querySelectorAll(".card .btn-link");

cardBtns.forEach(cardBtn => {
  cardBtn.addEventListener("click", e => {
    e.target.classList.toggle("open");
  });
});

setTimeout(() => {
  const preloader = document.querySelector(".preloader");
  preloader.classList.add("none");

  const body = document.getElementsByTagName("body")[0];
  body.style.overflow = "auto";
}, 2000);
