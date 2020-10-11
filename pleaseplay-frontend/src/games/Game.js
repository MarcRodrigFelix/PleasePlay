class Game {

  constructor(game){
    this.game = game
    this.render = this.renderGame()
  }

  renderGame(){
    console.log(this.game)
    this.renderGameDiv()
  }

  renderGameDiv(){
    const div = document.getElementById('game-div')
    const gameDiv = document.createElement('DIV')
    gameDiv.dataset.id = this.game.id
    div.appendChild(gameDiv)

    const gameTitle = document.createElement('H3')
    gameTitle.innerHTML = this.game.title
    gameDiv.appendChild(gameTitle)

    const gameImage = document.createElement('IMG')
    gameImage.className = 'game-img'
    gameImage.src = this.game.image
    gameDiv.appendChild(gameImage)

    const gameReview = document.createElement('P')
    gameReview.innerHTML = this.game.review
    gameDiv.appendChild(gameReview)
  }

  // rednerGameData(){
  //   const { title, image, review } = this.game
  // }

}