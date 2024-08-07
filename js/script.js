// Animation Active Navbar
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 60) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });
});
// Bottom Music
const audio = document.getElementById("audio");
const playIcon = document.getElementById("play-icon");
const pauseIcon = document.getElementById("pause-icon");
const musicControl = document.getElementById("music-control");
const musicTitle = document.getElementById("music-title");

document.addEventListener("DOMContentLoaded", () => {
  audio
    .play()
    .then(() => {
      playIcon.classList.add("d-none");
      pauseIcon.classList.remove("d-none");
      musicTitle.style.display = "block";
    })
    .catch((error) => {
      console.error("Autoplay was prevented:", error);
    });

  audio.addEventListener("play", () => {
    playIcon.classList.add("d-none");
    pauseIcon.classList.remove("d-none");
    musicTitle.style.display = "block";
  });

  audio.addEventListener("pause", () => {
    playIcon.classList.remove("d-none");
    pauseIcon.classList.add("d-none");
    musicTitle.style.display = "none";
  });

  musicControl.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });
});
// Scroll to top button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// Form Contact
const scriptURL = "https://script.google.com/macros/s/AKfycbwwX0WmGBqXChKjm0V9hNrvRS0T5eUw2DWgFaGCFvfofyHvuEvzmoqNO-sbuo_kIcj-/exec";
const form = document.forms["rheinsullivan-contact-form"];
const btnSend = document.querySelector(".btn-send");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  btnLoading.classList.toggle("d-none");
  btnSend.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle("d-none");
      btnSend.classList.toggle("d-none");
      myAlert.classList.toggle("d-none");
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
