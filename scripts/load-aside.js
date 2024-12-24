document.addEventListener("DOMContentLoaded", () => {
  fetch("/templates/aside.html")
    .then((response) => response.text())
    .then((html) => {
      document.querySelector("nav").insertAdjacentHTML("afterend", html);
      const template = document.getElementById("aside-template");
      const clone = template.content.cloneNode(true);
      template.parentNode.replaceChild(clone, template);
    });
});
