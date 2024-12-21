const body = document.body;
const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".navbar");
const darkmode = document.getElementById("darkmode");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navBar.classList.toggle("open");
    body.classList.toggle("open"); // prevents scroll when navbar is open
})

const isDarkmode =  localStorage.getItem("darkMode") === "enabled";

if (isDarkmode) {
    document.documentElement.setAttribute("data-theme", "dark")
}

darkmode.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");

  if (currentTheme === "dark") {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("darkMode", "disabled");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("darkMode", "enabled");
  }
})