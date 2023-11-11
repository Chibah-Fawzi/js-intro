// On crée une function qui s'éxécute en cliquant sur button
function getData() {
  // On récupére les valeurs des input email et password
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  if (email == "" || email.length < 5) {
    alert("Vous ne pouvez envoyer un champ vide");
  } else {
    // On séléctionne où on veux afficher ces valeurs
    const body = document.querySelector("body");

    // On ajoute au contenu éxistant du body une liste des emails
    body.innerHTML += `
    <ul>
        <li>${email}</li>
    </ul>`;
  }
}
