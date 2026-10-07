let entrada = require("prompt-sync")();

let nota1 = Number(entrada("Digite nota 1: "));
let nota2 = Number(entrada("Digite nota 2: "));
let nota3 = Number(entrada("Digite nota 3: "));

let media = (nota1 + nota2 + nota3) / 3;

let situacaoDoAluno = "";

if (media >= 7) {
  situacaoDoAluno = "aprovado";
} else if (media >= 5) {
  situacaoDoAluno = "recuperação";
} else {
  situacaoDoAluno = "reprovado";
}

console.log("Resultado");
console.log(`Média: (${nota1} + ${nota2} + ${nota3}) / 3 = ${media}`);
console.log(`Aluno está: ${situacaoDoAluno}`);
