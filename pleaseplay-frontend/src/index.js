const newForm = document.getElementById("form")
const game = document.querySelector('#games-div')
const gameForm = document.querySelectorAll('.update-form')


document.addEventListener('DOMContentLoaded', function(){

  GameForm.createGame(newForm)
  Game.getGames()
  Game.deleteGames(game)
  Game.updateGame(game)

})