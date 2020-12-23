class Like < ApplicationRecord
  belongs_to :user
  belongs_to :drink, counter_cache: :likes_count
end
