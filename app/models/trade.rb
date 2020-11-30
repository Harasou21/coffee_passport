class Trade < ApplicationRecord
  belongs_to :user
  belongs_to :drink
  has_one :address
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to :prefecture
end
