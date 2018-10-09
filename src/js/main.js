$(".navbar-toggler").click(function() {
  $(this).toggleClass("open");
});

const cardBtns = document.querySelectorAll(".card .btn-link");

cardBtns.forEach(cardBtn => {
  cardBtn.addEventListener("click", e => {
    e.target.classList.toggle("open");
  });
});
