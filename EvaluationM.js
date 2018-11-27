let cartes1;

let cartesId1;

let cartes2;

let cartesId2;

let click = 0;

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

let ImageTableau = Tab(Img.slice());

for (let i = 0; i < Img.length; i++) {

    document.getElementById('Img' + i).addEventListener("click",

        function Clique() {

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
                }
            }
        }
    );
}

