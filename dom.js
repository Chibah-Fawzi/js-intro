// SELECTEUR D'ID
var titre = document.getElementById("title-id");

// CHANGE LE CONTENU HTML DE L'ELEMENT
// titre.innerHTML = "Je suis un autre texte";

titre.style.color = "red";
titre.style.backgroundColor = "brown";

// Function pour ajouter un mode sombre
function DarkMode() {
  var body = document.querySelector("body");

  // On chéck si le body a déja un arriére plan noir (==)
  if (body.style.backgroundColor == "black") {
    // Si c'est le cas rend le blanc (=)
    body.style.backgroundColor = "white";
  } else {
    // Si c'est le cas rend le noir (=)
    body.style.backgroundColor = "black";
  }
}

// // Affiche bonjour 1000 fois
// var contenaire = document.getElementById("contenaire");
// for (let i = 0; i < 1000; i++) {
//   contenaire.innerHTML += "<h1>Bonjour</h1>";
// }

// var classes = document.getElementsByClassName("test");

// console.log(classes);

// const nvlListe = [
//   "<h1>Hello</h1>",
//   "<h1>Hello2</h1>",
//   "<h1>Hello3</h1>",
//   "<h1>Hello4</h1>",
//   "<h1>Hello5</h1>",
// ];

// for (let i = 0; i < classes.length; i++) {
//   const element = classes[i];
//   element.innerHTML = nvlListe[i];
// }
