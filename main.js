



function reducirDescuento () {
    precio = prompt("Ingresar precio del producto");
	cantidad = prompt("Ingresar cantidad");

	    compra = precio * cantidad;
	    descuento = compra * 0.30;
	    pagar = compra - descuento;

	console.log("El desceunto es: " + descuento + "$");
	console.log("El total a pagar es: " + pagar + "$");
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

reducirDescuento ();
cobrarPago ();
