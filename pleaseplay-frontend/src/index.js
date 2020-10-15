const api = new GamesApi('http://localhost:3000')


const mainBtn = document.getElementById("newgame-btn")
const newGameForm = document.querySelector("#newgame-form")


const newGameFormInstance = new GameForm

Game.getGames()