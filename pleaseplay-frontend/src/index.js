const newForm = document.getElementById("form")
const game = document.querySelector('#games-div')


document.addEventListener('DOMContentLoaded', function(){
  GameForm.createGame(newForm)
  Game.getGames()
  
  Game.deleteGames(game)
})