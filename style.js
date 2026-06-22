const noBtn = document.getElementById("noBtn");

if (noBtn) {
  noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";

    noBtn.style.left = Math.random() * 300 + "px";

    noBtn.style.top = Math.random() * 300 + "px";
  });
}
