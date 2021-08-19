class Like < ApplicationRecord
  belongs_to :user
  belongs_to :drink, counter_cache: :likes_count

  scope :filter_by_drink, ->(drink_id) { where(drink_id: drink_id) if drink_id }
end
