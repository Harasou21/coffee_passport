class Drink < ApplicationRecord
  attr_accessor :region_name ,:acidity_name,:body_name ,:processing_name
  # json形式でvueの方にカテゴリーを渡すためにカテゴリーの属性を定義
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to :user
  has_many :trades
  has_many :drink_tag_relations, dependent: :delete_all
  has_many :tags, through: :drink_tag_relations
  has_many :comments
  has_many :likes
  has_many :liking_users, through: :likes, source: :user
  has_one_attached :image
  belongs_to_active_hash :region
  belongs_to_active_hash :body
  belongs_to_active_hash :acidity
  belongs_to_active_hash :processing
  with_options presence: true do
    validates :name, length: { maximum: 1000 }
    validates :explain, length: { maximum: 1000 }
    validates :image
    validates :price, format: { with: /\A[0-9]+\z/i }
  end

  after_create do
    drink = Drink.find_by(id: id)
    # 作成した投稿を探させます
    # binding.pry
    hashtags = explain.scan(/[#＃][\w\p{Han}ぁ-ヶｦ-ﾟー]+/)
    # 先頭に#がつく入力値を,drinkのexplainから
    # 探し抽出します
    drink.tags = []
    hashtags.uniq.map do |hashtag|
      # ハッシュタグは先頭の#を外した上で保存
      # uniqは配列から重複した要素を取り除いた新しい配列を返すメソッド
      # mapは配列の要素の数だけ繰り返し処理を行うメソッドです。
      tag = Tag.find_or_create_by(tag_name: hashtag.downcase.delete('#'))
      # ハッシュタグがすでに存在してるかを調べ、なければ作成
      drink.tags << tag
    end
  end

  # 更新アクション

  before_update do
    drink = Drink.find_by(id: id)
    # hashbodyに打ち込まれたハッシュタグを検出
    hashtags = explain.scan(/[#＃][\w\p{Han}ぁ-ヶｦ-ﾟー]+/)
    drink.tags = []
    hashtags.uniq.map do |hashtag|
      # ハッシュタグは先頭の#を外した上で保存
      self.add_emozi(hashtag)
      tag = Tag.find_or_create_by(tag_name: hashtag.downcase.delete('#'))
      drink.tags << tag
    end
  end


end
