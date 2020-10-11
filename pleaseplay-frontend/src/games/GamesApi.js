class GamesApi {

  static fetchGames(){
    return fetch("http://localhost:3000/games")
    .then(response => response.json())
  }

}
