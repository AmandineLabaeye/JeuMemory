// [FR] Ensemble des variables utilisées.
// [EN] Set of variables used.
let cartes1;

let cartesId1;

let cartes2;

let cartesId2;

let click = 0;

let paires = 0;

let tentatives = 0;

let Img;

// [FR] Au début de la partie, l'écran de Résultat et l'écran de Jeu sont invisibles.
// [EN] At the beginning of the game, the result screen and the game screen are invisible.
document.getElementById("EcranFinDePartie").style.display = "none";

document.getElementById("EcranJeu").style.display = "none";

/* [FR] Le bouton démarrer permet de :
   Lancer le chrono,
   Afficher l'écran de jeu,
   Cacher son propre bouton,
   Mettre les minutes et secondes à 00. */
/* [EN] The start button allows you to:
   Start the clock,
   Display the game screen,
   Hide your own button,
   Set minutes and seconds to 00. */
document.getElementById("Demarrer").addEventListener("click", function () {

    Timer();

    document.getElementById("EcranJeu").style.display = "block";

    document.getElementById("Demarrer").style.visibility = "hidden";

    minutes = "00";

    secondes = "00";

});

// [FR] Cette fonction permet de générer les cartes aléatoirement.
// [EN] This function makes it possible to generate the cards randomly.
function Dck() {

    /* [FR] Ces variables permettent de mettre les compteurs de click, paires
        et tentatives à 0. */
    /* [EN] These variables allow to put the click counters, pairs
        and attempts at 0. */
    click = 0;

    paires = 0;

    tentatives = 0;

    // [FR] Fonction Aléatoire.
    // [EN] Random function.
    let Tab = function (array) {

        let IndexCourant = array.length;

        let ValeurTemporaire, IndexAleatoire;

        // [FR] Boucle pour l'Aléatoire.
        // [EN] Loop for the Random.
        while (0 != IndexCourant) {

            IndexAleatoire = Math.floor(Math.random() * IndexCourant);

            IndexCourant -= 1;

            ValeurTemporaire = array[IndexCourant];

            array[IndexCourant] = array[IndexAleatoire];

            array[IndexAleatoire] = ValeurTemporaire;

        }

        // [FR] Retourne la fonction pour l'arrêter ici.
        // [EN] Return the function to stop it here.
        return array;

    };

    // [FR] Tableau comportant toutes les images.
    // [EN] Table with all the pictures.
    Img =

        ["Icons/404.png", "Icons/antenna.png", "Icons/download.png",

            "Icons/folder.png", "Icons/network.png", "Icons/server.png",

            "Icons/setting.png", "Icons/wireless.png", "Icons/404.png",

            "Icons/antenna.png", "Icons/download.png", "Icons/folder.png",

            "Icons/network.png", "Icons/server.png", "Icons/setting.png",

            "Icons/wireless.png"];

    // [FR] Rappel de la fonction Tab.
    // [EN] Reminder of the Tab function.
    Tab(Img);


    let ImageTableau = Tab(Img.slice());

}

// [FR] Rappel de la fonction Aléatoire.
// [EN] Recall of the Random function.
Dck();

