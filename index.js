document.querySelector("#search").addEventListener("click", getDataFromApi)
function lowerCaseName(string) {
  return string.toLowerCase();
}

function getDataFromApi(e) {
  const name = document.querySelector("#pokemonName").value;
  const pokemonName = lowerCaseName(name);
  
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  .then((response) => response.json())
  .then((data) => {
    document.querySelector(".list").innerHTML = `
    <div>
    <img
      src="${data.sprites.other["official-artwork"].front_default}"
      alt="Pokemon name"
    />
  </div>
  <div class="detail">
    <ul>
      <li><h2>Name: ${data.name}</h2></li>
      <li><p>Weight: ${data.weight}</p></li>
      <li><p>Height: ${data.height}</p></li>
      
    </ul>
  </div>
    `
  });
  
}
getDataFromApi()
