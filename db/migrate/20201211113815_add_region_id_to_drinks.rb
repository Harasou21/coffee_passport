class AddRegionIdToDrinks < ActiveRecord::Migration[6.0]
  def change
    add_column :drinks, :region_id, :integer
    add_column :drinks, :body_id, :integer
    add_column :drinks, :acidity_id, :integer
    add_column :drinks, :processing_id, :integer
  end
end
