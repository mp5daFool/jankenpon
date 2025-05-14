

// Fonctions principales du jeu et Initialisation
let scoreJoueur = 0;
let scoreOrdinateur = 0;
let round = 1;
let max = 3;

let log = document.getElementById("log");
let reponseBot = document.getElementById("reponseRobot");

// Liste des choix possibles
let choix = ["pierre", "feuille", "ciseau"];

// aJOUT des ecouteurs d'évenements sur les boutons pierre feuille ciseau
["pierre", "feuille", "ciseau"].forEach(choix => {
    document.getElementById(choix).addEventListener("click", () => {
        jouerTour(choix);
        console.log(choix);
    });
});

// Fonction qui retourne un nombre aléatoire dans ce cas ci pour déterminer le choix
function choixAleatoire() {
    let index = Math.floor(Math.random() * 3);
    return choix[index];
}

// Fonction d'affichage du round, des scores, et du choix de l'ordinateur
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

// Fonction qui permet de "reboot" le jeu en réinitialisant toutes les fonctions principales (voir ligne 1)
function recommencer() {
    scoreJoueur = 0;
    scoreOrdinateur = 0;
    round = 1;
    max = 3;
    log.innerHTML = `<h2>Le jeu recommence !</h2>`;
    reponseBot.innerHTML = "";
}

// Fonction gérant un tour de jeu
function jouerTour(choixJoueur) {
    if (round > max) return;

    let choixBot = choixAleatoire();

    // Si égalité entre choix du jour et choix de l'odinateur alors on incrémente le nombre de round pour compenser l'égalité
    if (choixJoueur === choixBot) {
        affichage("Égalité", choixBot);
        message = "Égalité";
        max++
    }

    let message = "";

    // Condition de victoire joueur
    let victoireJoueur =
        (choixJoueur === "pierre" && choixBot === "ciseau") ||
        (choixJoueur === "feuille" && choixBot === "pierre") ||
        (choixJoueur === "ciseau" && choixBot === "feuille");

    // Conditions de victoire du bot
    let victoireOrdinateur =
        (choixBot === "pierre" && choixJoueur === "ciseau") ||
        (choixBot === "feuille" && choixJoueur === "pierre") ||
        (choixBot === "ciseau" && choixJoueur === "feuille");

    // Mise a jour des scores grace a l'incrémentation des fonctions principales
    if (victoireJoueur) {
        scoreJoueur++;
        message = "Le joueur a gagné ce round";
    } else if (victoireOrdinateur) {
        scoreOrdinateur++;
        message = "L'ordinateur a gagné ce round.";
    }

    // Passage au round suivant
    affichage(message, choixBot);
    round++;
    // if (scoreJoueur > scoreOrdinateur) {
    //     setTimeout(() => {
    //     message = "Le joueur a gagné la partie"

    //     recommencer()
    // }, 15000);}

    // else if(scoreJoueur > scoreOrdinateur) {
    //     setTimeout(() => {
    //     message = "L'Ordinateur a gagné la partie"
           
    //     recommencer()     
    // }, 15000);}

    // Conditions de fin de partie, si le nombre de round est supérieur au nombre de round max alors le score final est calculé pour déterminer qui a gagné, puis il y'a un délai de 5 secondes avant que le jeu ne se reinitialise
    if (round > max) {
    setTimeout(() => {
        if(scoreJoueur > scoreOrdinateur) {
             resultat = "Vous avez gagné la partie";
         } else if (scoreJoueur < scoreOrdinateur) {
             resultat = "L'ordinateur a gagné la partie";
        }
         log.innerHTML =
            `
                <h2>${resultat}</h2>
                <p>Score final : Joueur ${scoreJoueur} - Ordinateur ${scoreOrdinateur}</p>
            `;
        setTimeout(() => {
            recommencer();
         }, 5000);
     }, 500);   }
}



// document.getElementById("pierre").addEventListener("click", () => jouerTour("pierre"));
// document.getElementById("feuille").addEventListener("click", () => jouerTour("feuille"));
// document.getElementById("ciseau").addEventListener("click", () => jouerTour("ciseau"));
