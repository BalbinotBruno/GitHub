var vidaCampeao = 1000;
var manaCampeao = 500;
var ouro = 300;


function atacar(danoBase, bonusAD) {
    const escala = 0.6; // constante

    let danoFinal = danoBase + (bonusAD * escala); // variável local

    vidaCampeao -= danoFinal; // usa variável global

    return vidaCampeao;
}

// Exemplo:
console.log(atacar(100, 50));

function usarHabilidade(custoMana) {
    const custoMinimo = 20; // constante

    let podeUsar = false; // variável local

    if (manaCampeao >= custoMana && custoMana >= custoMinimo) {
        manaCampeao -= custoMana; // altera variável global
        podeUsar = true;
    }

    return podeUsar;
}

// Exemplo:
console.log(usarHabilidade(50));

function ganharRecompensa(kills, assists) {
    const ouroKill = 300;   // constante
    const ouroAssist = 150; // constante

    let recompensa = (kills * ouroKill) + (assists * ouroAssist); // variável local

    ouro += recompensa; // altera variável global

    return ouro;
}

// Exemplo:
console.log(ganharRecompensa(1, 2));