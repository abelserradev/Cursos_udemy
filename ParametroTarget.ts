function saludo(nombre:string, fecha:Date) {
    console.log(`Hola ${nombre} hoy es ${fecha.toDateString()}`);
}

saludo("Pedro Picapiedra", new Date())