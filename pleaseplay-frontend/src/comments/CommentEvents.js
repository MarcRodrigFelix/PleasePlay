class CommentEvents{
  constructor(){

  }


  static openModal(modal){
    modal.addEventListener('click', function(e){
      const commentModal = document.getElementById("myModal")
      if (e.target.id === 'modalBtn'){
        commentModal.style.display = 'block'
        console.log(e.target)
      } else if (e.target.id === 'close') {
        commentModal.style.display = 'none'
        console.log(e.target)
      }
    })
 
  }


}