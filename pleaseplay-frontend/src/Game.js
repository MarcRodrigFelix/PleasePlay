class Game {

  constructor(game){
    this.game = game
    this.renderGame()
  }

  // render(){
  //   this.renderGame()
  // }

  renderGame(){
    const { title, image, review } = this.game
    const div = document.getElementById('games-div')

    const gameDiv = document.createElement('DIV')
    gameDiv.dataset.id = this.game.id
    div.appendChild(gameDiv)
    gameDiv.className = 'game-div'
// create div for game
    const gameTitle = document.createElement('H3')
    gameTitle.innerHTML = `| ${title} |`
    gameDiv.appendChild(gameTitle)
// create title for game 
    const gameImage = document.createElement('IMG')
    gameImage.className = 'game-img'
    gameImage.src = image
    gameDiv.appendChild(gameImage)
// create paragraph for game
    const gameReview = document.createElement('P')
    gameReview.innerHTML = review
    gameDiv.appendChild(gameReview)
// create delete button
    const deleteBtn = document.createElement('BUTTON')
    deleteBtn.innerHTML = 'Delete'
    deleteBtn.className = 'delete'
    gameDiv.appendChild(deleteBtn)
// create update button
    const updateGame = document.createElement('BUTTON')
    updateGame.innerHTML = 'Update'
    updateGame.className = 'update'
    gameDiv.appendChild(updateGame)
  }


  static getGames(){
// fetch API and put games through new Game class to display new game.
    new GamesApi().fetchGames().then(games => games.forEach(game => new Game(game)))
  }


  static deleteGames(game){
    game.addEventListener("click", function(e){
      const gameId = e.target.parentNode.dataset.id
      if (e.target.className === 'delete'){
        GamesApi.deleteGame(gameId)
        e.target.parentNode.remove()
      } 
    })
  }

}