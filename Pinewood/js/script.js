const dropdowns = document.querySelectorAll(".nav-dropdown");
const dropdownMenuLinks = document.querySelectorAll('.dropdown-menu a');
const burger = document.querySelector(".burger");
const nav = document.querySelector(".main-nav");

function closeDropdowns(except = null) {
  dropdowns.forEach((dropdown) => {
    if (dropdown !== except) {
      dropdown.classList.remove("open");
      dropdown
        .querySelector(".dropdown-trigger")
        ?.setAttribute("aria-expanded", "false");
    }
  });
}

dropdowns.forEach((dropdown) => {
  const trigger = dropdown.querySelector(".dropdown-trigger");
  trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = dropdown.classList.contains("open");
    closeDropdowns(dropdown);
    dropdown.classList.toggle("open", !isOpen);
    trigger.setAttribute("aria-expanded", String(!isOpen));
  });
});

document.addEventListener("click", () => closeDropdowns());

dropdownMenuLinks.forEach((dropdownMenuLink) => {
  dropdownMenuLink.addEventListener("click", () => {
    closeDropdowns();
  });
});

burger.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", String(isOpen));
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    nav.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  }
});
