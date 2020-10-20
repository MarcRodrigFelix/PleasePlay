
const newForm = document.getElementById("form")
const game = document.querySelector('#games-div')
const gameForm = document.getElementsByClassName('update-form')
// let gameDivs = document.querySelectorAll('.game-div')



document.addEventListener('DOMContentLoaded', function(){

  GameForm.createGame(newForm)
  
  Game.getGames()
  Game.deleteGames(game)
  Game.updateGames(game)
  Game.toggleEditBtn(game)

  Comments.renderComments()
  // Comments.modalComments()
})