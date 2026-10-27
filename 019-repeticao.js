const entrada = require("prompt-sync")();
//controle de repeticao no inicio

let contador = 0;

while (contador <= 10) {
  console.log(contador);
  contador = contador + 1;
}

entrada("pressione enter para encerrar o programa!");
