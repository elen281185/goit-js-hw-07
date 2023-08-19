import { galleryItems } from './gallery-items.js';


// Change code below this line
const gallery= document.querySelector(".gallery");
gallery.addEventListener("click", handleClick); 


let markup =galleryItems.map(({preview, original, description}) =>`
<li class="gallery__item">
<a class="gallery__link" href=${original}>
    <img src = "${preview}" 
    class=" gallery__image" 
    data-source = "${original}"
    alt ="${description}" 
    width= 360 px />
</a>
</li>`).join("");
gallery.insertAdjacentHTML("beforeend",markup)

function handleClick(event){
    event.preventDefault();
    if(event.target === event.currentTarget){
    return;}
window.addEventListener("keydown", onEscBtnClose);    
const imgOriginal = event.target;
const instance = basicLightbox.create(`
    <img src=${imgOriginal.dataset.source}
    alt = ${imgOriginal.alt}
     width="800" height="600">
`,
{
    onShow: () => {
        document.addEventListener("keydown",onEscBtnClose);
    },
    onClose: () => {
        document.removeEventListener("keydown", onEscBtnClose);
    },
}
);

function onEscBtnClose (e){
if(e.code === "Escape" && instance.visible()){
    instance.close();
}
}

instance.show()

   
}
