let scoreJoueur = 0;
let scoreOrdinateur = 0;
let round = 1;
let max = 3;

let log = document.getElementById("log");
let reponseBot = document.getElementById("reponseRobot");

// Liste des choix possibles
let choix = ["pierre", "feuille", "ciseau"];

function choixAleatoire() {
    let index = Math.floor(Math.random() * 3);
    return choix[index];
}

function affichage(message, choixBot) {
    log.innerHTML = `
        <h2>Round ${round}/${max}</h2>
        <p>Score Joueur : ${scoreJoueur} - Score Ordinateur : ${scoreOrdinateur}</p>
        <p>${message}</p>
    `;

    reponseBot.innerHTML = `
        <img src="assets/${choixBot}.png" alt="${choixBot}" class="pfcImages">
        <h3>${choixBot}</h3>
    `;
}

function jouerTour(choixJoueur) {
    if (round > max) return;

    let choixBot = choixAleatoire();

    if (choixJoueur === choixBot) {
        affichage("Égalité", choixBot);
        max++
    }

    let message = "";
    let victoireJoueur =
        (choixJoueur === "pierre" && choixBot === "ciseau") ||
        (choixJoueur === "feuille" && choixBot === "pierre") ||
        (choixJoueur === "ciseau" && choixBot === "feuille");

    let victoireOrdinateur = 
        (choixBot === "pierre" && choixJoueur === "ciseau") ||
        (choixBot === "feuille" && choixJoueur === "pierre") ||
        (choixBot === "ciseau" && choixJoueur === "feuille");

    if (victoireJoueur) {
        scoreJoueur++;
        message = "Le joueur a gagné ce round";
    } else if (victoireOrdinateur){
        scoreOrdinateur++;
        message = "L'ordinateur a gagné ce round.";
    }

    affichage(message, choixBot);
    round++;
    if (scoreJoueur > scoreOrdinateur && victoireJoueur > victoireOrdinateur) {
        message = "Le joueur a gagné la partie"
    }

    else if(scoreJoueur > scoreOrdinateur && victoireJoueur < victoireOrdinateur) {
        message = "L'Ordinateur a gagné la partie"
    }
}

document.getElementById("pierre").addEventListener("click", () => jouerTour("pierre"));
document.getElementById("feuille").addEventListener("click", () => jouerTour("feuille"));
document.getElementById("ciseau").addEventListener("click", () => jouerTour("ciseau"));
