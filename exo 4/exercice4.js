/* Ecrire ci dessous une fonction permettant d'ajouter du texte dans le div appelé container */
let container = document.getElementById("container");

function addText (text){
    container.innerHTML = text;

}

/* Appeler la fonction */
addText("Blabla");