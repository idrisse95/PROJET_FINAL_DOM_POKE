import {
    bulle,
    pointEnnemi,
    pointPerso,
    hp1
} from "../module/let.js";

import {
    attE
} from "../module/fonction.js";

export class perso {
    constructor(nom, hp, type, lvl) {
        this.nom = nom;
        this.hp = hp;
        this.type = type;
        this.lvl = lvl;
    }



    attaque(ennemi) {
        ennemi.hp -= 20
        bulle.textContent = `${this.nom}: J'attaque avec Attaque feu! \n ${ennemi.nom} perd 20 point`
        pointEnnemi.textContent = `HP: ${ennemi.hp}`


    }

    attaque2(ennemi) {
        ennemi.hp -= 25
        bulle.textContent = `${this.nom}: J'attaque avec Attaque feu! \n ${ennemi.nom} perd 25 point`
        pointEnnemi.textContent = `HP: ${ennemi.hp}`
    }

    attaque3(ennemi) {
        ennemi.hp -= 30
        bulle.textContent = `${this.nom}: J'attaque avec Attaque feu! \n ${ennemi.nom} perd 30 point`
        pointEnnemi.textContent = `HP: ${ennemi.hp}`
    }

    attaque4(ennemi) {
        ennemi.hp -= 40
        bulle.textContent = `${this.nom}: J'attaque avec Attaque feu! \n ${ennemi.nom} perd 40 point`
        pointEnnemi.textContent = `HP: ${ennemi.hp}`
    }

    attaqueEnnemi(ennemi) {
        let tab = [
            {nom:"MA premiere attaque",point:20},
            {nom:"Ma deuxieme",point:30},
            {nom:"Mon Attaque spécial",point:50}

        ]


        let rand = tab[Math.floor(Math.random() * tab.length)]

        

        ennemi.hp -= rand.point
        setTimeout(() => {

            bulle.textContent = `${this.nom}: J'attaque avec ${rand.nom} \n ${ennemi.nom} perd ${rand.point}`
            pointPerso.textContent = `HP: ${ennemi.hp}`
            hp1.setAttribute('style', 'width:' + ennemi.hp + '%');
        }, 1000);

    }

}