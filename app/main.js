import MyPokemonListController from "./Controllers/MyPokemonListController.js";
import PokemonApiController from "./Controllers/PokemonApiController.js";

class App {
  pokemonApiController = new PokemonApiController()
  myPokemonListController = new MyPokemonListController
}

window["app"] = new App();
