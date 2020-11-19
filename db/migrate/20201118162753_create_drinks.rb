class CreateDrinks < ActiveRecord::Migration[6.0]
  def change
    create_table :drinks do |t|
      t.string :name
      t.integer :price
      t.text :explain
      t.references :user,null: false,foreign_key: true 
      t.timestamps
    end
  end
end
