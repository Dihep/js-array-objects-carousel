/* //JS test
console.log("functions.js"); */


//Creazione pagina
function impostaPagina(pictures) {
    const main = document.querySelector("main");
    //Creazione Display
    const container = document.createElement("div");
    container.setAttribute("id", "container");
    main.append(container);
    //Creazione immagini
    pictures.forEach(picture => {
        const image = document.createElement("img");
    });
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


/* <div id="container">
            <img class="displayedImg" src="./img/01.webp" alt="">
        </div>

        <!-- Slider -->
        <nav id="slider">
            <button id="previousBtn">Previous</button>
            <button id="nextBtn">Next</button>
        </nav> */