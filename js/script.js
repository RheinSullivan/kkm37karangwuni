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
