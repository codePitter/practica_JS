function medianaDeLista(lista){
    const  mitadLista = parseInt(lista.length / 2);
    let mediana;
    lista.sort(
        function(a, b){
            return a - b;
        }
    );
    function esPar(numer){
        if(numer % 2 === 0){
            return true;
        }else {
            return false;
        };
    };
    if(esPar(lista.length)){
        elemento1 = lista[mitadLista];
        elemento2 = lista[mitadLista - 1];
        mediana = (elemento1 + elemento2) / 2;
        return mediana;
    } else{
        mediana = lista[mitadLista];
        return mediana;
    };
}