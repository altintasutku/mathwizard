document.addEventListener("DOMContentLoaded", () => {
  fetch("/templates/nav.html")
    .then((response) => response.text())
    .then((html) => {
      document.body.insertAdjacentHTML("afterbegin", html);
      const template = document.getElementById("nav-template");
      const clone = template.content.cloneNode(true);
      template.parentNode.replaceChild(clone, template);
    });
});
