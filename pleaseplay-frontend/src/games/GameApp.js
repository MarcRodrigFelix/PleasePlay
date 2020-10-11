class GameApp {

  constructor(){
    this.init()
  }

  init(){
    GamesApi.fetchGames().then(games => {
      games.forEach(game => new CreateGames(game))
    })
  }
}