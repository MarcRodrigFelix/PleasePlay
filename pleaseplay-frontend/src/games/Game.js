class Game {

  constructor(game){
    this.game = game
    this.render = this.renderGame()
  }

  renderGame(){
    // console.log(this.game)
    this.renderGameDiv()
  }

  // renderGame = () => {
  //   const game = this.game
  //   // const mainDiv = document.getElementById('game-div')
  //   game.then(games => games.forEach(game => console.log(game + 'data') ))
  // }

  renderGameDiv(){
    const div = document.getElementById('game-div')
    const gameDiv = document.createElement('DIV')
    div.appendChild(gameDiv)

    const gameTitle = document.createElement('H3')
    gameDiv.appendChild(gameTitle)

    const gameImage = document.createElement('IMG')
    gameDiv.appendChild(gameImage)

    const gameReview = document.createElement('P')
    gameDiv.appendChild(gameReview)

  }

  // rednerGameData(){
  //   const { title, image, review } = this.game
  // }

}