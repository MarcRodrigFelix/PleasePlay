
const newForm = document.getElementById("form")
const game = document.querySelector('#games-div')
const gameForm = document.getElementsByClassName('update-form')



document.addEventListener('DOMContentLoaded', function(){

  GameForm.createGame(newForm)
  
  Game.getGames()
  Game.deleteGames(game)
  Game.updateGames(game)
  // Game.toggleEditBtn(game)
  
  Comments.renderComments()
  Comments.openModal(game)

  // console.log(modalSpan)
  // Comments.modalComments()

    // var modal = document.getElementById("myModal");
    // console.log(modal)

    // Get the button that opens the modal
    // var btn = document.getElementById("modalBtn");

    // Get the <span> element that closes the modal
    // var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    // btn.onclick = function() {
    //   modal.style.display = "block";
    // }
    // btn.addEventListener("click", function(e){
    //   console.log(e)
    //   modal.style.display = 'block'
    // })

    // When the user clicks on <span> (x), close the modal
    // span.onclick = function() {
    //   modal.style.display = "none";
    // }

    // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    //   if (event.target == modal) {
    //     modal.style.display = "none";
    //   }
    // }
})