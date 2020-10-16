const newForm = document.getElementById("form")



document.addEventListener('DOMContentLoaded', function(){
  
  Game.getGames()
  
  GameForm.createGame(newForm)

})