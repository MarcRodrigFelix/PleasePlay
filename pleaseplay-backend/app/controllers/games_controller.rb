class GamesController < ApplicationController

  def show
    game = Game.find_by(id: params[:id])
    render json: { title: game.title,
    image: game.image,
    review: game.review,
    comments: game.comments.find_by(game_id: params[:id]) }
  end 

end
