/* //JS test
console.log("functions.js"); */


//Creazione pagina
function impostaPagina(pictures) {
    const main = document.querySelector("main");
    //Creazione Display
    const container = document.createElement("div");
    container.setAttribute("id", "container");
    //Creazione immagini
    pictures.forEach(picture => {
        const image = document.createElement("img");
        image.setAttribute("src", `./${picture.image}`);
        const imageTitle = document.createElement("span");
        imageTitle.setAttribute("id", "imgTitle");
        imageTitle.innerText = picture.title;
        const imageDescription = document.createElement("span");
        imageDescription.setAttribute("id", "imgDescription");
        imageDescription.innerText = picture.text;
        image.append(imageTitle, imageDescription);
        container.append(image);
    });
    main.append(container);
    //Attivazione prima immagine
    document.querySelector("img").classList.add("displayedImg");
    //Creazione nav
    const nav = document.createElement("nav");
    nav.setAttribute("id", "slider");
    const previousBtn = document.createElement("button");
    previousBtn.setAttribute("id", "previousBtn");
    previousBtn.innerText = "PREVIOUS";
    const nextBtn = document.createElement("button");
    nextBtn.setAttribute("id", "nextBtn");
    nextBtn.innerText = "NEXT";
    nav.append(previousBtn, nextBtn);
    main.append(nav);
}