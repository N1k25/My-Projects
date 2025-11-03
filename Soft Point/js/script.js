document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", function() {
    const winTop = window.scrollY || document.documentElement.scrollTop;
    if (winTop >= 35) {
      document.body.classList.add("sticky-header");
    } else {
      document.body.classList.remove("sticky-header");
    }
  });
});
