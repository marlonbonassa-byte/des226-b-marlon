const entrada = require("prompt-sync")();

let numero;
let soma = 0;
let quantidade = 0;

do {
  numero = Number(entrada("Soma contínua, digite 0 para parar: "));

  if (numero !== 0) {
    soma = soma + numero;
    quantidade++; // contador
  }
} while (numero !== 0);

console.log("Total somado: " + soma);
console.log("Quantidade de valores somados: " + quantidade);

entrada("Pressione ENTER para finalizar o programa: ");
