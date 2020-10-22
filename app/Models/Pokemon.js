export default class Pokemon {
  constructor(data) {
    this.name = data.name
    this.img = data.img || data.sprites.front_default
    this.height = data.height
    this.id = data.id || data._id
  }

  get Template() {
    return /*html*/ `
    <div class="card">
    <div class="card-body">
        <h1>${this.name}</h1>
        <img src="${this.img}" alt="Pokemon Image">
        <h4>Height: ${this.height}</h4>
        ${this.Button}
    </div>
</div>
    `
  }

  get Button() {
    if (this.id.length > 4) {
      return `<button onclick="app.myPokemonListController.removeFromMyList()"class= "btn btn-danger">Remove from Your List</button>`
    }
    return `<button onclick="app.myPokemonListController.addToMyList()"class= "btn btn-primary">Add to Your List</button>`
  }

}