class Tag < ApplicationRecord
  has_many :drink_tag_relations
  has_many :drinks, through: :drink_tag_relations

  validates :tag_name, uniqueness: true
  # 存在性の制約はformsで設けて大丈夫だけど
  # 一意性はモデル単位で設ける必要がある

  
end
