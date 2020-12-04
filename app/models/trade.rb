class Trade < ApplicationRecord
  belongs_to :user
  belongs_to :drink
  has_one :address

end
