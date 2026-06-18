//  configurações iniciais do jogo
const TOTAL_NUMERO_SORTEADO = 75;
let nomeDoEvento = "Bingo da Alegria";

//  variáveis para o estado do jogo
let numerosDisponiveis = [];
let totalNumeroSorteado = [];

// funções 


function exibirMenu(){
    console.log("Bem-vindo ao Bingo da Alegria!");
    console.log("1. Sortear um número");
    console.log("2. Verificar números sorteados");
    console.log("3. Verificar números restantes");
    console.log("0. Sair do jogo");
}

function inicializarNumerosDisponiveis(){
    let numeros = [];

    for (let numero = 1; numero <=TOTAL_NUMERO_SORTEADO; numero++){
        numeros.push(numero);
    }

    return numeros;
}

function calcularRestante(){
    return TOTAL_NUMERO_SORTEADO - totalNumeroSorteado.length;
}

function verificarResultadoJogo(){
    return totalNumeroSorteado.length === TOTAL_NUMERO_SORTEADO;
}

// inicializaçao do jogo
numerosDisponiveis = inicializarNumerosDisponiveis();

exibirMenu();

const readline = require("readline") 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Escolha uma opção: ", function (opcao){

    console.log("Nome do Evento: ", nomeDoEvento);
    console.log("Opção escolhida: ", opcao);

    if(numerosDisponiveis.length === 0){
        console.log("\nTodos os numeros já foram sorteados. O jogo terminou!");
        return;
    }
    rl.close();


});


 
//console.log("Faltam: ", restante);
//console.log("Jogo Terminou: ", resultadoJogo);