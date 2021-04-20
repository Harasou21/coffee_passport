class Comment < ApplicationRecord
  belongs_to :drink
  belongs_to :user

  validates :text,presence: true
end
