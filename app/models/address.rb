class Address < ApplicationRecord
  include SessionsHelper
  belongs_to :trade
  belongs_to :user

  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to :prefecture
end
