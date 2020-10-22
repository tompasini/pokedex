// @ts-ignore
export const pokemonApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
  timeout: 10000
})

// @ts-ignore
export const myPokemonApi = axios.create({
  baseURL: "http://bcw-sandbox.herokuapp.com/api/Tom/pokemon",
  timeout: 10000
})