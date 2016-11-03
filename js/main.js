function validateForm(){
	/* Escribe tú código aquí */

//Campos obligatorios
nombre = document.getElementById("name").value;
if (nombre == null || nombre.length == 0) {
	alert("Ingresa nombre");
	return false;
}

apellido = document.getElementById("lastname").value;
if (apellido == null || apellido.length == 0) {
	alert("Ingresa apellido");
	return false;
}

//Solo letras de la A-Z
soloLetrasNombre = document.getElementById("name").value;
if (/[0-9]/.test(soloLetrasNombre)) {
	alert("Ingresa solo letras");
	return false;
}

soloLetrasApellido = document.getElementById("lastname").value;
if (/[0-9]/.test(soloLetrasApellido)) {
	alert("Ingresa solo letras");
	return false;
}

//Primera letra mayuscula
nombreMayuscula = nombre.charAt(0);
if (!(/[A-Z]/.test(nombreMayuscula))) {
	alert("Ingresa mayucula en la primera letra");
	return false;
}

apellidoMayuscula = apellido.charAt(0);
if (!(/[A-Z]/.test(apellidoMayuscula))) {
	alert("Ingresa mayucula en la primera letra");
	return false;
}

//Email valido
email = document.getElementById("input-email").value;
if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email))) {
alert("Ingresa email valido");
return false;
}

//Contraseña valida
password = document.getElementById("input-password").value;
if (password.length<6 || password=123456 || password="password") {
	alert("Ingresa contraseña valida");
	return false;
}

//Seleccionar bicicleta
bicicleta = document.querySelector("select").value;
if (bicicleta = 0) {
	alert("Selecciona una bicicleta");
	return false;
}

}

