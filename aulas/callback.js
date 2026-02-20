/* Funções callback são passadas como argumento de outra função, de onde podem receber valores. São executadas a partir da função externa.  */

// setTimeout(function () {
//   console.log("Olá mundo");
// }, 2000);

// setTimeout(() => console.log("Olá mundo"), 2000);

// Funcão de ordem superior.

setTimeout(exibeFrase, 5000);

function exibeFrase() {
  console.log("Olá, mundo!");
}