// [FR] Fonction Jeu comportant toutes les conditions pour que le jeu fonctionne.
// [EN] Game function with all the conditions for the game to work.
function Jeu() {

    // [FR] Boucle pour le jeu.
    // [EN] Loop for the game.
    for (let i = 0; i < Img.length; i++) {

        // [FR] Ecouteur qui écoute chaque clique sur chaque image grâce à la boucle.
        // [EN] Listener who listens to each click on each image thanks to the loop.
        document.getElementById('Img' + i).addEventListener("click",

            function () {

                // [FR] Si le clique == 0, on affiche la carte Aléatoire.
                // [EN] If the click == 0, we display the Random card.
                if (click == 0) {

                    document.getElementById("Img" + i).innerHTML = "<img src='" + Img[i] + "'>";

                    cartes1 = Img[i];

                    // [FR] Crée une id à chaque image cliquer.
                    // [EN] Create an id for each click image.
                    cartesId1 = "Img" + i;

                    // [FR] Incrémente un clique de 1 pour limiter les cliques a 2 maximum.
                    // [EN] Increment a click of 1 to limit clicks to 2 maximum.
                    click++;

                } else {

                    // [FR] Incrémente le nombre de tentatives de 1 à chaque paires cliquer.
                    // [EN] Increment the number of attempts of 1 to each pair click.
                    tentatives++;

                    // [FR] Si le clique est inférieure à 2 on affiche la carte Aléatoire.
                    // [EN] If the click is less than 2 we display the Random card.
                    if (click < 2) {

                        document.getElementById("Img" + i).innerHTML = "<img src='" + Img[i] + "'>";

                        cartes2 = Img[i];

                        // [FR] Crée une id à chaque image cliquer.
                        // [EN] Create an id for each click image.
                        cartesId2 = "Img" + i;

                        // [FR] Incrémente un clique de 1 pour limiter les cliques a 2 maximum.
                        // [EN] Increment a click of 1 to limit clicks to 2 maximum.
                        click++;

                        // [FR] Si la cartes1 == cartes2.
                        // [EN] If the cards1 == cards2.
                        if (cartes1 == cartes2) {

                            // [FR] Si l'id des deux cartes cliquer sont différentes.
                            // [EN] If the id of the two cards clicked are different
                            if (cartesId1 != cartesId2) {

                                // [FR] Cache les deux cartes cliquer.
                                // [EN] Hide both cards click.
                                document.getElementById(cartesId1).style.visibility = "hidden";

                                document.getElementById(cartesId2).style.visibility = "hidden";

                                // [FR] Remet la variable click à 0.
                                // [EN] Set the click variable to 0.
                                click = 0;

                                // [FR] Remet les deux cartes comme étant null / vide.
                                // [EN] Put both cards back as null / empty.
                                cartes1 = null;

                                cartes2 = null;

                                // [FR] Incrémente la variable paire pour les compter.
                                // [EN] Increment the pair variable to count them.
                                paires++;

                            }
                            // [FR] Sinon
                            // [EN] else
                            else {

                                // [FR] Les images se retournent.
                                // [EN] The images turn around.
                                document.getElementById(cartesId1).innerHTML = "<img src =" + 'FondCarte.png' + ">";

                                document.getElementById(cartesId2).innerHTML = "<img src =" + 'FondCarte.png' + ">";

                                // [FR] La variable click est remis à 0 pour poursuivre le jeu.
                                // [EN] The click variable is reset to 0 to continue the game.
                                click = 0;

                            }

                        }
                        // [FR] Sinon
                        // [EN] else
                        else {

                            // [FR] Au bout de 1 seconde les cartes se retournent.
                            // [EN] After 1 second the cards turn around.
                            setTimeout(function () {

                                    document.getElementById(cartesId1).innerHTML = "<img src =" + 'FondCarte.png' + ">";

                                    document.getElementById(cartesId2).innerHTML = "<img src =" + 'FondCarte.png' + ">";

                                    // [FR] Remet la variable click à 0.
                                    // [EN] Set the click variable to 0.
                                    click = 0;

                                    // [FR] Remet les deux cartes comme étant null / vide.
                                    // [EN] Put both cards back as null / empty.
                                    cartes1 = null;

                                    cartes2 = null;

                                    // [FR] 1 seconde = 1000 millisecondes.
                                    // [EN] 1 second = 1000 milliseconds.
                                }, 1000
                            );
                        }

                        /* [FR] Si la variable paires est strictement égale à 8,
                            alors la partie est fini donc l'utilisateur a gagné. */
                        /* [EN] If the pair variable is strictly equal to 8,
                            then the game is over so the user has won. */
                        if (paires == 8) {

                            // [FR] L'écran de jeu redevient invisible.
                            // [EN] The game screen becomes invisible again.
                            document.getElementById("EcranJeu").style.display = "none";

                            // [FR] L'écran de Résultat s'affiche.
                            // [EN] The Result screen is displayed.
                            document.getElementById("EcranFinDePartie").style.display = "block";

                            // [FR] Annonce que l'utilisateur a gagné.
                            // [EN] Announcement that the user has won.
                            document.getElementById("Resultats").innerHTML = "Bravo !! Victoire !!";

                            // [FR] Annonce en combien de minutes et secondes l'utilisateur à gagné.
                            // [EN] Announcement in how many minutes and seconds the user to win.
                            document.getElementById("ResteTemps").innerHTML = "Il vous a fallu : " + minutes + " minutes et " + secondes + " secondes";

                            // [FR] Annonce combien de paires l'utilisateur a trouvé.
                            // [EN] Announce how many pairs the user has found.
                            document.getElementById("NbrPaires").innerHTML = "Vous avez trouvez " + paires + " paires au total";

                            // [FR] Annonce en combien de tentatives l'utilisateur a gagné.
                            // [EN] Announcement in how many attempts the user has won.
                            document.getElementById("NbrDeTentatives").innerHTML = "Vous avez réussi en " + tentatives + " tentatives";

                            // [FR] Le chrono lancer au début, s'arrête.
                            // [EN] The chrono start at the beginning, stops.
                            clearTimeout(Times);

                            // [FR] Les minutes et secondes du chrono sont remises à 00.
                            // [EN] The minutes and seconds of the clock are reset to 00.
                            minutes = "00";

                            secondes = "00";

                        }
                    }
                }
            }
        );
    }
}

