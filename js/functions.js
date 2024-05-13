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
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        const image = document.createElement("img");
        image.setAttribute("src", `./${picture.image}`);
        const imageTitle = document.createElement("span");
        imageTitle.setAttribute("id", "imgTitle");
        imageTitle.innerText = picture.title;
        const imageDescription = document.createElement("span");
        imageDescription.setAttribute("id", "imgDescription");
        imageDescription.innerText = picture.text;
        card.append(image, imageTitle, imageDescription);
        container.append(card);
    });
    main.append(container);
    //Attivazione prima immagine
    document.querySelector(".card").classList.add("displayedCard");
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

//Scorrimento immagini
function nextPic() {
    const pics = document.getElementsByClassName("card");
    pics[indiceImmagineAttiva].classList.remove("displayedCard");
    if (indiceImmagineAttiva == (numeroImmagini-1)) {
        indiceImmagineAttiva = 0;
    } else {
        indiceImmagineAttiva++;
    }
    pics[indiceImmagineAttiva].classList.add("displayedCard");    
}
function previousPic() {
    const pics = document.getElementsByClassName("card");
    pics[indiceImmagineAttiva].classList.remove("displayedCard");
    if (indiceImmagineAttiva == (0)) {
        indiceImmagineAttiva = numeroImmagini-1;
    } else {
        indiceImmagineAttiva--;
    }
    pics[indiceImmagineAttiva].classList.add("displayedCard");
}