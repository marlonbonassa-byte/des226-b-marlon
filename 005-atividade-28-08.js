let entrada = require("promptsync")();

let nome = entrada("digite seu nome:");
let profissao = entrada("digite sua profissão");
let anodenascimento = entrada("digite o ano em que nasceu");

let funcao = () => console.log(cartaodevisitas);

//console.log(cartao de visitas);
console.log("Nome: " + typeof nome);
console.log("profissao: " + typeof profissao);
console.log("ano de nascimento: " + typeof idade);

console.log("");
console.log("-------------------------------");
console.log("nome: " + nome);
console.log("profissao: " + profissao);
console.log("ano de nascimento: " + ano);

entrada();
