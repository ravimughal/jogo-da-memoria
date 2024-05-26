/* Grupo nº28 PL23
Duarte Alberto - 62235
Libero Suprani - 62220
Ravi Mughal - 62504 
*/ 

const BOTAO_JOGAR = "botaoJogar";

const ITEM_DADOS_USUARIOS_LOGADOS = "usuariosLogados";

let usuariosLogados;
let botaoJogar;

window.addEventListener("load", principal);

function principal() {
    console.log("PRINCIPAL DO INDEX RODANDO...");
    botaoJogar = document.getElementById(BOTAO_JOGAR);

    usuariosLogados = JSON.parse(localStorage.getItem(ITEM_DADOS_USUARIOS_LOGADOS)) || [];

    if (usuariosLogados.length == 0) {
        botaoJogar.href = "login.html";
    }
    else {
        botaoJogar.href = "jogo.html";
    }
    
}
