const cantidad = document.querySelector("#cantidad-input");
const precio = document.querySelector("#precio-input");
const state = document.querySelector('#state-input');
const formT = document.querySelector("#totalizador-form");

formT.addEventListener("submit", (event) => {
    event.preventDefault();
    //alert("Cantidad indtorucida: "+ cantidad.value + " Precio introducido: "+ precio.value);
    let totalMult = precioTotal(cantidad.value, precio.value);
    let totalConIm=ImpFORstate(state.value);
    //let totaldes= Descuento();
    document.getElementById('total').innerHTML = totalMult;
    //document.getElementById('descuento').innerHTML = totaldes;
    document.getElementById('totalConImpuesto').innerHTML = totalConIm;
});

function precioTotal(cantidad, precio) {
    let res = cantidad * precio;
    return res;
}

function ImpFORstate(valueState) {
    let valorImpuestos=0;
    let res = precioTotal(cantidad.value, precio.value) - Descuento();
    switch (valueState) {
        case 'UT':
            valorImpuestos = 0.0665;
            break;
        case 'NV':
            valorImpuestos = 0.08;
            break;
        case 'TX':
            valorImpuestos = 0.0625;
            break;
        case 'AL':
            valorImpuestos = 0.04;
            break;
        case 'CA':
            valorImpuestos = 0.0825;
            break;
        default:
            alert("No existe");
    }
    res = res + (res * valorImpuestos);
    return res;
}

function Descuento()
{
    let valordescuento=0;
    let res = precioTotal(cantidad.value, precio.value);
    if(res<1000)
        valordescuento=0;
        else if(res>=1000 && res<3000)
            valordescuento = 0.03;
            else if(res>=3000 && res<7000)
                valordescuento = 0.05;
                else if(res>=7000 && res<10000)
                    valordescuento = 0.07;
                    else if(res>=10000 && res<30000)
                        valordescuento = 0.1;
                        else if(res>=30000)
                            valordescuento = 0.15;
    res = res * valordescuento;
    return res;
}