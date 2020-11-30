class Drink < ApplicationRecord
  belongs_to :user
  has_one :trade
  has_one_attached :image
  with_options presence: true do
    validates :name
    validates :explain
  end
end
