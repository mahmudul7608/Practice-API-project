const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const model = document.getElementById("model");

//  toggle nav

toggle.addEventListener("click", () =>
  document.body.classList.toggle("show-nav")
);

// sho modal

open.addEventListener("click", () => modal.classList.add("show-modal"));

// Hide modal

close.addEventListener("click", () => modal.classList.remove("show-modal"));

// Hide modal on outside click

window.addEventListener("click", (e) =>
  e.target == modal ? classList.remove("show-modal") : false
);

// search / API section start

// search / API section end
