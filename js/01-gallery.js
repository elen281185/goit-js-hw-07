import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery= document.querySelector(".gallery");
gallery.addEventListener("click", handleClick); 

let markup =galleryItems.map(({preview, original, description}) =>`
<li class="gallery__item">
    
    <img src = "${preview}" 
    class=" gallery__image" 
    data-source = "${original}"
    alt ="${description}" 
    width= 360 px />

</li>`).join("");
gallery.insertAdjacentHTML("beforeend",markup)



function handleClick(event){
   
    if(event.target === event.currentTarget){
    return;}
  const bigUrlImg = event.target.datasource
     console.log(bigUrlImg);
     
}
