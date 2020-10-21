class Comments{
  constructor(comment){
    this.comment = comment
    this.renderAllComments()
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


  renderAllComments(){
    const { content, commentator, game_id } = this.comment
    if (game_id === 1){
      // console.log(content)
    }
    // const box = document.getElementsByClassName('game-div')
    // console.log(box)
  }


}