
function muestra_oculta(id){
    if (document.getElementById){ //se obtiene el id
        var elemento = document.getElementById(id); //se define la variable "elemento" igual a nuestro div
        elemento.style.display = (elemento.style.display == 'none') ? '' : 'none'; //damos un atributo display:none que oculta el div
    }
};

window.onload = function(){
    mesActualSelected();
    /*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
    muestra_oculta('addInversion1');
    muestra_oculta('addInversion2');
    muestra_oculta('addInversion3');
    muestra_oculta('addInversion4');
    muestra_oculta('addInversion5');
    muestra_oculta('stackMoney1');
    muestra_oculta('stackMoney2');  
    muestra_oculta('stackMoney3');  
    muestra_oculta('stackMoney4');
    muestra_oculta('btnPrint');
    muestra_oculta('btnLight');
    /* "contenido_a_mostrar" es el nombre que le dimos al DIV */
};

function Theme(id1, id2, id3, id4, id5){
    if(document.getElementById){
        let elemento = document.getElementById(id1);
        elemento.style.background = (elemento.style.background == '') ? '#353535' : '';
    }
    if(document.getElementById){
        let elemento = document.getElementById(id2);
        elemento.style.display = (elemento.style.background == '') ? 'none' : '';
    }
    if(document.getElementById){
        let elemento = document.getElementById(id3);
        elemento.style.display = (elemento.style.background == 'none') ? 'block' : '';
    }
    if(document.getElementById){
        let elemento = document.getElementById(id4);
        elemento.style.color = (elemento.style.color == '') ? '#dedede' : '';
    }
    if(document.getElementById){
        let elemento = document.getElementById(id5);
        elemento.style.color = (elemento.style.color == '') ? '#dedede' : '';
    }

};

function cambiarPlus(id, buttonId){
    const elemento = document.getElementById(id);
    if(elemento.style.display == 'none'){
        document.getElementById(buttonId).innerHTML = '+';
    } else {
        document.getElementById(buttonId).innerHTML = '-';
    }
};
//Variables Inversión
const sueldo = document.getElementById('sueldoInput');
const capital = document.getElementById('capitalInput');

const inv1 = document.getElementById('inversion1');
const whereInv1 = document.getElementById('dondeInvertis1');
const rendInv1 = document.getElementById('porcentajeGanancia1');

const inv2 = document.getElementById('inversion2');
const whereInv2 = document.getElementById('dondeInvertis2');
const rendInv2 = document.getElementById('porcentajeGanancia2');

const inv3 = document.getElementById('inversion3');
const whereInv3 = document.getElementById('dondeInvertis3');
const rendInv3 = document.getElementById('porcentajeGanancia3');

const inv4 = document.getElementById('inversion4');
const whereInv4 = document.getElementById('dondeInvertis4');
const rendInv4 = document.getElementById('porcentajeGanancia4');

const inv5 = document.getElementById('inversion5');
const whereInv5 = document.getElementById('dondeInvertis5');
const rendInv5 = document.getElementById('porcentajeGanancia5');

const inv6 = document.getElementById('inversion6');
const whereInv6 = document.getElementById('dondeInvertis6');
const rendInv6 = document.getElementById('porcentajeGanancia6');

//Variables dinero estancado
const ahorro = document.getElementById('stackM');
const lugarAhorro = document.getElementById('whoGotIt');

const ahorro1 = document.getElementById('stackM1');
const lugarAhorro1 = document.getElementById('whoGotIt1');

const ahorro2 = document.getElementById('stackM2');
const lugarAhorro2 = document.getElementById('whoGotIt2');

const ahorro3 = document.getElementById('stackM3');
const lugarAhorro3 = document.getElementById('whoGotIt3');

const ahorro4 = document.getElementById('stackM4');
const lugarAhorro4 = document.getElementById('whoGotIt4');

