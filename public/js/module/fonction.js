import {
    perso1,
    ennemi
} from "./instance.js";
import {
    clicker
} from "../main.js";
import {
    imgEnnemi,
    imgPerso,
    hp1,
    hp2,
    vie1,
    vie2,
    containAttaque,
    bulle
} from "./let.js";
import {
    perso
} from "./class.js";



export function mort() {
    if (perso1.hp < 0 || ennemi.hp < 0) {
        containAttaque.style.display = 'none'
        bulle.style.display = 'none'
    }
}
export function pointEnnemi() {
    if (ennemi.hp <= 0) {
        imgEnnemi.style.display = "none";
        containAttaque.style.display = 'none'
        vie2.innerHTML = '<div class="gg">Tu as GG</div>'
        bulle.textContent = `${ennemi.nom} es mort`
    }

    if (ennemi.hp < 60) {
        hp2.style.backgroundColor = "pink";
        imgEnnemi.setAttribute("src", "./public/img/ennemiVnr.png")
    }

    if (ennemi.hp < 20) {
        hp2.style.backgroundColor = "red";

    }

    mort()
}

export function pointPerso() {
    if (perso1.hp <= 0) {
        imgPerso.style.display = "none";
        vie1.innerHTML = '<div class="gg">Tu as Perdu</div>'
        bulle.textContent = `${ennemi.nom} es mort`

    }

    if (perso1.hp < 60) {
        hp1.style.backgroundColor = "pink";

    }

    if (perso1.hp < 20) {
        hp1.style.backgroundColor = "red";

    }
    mort()


}



export let attE = false
export function test() {
    if (attE == false) {
        containAttaque.style.display = "block";
    } else {

        containAttaque.style.display = "none";
        console.log("test");

    }


}


export function attaqueEnnemi() {
    attE = true
    if (ennemi.hp > 0) {
        if (clicker == true) {
            ennemi.attaqueEnnemi(perso1)
            console.log("c ft");
            
        }
        
    } else {
         
        alert(`${ennemi.nom} est mort`)
    }

    pointPerso()
}