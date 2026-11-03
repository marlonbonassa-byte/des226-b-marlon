const entrada = require("prompt-sync")();
//controle de repeticao no inicio

let contador = 5;

while (contador >= 0) {
  console.log(contador);
  contador = contador - 1;
}

entrada("Decolagem autorizada!");
