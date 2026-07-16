const navToggleBtn = document.querySelector(".nav-toggle-button");
const nav = document.querySelector("ol");

navToggleBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
  //   navToggleBtn.textContent = "&c";
});
