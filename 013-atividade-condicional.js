let entrada = require("prompt-sync")();

let usuario = [
  {
    usuario1: "Zé da Silva",
    senha: "123456",
    saldo: "R$ 330,00",
  },
  {
    usuario2: "João Dias",
    senha: "654321",
    saldo: "R$ -15,00",
  },
  {
    usuario3: "Marta Santos",
    senha: "111222",
    saldo: "R$ 30,00",
  },
];
let usOk = false;
let snOk = false;
let acessoPermitido = true;

console.log("insira seus dados para acessar o sistema");

let loginUsuario = entrada("nome de usuario: ");
let loginSenha = entrada("senha: ");

if (usuario == loginUsuario.toLowerCase() && senha == loginSenha) {
  acessoPermitido = true;
}

if (acessoPermitido === true) {
  console.log("Acesso permitido!");
} else {
  console.log("Acesso negado!");
}

console.log("Seu saldo é de () qual o valor do saque?");
if ("valor do saque")
  if ("valor do saque <saldo == true")
    "saldo remanescente: (saldo - valor do saque)";
console.log("Seu saldo é de ('saldo remanescente')");
  else "saldo insuficiente";

console.log("Seu saldo é insuficiente");


entrada("Pressione enter para finalizar o programa!");
