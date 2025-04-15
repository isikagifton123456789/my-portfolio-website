function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("background-video");
  if (video) {
    // Modern browsers support the loop attribute.
    // The following fallback ensures looping works smoothly.
    video.addEventListener("timeupdate", () => {
      if (video.currentTime > video.duration - 0.1) {
        video.currentTime = 0;
        video.play();
      }
    });
  }
});
