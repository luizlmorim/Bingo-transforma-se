// 1. configurações iniciais do jogo
const TOTAL_NUMERO_SORTEADO = 75;
let nomeDoEvento = "Bingo da Alegria";

// 2. variáveis para o estado do jogo
let numerosDisponiveis = [];
let totalNumeroSorteado = [];

// 3. cálculos do estado atual do jogo
let restante = TOTAL_NUMERO_SORTEADO - totalNumeroSorteado;
let resultadoJogo = (totalNumeroSorteado === TOTAL_NUMERO_SORTEADO);

// 4. configurações de entrada
const readline = require("readline") 

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Escolha uma opção: ", function (opcao){

    console.log("Nome do Evento: ", nomeDoEvento);
    console.log("Opção escolhida: ", opcao);
    rl.close();


})


 
//console.log("Faltam: ", restante);
//console.log("Jogo Terminou: ", resultadoJogo);