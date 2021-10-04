class Trade < ApplicationRecord
  include SessionsHelper
  belongs_to :user
  belongs_to :drink
  belongs_to :drink, counter_cache: :likes_count
  has_one :address
end
