//  configurações iniciais do jogo
const TOTAL_NUMEROS_BINGO = 75;
let nomeDoEvento = "Bingo da Alegria";

//  variáveis para o estado do jogo
let numerosDisponiveis = [];
let jaSorteados = [];

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

    for (let numero = 1; numero <=TOTAL_NUMEROS_BINGO; numero++){
        numeros.push(numero);
    }

    return numeros;
}


function calcularRestante(){
    return TOTAL_NUMEROS_BINGO - jaSorteados.length;
} // Essa função calcula quantos números ainda faltam ser sorteados.

function verificarResultadoJogo(){
    return jaSorteados.length === TOTAL_NUMEROS_BINGO;
}

// função sortear numero 
function sortearNumero(){

    if(numerosDisponiveis.length === 0 ){
        return null;
    }

    let indiceAleatorio = Math.floor(Math.random() * numerosDisponiveis.length);

    let numeroSorteado = numerosDisponiveis[indiceAleatorio];

    numerosDisponiveis.splice(indiceAleatorio, 1);

    jaSorteados.push(numeroSorteado);

    return numeroSorteado;

}

// inicializaçao do jogo
numerosDisponiveis = inicializarNumerosDisponiveis();
exibirMenu();

// Dados de entrada 

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
        rl.close();
        return;
    }

});


 
//console.log("Faltam: ", restante);
//console.log("Jogo Terminou: ", resultadoJogo);