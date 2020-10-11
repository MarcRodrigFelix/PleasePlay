class GamesApi {

  static fetchGames(){
    return fetch("http://localhost:3000/games/1")
    .then(response => response.json())
  }

}
