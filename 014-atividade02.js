let entrada = require("prompt-sync")();

let idade = numero("digite sua idade:");
let maioridade = 18;
let maiorDeIdade = idade >= maioridade;
let menorDeIdade = idade < maioridade;
let podeEntrarPorIdadeOuAcompanhante = maiorDeIdade || acompanhado;
let naoEstaBloqueado = !bloqueado;
let acessoPermitido = podeEntrarPorIdadeOuAcompanhante;

if (bloqueado){
    console.log('Acesso Bloqueado');
    }else (acessoPermitido) {
        console.log('aecsso Liberado');
    }
    else{
        console.log('acesso Negado');
    }
