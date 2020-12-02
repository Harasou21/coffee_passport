class Address < ApplicationRecord
  belongs_to :trade

  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to :prefecture
  

