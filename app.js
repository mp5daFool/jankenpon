// Créer une fonction "max" représentant le nombre de round contre le robot, avec un if ajoutant un round si il y'a égalité
// Créer deux variables contenant le score du joueur et de l'ordinateur
// Créer la boucle de jeu sous la forme d'un for cf : jeu du nombre aléatoire
// Créer une variable permettant au "robot" de choisir un nombre entre 1 et 5 (Originalement entre 1 et 5 mais passé à 5 car le fonctionnement d'un mathfloor et d'un math random tend à faire que l'ia fasse très souvent 1 et donc pierre) 
// Ouvrir un prompt permettant a l'utilisateur de jouer en choisissant entre pierre feuille ou ciseau
// Assigner le chiffre aléatoire répondu par le robot à une variable eponyme "reponseRobot"
// Créer un if et des else if pour tout les cas de figures tel que 1 = Pierre, 2 = Feuille, 3 = Ciseau
// Créer un if pour les conditions de victoire, d'égalité ou de défaite tel que : si réponse utilisateur strictement égale à reponse robot alors égalité donc console.log égalité et extension de la boucle en rajoutant +1 a max (qui définit le nombre de manches) puis un continue qui permet d'outrepasser les conditions initiales de la boucle et donc de poursuivre quand bien même les conditions initiales de la boucle sont outrepassés (exemple 3eme round, la boucle devrait prendre fin), victoire si l'utilisateur fait pierre et l'ordinateur fait ciseau par exemple, et défaite si l'inverse
// Ajouter une incrémentation du score en fonction de victoire du bot ou du joueur
// Afficher en log qui a gagné ainsi que le score


// Rôle : Jouer à Chifoumi contre un robot
// Paramètre : Aucun
// Retour : 

function jankenpon() {

    
    
    let max = 3; // Le nombre maximal d'essai qu'on a pour trouver le nombre aléatoire
    let scoreOrdinateur = 0
    let scoreJoueur = 0

   

    for (let essai = 1; essai <= max; essai++) { // Ici, la variable essai est une boucle qui s'arrete lorsque le nombre maximal d'essai est franchi. Mise en pause grâce au fait qu'on utilise le Prompt

         let nombreAleatoire = Math.floor(Math.random() * 3) + 1; // Math floor permet de prendre un arrondi à l'inférieur, dans ce cas si, il arrondi le nombre aléatoire compris entre 1 et 3   

        console.log(`Score Joueur = ${scoreJoueur} - Score Ordinateur = ${scoreOrdinateur}`) // remplacer par du HTML

     let reponse = prompt(`Round ${essai}/${max}: Vous jouez à Chifumi, choisissez entre : pierre, feuille ou ciseau`).toLowerCase();
     let reponseRobot = "";
     
     if (nombreAleatoire == 1) {
         reponseRobot = "pierre";
     }
     else if (nombreAleatoire == 2) {
         reponseRobot = "feuille";
     }
     else if (nombreAleatoire == 3) {
         reponseRobot = "ciseau";
     }

     console.log(`l'ordinateur a fait ${reponseRobot}`)
     console.log(`Le joueur a fait ${reponse}`)

    if (reponse === reponseRobot) {
        console.log("Égalité ! On rejoue ce round.");
        max++;
        continue; // Continue permet d'étendre la boucle
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
    
    if (scoreJoueur > scoreOrdinateur) {
        console.log(`Le Joueur a gagné`);
    }
else {
    console.log("L'ordinateur vous a battu");
}

console.log(`Score final : Joueur ${scoreJoueur} - Ordinateur ${scoreOrdinateur}`)
     // Il est important de mettre l'échec en dehors de la boucle, comme ça il s'affiche dès que le prompt se ferme, et donc "que le temps reprends" ce qui n'arrive pas si le réponse est trouvée avant le nombre d'essais dépassé comme le message gagné est inclus dans la boucle
}