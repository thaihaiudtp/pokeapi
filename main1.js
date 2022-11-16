const list = document.getElementById('container');
console.log(list);

const getDataFromApi = () => {
    const promises = [];
    for (let i = 1; i < 701; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()))
    }
    Promise.all(promises).then(results => { 
        const pokemon = results.map( (data) => ({
            name: data.name.toUpperCase(),
            id: data.id,
            image: data.sprites['front_default'],
            type: data.types.map((type) => type.type.name).join(', '),
            hp: data.stats[0].base_stat,
            at: data.stats[1].base_stat,
            de: data.stats[2].base_stat,
            sa: data.stats[3].base_stat,
            sd: data.stats[4].base_stat,
            sp: data.stats[5].base_stat,
           
        }));
        pokedex(pokemon);
    })
    
};

const pokedex = (pokemon) => {
    
    const pokemonHTML = pokemon.map(
        (poke) => `
        <div id="list">
        <div id="pokeCard">
        <img src="${poke.image}" alt="">
        <div class="text" id="text">
            <ul>
                <li>Name: ${poke.name}</li>
                <li>Id: ${poke.id}</li>
                <li>Type: ${poke.type}</li>
                <li>HP: ${poke.hp}</li>
                <li>At-De: ${poke.at} - ${poke.de}</li>
            </ul>
        </div>
    </div>
    </div>
    `
    )
    .join('');
    list.innerHTML = pokemonHTML;
};

getDataFromApi();

// Phân trang

const abc = document.getElementById("pokeCard")
const pg = document.getElementById("pagination");
 let currentPage = 1;
 let rows = 10;
 
function DisplayList(items, wrapper, row_page, page) {
    wrapper.innerHTML = "";
    page--;  
   
    let loopStart = row_page * page;
    let paginations = items.slice(loopStart, loopStart + row_page);
    console.log(paginations);
    for (let i = loopStart; i < loopStart + row_page; i++) {
        
        
    }
}
