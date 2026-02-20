// Funções são blocos de código reutilizáveis que excutam uma tarefa especifica.

/* 
function nomeDaFuncao(parâmetro(o)s) {
    bloco de código.bloco

    retorno
} */
function darBoasVindas(nome) {
    return`Boas vinda, ${nome}`;
}

function darBoasVindas() {
    console.log('Olá, boas vindas!');
    ;
}

darBoasVindas('Jeferson');

console.log(darBoasVindas('Juliana'));
// --------------------------------
function divide(dividendo, divisor) {
    return dividendo / divisor
}

const resultado1 = divide(12 ,2);

const resultado2 = divide(2 , 12); 

console.log(resultado1);
console.log(resultado2);

// --------------------------------
// Escopo
let resultado = 0 ; 

function divide(dividendo, divisor =2) {
    resultado=  dividendo / divisor;

    const texto = `resultado ${resultado}`; 

}

divide(12); 
console.log(resultado); //6
console.log(texto); //Erro






