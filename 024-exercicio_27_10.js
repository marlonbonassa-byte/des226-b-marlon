const entrada = require("prompt-sync")();

const fatorX = 7;

for (let fatorY = 0; fatorY <= 10; fatorY++) {
  const produto = fatorX * fatorY;
  console.log(`${fatorX} x ${fatorY} = ${produto}`);
}

entrada("pressione ENTER para encerrar o programa!");
