class Drink < ApplicationRecord
  belongs_to :user
  with_options presence: true do
    validates :name
    validates :explain
  end
end
