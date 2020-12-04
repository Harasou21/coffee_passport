class Drink < ApplicationRecord
  belongs_to :user
  has_one :trade
  has_many :drink_tag_relations
  has_many :tags,through: :drink_tag_relations
  has_one_attached :image
  with_options presence: true do
    validates :name
    validates :explain
  end
end
