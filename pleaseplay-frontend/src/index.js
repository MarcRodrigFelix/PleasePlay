
const mainBtn = document.getElementById("newgame-btn")
// const newForm = document.getElementById("form")




document.addEventListener('DOMContentLoaded', () => {
const newForm = document.getElementById("form")

  
  Game.getGames()
  
  GameForm.createGame(newForm)
})