let entrada = require("prompt-sync")();

let frete = 20;
let valorCompra = Number(entrada("Digite o valor da compra: "));

if (valorCompra > 150) {
  frete = 0;
} else {
  frete = 20;
}

console.log(`Valor da compra: R$ ${valorCompra}`);
console.log(`Valor do frete: R$ ${frete}`);
