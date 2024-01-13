import { galleryItems } from "./gallery-items.js";
// Change code below this line
const ulElem = document.querySelector(".gallery");
galleryItems.forEach((item) => {
  const liElem = document.createElement("li");
  liElem.classList.add("gallery__item");
  const aElem = document.createElement("a");
  aElem.href = item.original;
  aElem.classList.add("gallery__link");
  aElem.dataset.lightbox = "image";
  const imageElement = document.createElement("img");
  imageElement.classList.add("gallery__image");
  imageElement.src = item.preview;
  imageElement.alt = item.description;
  aElem.appendChild(imageElement);
  liElem.appendChild(aElem);

  const dFrag = document.createDocumentFragment();
  dFrag.appendChild(liElem);
  ulElem.append(dFrag);
});
let gallery = new SimpleLightbox(".gallery .gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
ulElem.addEventListener("click", (e) => {
  if (e.target.classList.contains("gallery__image")) {
    e.preventDefault();
  }

  const imageElement = e.target;

  gallery.show(imageElement);
});
