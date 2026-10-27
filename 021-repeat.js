const entrada = require("prompt-sync")();

senha = 1111111;
//repetição com teste no final
do {
  senhaDigitada = entrada("digite sua senha: ");
} while (senha != senhaDigitada);

entrada("sistema acessado com sucesso! Pressione Enter para prosseguir.");
