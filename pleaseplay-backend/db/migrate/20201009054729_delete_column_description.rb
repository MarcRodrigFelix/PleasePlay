class DeleteColumnDescription < ActiveRecord::Migration[6.0]
  def change
    remove_column :games, :description
  end
end
