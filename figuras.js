//codigo del cuadrado
console.group("cuadrados");
const ladoCuadrado = 5;
//console.log("los lados del cuadraro miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
//console.log("El perimetro de el cuadrado es: " + perimetroCuadrado + " cm");


function areaCuadrado(lado) {
    return lado * lado;
}
//console.log("El area de el cuadrado es: " + areaCuadrado + " cm^2");
console.groupEnd();

//codigo de el triangulo
console.group("Triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log("los lados del triangulo miden: " 
// + ladoTriangulo1 
// + " cm, "
// + ladoTriangulo2 
// + " cm, " 
// + baseTriangulo
// + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("la altura del triangulo es de: " + alturaTriangulo + " cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log("El perimetro de el triangulo es: " + perimetroTriangulo + " cm");

// const areaTriangulo = (baseTriangulo * alturaTriangulo)/2
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
// console.log("El area de el triangulo es: " + areaTriangulo + " cm^2");

console.groupEnd();

//codigo de el Circulo
console.group("Circulo");

//Radio
// const radioCirculo = 4;
// console.log("El radio de el circulo es: " + radioCirculo + " cm");

//Diamtro
function diametroCirculo(radio) {
    return radio * 2;
}

// const diametroCirculo = radioCirculo *2;
// console.log("El diametro de el circulo es: " + diametroCirculo + " cm");

//PI
const PI = Math.PI;
console.log("PI es: " + PI );

//Circunferencia
function perimetroCirculo(radio) {
    const diametro =  diametroCirculo(radio);
    return diametro * PI;
}
// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perimetro de el circulo es: " + perimetroCirculo + " cm");

// //Area 
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
// console.log("El area de el circulo es: " + areaCirculo + " cm^2");


console.groupEnd();

//Aqui conectamos con HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTrianguloLado1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTrianguloLado2");
    const value2 = Number(input2.value);
    const base = document.getElementById("InputTrianguloBase");
    const value3 = Number(base.value);
    const perimetro = perimetroTriangulo(value1, value2, value3);
    
    alert(perimetro);
}
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert("El perimetro del circulo es: " + perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert("El area del circulo es: " + area);
}
//Triangulo Isósceles
function trianguloIso(){
    let lado1 = document.getElementById("isoLado1");
    let iLado1 = parseFloat(lado1.value);

    let lado2 = document.getElementById("isoLado2");
    let iLado2 = parseFloat(lado2.value);

    let base = document.getElementById("isoBase");
    let iBase = parseFloat(base.value);

    if(iLado1 != iLado2){
        alert("No se puede calcular debido a que los lados son diferentes");
    }else{
        const pequenoLado2 = iBase /2; 
        const pequenoBase = iLado1;

        const pequenoLado2Cuadrado = pequenoLado2 * pequenoLado2;
        const pequenoBaseCuadrado = pequenoBase * pequenoBase;
         
        let pequenoLado1 = Math.sqrt(pequenoBaseCuadrado - pequenoLado2Cuadrado);

        const grandeAltura = pequenoLado1;
        alert(`La altura del triangulo es: ${grandeAltura}cm`);
    }
}