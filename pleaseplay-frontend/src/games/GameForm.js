class GameForm{
  constructor(){
    // this.createGameForm()
    this.addEventListeners()
    this.gameForm = false
  }


  addEventListeners(){
    if (mainBtn){
      mainBtn.addEventListener("click", () => {
        this.createGameForm()
        this.toggleGameForm()
        console.log("main btn")
      });
    }
    // newGameForm.addEventListener("submit", this.handleForm)
  }


  handleForm = (e) => {
    e.preventDefaul()
    const formData = this.grabFormData(e.target)
    console.log(GamesApi.fetchGames())

    GamesApi.postGame(formData)
    console.log("formdata")
  }


  grabFormData = (gameForm) => {
    return {
      title: form.title.value,
      image: form.image.value,
      review: form.review.value
    }
  }


  createGameForm = () => {
    newGameForm.innerHTML = `
    <form class='game-form'>

    
    <input type="text" id="title" name="title" /><br>
    
    <input type="text" id="image" name="image"/><br>
   
    <input type="text" id="review" name="review" size="50" mexlength="200"/><br>

    <input type="submit" value="Add New Game" class="submit"/>

  </form>
  `
  }

  toggleGameForm = () => {
    this.gameForm = !this.gameForm
    if (this.gameForm) {
      newGameForm.style.display = 'block'
    } else {
      newGameForm.style.display = 'none'
    }
  }

}