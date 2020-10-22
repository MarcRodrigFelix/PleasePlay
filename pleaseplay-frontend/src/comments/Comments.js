class Comments{
  static commentsArr = []

  constructor(comment){
    this.comment = comment
    // this.renderCommentsObject()
    Comments.commentsArr.push(this.comment)
  }

  static renderComments(){
    CommentsApi.fetchComments()
    .then(comments => {
      comments.forEach(comment => {
        new Comments(comment)
        // console.log(comment)
      })
    })
  }

  // static renderCommentsObject = (gameDiv) => {
  //   const { id, content, commentator, game_id} = this.comment

  //   const modalContent = document.getElementById('myModal')

  //   const commentDiv = document.createElement('DIV')
  //   commentDiv.innerHTML = content
  //   console.log(modalContent.parentNode)

  //   modalContent.appendChild(commentDiv)
    
  // }







//   static renderModal(gameDiv){

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

//     // const modalHeader = document.createElement('h3')
//     // modalHeader.innerHTML = `Comments for ${title}`
//     // modalContent.appendChild(modalHeader)

//     const modalSpan = document.createElement('span')
//     modalSpan.className = 'close'
//     modalSpan.id = 'close'
//     modalSpan.innerHTML = '&times;'
//     modalContent.appendChild(modalSpan)

    // const modalPTag = document.createElement('P')
    // modalPTag.innerHTML = `Comments for ${title}`
    // modalContent.appendChild(modalPTag)
  // }

}