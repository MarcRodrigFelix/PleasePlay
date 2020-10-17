class GamesApi {

  constructor(){
  }

  fetchGames = () => fetch("http://localhost:3000/games").then(response => response.json())


  static postGame(newGame){
    return fetch("http://localhost:3000/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newGame),
    })
    .then(response => response.json())
  }

  static updateGame(gameId, game){
    return fetch(`hppt://localhost:3000/games/${gameId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(game)
    })
    .then(response => response.json())
  }


  static deleteGame(gameId){
    return fetch(`http://localhost:3000/games/${gameId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
  }


}
