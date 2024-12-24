document.addEventListener("DOMContentLoaded", () => {
  function loadNav(retryCount = 0) {
    const maxRetries = 3; // Maksimum 3 kez deneme yapacak

    fetch("/templates/nav.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Navigation yüklenemedi");
        }
        return response.text();
      })
      .then((html) => {
        document.body.insertAdjacentHTML("afterbegin", html);
        const template = document.getElementById("nav-template");
        const clone = template.content.cloneNode(true);
        template.parentNode.replaceChild(clone, template);
      })
      .catch((error) => {
        console.error("Nav yükleme hatası:", error);
        if (retryCount < maxRetries) {
          // Başarısız olursa 1 saniye bekleyip tekrar dene
          setTimeout(() => {
            loadNav(retryCount + 1);
          }, 1000);
        }
      });
  }

  loadNav();
});
