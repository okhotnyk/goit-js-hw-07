import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const markUpGalleryList = createItemMarkUp(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", markUpGalleryList);

galleryContainer.addEventListener("click", onGalleryContainerClick);

document.addEventListener("keydown", onEscPressed);

let instance;

function createItemMarkUp(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
  <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>
    `;
    })
    .join("");
}

function onGalleryContainerClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  instance = basicLightbox.create(
    `<img src=${event.target.dataset.source} width="800" height="600">`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", onEscPressed);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", onEscPressed);
      },
    }
  );

  instance.show();
}

function onEscPressed(event) {
  const key = event.key;
  if (key === "Escape") {
    instance.close();
  }
}
