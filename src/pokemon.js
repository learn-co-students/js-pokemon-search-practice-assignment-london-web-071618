let pokemonId = 0
class Pokemon{

  constructor(obj) {
    this.id = ++pokemonId
    this.name = obj.name
    this.frontImage = obj.sprites.front
    this.backImage = obj.sprites.back
  }


  appendPokemon() {
    const container = document.querySelector("#pokemon-container")

    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
      <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
            <h1 class="center-text">${this.name}</h1>
            <div style="width:239px;margin:auto">
              <div style="width:96px;margin:auto">
                <img class="img-${this.name}" src="${this.frontImage}">
              </div>
            </div>
            <p style="padding:10px;" class="p-${this.name} center-text flip-image" data-pokename="${this.name}" data-action="flip-image">flip card</p>
            </div>
    `
    container.append(newDiv)

    const ptag = document.querySelector(`.p-${this.name}`)
    const img = document.querySelector(`.img-${this.name}`)
    ptag.addEventListener("click", () => {
        img.src = img.src === this.frontImage ? this.backImage : this.frontImage
    })
  }


}
