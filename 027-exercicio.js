const entrada = require("prompt-sync")();

//numeros solicitados ao usuario
let inicio = parseInt(entrada("Digite o número inicial: "));
let fim = parseInt(entrada("Digite o número final: "));

//pede os numeros para o usuario
for (let fatorX = inicio; fatorX <= fim; fatorX++) {
  console.log("--- TABUADA DO " + fatorX + " ---");

  //for para multiplicacao
  for (let fatorY = 1; fatorY <= 10; fatorY++) {
    console.log(fatorX + " x " + fatorY + " = " + fatorX * fatorY);
  }
}

entrada("Pressione ENTER para encerrar o programa!");
