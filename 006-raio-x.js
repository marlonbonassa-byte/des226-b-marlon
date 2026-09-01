let entrada = require("prompt-sync")();

let filme = entrada("Digite o nome de um filme");
let nota = entrada("que nota voce dá(0-10)");
let recomenda = entrada("recomenda o filme(sim/nao)");

//eu controlo o formato
let bilheteria;
let numPaisesExibidos = null;
let notaInt = parseInt(nota, 10);
let recomendaBool = recomenda === "sim" ? true : false;

//undefined
//null

console.log("");
console.log("-------------");
console.log("bilheteria: " + typeof bilheteria);
console.log("numpaisesexibidos= " + typeof numPaisesExibidos);
console.log("notaint: " + typeof notaInt);
// o retorno de um null é object
console.log("recomendaBool" + typeof recomendaBool);

entrada();
