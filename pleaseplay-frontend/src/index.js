const api = new GamesApi('http://localhost:3000')


const mainBtn = document.getElementById("newgame-btn")
const newGameForm = document.getElementsByClassName("newgame-form")


const newFormInstance = new GameForm


Game.getGames()