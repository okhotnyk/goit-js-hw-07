import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const markUpGalleryList = createItemMarkUp(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", markUpGalleryList);

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

console.log(createItemMarkUp(galleryItems));
