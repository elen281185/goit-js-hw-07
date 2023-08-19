import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery= document.querySelector(".gallery");

let markup =galleryItems.map(({preview, original, description}) =>`
<li class="gallery__item">
<a class="gallery__link" href=${original}>
    <img src = "${preview}" 
    class=" gallery__image" 
    alt ="${description}"  />
</a>
</li>`).join("");
gallery.insertAdjacentHTML("beforeend",markup);

const newGallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

