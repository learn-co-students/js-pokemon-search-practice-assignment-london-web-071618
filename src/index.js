

document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("#pokemon-search-form")
  const input = document.querySelector("#pokemon-search-input")
  let pokemonsContainer = document.querySelector("#pokemon-container")


  input.addEventListener("keyup", function(event) {
    pokemonsContainer.innerHTML = ""
    getPokemons()
	   .then(data => findPokemons(input.value, data))
     .then(pokemons => pokemons.forEach(pokemon => displayPokemon(pokemon)))
  })


})

function displayPokemon(pokemon){
  let pokemonsContainer = document.querySelector("#pokemon-container")
  let pokemonContainer = document.createElement("div")
  pokemonContainer.className = "pokemon-container"
  pokemonContainer.innerHTML = `
    <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
      <h1 class="center-text">${pokemon.name}</h1>
      <div style="width:239px;margin:auto">
        <div style="width:96px;margin:auto">
          <img id=img-${pokemon.name} src=${pokemon.sprites.front}>
        </div>
      </div>
      <p style="padding:10px;" class="center-text flip-image" id=${pokemon.name} data-action="flip-image">flip card</p>
    </div>
  `
  pokemonsContainer.append(pokemonContainer)

  const flip = document.querySelector(`#${pokemon.name}`)
  flip.addEventListener("click", event => {
    let image = document.querySelector(`#img-${pokemon.name}`)
    if (image.src === `${pokemon.sprites.front}`) {
      image.src = `${pokemon.sprites.back}`
    }
    else {
      image.src =`${pokemon.sprites.front}`
    }
  })
}

function findPokemons(text, data) {
  return data["pokemons"].filter(pokemon => pokemon.name.includes(text.toLowerCase()))
}

function getPokemons() {
  fetch('db.json')
   .then(resp => resp.json()
}
