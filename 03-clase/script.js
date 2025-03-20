// Definimos la clase Pokémon
class Pokemon {
    constructor(nombre, tipo, ataque, defensa, imagen) {
        this.nombre = nombre; // Ahora usa el nombre ingresado por el usuario
        this.tipo = tipo;
        this.ataque = ataque;
        this.defensa = defensa;
        this.imagen = imagen;
    }
}

// Lista de Pokémon desde localStorage
const pokemones = JSON.parse(localStorage.getItem("pokemones")) || [];

// Elementos del DOM
const nombreInput = document.getElementById("nombre");
const tipoSelect = document.getElementById("tipo");
const ataqueInput = document.getElementById("ataque");
const defensaInput = document.getElementById("defensa");
const crearBtn = document.getElementById("crear");
const resetBtn = document.getElementById("reset");
const listaPokemon = document.getElementById("lista-pokemon");

// Función para obtener una imagen de Pokémon por tipo desde la PokéAPI
async function obtenerImagenPorTipo(tipo) {
    const url = `https://pokeapi.co/api/v2/type/${tipo}`;
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        const pokemonesDelTipo = datos.pokemon.map(p => p.pokemon.name);
        const pokemonAleatorio = pokemonesDelTipo[Math.floor(Math.random() * pokemonesDelTipo.length)];
        const detalles = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonAleatorio}`);
        const datosPokemon = await detalles.json();
        return datosPokemon.sprites.front_default; // Solo retorna la imagen
    } catch (error) {
        return "https://via.placeholder.com/100"; // Imagen por defecto si hay error
    }
}

// Función para crear un nuevo Pokémon
async function crearPokemon() {
    const nombre = nombreInput.value.trim(); // Ahora usamos el nombre ingresado
    const tipo = tipoSelect.value;
    const ataque = parseInt(ataqueInput.value);
    const defensa = parseInt(defensaInput.value);

    // Validaciones
    if (nombre === "" || isNaN(ataque) || isNaN(defensa)) {
        alert("Por favor completa todos los campos.");
        return;
    }
    if (ataque < 1 || ataque > 100 || defensa < 1 || defensa > 100) {
        alert("Los valores de ataque y defensa deben estar entre 1 y 100.");
        return;
    }

    // Obtener la imagen de un Pokémon del tipo seleccionado
    const imagen = await obtenerImagenPorTipo(tipo);

    // Crear el objeto Pokémon con el nombre ingresado por el usuario
    const nuevoPokemon = new Pokemon(nombre, tipo, ataque, defensa, imagen);
    pokemones.push(nuevoPokemon);

    // Guardar en localStorage
    localStorage.setItem("pokemones", JSON.stringify(pokemones));

    // Mostrar Pokémon en pantalla
    mostrarPokemon(nuevoPokemon);
}

// Función para mostrar un Pokémon en la interfaz
function mostrarPokemon(pokemon) {
    const card = document.createElement("div");
    card.classList.add("pokemon-card");
    card.innerHTML = `
        <img src="${pokemon.imagen}" alt="${pokemon.nombre}">
        <p><strong>${pokemon.nombre}</strong></p>
        <p>Tipo: ${pokemon.tipo}</p>
        <p>Ataque: ${pokemon.ataque} | Defensa: ${pokemon.defensa}</p>
    `;
    listaPokemon.appendChild(card);
}

// Función para mostrar todos los Pokémon guardados en localStorage
function mostrarTodosLosPokemones() {
    listaPokemon.innerHTML = "";
    pokemones.forEach(mostrarPokemon);
}

// Función para borrar todos los Pokémon guardados
function resetPokemones() {
    localStorage.removeItem("pokemones");
    pokemones.length = 0;
    listaPokemon.innerHTML = "";
}

// Eventos de los botones
crearBtn.addEventListener("click", crearPokemon);
resetBtn.addEventListener("click", resetPokemones);

// Mostrar Pokémon guardados al cargar la página
mostrarTodosLosPokemones();
