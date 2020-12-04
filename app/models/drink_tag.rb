class DrinkTag

  include ActiveModel::Model

  attr_accessor :name,:price,:explain,:image,:user_id,:tag_name

  with_options presence: true do
    validates :explain
    validates :price
    validates :name
    validates :image 
    validates :tag_name
    # tagとdrinkでnameってカラム名かかってるけど
    # どっちも今のところpresense: trueでいいけど
    # タグ付けしなくても投稿できるけど
    # drinkの名前が必要ってなったらどうする
    # drink[:name]とかで、drinkのnameにだけ
    # バリデーション かけることは可能？
  end

  def save
    drink = Drink.create(name: name,price: price,explain: explain,image: image,user_id: user_id)
    tag = Tag.where(tag_name: tag_name).first_or_initialize
    # .first_or_initializeはwhereで検索した条件の
    # レコードがあれば、そのレコードのインスタンスを返し、
    # なければ新しくインスタンスを作るメソッドです。

    # tag.rbでtag_nameで一意性の制約をしていて
    # 被った時に弾いちゃうから.first_or_initialize
    # が必要

    tag.save
    DrinkTagRelation.create(drink_id: drink.id, tag_id: tag.id)
  end

end