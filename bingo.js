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
//exibirMenu();

// Dados de entrada
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// perguntamos dentro da função - função para manter o menu repetindo 
function iniciarMenu(){

    console.log("\nNome do Evento:", nomeDoEvento);
    exibirMenu();

    rl.question("Escolha uma opção: ", function(opcao) {

        console.log("\nOpção escolhida:", opcao);

        if (opcao === "1") {

            let numeroSorteado = sortearNumero();

            if (numeroSorteado === null) {
                console.log("\nTodos os números já foram sorteados. O jogo terminou.");
                rl.close();
                return;
            } else {
                console.log("\nNúmero sorteado:", numeroSorteado);
                console.log("Números restantes:", calcularRestante());
            }

            iniciarMenu();

        } else if (opcao === "0") {

            console.log("\nSaindo do jogo. Obrigado por jogar!");
            rl.close();

        } else {

            console.log("\nOpção inválida. Escolha uma opção do menu.");
            iniciarMenu();

        }

    });
}
// chamando a função
iniciarMenu();
       