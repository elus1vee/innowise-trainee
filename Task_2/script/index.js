let currentTheme = localStorage.getItem("theme");
let link = document.getElementById("theme-link");
let btn = document.getElementById("button-toggle");
let fileName = location.pathname.match(/[^/]*$/)[0].split(".")[0];
if (fileName == "index" || fileName == undefined || fileName == "") {
  fileName = "home-page";
}
if (!currentTheme) {
  currentTheme = ".css";
}
link.href = `.${
  fileName == "home-page" ? "" : "."
}/styles/css/${fileName}${currentTheme} `;

btn.addEventListener("click", () => {
  if (fileName == "home-page") {
    link.href = `./styles/css/${fileName}${
      currentTheme == ".css" ? "-dark.css" : ".css"
    }`;
  } else {
    link.href = `../styles/css/${fileName}${
      currentTheme == ".css" ? "-dark.css" : ".css"
    }`;
  }
  if (currentTheme == ".css") {
    localStorage.setItem("theme", "-dark.css");
    currentTheme = "-dark.css";
  } else {
    localStorage.setItem("theme", ".css");
    currentTheme = ".css";
  }
});
