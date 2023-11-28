const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const loginModal = document.getElementById("loginModal");
const signupModal = document.getElementById("signupModal");

// toggle nav
toggle.addEventListener("click", () => document.body.classList.toggle("show-nav"));

// show login modal
loginBtn.addEventListener("click", () => loginModal.classList.add("show-modal"));

// show signup modal
signupBtn.addEventListener("click", () => signupModal.classList.add("show-modal"));

// hide login modal
document.getElementById("closeLogin").addEventListener("click", () => loginModal.classList.remove("show-modal"));

// hide signup modal
document.getElementById("closeSignup").addEventListener("click", () => signupModal.classList.remove("show-modal"));

// Hide modals on outside click
window.addEventListener("click", (e) => {
  if (e.target == loginModal) loginModal.classList.remove("show-modal");
  if (e.target == signupModal) signupModal.classList.remove("show-modal");
});
