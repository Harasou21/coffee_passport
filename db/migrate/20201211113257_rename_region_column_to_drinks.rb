class RenameRegionColumnToDrinks < ActiveRecord::Migration[6.0]
  def change
    remove_column :drinks,:region
    remove_column :drinks,:body
    remove_column :drinks,:acidity
    remove_column :drinks,:processing
  end
end
