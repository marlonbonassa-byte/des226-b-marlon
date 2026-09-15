let entrada = require("prompt-sync")();

let usuario = "klofis";
let senha = "1475369";
let usOk = false;
let snOk = false;
let acessoPermitido = true;

console.log("insira seus dados para acessar o sistema");

let loginUsuario = entrada("nome de usuario: ");
let loginSenha = entrada("senha: ");

if (usuario == loginUsuario.toLowerCase()) {
  console.log("Nome de usuário verificado com sucesso!");
  usOk = true;
}

if (senha == loginSenha) {
  console.log("Senha verificada com sucesso!");
  snOk = true;
}

if (usOk === true) {
  if ((snOk = true)) {
    acessoPermitido = true;
  }
}

if (acessoPermitido === true) {
  console.log("acessoPermitido!");
} else {
  console.log("acesso negado!");
}
entrada("pressione enter para finalizar o programa");
