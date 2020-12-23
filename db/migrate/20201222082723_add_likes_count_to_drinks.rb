class AddLikesCountToDrinks < ActiveRecord::Migration[6.0]
  def change
    add_column :drinks, :likes_count, :integer
  end
end
