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
  imageElement.dataset.src = item.original;
  imageElement.alt = item.description;
  aElem.appendChild(imageElement);
  liElem.appendChild(aElem);

  const dFrag = document.createDocumentFragment();
  dFrag.appendChild(liElem);
  ulElem.append(dFrag);
});
ulElem.addEventListener("click", (event) => {
  if (event.target.classList.contains("gallery__image")) {
    event.preventDefault();
    const imageSource = event.target.dataset.src;
    const imageDescription = event.target.alt;
    const instance = basicLightbox.create(`
      <img src="${imageSource}" alt="${imageDescription}">
    `);

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        instance.close();
      }
    });
    document.removeEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        modalInstance.close();
      }
    });
    instance.show();
  }
});
