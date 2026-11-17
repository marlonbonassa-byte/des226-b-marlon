const entrada = require("prompt-sync")();

let soma = 0;
let nrepeticoes = -1;

do {
  var numero = Number(entrada("digite os numeros a serem somados': "));
  //mude de var para let e teste o programa
  soma = soma + numero; //soma +=numero
  nRepeticoes++;
} while (numero !== 0); //fecha o contador se digitar 0

console.log("Total somado: " + soma);
console.log("Quantidade de valores somados: ${nRepeticoes} ");

console.log("");
entrada("Pressione ENTER para finalizar o programa: ");
