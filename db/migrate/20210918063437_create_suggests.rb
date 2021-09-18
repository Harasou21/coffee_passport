class CreateSuggests < ActiveRecord::Migration[6.1]
  def change
    create_table :suggests do |t|
      t.boolean :suggest ,default: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
