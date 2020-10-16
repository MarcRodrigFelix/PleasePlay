const newForm = document.getElementById("form")



document.addEventListener('DOMContentLoaded', () => {
  
  Game.getGames()
  
  GameForm.createGame(newForm)
})