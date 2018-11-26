let Tableau1 = [
    "Icons/404.png",
    "Icons/antenna.png",
    "Icons/download.png",
    "Icons/folder.png",
    "Icons/network.png",
    "Icons/server.png",
    "Icons/setting.png",
    "Icons/wireless.png"
];

let TableauV = [];

let Tableau2 = Tableau1;

function Tableeaau1() {

    for (let i = 0; i < Tableau1.length; i++) {

        let y = Math.floor(Math.random() * Tableau1.length);

        document.getElementById("Img" + i).innerHTML += '<img src="' + Tableau1[y] + '">';
        reprise:

            for (let a = 0; a < TableauV.length; a++) {

                if (Tableau1[y] === TableauV[i]) {

                    //Si carte identique
                    break reprise;

                } else {

                    TableauV.push(y);

                    alert(y);

                }

            }
        /*



        if (y ===Tableau1.indexOf(i)) {

            document.getElementById("Img" + i).innerHTML = "";

        }*/

    }


}

Tableeaau1();
/*
for (let i = 0; i < Tableau2.length; i++) {

    document.getElementById("Image" + i).innerHTML = '<img src="' + Tableau2[i] + '">';

}*/
