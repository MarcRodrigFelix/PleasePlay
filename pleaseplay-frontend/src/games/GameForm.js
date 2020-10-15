class GameForm{
  constructor(){
    // this.createGameForm()
    this.addEventListeners()
    this.toggleCreateForm()
    this.gameForm = false
  }

  addEventListeners = () => {
    newGameForm.addEventListener("submit", this.handleForm)
  }

  toggleCreateForm = () => {
    mainBtn.addEventListener("click", () => {
      this.createGameForm()
      this.toggleGameForm()
    });
  }


  handleForm(e){
    e.preventDefault()
    const gameForm = document.getElementById("game-form")
    console.log(gameForm)
    const newGame = {
      title: gameForm.title.value,
      image: gameForm.image.value,
      review: gameForm.review.value
    }
    console.log(newGame)
      GamesApi.postGame(newGame)
      .then(createdNewGame => {
        new Game (createdNewGame)
      })
      .catch(error => console.log(error))
    e.target.reset()
  }


  grabFormData = (form) => {
    return {
      title: form.title.value,
      image: form.image.value,
      review: form.review.value
    }
  }


  createGameForm(){
    document.querySelector("#newgame-form").innerHTML = `
    <form id="game-form" class='game-form'>
    <input type="text" id="title" name="title" placeholder="Title" /><br>
    <input type="text" id="image" name="image" placeholder="Image"/><br>
    <input type="text" id="review" name="review" placeholder="Review" size="50" mexlength="200"/><br>
    <input type="submit" value="Submit" class="submit"/>

  </form>
  `
  }

  toggleGameForm = () => {
    this.gameForm = !this.gameForm
    if (this.gameForm) {
      document.querySelector("#newgame-form").style.display = 'block'
    } else {
      document.querySelector("#newgame-form").style.display = 'none'
    }
  }

}