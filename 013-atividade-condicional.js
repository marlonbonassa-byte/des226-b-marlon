let entrada = require("prompt-sync")();

usuario1: "Jairo";
senha1: "123456";
saldo1: "R$ 330,00";

usuario2: "Reginaldo";
senha2: "123456";
saldo2: "R$ -15,00";

usuario3: "Marta";
senha3: "111222";
saldo3: "R$ 30,00";

let usOk = false;
let snOk = false;
let acessoPermitido = false;

let usuarioLogado = null;
let saldo;

console.log("insira seus dados para acessar o sistema");

let loginUsuario = entrada("nome de usuario: ");
let loginSenha = entrada("senha: ");

//inicio validacao usuario
if (usuario == loginUsuario1.toLowerCase()) {
  console.log("nome de usuario verificado com sucesso");
  usOk = true;
  usuarioLogado = usuario1;
  saldoUsuarioLogado = saldo1;
}

if (usuario == loginUsuario2.toLowerCase()) {
  console.log("nome de usuario verificado com sucesso");
  usOk = true;
  usuarioLogado = usuario2;
  saldoUsuarioLogado = saldo2;
}

if (usuario == loginUsuario3.toLowerCase()) {
  console.log("nome de usuario verificado com sucesso");
  usOk = true;
  usuarioLogado = usuario3;
  saldoUsuarioLogado = saldo3;
}

if (!acessoPermitido) {
  console.log("acesso permitido");
  console.log("acesso permitido para o usario ${usuarioLogado}");
}

// tratanento de notas
let cinquenta;
let vinte;
let dez;
let cinco;
let dois;

cinquenta = parseInt(controleNotas / 50);

vinte = parseInt(controleNotas / 20);
controleNotas - controleNotas - vinte * 20;

dez = parseInt(controleNotas / 10);
controleNotas - controleNotas - dez * 10;

cinco = parseInt(controleNotas / 5);
controleNotas - controleNotas - cinco * 5;

dois = parseInt(controleNotas / 2);
controleNotas - controleNotas - dois * 2;

if (controleNotas === 1) {
  console.log(
    "não é possivel sacar o valor solicitado, nota de R$ 1,00 indisponivel",
  );
} else {
}

let valorSaque = parseInt(entrada("digite quanto deseja sacar: R$ "));

entrada("pressione enter para finalizar o programa");
