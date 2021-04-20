class Relationship < ApplicationRecord
  # こいつがuserとuserの中間テーブル
  belongs_to :follower, class_name: 'User'
  belongs_to :followed, class_name: 'User'
  # follower,followedクラスの実態はUser
  # ただ、belongs_to,has_manyはメソッドを作る
  # だから、active_relationship.followerとか使えるようになる
  validates :follower_id, presence: true
  validates :followed_id, presence: true
end
