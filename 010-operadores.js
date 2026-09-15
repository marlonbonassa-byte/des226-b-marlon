let entrada = require("prompt-sync")();

//vamos calcular
let strNum1 = entrada("insira o 1º valor: ");
let strNum2 = entrada("insira o 2º valor: ");

let num1 = parseInt(strNum1);
let num2 = parseInt(strNum2);

let soma = num1 + num2;
let subtração = num1 - num2;
let multiplicação = num1 * num2;
let divisão = num1 / num2;
let inteiroDivisao = parseInt(num1 / num2);
let restoDivisao = num1 % num2;

console.log("soma: ${num1} + ${num2} = ${soma}");
console.log("subtração: ${num1} - ${num2} = ${subtração}");
console.log("multiplicação: ${num1} * ${num2} = ${multiplicação}");
console.log("divisão: ${num1} / ${num2} = ${divisão.tofixed(2)}");
console.log("inteiro da divisão: ${num1} / ${num2}= ${inteiroDivisao}");
console.log("restoDivisão: ${num1} % ${num2} = ${restoDivisão}");
