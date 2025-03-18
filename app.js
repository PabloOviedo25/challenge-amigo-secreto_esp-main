// Crear un array para almacenar los nombres
let amigos = [];

// Capturar el valor del campo de entrada
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    // Validar la entrada
    if(nombreAmigo === ""){
        alert("Por favor, ingrese un nombre.");
        return;
    }
    if(amigos.includes(nombreAmigo)){
        alert(`El nombre ${nombreAmigo} ya está en la lista`);
        return;
    }
// Actualizar el array de amigos
    amigos.push(nombreAmigo);
// Limpiar el campo de entrada
    inputAmigo.ariaValue = "";
// Actualizar lista en HTML
    actualizarLista();
}

// Actualizar lista con function. Obtener el elemento de la lista
function actualizarLista(){
    const listaAmigos = document.getElementById("listaAmigos");
// Limpiar la lista existente
    listaAmigos.innerHTML = "";
//Iterar sobre el arreglo y agregar elemento a la lista
    for(let i = 0; i <amigos.length; i++){
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li)
    }
}

// Implementa una función para sortear los amigos
function sortearAmigo(){
// Validar que haya amigos disponibles
    if(amigos.length === 0){
        alert("No hay amigos para sortear. Agrega un amigo.");
        return;
    }
// Generar un índice aleatorio y obtener el nombre sorteado
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
//Mostrar el resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}<strong>`;
}