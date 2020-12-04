class Tag < ApplicationRecord
  has_many :drink_tag_relations
  has_many :drink, through: :drink_tag_relations
end
