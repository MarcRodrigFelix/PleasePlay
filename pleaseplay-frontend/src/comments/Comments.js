class Comments{
  constructor(){

  }




  // static modalComments(){
  //   let gameCards = document.getElementsByClassName('game-div')

  //   console.log(gameCards)
  // }



  static renderComments(){
    CommentsApi.fetchComments()
    .then(comments => {
      comments.forEach(comment => 
        console.log(comment))
    })
  }
}