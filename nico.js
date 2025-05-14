let cards = document.querySelectorAll(".card")
let nombreAleatoire = Math.floor(Math.random() * 3) + 1;
let scoreJoueur = 0;
let scoreOrdinateur = 0;
let round = 1;
let reponseRobot = "";


cards.forEach(card =>{
    card.addEventListener("click",()=>{
        //le jeu commence
        console.log(card.id)
        let choix =card.id
    })
})


let choix = ["pierre", "feuille", "ciseau"];

// Fonction pour générer un choix aléatoire pour le bot
function choixAleatoire() {
     let index = Math.floor(Math.random() * 3);
    return choix[index];
}
function majAffichage(message, choixBot) {
    log.innerHTML = `
        <h2>Round ${round}/${maxRounds}</h2>
        <p>Score Joueur : ${scoreJoueur} - Score Ordinateur : ${scoreOrdinateur}</p>
        <p>${message}</p>
    `;

    reponseBot.innerHTML = `
        <img src="assets/${choixBot}.png" alt="${choixBot}" class="pfcImages">
        <h3>${choixBot.charAt(0).toUpperCase() + choixBot.slice(1)}</h3>
    `;
}


// Traitement

function condiVictoire(reponse, reponseRobot) {
    
    if (reponse === reponseRobot) {
        console.log("Égalité ! On rejoue ce round.");
        max++;
    } else if (
        reponse === "pierre" && reponseRobot === "ciseau" ||
        reponse === "feuille" && reponseRobot === "pierre" ||
        reponse === "ciseau" && reponseRobot === "feuille"
    ) {
        scoreJoueur++
        console.log("Bravo, vous avez gagné ce round !");
        // return;
    } else if (
        reponse === "feuille" && reponseRobot === "ciseau" ||
        reponse === "ciseau" && reponseRobot === "pierre" ||
        reponse === "pierre" && reponseRobot === "feuille"
    ) {
        scoreOrdinateur++
        console.log("L'ordinateur a gagné ce round.");
    }

}