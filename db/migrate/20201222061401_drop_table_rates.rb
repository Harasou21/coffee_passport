class DropTableRates < ActiveRecord::Migration[6.0]
  def change
    drop_table :rates
  end
end
