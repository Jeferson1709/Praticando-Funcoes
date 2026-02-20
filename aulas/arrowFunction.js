/* Arrow functions têm sintaxe mais compacta e são sempre anônimas. Tem uso mais restrito do que expressões e declarações de função. */

/* const nomeVariavel = (parâmetro(s) => {
    // bloco de código
    retorno
}) */

const soma = (num1, num2) => {
  console.log(num1 + num2);
};
soma(1, 2);

const boasVindas = (nome) => `Olá, ${nome}`;

console.log(boasVindas("Jeferson"));

const fatorial = (num) => {
  if (num === 0 || num === 1) return 1;
  return num * fatorial(num - 1);
};
