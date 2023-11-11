// const elements = document.querySelectorAll(".ma-classe");

// console.log(elements);

// for (let i = 0; i < elements.length; i++) {
//   elements[i].innerHTML = "<p style='color:red;'>Lorem Ipsum</p>";
// }

// Liste des produits (BDD)
const produits = [
  {
    name: "Coca",
    prix: 80,
    quantity: 100,
    img: "https://tdnmarket-pull.b-cdn.net/wp-content/uploads/2019/09/2.png",
  },
  {
    name: "Pepsi",
    prix: 70,
    quantity: 56,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Pepsi_2023.svg/langfr-280px-Pepsi_2023.svg.png",
  },
  {
    name: "Hamoud",
    prix: 80,
    quantity: 155,
    img: "https://superetti.dz/wp-content/uploads/2020/08/4250-1.jpg",
  },
  {
    name: "Mouzaïa",
    prix: 100,
    quantity: 15,
    img: "",
  },
  {
    name: "Redbull",
    prix: 250,
    quantity: 3,
    img: "",
  },
];

//  On sélectionne l'élement body
const body = document.querySelector("body");

// On itére sur la liste des produit, et pour chaque produit on affiche une div qui contient son nom, le prix, l'image et la quantité de ce dernier. Et on l'injécte dans le body qu'on a séléctionné.
for (let i = 0; i < produits.length; i++) {
  body.innerHTML += `
  <div class="test">
    <img width='300px' src=${produits[i].img} />
    <h1>Produit: ${produits[i].name}</h1>
    <h4>Prix: ${produits[i].prix}</h4>
    <h6>Quantité: ${produits[i].quantity}</h6>
  <div>
  `;
}
