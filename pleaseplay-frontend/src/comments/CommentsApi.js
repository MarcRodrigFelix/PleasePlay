class CommentsApi {
  constructor(){

  }

  static getComments = () => {
    fetch('http://localhost:3000/comments')
    .then(comments => comments.json())
    .then(data => console.log(data))
  }
}