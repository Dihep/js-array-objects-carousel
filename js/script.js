/* //JS test
console.log("script.js"); 
console.log(images, images[1].title); */

//Impostazione variabili
var indiceImmagineAttiva = 0;
const numeroImmagini = images.length;

//Script principale
impostaPagina(images);

const nextBtn = document.getElementById("nextBtn");
const previousBtn = document.getElementById("previousBtn");

nextBtn.addEventListener("click", nextPic);
previousBtn.addEventListener("click", previousPic);
