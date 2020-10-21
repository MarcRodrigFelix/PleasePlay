class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content, :commentator
  belongs_to :game
end
