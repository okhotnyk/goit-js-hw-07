import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const markUpGalleryList = createItemMarkUp(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", markUpGalleryList);

galleryContainer.addEventListener("click", onGalleryContainerClick);

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
  // console.log(event.target.dataset.source);
  const parentGalleryItem = event.target.closest(".gallery__item");
  console.log(parentGalleryItem);
  const activeGalleryItem = document.querySelector(".gallery__item.is-active");
  if (activeGalleryItem) {
    activeGalleryItem.classList.remove("is-active");
  }
  parentGalleryItem.classList.add("is-active");
}
