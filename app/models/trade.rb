class Trade < ApplicationRecord
  include SessionsHelper
  belongs_to :user
  belongs_to :drink
  has_one :address
end
