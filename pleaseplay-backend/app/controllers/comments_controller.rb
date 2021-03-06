class CommentsController < ApplicationController

  def index
    comments = Comment.all
    render json: comments, except: [ :created_at, :updated_at]
  end

  def show
    comment = Comment.find_by(game_id: params[:id])
    render json: comment, except: [ :created_at, :updated_at]
  end

end