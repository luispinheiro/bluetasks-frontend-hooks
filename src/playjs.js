/* const n = 10;
let x = 20;
x = x + 10;

console.log(n);
console.log(x); */

/* const v1 = 40.5;
const v2 = 30;
const v3 = false;
const v4 = "Ola, Softblue";
const v5 = "Eu tenho " + v2 + " anos";
const v6 = `Eu tenho + ${v2} + anos`;

console.log(v5); */

/* const x = 10;
const y = "10";

if (x === y) {
    console.log("x é igual a y");
} else {
   if (x !== y) {
    console.log("x é diferente de y");  
   } 
} */

/* const numeros = [1, 2, 3, 4];
console.log(numeros);

const e = numeros[1];
console.log(e); */

/* const c = {
    cor: "azul",
    ano: 2010
}

console.log(c.cor); */

/* const carros = [
    {
        marca: "Ford",
        cor: "azul",
        ano: 2020,
        modelo: 2019
    },
    {
        marca: "Chevrolet",
        cor: "preto",
        ano: 2019,
        modelo: 2019
    },
    {
        marca: "Fiat",
        cor: "prata",
        ano: 2018,
        modelo: 2019
    }
]

console.log(carros); */

/* const letters = [ "a", "b", "c" ];
console.log(letters);
console.log(...letters);

const person = {
    name: "João",
    age: 20
}

const otherPesrson = {
    ...person,
    hand: "left"
}

console.log(person);
console.log(otherPesrson); */

/* function print(msg) {
    console.log(msg);
}

const print2 = msg => console.log(msg);
const print3 = () => console.log("mensagem print3");
const mult = (a, b) => a * b;

print("este é o print");
print2("este é o print2");
print3();
const r = mult(2, 4);
print(r);

class Carro {

    constructor() {
        this.velAtual = 0;
    }

    acelerar(v) {
        this.velAtual += v;
    }

    velocidade() {
        return this.velAtual;
    }
}

const carro = new Carro();
carro.acelerar(20);
print(carro.velocidade()); */

/* function somar(a, b) {
    return a + b;
}

function multplicar(a, b) {
    return a * b;
}

function processar(v1, v2, op) {
    return op(v1, v2);
}

const result = processar(3, 5, somar);
console.log(result); */

const somar = (a, b) => a + b;
const multplicar = (a, b) => a * b;

function processar(v1, v2, op) {
    return op(v1, v2);
}

const result = processar(3, 5, (a, b) => a + b);
console.log(result);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(...numeros.map(v => v * 2));
console.log(...numeros.filter(v => v % 2 !== 0));

const letras = [ "A", "B", "C" ];

/* const letraA = letras[0];
const letraB = letras[1];
const letraC = letras[2]; */

const [ letraA, letraB, letraC ] = letras;

console.log(`letraA = ${letraA}, letraB = ${letraB}, letraC = ${letraC}`);

const [ ,,l] = letras;
console.log(l);

const carro = {
    modelo: "Fusca",
    ano: 1982,
    mostoristas: [ "Pedro", "Zé" ]
}

const { modelo, mostoristas } = carro;

console.log(modelo);
console.log(mostoristas);