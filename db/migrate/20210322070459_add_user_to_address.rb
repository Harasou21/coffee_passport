class AddUserToAddress < ActiveRecord::Migration[6.0]
  def change
    add_reference :addresses, :user, null: false, foreign_key: true
  end
end
