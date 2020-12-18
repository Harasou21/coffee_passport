class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.integer :user_id
      t.integer :drink_id
      t.text :text
      t.timestamps
    end
  end
end
