class CreateRelationships < ActiveRecord::Migration[6.0]
  def change
    create_table :relationships do |t|
      t.integer :follower_id
      t.integer :followed_id

      t.timestamps
    end
    add_index :relationships, :follower_id
    add_index :relationships, :followed_id
    # index とは特定のカラムからデータを取得する際に、テーブルの中の
    # 特定のカラムのデータを複製し、検索が行いやすいようにしたもの

    # データの読み込み、取得が早くなる
    # 書き込みの速度が倍かかる

    # ある程度多くのデータを格納するテーブルの格納される値がそれぞれ異なるようなカラムの
    # 中で検索がよく行われるカラムに対してかけると効果的
    add_index :relationships, [:follower_id, :followed_id], unique: true
    # follower_idとfollowed_idの組み合わせが必ず
    # ユニークであることを保証する仕組みです。

    #これにより、二回フォローするみたいなことを防げる
  end
end
