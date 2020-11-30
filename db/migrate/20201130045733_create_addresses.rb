class CreateAddresses < ActiveRecord::Migration[6.0]
  def change
    create_table :addresses do |t|
      t.string     :fam_name        ,null: false
      t.string     :first_name      ,null: false
      t.string     :fam_name_kana   ,null: false
      t.string     :first_name_kana ,null: false
      t.date       :birthday        ,null: false
      t.string     :postal_code     ,null: false
      t.integer    :prefecture_id   ,null: false
      t.string     :city            ,null: false
      t.string     :house_num       ,null: false
      t.string     :building_name   ,null: false
      t.string     :phone_num       ,null: false
      t.references :trade           ,null: false,foreign_key: true
      t.timestamps
    end
  end
end
