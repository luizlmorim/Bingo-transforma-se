//  configurações iniciais do jogo
const TOTAL_NUMEROS_BINGO = 75;
let nomeDoEvento = "Bingo da Alegria";

//  variáveis para o estado do jogo
let numerosDisponiveis = []; 
let jaSorteados = []; 

// funções 
// criar função de mensagem de abertura única para o jogo 

function exibirMenu(){
    //console.log("\nBem-vindo ao Bingo da Alegria!");
    console.log("1. Sortear um número");
    console.log("2. Verificar números sorteados");
    console.log("3. Verificar números restantes");
    console.log("4. Reiniciar jogo")
    console.log("0. Sair do jogo\n");
}


function inicializarNumerosDisponiveis(){
    let numeros = [];
                
    for (let numero = 1; numero <=TOTAL_NUMEROS_BINGO; numero++){
        numeros.push(numero);     
    } // 1, 2, 3 .... - 75 

    return numeros;
}   

function reiniciarJogo(){
    numerosDisponiveis = inicializarNumerosDisponiveis();
    jaSorteados = [];
    console.log("\nO jogo foi reiniciado com sucesso!");
}


function calcularRestante(){
    return TOTAL_NUMEROS_BINGO - jaSorteados.length; 
} // Essa função calcula quantos números ainda faltam ser sorteados.

//function verificarResultadoJogo(){
    //return jaSorteados.length === TOTAL_NUMEROS_BINGO;
//}


// função sortear numero 
function sortearNumero(){

    if(numerosDisponiveis.length === 0 ){
        return null;
    }
    // list = [2, 1, , 4, 5]
    //         0  1  2  3  4
    let indiceAleatorio = Math.floor(Math.random() * numerosDisponiveis.length); // Gera um índice aleatório dentro do intervalo do array numerosDisponiveis 1
                        // list[indiceAleatorio] = 3
    let numeroSorteado = numerosDisponiveis[indiceAleatorio]; // Obtém o número correspondente ao índice aleatório

    numerosDisponiveis.splice(indiceAleatorio, 1);
    
    jaSorteados.push(numeroSorteado);

    jaSorteados.sort(function(a,b){
        return a - b;
    });

    return numeroSorteado;

}

// inicializaçao do jogo
numerosDisponiveis = inicializarNumerosDisponiveis();

// Dados de entrada
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function iniciarMenu(){

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
            }

            iniciarMenu();

        } else if (opcao === "2"){

            if(jaSorteados.length === 0){
                console.log("\nNenhum número foi sorteado ainda.");
            } else {
                console.log("\nNúmeros já sorteados: ", jaSorteados);
                console.log("Já sorteados: ", jaSorteados.length,"\n");

            }

            iniciarMenu();

        } else if(opcao === "3"){

            console.log("\nNúmeros restantes: ", calcularRestante());

            iniciarMenu();

        } else if(opcao === "4"){

            reiniciarJogo();

            iniciarMenu();

        }else if (opcao === "0") {

            console.log("\nSaindo do jogo. Obrigado por jogar!");
            rl.close();

        } else {

            console.log("\nOpção inválida. Escolha uma opção do menu.");
            iniciarMenu();

        }

    });
}

function mensagemAbertura(){
    rl.question("Olá! Qual é o seu nome? ", function(nome) {
        console.log("\nBem-vindo(a), " + nome + ", ao " + nomeDoEvento + "!");
        iniciarMenu();
    });
}

mensagemAbertura();