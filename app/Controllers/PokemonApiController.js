import { ProxyState } from "../AppState.js";
import { pokemonApiService } from "../Services/PokemonApiService.js"



//Private
function _drawPokemon() {
  // debugger
  let template = ''
  ProxyState.pokemon.forEach(p => template += /*html*/ `<li class = "pointer" onclick="app.pokemonApiController.getActivePokemon('${p.url}')">${p.name}</li>`)
  document.getElementById('pokemon-list').innerHTML = template
}

function _drawActivePokemon() {
  if (ProxyState.activePokemon) {
    document.getElementById('active-pokemon').innerHTML = ProxyState.activePokemon.Template
  } else {
    document.getElementById('active-pokemon').innerHTML = ""
  }
}

//Public
export default class PokmeonApiController {
  constructor() {
    console.log("pokemon api controller")
    this.getPokemon()
    ProxyState.on("pokemon", _drawPokemon)
    ProxyState.on("activePokemon", _drawActivePokemon)
  }

  getPokemon() {
    try {
      pokemonApiService.getPokemon()
    } catch (error) {
      console.error(error)
    }
  }

  getActivePokemon(url) {
    // debugger
    pokemonApiService.getActivePokemon(url)
  }



}
