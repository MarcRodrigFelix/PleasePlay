class Comments{
  constructor(){

  }

  static renderComments(){
    CommentsApi.fetchComments()
    .then(comments => {
      comments.forEach(comment => 
        console.log(comment))
    })
  }
}