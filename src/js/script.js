document.querySelectorAll(".img-wrapper").forEach((img) => {
  img.onclick = function () {
    img.classList.toggle("selected");
  };
});