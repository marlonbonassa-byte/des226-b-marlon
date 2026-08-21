let entrada = require("prompt-Sync")();
// comentario de 1 linha
let nome = "Marlon"; // string ex: 'qualquer texto'
let idade = 45; // number ex: 10, 18.23
let trabalha = true; // boolean ex : true, false
let endereço = {
  Rua: " Coroados",
  num: 40,
  bairro: "Centro",
}; // object ex: chave/valor
let funcao = () => console.log("oi"); // function ex:bloco de codigo

/*
comentario
de mais de 
uma linha
 */

console.log("tipos de variaveis");
console.log("variável: nome:" + typeof nome);
console.log("variável: idade:" + typeof idade);
console.log("variável: trabalha" + typeof trabalha);
console.log("variável: endereço" + typeof endereço);
console.log("variável: funcao:" + typeof funcao);

// variáveis definidas sem valor
let nomeDigitado;
let idadeDigitada;
let trabalhaDigitado;

console.log(); // pula uma linha

//passando valor para as variáveis
nomeDigitado = entrada ('digite seu nome' );
idadeDigitada = entrada ('qual sua idade?' );
trabalhaDigitada = entrada ('Você trabalha?' );

//mostrando valor e tipo das variaveis

console.log('nome: ' + nomeDigitado + 'tipo:' + typeof(nomeDigitado));
console.log('Idade:' + idadeDigitada +'tipo:' + typeof(idadeDigitada));
console.log('trabalha:' + trabalhaDigitado + 'tipo:' + typeof(trabalhaDigitado));