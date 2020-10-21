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
        console.log(comment)
      })
    })
  }


  renderAllComments(){
    const { content, commentator } = this.comment
    console.log(content + ' ' + commentator)
  }


}