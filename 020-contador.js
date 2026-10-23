let i = 1;
console.log(" iniciando contagem na mesma linha...\n");

const intervalo = setInterval(() => {
  //limpa a linha atual do terminal e move o cursor para o inicio (coluna 0)
  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);

  //escreve o numero atual na mesma linha
  process.stdout.write("contagem: ${i}");

  if (i === 10) {
    clearInterval(intervalo); // Para o contador quando chega a 10
    console.log("\n\n fim da contagem!");
  }
  i++;
}, 3000); //3000milissgundos = 3segundos
