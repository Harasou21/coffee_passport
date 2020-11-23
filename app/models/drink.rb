class Drink < ApplicationRecord
  belongs_to :user, dependent: :destroy
  with_options presence: true do
    validates :name
    validates :explain
  end
end
