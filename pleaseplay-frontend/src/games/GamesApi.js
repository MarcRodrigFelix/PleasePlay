class GamesApi {

  constructor(url){
    this.url = url
  }

  fetchGames = () => fetch(`${this.url}/games`).then(response => response.json())


  postGame = (newGame) => {
    return fetch("http://localhost:3000/games", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newGame),
    })
    .then(response => response.json())
  }
}
