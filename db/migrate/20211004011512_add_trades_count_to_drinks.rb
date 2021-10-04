class AddTradesCountToDrinks < ActiveRecord::Migration[6.1]
  def change
    add_column :drinks, :trades_count, :integer
  end
end
