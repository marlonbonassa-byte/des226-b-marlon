let entrada = require("prompt-sync")();

let numero = Number(entrada("Digite um número: "));

let resultado = numero % 2;
let par = resultado === 0;
let impar = resultado !== 0;
let zero = numero === 0;

if (zero) {
  console.log("O número é zero.");
} else if (par) {
  console.log("O número é par.");
} else if (impar) {
  console.log("O número é ímpar.");
}
