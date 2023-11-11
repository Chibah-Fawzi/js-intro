const fils = {
  nom: "Djilali",
  age: 26,
  fonction: "Chômeur",
};
const fille = {
  nom: "Zineb",
  age: 20,
  fonction: "Etudiante",
};
const animal = {
  nom: "Pink",
  type: "Chien",
  race: "Malinois",
  sexe: "F",
};

const mere = {
  nom: "Samira",
  age: "47",
  fonction: "Employée",
  fils: fils,
  fille: fille,
  animal: animal,
};

const pere = {
  nom: "Omar",
  age: "50",
  fonction: "Employé",
  femme: mere,
  fils: fils,
  fille: fille,
  animal: animal,
};

console.log(pere.age);
