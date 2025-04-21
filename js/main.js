let menu = document.getElementById("menu");
let titulo = document.getElementById("titulo");
let tamanhoJanela = window.innerWidth;

function alternamenu(){
    if (menu.style.display == "block"){
        menu.style.display = "none";
        return;
    }
    menu.style.display = "block";
}

function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function ajustaMenu(){
    tamanhoJanela = window.innerWidth;
    console.log(tamanhoJanela);
    if (tamanhoJanela > 500){
        menu.style.display = "flex";
        return
    }
    menu.style.display = "none";

}

async function trocarPalavraAnimado(origem, destino) {
    if (origem.length !== destino.length) {
        throw new Error("As palavras devem ter o mesmo comprimento.");
    }

    let atual = origem.split('');

    for (let i = 0; i < destino.length; i++) {
        if (atual[i] !== destino[i]) {
            const letraAntiga = atual[i];
            atual[i] = destino[i];
            titulo.innerHTML=atual.join('');
            await esperar(100);
        }
    }
}

async function loopAnimacao(origem, destino) {
    while (true) {
        await esperar(5000);
        await trocarPalavraAnimado(origem, destino);
        await trocarPalavraAnimado(destino, origem);
    }
}

loopAnimacao("Portfolio", "P0rtf0l10");