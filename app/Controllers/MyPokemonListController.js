import { ProxyState } from "../AppState.js"
import { myPokemonListService } from "../Services/MyPokemonListService.js"


function _drawMyPokemon() {
  let template = ''
  ProxyState.myPokemon.forEach(p => template += /*html*/ `<li class = "pointer" onclick="app.myPokemonListController.getActivePokemon('${p.id}')">${p.name}</li>`)
  document.getElementById('my-pokemon-list').innerHTML = template
}

export default class MyPokemonListController {
  constructor() {
    console.log("my list controller")
    this.getMyList()
    ProxyState.on("myPokemon", _drawMyPokemon)
  }


  getMyList() {
    try {
      myPokemonListService.getMyList()
    } catch (error) {
      console.error(error)
    }
  }
  addToMyList() {

    try {
      myPokemonListService.addToMyList()
    } catch (error) {
      console.error(error)
    }

  }

  getActivePokemon(id) {
    myPokemonListService.getActivePokemon(id)
  }

  removeFromMyList() {
    console.log("button is working")
    myPokemonListService.removeFromMyList()
  }
}