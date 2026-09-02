// Header form
const headerFormInput = document.getElementById("header-form-input");
const headerFormButton = document.getElementById("header-form-button");

headerFormButton.addEventListener('click', (e) => {
  if (headerFormInput.value.trim()) {
    e.preventDefault();
    headerFormInput.value = '';
    alert('Success!');
  }
});


// Burger menu
const toggleMenu = () => {
  const navigation = document.querySelector(".navigation");
  const navigationMenu = document.querySelector(".menu-list");

  const burgerMenu = document.querySelector(".menu-icon");
  const src = burgerMenu.getAttribute("src");

  const isBurger = src === "assets/burger-menu.svg";
  const iconName = isBurger ? "assets/close.svg" : "assets/burger-menu.svg";

  burgerMenu.setAttribute("src", iconName);

  if (!isBurger) {
    navigation.classList.add("navigation--mobile--fadeout");
    setTimeout(() => {
      navigation.classList.toggle("navigation--mobile");
      navigationMenu.classList.toggle("menu--mobile");
    }, 300);
  } else {
    navigation.classList.remove("navigation--mobile--fadeout");
    navigation.classList.toggle("navigation--mobile");
    navigationMenu.classList.toggle("menu--mobile");
  }
};
