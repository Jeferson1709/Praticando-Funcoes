/* criar uma função para caclular juros compostos.
a função deve receber os valores no formato inteiro: valor, % de juros e tempo 
fórmula: valor * (juro elevado a  tempo) */

const calculaJuros = (valor, juros, tempo ) =>{

    let taxaJuros = (juros / 100) + 1;
    return valor * Math.pow(taxaJuros, tempo)
}

console.log(calculaJuros(1000, 5 , 2));
