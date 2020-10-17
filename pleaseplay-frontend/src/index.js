const newForm = document.getElementById("form")
const game = document.querySelector('#games-div')
const gameBox = document.getElementsByClassName('game-div')


document.addEventListener('DOMContentLoaded', function(){

  GameForm.createGame(newForm)
  Game.getGames()
  Game.deleteGames(game)


})