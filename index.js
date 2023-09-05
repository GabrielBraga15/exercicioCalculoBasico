const entrada1 =prompt("Informe aqui o primeiro número")
const entrada2 =prompt("Informe aqui o segundo número")

const numero=parseFloat(entrada1)
const numero2=parseFloat(entrada2)

const soma = numero+numero2
const subtracao = numero-numero2
const divisao = numero / numero2
const multiplicacao = numero * numero2

alert("Resultado \n" + 
"\nSoma: " + soma +
"\nSubtração: " + subtracao +
"\nDivisão: " + divisao + 
"\nMultiplicacao: " + multiplicacao)