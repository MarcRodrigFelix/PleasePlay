class Game {

  constructor(game){
    this.game = game
    this.render()
    // this.renderUpdateForm(this.game)
  }

  render(){
    this.renderGame()
    this.toggleBtn()
    // console.log(this.game)
  }

  renderGame(){
    const { title, image, review } = this.game
    const div = document.getElementById('games-div')

    const gameDiv = document.createElement('DIV')
    gameDiv.dataset.id = this.game.id
    div.appendChild(gameDiv)
    gameDiv.className = 'game-div'
// create div for game
    const gameTitle = document.createElement('H3')
    gameTitle.innerHTML = `| ${title} |`
    gameDiv.appendChild(gameTitle)
// create title for game 
    const gameImage = document.createElement('IMG')
    gameImage.className = 'game-img'
    gameImage.src = image
    gameDiv.appendChild(gameImage)
// create paragraph for game
    const gameReview = document.createElement('P')
    gameReview.innerHTML = review
    gameDiv.appendChild(gameReview)
// create delete button
    const deleteBtn = document.createElement('BUTTON')
    deleteBtn.innerHTML = 'Delete'
    deleteBtn.className = 'delete'
    gameDiv.appendChild(deleteBtn)
// create update button
    const updateGame = document.createElement('BUTTON')
    updateGame.innerHTML = 'Edit Game'
    updateGame.className = 'edit-game'
    gameDiv.appendChild(updateGame)

//  RENDER UPDATE FORM
    const updateForm = document.createElement('form')
    updateForm.setAttribute('id', `update-form-${this.game.id}`)
    updateForm.className = 'update-form'
    gameDiv.appendChild(updateForm)

    const upTitle = document.createElement('input')
    upTitle.setAttribute('type', 'text');
    upTitle.setAttribute('name', 'title');
    upTitle.setAttribute('value', `${title}`);
    updateForm.appendChild(upTitle)

    const upImage = document.createElement('input')
    upImage.setAttribute('type', 'text');
    upImage.setAttribute('name', 'image');
    upImage.setAttribute('placeholder', 'Paste new image url.');
    updateForm.appendChild(upImage)

    const upReview = document.createElement('input')
    upReview.setAttribute('type', 'text');
    upReview.setAttribute('name', 'review');
    upReview.setAttribute('placeholder', `Begin typing a new review...`);
    updateForm.appendChild(upReview)

    const upBtn = document.createElement('input')
    upBtn.setAttribute('type', 'submit')
    upBtn.setAttribute('value', 'Update')
    upBtn.setAttribute('class', 'update')
    updateForm.appendChild(upBtn)

  }


  toggleBtn(){
    let gameDivs = document.getElementsByClassName('game-div')

    Array.from(gameDivs).forEach(function(div){
      div.addEventListener('click', function(e){
        if (e.target.className === 'edit-game'){
          const currentGameForm = e.target.parentNode.children[5]
          if (currentGameForm.id == `update-form-${this.dataset.id}`){
              currentGameForm.classList.toggle('update-form')
          }
        }
      })
    })
  }


  static getGames(){
// fetch API and put games through new Game class to display new game.
    new GamesApi().fetchGames().then(games => games.forEach(game => new Game(game)))
  }

  static updateGames(game){
    game.addEventListener("click", function(e){
      // e.preventDefault()

      if (e.target.className === 'update'){
        const gameId = e.target.parentNode.parentNode.dataset.id
        const upGame = {
          title: e.target.parentNode.title.value,
          image: e.target.parentNode.image.value,
          review: e.target.parentNode.review.value
        };
        GamesApi.updateGame(gameId, upGame)
        e.target.parentNode.reset()
      }
    })
  }


  static deleteGames(game){
    game.addEventListener("click", function(e){
      const gameId = e.target.parentNode.dataset.id
      if (e.target.className === 'delete'){
        GamesApi.deleteGame(gameId)
        e.target.parentNode.remove()
      } 
    })
  }

}