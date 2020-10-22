import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { myPokemonApi } from "../Services/AxiosService.js"

class MyPokemonListService {



  constructor() {
    console.log("my list service")
  }

  async getMyList() {
    let res = await myPokemonApi.get("")
    console.log(res)
    ProxyState.myPokemon = res.data.data.map(p => new Pokemon(p))
  }

  async addToMyList() {
    let res = await myPokemonApi.post("", ProxyState.activePokemon)
    console.log(res.data.data)
    // this.getMyList()
    ProxyState.myPokemon = [...ProxyState.myPokemon, new Pokemon(res.data.data)]
    console.log(ProxyState.myPokemon)
  }

  async removeFromMyList() {
    let res = await myPokemonApi.delete(ProxyState.activePokemon.id)
    // this.getMyList()
    ProxyState.myPokemon.filter(p => p.id != ProxyState.activePokemon.id)
    ProxyState.activePokemon = null
  }

  getActivePokemon(id) {
    ProxyState.activePokemon = ProxyState.myPokemon.find(p => p.id == id)
  }


}

export const myPokemonListService = new MyPokemonListService()