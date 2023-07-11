
let porcentaje = 0.30;
let precio = 0;

function reducirDescuento () {

    precio = prompt("Ingresar precio del producto");
	cantidad = prompt("Ingresar cantidad");

    compra = precio * cantidad;
    descuento = compra * porcentaje;
    pagar = compra - descuento;

	console.log("El descuento es: " + descuento + "$");
	alert("El total a pagar es: " + pagar + "$");
}



function cobrarPago (){
    monto = prompt("ingrese monto a pagar");

    if(monto >= pagar){ 
    vuelto = monto - pagar;
    alert("compra exitosa, su vuelto es " + vuelto + "$")
}else{
    falta = pagar - monto;
    alert("lo sentimos, te falta " + falta + "$");
}

}
while(precio != "ESC" ) {
    reducirDescuento ();
cobrarPago ();

precio = prompt("desea seguir comprando");
}
