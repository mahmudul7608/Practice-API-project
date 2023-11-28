const toggleNav = document.getElementById("toggleNav");
const toggleModal = document.getElementById("toggleModal");
const close = document.getElementById("close");
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const loginModal = document.getElementById("loginModal");
const signupModal = document.getElementById("signupModal");



toggle.addEventListener("click", () => document.body.classList.toggle("show-nav"));


loginBtn.addEventListener("click", () => loginModal.classList.add("show-modal"));


signupBtn.addEventListener("click", () => signupModal.classList.add("show-modal"));


document.getElementById("closeLogin").addEventListener("click", () => loginModal.classList.remove("show-modal"));


document.getElementById("closeSignup").addEventListener("click", () => signupModal.classList.remove("show-modal"));


window.addEventListener("click", (e) => {
  if (e.target == loginModal) loginModal.classList.remove("show-modal");
  if (e.target == signupModal) signupModal.classList.remove("show-modal");
});
