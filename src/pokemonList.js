class PokemonList{

  constructor() {
    this.allPokemon = []
    this.filteredPokemon = []
    this.getAllPokemon()
    this.addSearchFunc()
  }

  getAllPokemon() {
    fetch('http://localhost:8000/db.json')
    .then(resp => resp.json())
    .then(json =>
      json.pokemons.forEach(pokemon => {
        const newPokemon = new Pokemon(pokemon);
        this.allPokemon.push(newPokemon)
      })
    )
  }

  addSearchFunc() {
    const searchBox = document.querySelector("#pokemon-search-input")
    searchBox.addEventListener("keyup", () => {
    	let result = searchBox.value
      this.filterPokemon(result)
      this.appendFilteredPokemon()
    })
  }

  filterPokemon(searchInput) {
    this.filteredPokemon = this.allPokemon.filter(pokemon => pokemon.name.includes(searchInput))
  }

  appendFilteredPokemon() {
    const container = document.querySelector("#pokemon-container")
    container.innerHTML = ''
    this.filteredPokemon.forEach(pokemon => pokemon.appendPokemon())
  }

}
