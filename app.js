const img = document.querySelector(".header__root__img");

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".header__root");
  const body = document.body;

  if (localStorage.getItem("darkMode") === "on") {
    body.classList.add("dark-mode");
  }

  toggleButton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    localStorage.setItem(
      "darkMode",

      body.classList.contains("dark-mode") ? "on" : "off"
    );
  });
});
