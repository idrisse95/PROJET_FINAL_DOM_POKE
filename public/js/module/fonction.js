import {
    perso1,
    ennemi
} from "./instance.js";
import {
    clicker,
    clickerImg1
} from "../main.js";
import {
    imgEnnemi,
    imgPerso,
    hp1,
    hp2,
    vie1,
    vie2,
    containAttaque,
    bulle,
    att2
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
        imgEnnemi.style.display = "none"
        // imgPerso.style = ('width:400px')
        // imgPerso.classList.add('ggg')


        if (clickerImg1 == true) {
            imgPerso.setAttribute('src', './public/img/perso2A.png')
            imgPerso.style = ('width:400px')
            imgPerso.classList.add('ggg')
        } else {
            imgPerso.setAttribute('src', './public/img/perso1.png')

            imgPerso.style = ('width:400px')
            imgPerso.classList.add('ggg')
        }

        containAttaque.style.display = 'none'
        vie2.innerHTML = '<div class="gg">Tu as GG</div>'
        bulle.textContent = `${ennemi.nom} es mort`
    }

    if (ennemi.hp < 50) {
        hp2.style.backgroundColor = "pink";
        imgEnnemi.setAttribute("src", "./public/img/ennemiVnr.png")
    }

    if (ennemi.hp < 25) {
        hp2.style.backgroundColor = "red";

    }

    mort()
}

export function pointPerso() {
    if (perso1.hp <= 0) {
        imgEnnemi.classList.add('ggg')

        imgEnnemi.style = ('width:400px')
        imgPerso.style.display = "none";
        vie1.innerHTML = '<div class="gg">Tu as Perdu</div>'
        bulle.textContent = `${ennemi.nom} es mort`

    }

    if (perso1.hp < 50) {
        hp1.style.backgroundColor = "pink";

    }

    if (perso1.hp < 25) {
        hp1.style.backgroundColor = "red";

    }
    mort()


}



export let attE = false



export function attaqueEnnemi() {
    attE = true
    if (ennemi.hp > 0) {
        if (clicker == true) {
            ennemi.attaqueEnnemi(perso1)
            att1.style = ('pointer-events:none')
            att2.style = ('pointer-events:none')
            att3.style = ('pointer-events:none')
            att4.style = ('pointer-events:none')

            console.log("c ft");

        }

    } else {



    }
    pointPerso()
}