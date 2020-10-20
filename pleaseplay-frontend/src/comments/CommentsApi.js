class CommentsApi {
  constructor(){
  }

  static fetchComments = () => {
    return fetch('http://localhost:3000/comments')
    .then(response => response.json())
  }
}