// [FR] Rappel de la fonction Jeu.
// [EN] Reminder of the game function.
Jeu();

// [FR] Variable pour le chrono mettant directement au début les minutes et secondes à 00.
// [EN] Variable for the chrono directly setting the minutes and seconds to 00 at the beginning.
let minutes = "00";

let secondes = "00";

// [FR] Variable qui permettra de rappeler le chrono plus tard pour le stopper.
// [EN] Variable that will recall the timer later to stop it.
let Times;

// [FR] Fonction Timer, pour faire le chrono, qui à était rappelé dans le bouton Demarrer.
// [EN] Timer function, to make the timer, which was recalled in the Start button.
function Timer() {

    // [FR] Indique dans un element HTML le temps (Minutes et Secondes).
    // [EN] Indicates in an HTML element the time (Minutes and Seconds).
    document.getElementById("Temps").innerHTML = minutes + ":" + secondes;

    // [FR] Incrémente de 1 seconde toutes les 1 seconde.
    // [EN] Increments by 1 second every 1 second.
    secondes++;

    // [FR] La fonction est executée toute les secondes.
    // [EN] The function is executed every second.
    Times = setTimeout(Timer, 1000);


    // [FR] Chronomètre qui augmente.
    // [EN] Stopwatch that increases.


    // [FR] Si les secondes sont égale à 60 :
    // [EN] If the seconds are equal to 60 :
    if (secondes == 60) {

        // [FR] Les minutes s'incrément de 1,
        // [EN] The minutes are incremented by 1,
        minutes++;

        // [FR] Et les secondes retombent à 00.
        // [EN] And the seconds fall back to 00.
        secondes = "00";

    }

}

// [FR] Fonction Reset(); pour rejouer.
// [EN] Reset function (); to replay.
function Reset() {

    // [FR] L'écran de Résultat devient invisible.
    // [EN] The result screen becomes invisible.
    document.getElementById("EcranFinDePartie").style.display = "none";

    // [FR] Le bouton démarrer réapparait.
    // [EN] The start button reappears.
    document.getElementById("Demarrer").style.visibility = "visible";

    // [FR] L'écran de Jeu devient invisible.
    // [EN] The game screen becomes invisible.
    document.getElementById("EcranJeu").style.display = "none";

    // [FR] Rappel de la fonction Aléatoire.
    // [EN] Recall of the Random function.
    Dck();

    // [FR] Boucle qui permet de faire apparaître les cartes aléatoire.
    // [EN] Loop that allows to show random cards.
    for (let i = 0; i < Img.length; i++) {

        document.getElementById("Img" + i).innerHTML = "<img src =" + 'FondCarte.png' + ">";

        document.getElementById("Img" + i).style.visibility = "visible";

    }

    // [FR] Réinitialiser tous les span.
    // [EN] Reset all span.
    document.getElementById("Resultats").innerHTML = "";

    document.getElementById("ResteTemps").innerHTML = "";

    document.getElementById("NbrPaires").innerHTML = "";

    document.getElementById("NbrTentatives").innerHTML = "";

}

// [FR] Ecouteur click pour le bouton Reset.
// [EN] Earphone click for the Reset button.
document.getElementById("Reset").addEventListener("click", function () {

    // [FR] Rappel de la fonction Reset();.
    // [EN] Reminder of the Reset () function.
    Reset();

});

// Si amélioration, Plus tard


/* fonction -- / décompte

let minutes = "00";

let secondes = "10";

function Timer() {

    document.getElementById("Temps").innerHTML = minutes + ":" + secondes;
    secondes--;
    console.log(secondes);
    let Times = setTimeout(Timer, 1000);

    if (secondes < 0 ) {

        minutes--;
        secondes = 59;

    }

    if (secondes == 0 && minutes == 0) {

        minutes = 0;
        secondes= 0;
        clearTimeout(Times);

    }

}

*/

let zero = function (x)
{

    if (x == 5) {

        return "Salut";

    } else if (x <= 60) {

      return 45;

    } else if (x) {

        return true;

    }

};

export {zero}

