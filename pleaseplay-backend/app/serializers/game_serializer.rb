class GameSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :image, :review
end
