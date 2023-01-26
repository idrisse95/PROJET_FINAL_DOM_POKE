import {
    bulle,
    pointEnnemi,
    pointPerso,
    hp1,
    att1,
    att2,
    att3,
    att4,
    imgPerso,
    imgEnnemi
} from "../module/let.js";

import {

} from "../module/fonction.js";

export class perso {
    constructor(nom, hp, type, lvl) {
        this.nom = nom;
        this.hp = hp;
        this.type = type;
        this.lvl = lvl;
    }



    attaque(ennemi) {
        ennemi.hp -= 10
        bulle.textContent = `${this.nom}: J'attaque avec ${att1.textContent}! !!! ${ennemi.nom} perd 10 point`
        pointEnnemi.textContent = `HP: ${ennemi.hp}`


    }

    attaque2(ennemi) {
        ennemi.hp -= 15
        bulle.textContent = `${this.nom}: J'attaque avec ${att2.textContent} !!! ${ennemi.nom} perd 15 point`
        pointEnnemi.textContent = `HP: ${ennemi.hp}`
    }

    attaque3(ennemi) {
        ennemi.hp -= 20
        bulle.textContent = `${this.nom}: J'attaque avec ${att3.textContent} !!! ${ennemi.nom} perd 20 point`
        pointEnnemi.textContent = `HP: ${ennemi.hp}`
    }

    attaque4(ennemi) {
        ennemi.hp -= 70
        bulle.textContent = `${this.nom}: J'ATTAQUE AVEC MA GROSS ATTAQUE ${att4.textContent} !!! ${ennemi.nom} perd 70 point`
        pointEnnemi.textContent = `HP: ${ennemi.hp}`
    }

    attaqueEnnemi(ennemi) {
        let tab = [{
                nom: "MA premiere attaque",
                point: 20
            },
            {
                nom: "Ma deuxieme",
                point: 35
            },
            {
                nom: "Mon Attaque spécial",
                point: 55
            }

        ]


        let rand = tab[Math.floor(Math.random() * tab.length)]






        ennemi.hp -= rand.point
        setTimeout(() => {
           

            imgEnnemi.style = 'transform:translate(-400px,200px)'
            setTimeout(() => {
                imgEnnemi.style = 'transform:translate(0)'
            }, 500);
            bulle.textContent = `${this.nom}: J'attaque avec ${rand.nom} \n ${ennemi.nom} perd ${rand.point}`
            pointPerso.textContent = `HP: ${ennemi.hp}`
            hp1.setAttribute('style', 'width:' + ennemi.hp + '%');
        }, 1000);

        setTimeout(() => {
            att1.style = ('pointer-events:auto')
            att2.style = ('pointer-events:auto')
            att3.style = ('pointer-events:auto')
            att4.style = ('pointer-events:auto')
        }, 1700);



        setTimeout(() => {
            imgPerso.style = 'transform:translate(0)'
        }, 500);


    }

}