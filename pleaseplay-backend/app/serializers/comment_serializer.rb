class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content, :commentator
end
