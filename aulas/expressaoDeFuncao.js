/* const nomeVariavel = function (parametro(o)s) {
    // bloco de códico.
    retorno
} */

const imprimirOlaMundo = function () {
  console.log("Olá mundo!");
};

imprimirOlaMundo();

const boasVindas = function (nome) {
  return `Olá, ${nome}`;
};

const fatorial = function f(num) {
  if (num === 0 || num === 1) return 1;
  return num * f(num - 1);
};

console.log(fatorial(5)); //120.
