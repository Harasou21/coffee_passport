class DrinkTagRelation < ApplicationRecord
  belongs_to :drink
  belongs_to :tag
end
