import { galleryItems } from "./gallery-items.js";
// Change code below this line

const markUpGalleryList = createItemMarkUp(galleryItems);
const galleryContainer = document.querySelector(".gallery");
galleryContainer.insertAdjacentHTML("beforeend", markUpGalleryList);

function createItemMarkUp(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}
