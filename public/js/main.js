import {
    perso1,
    ennemi
} from "../js/module/instance.js";
import {
    att1,
    att2,
    hp1,
    hp2,
    imgEnnemi,
    imgPerso,
    vie1,
    vie2,
    bulle,
    ouverture,
    acceuil,
    jeux,
    containAttaque,
    img1,
    img2,
    att3,
    att4,
} from "../js/module/let.js";

import {
    pointEnnemi,
    attaqueEnnemi,
    pointPerso
} from "../js/module/fonction.js";



ouverture.addEventListener("click", () => {
    document.getElementById('ouverture').play()
    jeux.classList.add("vien");
})

export let clicker = false;



export let oui = 0
att1.addEventListener('click', () => {
    oui++
    console.log(oui);
    imgPerso.style = 'transform:translate(470px,-150px)'
    clicker = true;
    perso1.attaque(ennemi);

    hp2.setAttribute('style', 'width:' + ennemi.hp + '%');

    pointPerso()
    pointEnnemi()
    attaqueEnnemi()






})

att2.addEventListener('click', () => {
    oui++
    imgPerso.style = 'transform:translate(470px,-150px)'
    clicker = true;
    perso1.attaque2(ennemi)

    hp2.setAttribute('style', 'width:' + ennemi.hp + '%');


    pointPerso()
    pointEnnemi()
    attaqueEnnemi()



})

att3.addEventListener('click', () => {
    oui++
    imgPerso.style = 'transform:translate(470px,-150px)'
    clicker = true;
    perso1.attaque3(ennemi);

    hp2.setAttribute('style', 'width:' + ennemi.hp + '%');


    pointPerso()
    pointEnnemi()
    attaqueEnnemi()




})

console.log(oui);
att4.addEventListener('click', () => {

    if (oui >= 3) {
        bulle.textContent = "TU AS ACTIVER TON ATTAQUE SPECIAL PROFITE EN POUR EN FINIR"

        imgPerso.style = 'transform:translate(470px,-150px)'

        clicker = true;
        perso1.attaque4(ennemi)
        hp2.setAttribute('style', 'width:' + ennemi.hp + '%');



        pointPerso()

        pointEnnemi()
        attaqueEnnemi()


    } else {
        bulle.textContent = "Fait au minimum 3 attaques pour debloquer celle-ci"
        imgPerso.style = 'transform:rotateZ(360deg)'
    }







})


export let clickerImg1 = false
img1.addEventListener('click', () => {
    clickerImg1 = true;
    imgPerso.setAttribute('src', './public/img/perso2.png')
    att1.textContent = "Attaque Eau"
    att2.textContent = "Eau eclair"
    att3.textContent = "Flaque Puissanttt"
    att4.textContent = "Voltali"


    let butt = document.querySelectorAll('#containAttaque button')
    console.log(butt);
    butt.forEach(element => {
        element.addEventListener('click', () => {
            butt.style = "color:blue;"
        })
    });

})


img2.addEventListener('click', () => {
    imgPerso.setAttribute('src', './public/img/Sprite_720_Déchaîné_dos_ROSA.png')
})