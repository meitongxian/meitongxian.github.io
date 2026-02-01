function lightbox() {
  const elements = document.querySelectorAll(".proj-media > img, .proj-media > video, .flex-wrapper > img, .flex-wrapper > div > img, .flex-wrapper > video, .flex-wrapper > div > video, .grid-2 > img, .grid-3 > img, .grid-2 > video, .grid-3 > video");

  elements.forEach((e) => {
    e.addEventListener("click", () => {
      let src;
      let type;

      if (e.tagName === "VIDEO") {
        src = e.querySelector("source")?.src || e.src;
        type = "video";
      } else {
        src = e.src;
        type = "image";
      }

      if (src) openLightbox(src, type);
    });
  });
}

function openLightbox(src, type) {
  const modal = document.createElement("div");
  modal.className = "modal";

  if (localStorage.getItem("dark") === "on") {
    modal.style.backgroundColor = "rgba(39, 39, 39, 0.8)";
  }

  let media;

  if (type === "video") {
    media = document.createElement("video");
    media.src = src;
    media.autoplay = true;
    media.loop = true;
    media.muted = true;
    media.playsInline = true;
  } else {
    media = document.createElement("img");
    media.src = src;
  }

  const close = document.createElement("div");
  close.className = "close";
  close.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M.3.3c.4-.4 1.2-.4 1.6 0l6 6L14 .3c.4-.4 1.2-.4 1.6 0s.4 1.2 0 1.6l-6 6 6 6c.4.4.4 1.2 0 1.6s-1.2.4-1.6 0l-6-6-6 6c-.4.4-1.2.4-1.6 0s-.4-1.2 0-1.6l6-6-6-6c-.4-.4-.4-1.2 0-1.6z"/>
    </svg>
  `;

  close.addEventListener("click", () => modal.remove());
  modal.addEventListener("click", () => modal.remove());

  // esc to close
  document.addEventListener(
    "keydown",
    function escPressed(e) {
      if (e.key === "Escape") {
        modal.remove();
        document.removeEventListener("keydown", escPressed);
      }
    }
  );

  modal.append(media, close);
  document.querySelector("main").append(modal);
}

lightbox("img, video");