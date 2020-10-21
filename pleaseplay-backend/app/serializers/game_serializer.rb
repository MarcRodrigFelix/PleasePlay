class GameSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :image, :review
  has_many :comments
end
