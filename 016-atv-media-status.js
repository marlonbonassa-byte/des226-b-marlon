const entrada = require("prompt-sync")();

const nota1 = parseFloat(entrada("Digite a 1ª nota: "));
const nota2 = parseFloat(entrada("Digite a 2ª nota: "));
const nota3 = parseFloat(entrada("Digite a 3ª nota: "));

if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
  console.log(`Todos os valores devem ser numéricos.`);
} else if (nota1 < 0 || nota2 < 0 || nota3 < 0) {
  console.log(`Nenhuma nota pode ser menor que 0.`);
} else if (nota1 > 10 || nota2 > 10 || nota3 > 10) {
  console.log(`Nenhuma nota pode ser maior que 10.`);
} else {
  const media = (nota1 + nota2 + nota3) / 3;

  if (media >= 7) {
    console.log(`Média final: ${media.toFixed(1)} - APROVADO`);
  } else if (media >= 5 && media < 7) {
    console.log(`Média final: ${media.toFixed(1)} - RECUPERAÇÃO`);
  } else {
    console.log(`Média final: ${media.toFixed(1)} - REPROVADO`);
  }
}
