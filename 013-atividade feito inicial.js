    exercicio realizado originalmene...
    const entrada = require('prompt-sync')();

// Organizando os usuários em um objeto para facilitar a busca e manutenção
const usuarios = {
    "jairo": { senha: "123456", saldo: 330.00 },
    "reginaldo": { senha: "123456", saldo: -15.00 },
    "marta": { senha: "111222", saldo: 30.00 }
};

console.log("--- Insira seus dados para acessar o sistema ---");
let loginUsuario = entrada("Nome de usuário: ").toLowerCase(); // Converte para minúsculo para evitar erros
let loginSenha = entrada("Senha: ");

// Validação de Acesso
if (usuarios[loginUsuario] && usuarios[loginUsuario].senha === loginSenha) {
    console.log("\nAcesso permitido!");
    
    let conta = usuarios[loginUsuario];
    console.log(`Seu saldo atual é de: R$ ${conta.saldo.toFixed(2)}`);
    
    // Sistema de Saque
    let valorSaque = parseFloat(entrada("Qual o valor do saque? R\$ "));
    
    if (isNaN(valorSaque) || valorSaque <= 0) {
        console.log("Valor de saque inválido.");
    } else if (valorSaque <= conta.saldo) {
        conta.saldo -= valorSaque; // Deduz o valor do saldo
        console.log("Saque realizado com sucesso!");
        console.log(`Seu saldo remanescente é de: R$ ${conta.saldo.toFixed(2)}`);
    } else {
        console.log("Saldo insuficiente para realizar o saque.");
    }

} else {
    console.log("\nAcesso negado! Usuário ou senha incorretos.");
}

entrada("\nPressione Enter para finalizar o programa...");