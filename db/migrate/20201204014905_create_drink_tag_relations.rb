class CreateDrinkTagRelations < ActiveRecord::Migration[6.0]
  def change
    create_table :drink_tag_relations do |t|
      t.references :drink, foreign_key: true
      t.references :tag, foreign_key: true
      t.timestamps
    end
  end
end
