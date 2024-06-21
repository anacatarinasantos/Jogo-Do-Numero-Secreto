
let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1

//let titulo = document.querySelector("h1");
//titulo.innerHTML = "Jogo do Número Secreto";
//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "Escolha um número de 1 a 100:";

function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() { 
    exibirTextoNaTela('h1', 'Jogo do número secreto'); 
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); 
}
exibirMensagemInicial()

function verificarChute() {
    chute = document.querySelector("input").value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", `Parabéns, o número secreto é ${numeroSecreto}!`);
        let palavraTentativa = tentativa > 1? "tentativas":"tentativa";
        let mensagemTentativa = `Você acertou em ${tentativa} ${palavraTentativa} `;
        exibirTextoNaTela("p",mensagemTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled")
    } else {
        if (chute > numeroSecreto) {
        exibirTextoNaTela("p", "O número secreto é menor");
    } else {
        exibirTextoNaTela("p", "O número secreto é maior");
    }
} 
tentativa++;
limparCampo();
}
    


function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadeDeNumerosDaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeNumerosDaLista == 10){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
} else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
}

}


function limparCampo() {
    chute = document.querySelector("input");
    chute.value ="";
}


function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);

}
