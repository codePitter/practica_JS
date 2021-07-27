// Este es el código del cuadrado
//console.group("Cuadrados");
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado){
    return lado * 4;
};

//console.log("El perìmetro mide: " + perimetroCuadrado + " cm");

function superficieCuadrado(lado){
    return lado * lado;
};


//console.log("La superficie es: " + superficieCuadrado + " cm²");
//console.groupEnd();
// Este es el código del triángulo

//const ladoTriangulo = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//console.group("Triángulos");
//console.log("Los lados de mi triángulo miden: " + ladoTriangulo + " cm, " + ladoTriangulo2 + " cm, " + baseTriangulo + " cm");

function perimetroTriangulo(ladoA, ladoB, base){
    return ladoA + ladoB + base;
};
perimetroTriangulo(6, 6, 4);
//console.log("El perímetro del triángulo es: " + perimetroTriangulo + " cm");

//var alturaT = function alturaTriangulo(ladoA, ladoB){
//    return Math.round(Math.sqrt(ladoA * ladoA - ((ladoB * ladoB)/4)) * 100) / 100;
//};

//console.log("La altura del triángulo es de: " + alturaTriangulo + " cm");

function superficieTriangulo(base, altura){
    return (base * altura) / 2;
};
//console.log("La superficie del triángulo es de: " + superficieTriangulo + " cm²");

//console.groupEnd();

//Este es el código del circulo

/*const radioCirculo = 4;
console.group("Círculo");
console.log("El radio del círculo es: " + radioCirculo + " cm");
*/
function cicunsferenciaCirculo(radioC){
    return Math.round((radioC + radioC) * Math.PI *100) / 100;
};
//console.log("La circunsferencia del círculo es: " + cicunsferenciaCirculo + " cm");

function superficieCirculo(radioC){
    return Math.round((radioC * radioC) * Math.PI * 100) / 100;
};

/*console.log("Lasuperficie del círculo es: " + superficieCirculo + " cm²");

console.groupEnd();*/

// funciones para el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
};

function calcularSuperficieCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = superficieCuadrado(value);
    alert(perimetro);
};