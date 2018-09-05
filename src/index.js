function getPokemon(query) {
  fetch('http://localhost:3000/pokemons', {
  method: 'GET'
}).then(res => res.json()).
  then(json => returnPokemon(json, query)).
  then(json => createCard(json))
}



function returnPokemon(json, query) {
  console.log(json.filter(pokemon => pokemon.name.includes(query)))
  return json.filter(pokemon => pokemon.name.includes(query))
}

function toggleImg(json, imgSrc) {
  console.log(json)
    console.log(imgSrc.src)
  if (imgSrc.src === json.sprites.back) {
     imgSrc.src = json.sprites.front
  } else {
    imgSrc.src = json.sprites.back
  }
}


function createCard(json) {
  console.log(json)
  json.forEach(pokemon => {
    let newCard = document.createElement('div')
    newCard.className = 'pokemon-frame center-text'
    newCard.style = "margin:10px;padding:10px;background:#fecd2f;color:#2d72fc"
    newCard.innerHTML = `<h3>${pokemon.name}</h3><img src=${pokemon.sprites.front} /><p id="flipcard" onclick="flipcard(this)">flip card</p>`
    document.getElementById('pokemon-container').appendChild(newCard)
  })
}


  function flipcard(element) {
    let pokeName = element.previousSibling.previousSibling.innerText
    let pokeImg = element.previousSibling
    fetch('http://localhost:3000/pokemons', {
    method: 'GET'
    }).then(res => res.json()).
    then(json => returnPokemon(json, pokeName)[0]).
    then(json => toggleImg(json, pokeImg))
    }


document.addEventListener("DOMContentLoaded", function() {
  let searchBox = document.getElementById('pokemon-search-input')
  searchBox.addEventListener('input', (event) => {
    document.getElementById('pokemon-container').innerHTML = ""
    if (searchBox.value === "") {
      document.getElementById('pokemon-container').innerHTML = ""
    } else {
    console.log(searchBox.value)
    getPokemon(searchBox.value)
    }
  })
})
