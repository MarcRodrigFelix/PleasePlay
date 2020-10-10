class GamesController < ApplicationController

  def index
    games = Game.all
    render json: games, except: [ :created_at, :updated_at ]
  end

  def show
    game = Game.find_by(id: params[:id])
    render json: {
      title: game.title,
      image: game.image,
      review: game.review,
      comments: game.comments.find_by(game_id: params[:id])
    }, except: [ :created_at, :updated_at ]
  end

end
