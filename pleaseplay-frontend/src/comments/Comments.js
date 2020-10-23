class Comments{

  static allComments = [] 

  constructor(comment){
    this.comment = comment
    // this.comment.game = game
    // Comments.renderModal(this.comment)
    this.renderComments()
    Comments.allComments.push(this.comment)
  }

  // static renderComments(){
  //   CommentsApi.fetchComments()
  //   .then(comments => {
  //     comments.forEach(comment => {
  //       new Comments(comment)
  //       // console.log(comment)
  //     })
  //   })
  // }

  renderComments = () => {
    const { id, content, commentator, game_id } = this.comment
    // console.log(this.comment.game_id)
    // if (this.comment.game_id === ){
    //   console.log(content)
    //   console.log(commentator)
    // } else {
    //   console.log()
    // }

    const gameDiv = document.getElementById('games-div')
    const games = document.getElementsByClassName('game-div')
    
    console.log(games)
// CREATE MODAL
    const modalBtn = document.createElement('button')
    modalBtn.id = 'modalBtn'
    modalBtn.innerHTML = 'Open Comments'
    gameDiv.appendChild(modalBtn)

// create modal div
    const modalDiv = document.createElement('div')
    modalDiv.id = 'myModal'
    modalDiv.className = 'modal'
    gameDiv.appendChild(modalDiv)

// create modal content
    const modalContent = document.createElement('div')
    modalContent.className = 'modal-content'
    modalDiv.appendChild(modalContent)

    const modalHeader = document.createElement('h3')
    modalHeader.innerHTML = `Comments for Game`
    modalContent.appendChild(modalHeader)

    const modalPTag = document.createElement('P')
    modalPTag.innerHTML = `Comment: "${content}"`
    modalContent.appendChild(modalPTag)

    const modalSpan = document.createElement('span')
    modalSpan.className = 'close'
    modalSpan.id = 'close'
    modalSpan.innerHTML = '&times;'
    modalContent.appendChild(modalSpan)

  }







//   static renderModal(comment){
//     const { id, content, commentator } = comment
//     const gameDiv = document.getElementById('games-div')

//     console.log(game.childNodes)

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

//     const modalHeader = document.createElement('h3')
//     modalHeader.innerHTML = `Comments for Game`
//     modalContent.appendChild(modalHeader)

//     const modalPTag = document.createElement('P')
//     modalPTag.innerHTML = `Comment: "${content}"`
//     modalContent.appendChild(modalPTag)

//     const modalSpan = document.createElement('span')
//     modalSpan.className = 'close'
//     modalSpan.id = 'close'
//     modalSpan.innerHTML = '&times;'
//     modalContent.appendChild(modalSpan)

    
//   }

}