const pokedex = [];

let pokeApi = async () => {
    for(let i = 1; i <= 151; i++) {
        const final = await fetch("https://pokeapi.co/api/v2/pokemon/${i}");
        const pokemonjson = await final.json();
        pokedex.push(pokemonjson);
        console.log(pokedex);
        console.log(pokemonjson);
    }
};

pokeApi();