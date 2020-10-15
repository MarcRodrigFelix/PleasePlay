class GameForm{
  constructor(){
    this.init()
  }

  init(){
    this.setEvents()
  }

  setEvents(){
    const newForm = document.getElementById("game-form")
    newForm.addEventListener("submit", this.createGame)
  }


  createGame = (form) => {
    // form.addEventListener("submit", function(e){
      form.preventDefault()

      const newGame = {
        title: form.title.value,
        image: form.image.value,
        review: form.review.value
      };
        GamesApi.postGame(newGame)
        .then(createdNewGame => {
          new Game (createdNewGame)
        })
        .catch(error => {
          console.log(this.game)
          console.log(error)
        })
      form.target.reset()

    }
}

