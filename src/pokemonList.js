class PokemonList{
  constructor(){
    this.pokemons = []
    this.filteredPokemons = []
    this.container = document.querySelector('#pokemon-container')
    this.searchInput = document.querySelector('#pokemon-search-input')
  }

 filteredPokemons(){
   this.searchInput.addEventListener('keyup', function(event){
     while (this.container.firstChild){
        this.container.removeChild(this.container.firstChild)
     }

     if(this.searchInput.value.length){
       this.pokemon.for
     }
    }
 )
 }

}

//
// filter function
// searchPokemon(){
//   searchInput.addEventListener('keyup', function(event) {
//
//   while (container.firstChild) {
//     container.removeChild(container.firstChild)
//   }
//
//     if(searchInput.value.length) {
//       data.pokemons.forEach(pokemon => {
//         pokemon.name.includes(searchInput.value) ? new Pokemon(pokemon).render() : ""
//       })
//     }
//   })
// }
// searchPokemon()
