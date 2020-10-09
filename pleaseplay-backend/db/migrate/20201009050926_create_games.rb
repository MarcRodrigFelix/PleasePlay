class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :title
      t.string :image
      t.string :description
      t.string :review

      t.timestamps
    end
  end
end
