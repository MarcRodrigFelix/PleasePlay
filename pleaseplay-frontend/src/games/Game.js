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
    const { title, image, review } = this.game
    const div = document.getElementById('game-div')

    const gameDiv = document.createElement('DIV')
    gameDiv.dataset.id = this.game.id
    div.appendChild(gameDiv)
// create div for game
    const gameTitle = document.createElement('H3')
    gameTitle.innerHTML = title
    gameDiv.appendChild(gameTitle)
// create title for game 
    const gameImage = document.createElement('IMG')
    gameImage.className = 'game-img'
    gameImage.src = image
    gameDiv.appendChild(gameImage)
// create paragraph for game review
    const gameReview = document.createElement('P')
    gameReview.innerHTML = review
    gameDiv.appendChild(gameReview)
  }


}