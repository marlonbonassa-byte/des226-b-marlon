let entrada = require("prompt-sync")();

let idade = Number(entrada("Digite sua idade: "));

let maioridade = 18;
let maiorDeIdade = idade >= maioridade;

let acompanhado =
  entrada("Está acompanhado? (sim/nao): ").toLowerCase() === "sim";

let bloqueado = false;

let podeEntrarPorIdadeOuAcompanhante = maiorDeIdade || acompanhado;
let naoEstaBloqueado = !bloqueado;

let acessoPermitido = podeEntrarPorIdadeOuAcompanhante && naoEstaBloqueado;

if (bloqueado) {
  console.log("Acesso Bloqueado");
} else if (acessoPermitido) {
  console.log("Acesso Liberado");
} else {
  console.log("Acesso Negado");
}
