const entrada = require("prompt-sync")();

/*
    O Math.random() gera um número entre 0 e 1. 
    Se for menor que 0,5, o Math.round() arredonda para 0; 
    se for maior ou igual a 0,5, arredonda para 1.
    Exemplo: 
*/
/*
    let vAleatorio = Math.random();
    console.log(`Valor aleatório gerado: ${vAleatorio}`);
    let valorArredondado = Math.round(vAleatorio); 
    console.log(`Valor arredondado gerado: ${valorArredondado}`);
*/

// Gera valor aleatório entre 0 e 1
const bloqueado = Math.round(Math.random());

const idade = entrada("Digite a idade de quem vai entrar: ");
const acompanhado = entrada("Está acompanhado dos pais? Digite S/N: ");

const entradaBloqueada = bloqueado == 1 ? true : false;
const entradaAcompanhado =
  acompanhado.toLocaleLowerCase() == "s" ? true : false;

if ((idade >= 18 || (idade < 18 && entradaAcompanhado)) && !entradaBloqueada) {
  console.log(`Entra`);
  // console.log(`Entrada bloqueada: ${entradaBloqueada}`);
} else {
  const motivo1 =
    idade < 18 && !entradaAcompanhado ? "\nMenor não acompanhado" : "";
  const motivo2 = entradaBloqueada ? "\nAcesso bloqueado pelo sistema" : "";
  console.log(`Não entra, porque: ${motivo1} ${motivo2}`);
  // console.log(`Entrada bloqueada: ${entradaAcompanhado}`);
}
