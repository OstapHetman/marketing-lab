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

// Message icon
const messageBtn = document.querySelector("#message-button");
const popup = messageBtn.querySelector(".popup");

messageBtn.addEventListener("click", function() {
  let icon = messageBtn.querySelector(".message-icon");
  icon.classList.toggle("active");
  if (icon.classList.contains("active")) {
    popup.style.display = "block";
  } else {
    popup.style.display = "none";
  }
});

// Dropdown
const getDropdownItems = document.querySelectorAll(
  ".dropdown-menu .dropdown-item"
);
const dropDownBtn = document.querySelector(".dropdown-toggle");

dropDownBtn.addEventListener("click", function(event) {
  let city = dropDownBtn.querySelector(".city");
  if (event.target.tagName == "A") {
    event.stopImmediatePropagation();
  }

  getDropdownItems.forEach(function(dropdownItem) {
    if (city.classList.contains("kiev")) {
      document.querySelector(
        ".dropdown-item .kiev"
      ).parentElement.style.display = "none";

      document.querySelector(
        ".dropdown-item .russ"
      ).parentElement.style.display = "flex";
      document.querySelector(
        ".dropdown-item .moldova"
      ).parentElement.style.display = "flex";
    } else if (city.classList.contains("moldova")) {
      document.querySelector(
        ".dropdown-item .moldova"
      ).parentElement.style.display = "none";

      document.querySelector(
        ".dropdown-item .kiev"
      ).parentElement.style.display = "flex";
      document.querySelector(
        ".dropdown-item .russ"
      ).parentElement.style.display = "flex";
    } else if (city.classList.contains("russ")) {
      document.querySelector(
        ".dropdown-item .russ"
      ).parentElement.style.display = "none";

      document.querySelector(
        ".dropdown-item .moldova"
      ).parentElement.style.display = "flex";
      document.querySelector(
        ".dropdown-item .kiev"
      ).parentElement.style.display = "flex";
    }
  });
});

getDropdownItems.forEach(function(dropdownItem) {
  dropdownItem.addEventListener("click", function(event) {
    let address = this.innerHTML;
    let changedAddress = document.getElementById("adress");
    changedAddress.innerHTML = address;
    if (event.target.tagName == "A") {
      console.log("yess");
      event.preventDefault();
    }
  });
});
