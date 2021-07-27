// Este es el código del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perìmetro mide: " + perimetroCuadrado + " cm");

const superficieCuadrado = ladoCuadrado * ladoCuadrado
console.log("La superficie es: " + superficieCuadrado + " cm²");
console.groupEnd();
// Este es el código del triángulo

const ladoTriangulo = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.group("Triángulos");
console.log("Los lados de mi triángulo miden: " + ladoTriangulo + " cm, " + ladoTriangulo2 + " cm, " + baseTriangulo + " cm");

const perimetroTriangulo = ladoTriangulo + ladoTriangulo2 + baseTriangulo
console.log("El perímetro del triángulo es: " + perimetroTriangulo + " cm");

const alturaTriangulo = Math.round(Math.sqrt(ladoTriangulo * ladoTriangulo - ((ladoTriangulo2 * ladoTriangulo2)/4)) * 100) / 100;
console.log("La altura del triángulo es de: " + alturaTriangulo + " cm");

const superficieTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("La superficie del triángulo es de: " + superficieTriangulo + " cm²");

console.groupEnd();

//Este es el código del circulo

const radioCirculo = 4;
console.group("Círculo");
console.log("El radio del círculo es: " + radioCirculo + " cm");

const cicunsferenciaCirculo = Math.round((radioCirculo + radioCirculo) * Math.PI *100) / 100;
console.log("La circunsferencia del círculo es: " + cicunsferenciaCirculo + " cm");

const superficieCirculo = Math.round((radioCirculo * radioCirculo) * Math.PI * 100) / 100;
console.log("Lasuperficie del círculo es: " + superficieCirculo + " cm²");

console.groupEnd();

