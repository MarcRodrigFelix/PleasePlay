class GamesApi {
  constructor(api){
    this.api = api
  }

  fetchGames = () => fetch(this.api).then(response => response.json()).then(data => console.log(data)) 

}
