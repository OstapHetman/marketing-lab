const html = document.getElementsByTagName("html")[0];
const body = document.getElementsByTagName("body")[0];
const addToHiddenInputBtn = document.querySelectorAll(".addToInput");
const hiddenInput = document.querySelector("#description");

$(".navbar-toggler").click(function() {
  $(this).toggleClass("open");
});

addToHiddenInputBtn.forEach(function(button) {
  button.addEventListener("click", function(event) {
    const attrInfo = event.target.getAttribute("data-info");
    hiddenInput.value = attrInfo;
  });
});

if (document.querySelectorAll(".card .btn-link")) {
  const cardBtns = document.querySelectorAll(".card .btn-link");

  cardBtns.forEach(function(cardBtn) {
    cardBtn.addEventListener("click", function(e) {
      e.target.classList.toggle("open");
    });
  });
}

setTimeout(function() {
  const preloader = document.querySelector(".preloader");
  preloader.classList.add("none");
  body.style.overflow = "auto";
  html.style.overflow = "auto";
}, 1500);

if (document.querySelector(".counter")) {
  const countdown = document.querySelector(".counter");

  const launchDate = new Date("Nov 31, 2018, 23:00:00").getTime();

  // Update every minute
  const interval = setInterval(function() {
    // Get todays date and time (ms)
    const now = new Date().getTime();

    // Distance from now to launch date
    const distance = launchDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display result
    countdown.querySelector("#days h4").innerHTML = days;
    countdown.querySelector("#hours h4").innerHTML = hours;
    countdown.querySelector("#minutes h4").innerHTML = mins;
    countdown.querySelector("#seconds h4").innerHTML = seconds;
  }, 1000);
}

// Dropdown

const getDropdownItems = document.querySelectorAll(
  ".dropdown-menu .dropdown-item"
);
const dropDownBtn = document.querySelector(".dropdown-toggle");

getDropdownItems.forEach(function(dropdownItem) {
  dropdownItem.addEventListener("click", function(event) {
    if (this.classList.contains("kiev")) {
    }
    let address = this.innerHTML;
    let changedAddress = document.getElementById("adress");
    changedAddress.innerHTML = address;
  });
});
