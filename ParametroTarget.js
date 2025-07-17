function saludo(nombre, fecha) {
    console.log("Hola ".concat(nombre, "hoy es ").concat(fecha.toDateString()));
}
saludo("Pedro Picapiedra ", new Date());
