//DESAFIO
function olaMundo() {
    console.log ('Olá, mundo!');
}
olaMundo();


function olaNome(nome) {
    console.log (`Olá, ${nome}`);

}
olaNome("hugo");


function calcularDobro(numero) {
    return numero * 2;
}
let resultadoDoDobro = calcularDobro(5);
console.log(resultadoDoDobro);


function calcularMedia(valor1, valor2, valor3) {
    return (valor1 + valor2 + valor3) /3;
}
let resultadoDaMedia = calcularMedia(7, 5, 2);
console.log(resultadoDaMedia);


function numeroMaior(a, b) {
    return a > b? a : b;
}
let maiorNumero = numeroMaior(9, 5);
console.log(maiorNumero);


function quadrado(valor) {
    return valor * valor;
}
let resultadoQuadrado = quadrado(2);
console.log(resultadoQuadrado);


//outro desafio

//1-
function calcularImc('altura', 'peso') {
    let imc = peso / (altutaMetros * alturaMetros);
}

//2-


//3-
function converterDolarParaReal(valorEmDolar) {
    let cotacaoDoDolar = 4.80;
    let convercaoParaReal = valorEmDolar * cotacaoDoDolar;
    return convercaoParaReal.toFixed(2);
}


//4-
function calcularAreaPerimetroSalaRetangular('altura', 'largura') {
    let area = largura * altura;
    let perimetro = 2 * (largura * altura);

    console.log(`A area é de ${area} metros quadrados`);
    console.log(`O perimetro é de ${perimetro} metros`);
}

//5-
function areaPerimetroDaSalaCircular(raio) {
    let areaCirculo = Math.PI * raio * raio;
    let perimetroCirculo = Math.PI * raio;

    console.log (`Area da sala circular é ${areaCirculo} metros quadrados`);
    console.log (`Perimetro da sala circular é ${perimetroCirculo} metros`);
}


//6-
function tabuada(numero) {
    for (let t = 1; t<=10; t++) {
        let resultado = numero * t;
        console.log(`${numero} x ${t} = ${resultado}`);
    }
}

//desafio
//1- 
let listaGenerica = [];

//2
let linguagensDeProgramacao ['javascript', 'C', 'c++', 'kotlin', 'python'];

//3
let linguagensDeProgramacao ['javascript', 'C', 'c++', 'kotlin', 'python'];
linguagensDeProgramacao.push('java', 'ruby', 'golang');

//4
let nomes = ['hugo', 'monalizza', 'graca'];
console.log (nomes[0]);

//5
let nomesDois = ['cesar', 'edite', 'maria'];
console.log (nomesDois[1]);


//6
let nomesUltimo = ['hugo', 'edite', 'graca'];
console.log (nomesUltimo[nomesUltimo.length + 1]);