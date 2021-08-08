function calcularModa(lista){
    console.log(lista)
    let listaCount = {};
    lista.map(
        function (var1) {
            if (listaCount[var1]){
                listaCount[var1] += 1;
            }else{
                listaCount[var1] = 1;
            }
        }
    );
    console.log(listaCount);

    const listaArray = Object.entries(listaCount).sort(
        function(valorA, ValorB){
            return valorA[1] - ValorB[1];
        }
    );
        console.log(listaArray);

    const moda = listaArray[listaArray.length - 1];
    return moda;
};