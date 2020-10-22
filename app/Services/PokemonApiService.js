import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { pokemonApi } from "../Services/AxiosService.js"


class PokemonApiService {

  constructor() {
    console.log("pokemon api service")
  }

  async getPokemon() {
    let res = await pokemonApi.get("?limit=151&offset=0")
    ProxyState.pokemon = res.data.results
  }

  async getActivePokemon(url) {
    let res = await pokemonApi.get(url)
    console.log(res.data)
    ProxyState.activePokemon = new Pokemon(res.data)
    console.log(ProxyState.activePokemon)
  }
}

export const pokemonApiService = new PokemonApiService();

