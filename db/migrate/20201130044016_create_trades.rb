class CreateTrades < ActiveRecord::Migration[6.0]
  def change
    create_table :trades do |t|
      t.references :user, foreign_key: true
      t.references :drink,foreign_key: true
      t.timestamps
    end
  end
end
