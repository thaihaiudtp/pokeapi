const list = document.getElementById('list');
console.log(list);
const getDataFromApi = () => {
    const promises = [];
    for (let i = 1; i <= 300; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()))
    }
    Promise.all(promises).then(results => { 
        const pokemon = results.map( (data) => ({
            name: data.name,
            id: data.id,
            iamge: data.sprites['front_default'],
            height: data.height,
            weight: data.weight,
            type: data.types.map((type) => type.type.name).join(' ,'),
        }));
        pokedex(pokemon);
    })
    
};

const pokedex = (pokemon) => {
    console.log(pokemon);
    const pokemonHTML = pokemon.map(
        (pokeman) => `
    <div class="poke">
    <div>
    <img
      src="${pokeman.iamge}"
      alt="Pokemon name"
    />
  </div>
  <div class="detail">
    <ul>
      <li><h2>Name: ${pokeman.name} - id: ${pokeman.id}</h2></li>
      <li><p>Height - Weight: ${pokeman.height}m - ${pokeman.weight}pound</p></li>
      
      <li><p>Type: ${pokeman.type}</p></li>
      
    </ul>
    </div>
    </div>
    `
    )
    .join('');
    list.innerHTML = pokemonHTML;
};

getDataFromApi();
