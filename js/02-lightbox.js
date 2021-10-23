import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryRef = document.querySelector(".gallery");
const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`;
  })
  .join("");
galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);
galleryRef.addEventListener("click", (e) => {
  e.preventDefault();
});
var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: document.querySelector("img[alt]"),
  captionDelay: 300,
});

console.log(galleryItems);
