document.addEventListener("DOMContentLoaded", function() {

  const container = document.querySelector('#pokemon-container')
  const searchInput = document.querySelector('#pokemon-search-input')
  const card = document.querySelector('li')


  class Pokemon {
    constructor(pokemon){
      this.name = pokemon.name
      this.imageFront = pokemon.sprites.front
      this.imageBack -
    }

    render(){
      const task = document.createElement('li')
      task.innerHTML = `
        <p>${this.name}</p>
        <img src='${this.image.front}' />
      `
      container.append(task)
    }


  }

    function searchPokemon(){
      searchInput.addEventListener('keyup', function(event) {

      while (container.firstChild) {
        container.removeChild(container.firstChild)
      }

        if(searchInput.value.length) {
          data.pokemons.forEach(pokemon => {
            pokemon.name.includes(searchInput.value) ? new Pokemon(pokemon).render() : ""
          })
        }
    })


  }

  searchPokemon()

})
