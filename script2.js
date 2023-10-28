var maListe = ["Morad", "Ahmed", "Said", "Omar"];

// Afficher un élement de la liste
console.log("Bonjour " + maListe[2]);

maListe.push("Sofiane"); // Ajouter un élement à la fin de la liste
maListe.unshift("Boualem"); // Ajouter un élement au début de la liste

maListe.shift(); // Retire le premier élement de la liste
maListe.pop(); // Retire le dernier élement de la liste

maListe[1] = "Hmida"; // Modifie la valeur d'un élement de la liste

//           Index   nmb el     el à remplacer
//          de début à suppr.
maListe.splice(2, 2, "Karima", "Saliha"); // Supprimer/Remplacer/Ajouter un ou plusieurs élements à n'importe que position de la liste

console.log("AVANT: ", maListe);

for (let i = 0; i < maListe.length; i++) {
  let elActuel = maListe[i]; // On récupére l'élement actuel de la liste
  elActuel = "DR. " + elActuel; // On modifie l'él actuel et on lui ajoute un préfixd 'DR.'
}

console.log("APRéS: ", maListe);
