let cartes1;

let cartesId1;

let cartes2;

let cartesId2;

let click = 0;

let paires = 0;

let tentatives = 0;

// Liste : Ce qui me reste à faire!

// Faire le bouton démarrer pour faire apparaitre le jeu et demarre le chrono / popup

// Faire bouton Reset


document.getElementById("EcranFinDePartie").style.visibility = "hidden";

let Tab = function (array) {

    let IndexCourant = array.length;

    let ValeurTemporaire, IndexAleatoire;

    while (0 != IndexCourant) {

        IndexAleatoire = Math.floor(Math.random() * IndexCourant);

        IndexCourant -= 1;

        ValeurTemporaire = array[IndexCourant];

        array[IndexCourant] = array[IndexAleatoire];

        array[IndexAleatoire] = ValeurTemporaire;

    }

    return array;

};

let Img =

    ["Icons/404.png", "Icons/antenna.png", "Icons/download.png",

        "Icons/folder.png", "Icons/network.png", "Icons/server.png",

        "Icons/setting.png", "Icons/wireless.png", "Icons/404.png",

        "Icons/antenna.png", "Icons/download.png", "Icons/folder.png",

        "Icons/network.png", "Icons/server.png", "Icons/setting.png",

        "Icons/wireless.png"];

Tab(Img);

console.log(Img);

let ImageTableau = Tab(Img.slice());

for (let i = 0; i < Img.length; i++) {

    document.getElementById('Img' + i).addEventListener("click",

        function Clique() {

            tentatives++;

            if (click == 0) {

                document.getElementById("Img" + i).innerHTML = "<img src='" + Img[i] + "'>";

                cartes1 = Img[i];

                cartesId1 = "Img" + i;

                click++;

            } else {

                if (click < 2) {

                    document.getElementById("Img" + i).innerHTML = "<img src='" + Img[i] + "'>";

                    cartes2 = Img[i];

                    cartesId2 = "Img" + i;

                    click++;

                    if (cartes1 == cartes2) {

                        if (cartesId1 != cartesId2) {

                            console.log("cartesidentiques");

                            document.getElementById(cartesId1).style.visibility = "hidden";

                            document.getElementById(cartesId2).style.visibility = "hidden";

                            click = 0;

                            cartes1 = null;

                            cartes2 = null;

                            paires++;

                            console.log(paires);

                        } else {

                            console.log("Vous avez double cliquez");

                            document.getElementById(cartesId1).innerHTML = "<img src =" + 'FondCarte.png' + ">";

                            document.getElementById(cartesId2).innerHTML = "<img src =" + 'FondCarte.png' + ">";

                            click = 0;

                        }

                    } else {

                        setTimeout(function () {

                                console.log("cartesdifferentes");

                                document.getElementById(cartesId1).innerHTML = "<img src =" + 'FondCarte.png' + ">";

                                document.getElementById(cartesId2).innerHTML = "<img src =" + 'FondCarte.png' + ">";

                                click = 0;

                                cartes1 = null;

                                cartes2 = null;

                            }, 500
                        );
                    }

                    if (paires == 8) {

                        document.getElementById("EcranJeu").style.visibility = "hidden";

                        document.getElementById("Resultats").innerHTML = "Bravo !! Victoire !!";

                        document.getElementById("EcranFinDePartie").style.visibility = "visible";

                        document.getElementById("ResteTemps").innerHTML = "Il vous as fallu : " + minutes + " minutes et " + secondes + " secondes";

                        document.getElementById("NbrPaires").innerHTML = "Vous avez trouvez " + paires + " paires au total";

                        document.getElementById("NbrDeTentatives").innerHTML = "Vous avez réussi en " + tentatives + " tentatives";

                    }
                }
            }
        }
    );
}


let minutes = "00";

let secondes = "00";

function Timer() {

    document.getElementById("Temps").innerHTML = minutes + ":" + secondes;

    secondes++;

    console.log(secondes);

    let Times = setTimeout(Timer, 1000);


    // Fonction Chrono ++

    if (secondes == 60) {

        minutes++;
        secondes = "00";

    }

}

/* fonction --;

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

Timer();



