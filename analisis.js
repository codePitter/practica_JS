//Helper
function esPar(numer){
    return (numer % 2 === 0);
};
function CalcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};

//Calculadora de Mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    if(esPar(lista.length)){
        const personMitad1 = lista[mitad -1];
        const personMitad2 = lista[mitad];
        const mediana = CalcularMediaAritmetica([personMitad1, personMitad2]);
        return mediana;
    } else {
        const personMitad = lista[mitad];
        return personMitad;
    }
};

//Mediana General
const salariosCol = colombia.map(
    function(person){
        return person.salary;
    }
);
const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);
console.log(medianaSalarios(salariosColSorted));

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//Mediana del Top 10%
//(p * (100 - 15)) /100

const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;



const salarioColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col = medianaSalarios(salarioColTop10);



console.log({
    medianaGeneralCol,
    medianaTop10Col,
});