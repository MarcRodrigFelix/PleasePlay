class GameForm{
  constructor(){
  }



  static createGame = (form) => {

    form.addEventListener("submit", function(e){
      e.preventDefault()

      const newGame = {
        title: form.title.value,
        image: form.image.value,
        review: form.review.value
      };
      console.log(newGame)
        GamesApi.postGame(newGame)
        .then(game => {
          console.log(game)
          new Game (game)
        })
        .catch(error => {
          console.log(error)
        })
      e.target.reset()
      })
  }

  
}

