class Pokemon {
  constructor(pokemon){
    this.name = pokemon.name
    this.imageFront = pokemon.sprites.front
    this.imageBack = pokemon.sprites.back
  }

  render(){
    const task = document.createElement('li')
    task.innerHTML = `
      <p>${this.name}</p>
      <img src='${this.imageFront}' />
    `
    container.append(task)
  }
}
