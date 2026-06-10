// Variáveis do bingo
const TOTAL_NUMERO_SORTEADO = 75;
let totalNumeroSorteado = 7;
let nomeDoEvento = "Bingo da Alegria";
 
let restante = TOTAL_NUMERO_SORTEADO - totalNumeroSorteado;
let resultadoJogo = (totalNumeroSorteado === TOTAL_NUMERO_SORTEADO);
 
console.log("Nome do Evento: ", nomeDoEvento);
console.log("Faltam: ", restante);
console.log("Jogo Terminou: ", resultadoJogo);