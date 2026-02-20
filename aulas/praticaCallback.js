/* CALLBACK

criar uma função que faça operações matemáticas entre 2 valores (soma e multiplicação) 
função deve receber por parâmetro: operação desejada, valor1 e valor2. 
 */


function soma(a , b){return a+b;};
function multiplica(a , b){return a*b;};


function calcula(fnOperacap, valorA, valorB ) {
    return fnOperacap(valorA , valorB);
};

console.log(calcula(soma,5,5));
console.log(calcula(multiplica,5,5));


// criar uma função que emita uma mensagem caso usuário x não esteja interagindo com o sistema após y de tempo. 


const userId = '4545656';
const avisaUsuario = userId => console.log(`sessão de ${userId} está inativa`);

// setTimeout(avisaUsuario , 2000, userId)
setTimeout((userId) =>console.log(`sessão de ${userId} está inativa`), 4000, userId);