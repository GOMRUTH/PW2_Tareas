const nombres = [
    "Juan", "Pedro", "Ana", "Luis", "Sofia", "Carlos", "Elena", "Fernando", "Lucia", "Marcos",
    "Miguel", "Paula", "Ricardo", "Valeria", "Javier", "Camila", "Alejandro", "Martina", "Andres", "Beatriz"
];

// Variable constante de la busqueda 'Marcos'
const nombreBuscado = "Marcos";

// Función para buscar el nombre en la lista
function buscarNombre(lista, nombre) {
    let cantidadNombres = lista.length; // Variable local con el número de elementos
    let i = 0;
    
    while (i < lista.length) {
        if (lista[i] === nombre) {
            console.log("Nombre encontrado: " + lista[i]);
            break;
        } else {
            console.log("Este no es " + nombreBuscado);
        }
        i++;
    }
    
    console.log("La lista contiene: " + cantidadNombres + " nombres");
}

// Llamar a la función de la busqueda del Nombre en la lista nombres*
buscarNombre(nombres, nombreBuscado);
