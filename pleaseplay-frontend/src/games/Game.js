class Game {

  constructor(game){
    this.game = game
    this.render = this.renderGame()
  }

  renderGame(){
    console.log(this.game)
  }

  // renderGame = () => {
  //   const game = this.game
  //   // const mainDiv = document.getElementById('game-div')
  //   game.then(games => games.forEach(game => console.log(game + 'data') ))
  // }

  // renderGameDiv = () => {
  //   const gameDiv = document.createElement('div')
  //   const gameTitle = document.createElement('h3')
  //   const gameImage = document.createElement('img')
  //   const gameReview = document.createElement('p')
  // }

  // rednerGameData(){
  //   const { title, image, review } = this.game
  // }

}