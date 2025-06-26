document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".carousel img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  images.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.classList.add("active");
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });
});
