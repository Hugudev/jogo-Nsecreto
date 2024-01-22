let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function exibirMensagemNoConsole() {
    console.log('O botão foi clicado!');
}

function exibirAlerta() {
    alert('Eu amo JS');
}


function exibirPrompt() {
    let nomeDaCidade = prompt('Digite uma cidade do Brasil que você gosta muito');
    alert(`Estive em ${nomeDaCidade} e lembrei de você`);
}

function somandoDoisNumeros() {
    let primeiroNumero = parseInt(prompt('Digite um número'));
    let segundoNúmero = parseInt(prompt('Digite mais um número'));
    let resultado = primeiroNumero + segundoNúmero
    alert(`o resultado de ${primeiroNumero} + ${segundoNúmero} = ${resultado}`);
}