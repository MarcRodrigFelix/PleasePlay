class Game {

  constructor(game){
    this.game = game
    this.renderGame()
    this.setEventListeners()
    this.game.comments.forEach(comment => {
      new Comments(comment)
    })
  }

  static getGames(){
    new GamesApi().fetchGames().then(games => games.forEach(game => new Game(game)))
  }


  renderGame(){
    const { title, image, review } = this.game

    // const { id, content, commentator } = this.game.comments
    // console.log(this.game)
    // console.log(this.game.comments[0]['content'])
    // const { id, content, commentator } = Object.values(this.game.comments)

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
    updateForm.setAttribute('id', `update-form`)
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
    upImage.setAttribute('value', `${image}`);
    upImage.setAttribute('placeholder', 'Paste new image url.');
    updateForm.appendChild(upImage)

    const upReview = document.createElement('input')
    upReview.setAttribute('type', 'text');
    upReview.setAttribute('name', 'review');
    upReview.setAttribute('value', `${review}`);
    upReview.setAttribute('placeholder', `Begin typing a new review...`);
    updateForm.appendChild(upReview)

    const upBtn = document.createElement('input')
    upBtn.setAttribute('type', 'submit')
    upBtn.setAttribute('value', 'Update')
    upBtn.setAttribute('class', 'update')
    updateForm.appendChild(upBtn)

// // CREATE MODAL
//     const modalBtn = document.createElement('button')
//     modalBtn.id = 'modalBtn'
//     modalBtn.innerHTML = 'Open Comments'
//     gameDiv.appendChild(modalBtn)

// // create modal div
//     const modalDiv = document.createElement('div')
//     modalDiv.id = 'myModal'
//     modalDiv.className = 'modal'
//     gameDiv.appendChild(modalDiv)

// // create modal content
//     const modalContent = document.createElement('div')
//     modalContent.className = 'modal-content'
//     modalDiv.appendChild(modalContent)

//     const modalHeader = document.createElement('h2')
//     modalHeader.innerHTML = `Comments for ${title}`
//     modalContent.appendChild(modalHeader)

//     const modalPTag = document.createElement('P')
//     modalPTag.innerHTML = `Comment: "${this.game.comments[0]['content']}"`
//     modalContent.appendChild(modalPTag)

//     const modalCommentator = document.createElement('h3')
//     modalCommentator.innerText = `Commentator Name: ${this.game.comments[0]['commentator']}`
//     modalContent.appendChild(modalCommentator)

//     const modalSpan = document.createElement('span')
//     modalSpan.className = 'close'
//     modalSpan.id = 'close'
//     modalSpan.innerHTML = '&times;'
//     modalContent.appendChild(modalSpan)

    this.gameDiv = gameDiv
  }


  setEventListeners(){
    this.gameDiv.querySelector('.edit-game').addEventListener('click', this.toggleEditBtn)
  }


   toggleEditBtn = () => {
     this.gameDiv.children[5].classList.toggle('update-form')
  }


  static updateGames(game){
    game.addEventListener("click", function(e){
      
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