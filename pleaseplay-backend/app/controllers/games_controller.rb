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

  def create
    game = Game.new(title: params[:title], image: params[:image], review: params[:review])
byebug
    if game.save
      render json: game
    else
      render json: game.errors
    end
  end

end
