const URL = 'https://pokeapi.co/api/v2/pokemon/';

const searchInput = document.getElementById('search');
const pokedexScreen = document.getElementById('screen');

function showError(message) {
    pokedexScreen.innerHTML = `<p class="error">${message}</p>`;
}

async function searchPokemon() {
    const searchedPokemon = searchInput.value.toLowerCase();

    try {
        const response = await fetch(URL + searchedPokemon);
        if (!response.ok) {
            showError(`No se encontró ningún Pokémon llamado "${searchedPokemon}"`);
            return;
        }

        const data = await response.json();

        pokedexScreen.innerHTML = 
        `
        <div class="infopokemon">    
            <h2>${data.name.toUpperCase()}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p>Número: ${data.id}</p>
            <p>Altura: ${data.height / 10}m</p>
            <p>Peso: ${data.weight / 10}kg</p>
        </div>
        `;
    } catch (error) {
        showError('Ha ocurrido un error al buscar el Pokémon');
        console.error(error);
    }
}

document.querySelector('button').addEventListener('click', searchPokemon);