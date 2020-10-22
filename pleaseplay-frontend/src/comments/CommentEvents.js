class CommentEvents{

  constructor(){
  }


  static openModal(modal){
    modal.addEventListener('click', function(e){
      const commentModal = document.getElementById("myModal")

      if (e.target.id === 'modalBtn'){
        commentModal.style.display = 'block'
          // const modalContentClass = document.getElementsByClassName('modal-content')
          // let objs = Comments.commentsArr
          // console.log(objs)
          // console.log(e.target.parentNode.dataset.id)
          
          //   const modalContent = document.getElementsByClassName('modal-content')
            // const commentDiv = document.createElement('DIV')
          //   const header = document.getElementsByTagName('h3')
          //   header.innerHTML = 'CONTENT'
            // commentDiv.innerHTML = `${Comments.commentsArr.content}`
            // modalContent.appendChild(header)
      } else if (e.target.id === 'close') {
        commentModal.style.display = 'none'
        // console.log(e.target)
      }
    })
 
  }


}