class Drink < ApplicationRecord
  
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to :user
  has_one :trade
  has_many :drink_tag_relations
  has_many :tags,through: :drink_tag_relations
  has_many :comments
  has_many :likes
  has_many :liking_users, through: :likes, source: :user
  has_one_attached :image
  belongs_to_active_hash :region
  belongs_to_active_hash :body
  belongs_to_active_hash :acidity
  belongs_to_active_hash :processing
  with_options presence: true do
    validates :name
    validates :explain
  end

end
