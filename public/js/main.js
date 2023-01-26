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
    containAttaque,img1,img2, att3, att4
} from "../js/module/let.js";

import {
    pointEnnemi,
    attaqueEnnemi,
    pointPerso
} from "../js/module/fonction.js";

// let tab = [30, 45, 25, 15]
// let rand=tab[Math.floor(Math.random() * tab.length)]

// console.log(rand);

let tab = [
    {nom:"dd",point:20},
    {nom:"aa",point:30}

]


let rand = tab[Math.floor(Math.random() * tab.length)]

console.log(rand);


ouverture.addEventListener("click", () => {
    // document.getElementById('ouverture').play()
    jeux.classList.add("vien");
})

export let clicker = false;


att1.addEventListener('click', () => {
    clicker = true;
    perso1.attaque(ennemi);

    hp2.setAttribute('style', 'width:' + ennemi.hp + '%');


    pointEnnemi()
    attaqueEnnemi()

  



})

att2.addEventListener('click', () => {
    clicker = true;
    perso1.attaque2(ennemi)

    hp2.setAttribute('style', 'width:' + ennemi.hp + '%');

    pointEnnemi()
    attaqueEnnemi()



})

att3.addEventListener('click', () => {
    clicker = true;
    perso1.attaque4(ennemi);

    hp2.setAttribute('style', 'width:' + ennemi.hp + '%');


    pointEnnemi()
    attaqueEnnemi()




})



att4.addEventListener('click', () => {

    clicker = true;

    perso1.attaque4(ennemi)

    hp2.setAttribute('style', 'width:' + ennemi.hp + '%');

    pointPerso()
    pointEnnemi()
    attaqueEnnemi()



})



img1.addEventListener('click',()=>{
    imgPerso.setAttribute('src','./public/img/perso2.png')
    att1.textContent = "Attaque Eau"
    att2.textContent = "Eau eclair"
    att3.textContent = "Flaque Puissanttt"
    att4.textContent = "Voltali"
})


img2.addEventListener('click',()=>{
    imgPerso.setAttribute('src','./public/img/Sprite_720_Déchaîné_dos_ROSA.png')
})