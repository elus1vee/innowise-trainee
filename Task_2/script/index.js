let link = document.getElementById("theme-link");
let btn = document.getElementById("button-toggle");
let fileName = location.pathname.match(/[^/]*$/)[0].split(".")[0];
if (fileName == "index" || undefined || "") {
  fileName = "home-page";
}
btn.addEventListener("click", () => {
  if (fileName == "home-page") {
    link.href = `./styles/css/${fileName}${
      link.getAttribute("href") == `./styles/css/${fileName}.css`
        ? "-dark.css"
        : ".css"
    }`;
  } else {
    link.href = `../styles/css/${fileName}${
      link.getAttribute("href") == `../styles/css/${fileName}.css`
        ? "-dark.css"
        : ".css"
    }`;
  }
});
