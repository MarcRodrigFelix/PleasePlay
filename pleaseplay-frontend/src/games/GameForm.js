class GameForm{
  constructor(){
    this.gameFormListeners()
  }

  gameFormListeners(){
    // When the user clicks the button, open the modal 
    btn.addEventListener("click", () => {
      modal.style.display = "block";
    })

    // // When the user clicks on <span> (x), close the modal
    // span.onclick = function() {
    //   modal.style.display = "none";
    // }

    // // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    //   if (event.target == modal) {
    //     modal.style.display = "none";
    //   }
    // }
  }



}