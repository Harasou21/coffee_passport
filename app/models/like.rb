class Like < ApplicationRecord
  belongs_to :user
  belongs_to :drink, counter_cache: :likes_count
# デフォルトでは親モデル_countに値が入るが、ここではカラム名を指定してる
# 取得したN件のdrinkに対して,一つひとつcountクエリが実行されないように設定
# N+1問題を解決するためのオプション
# これの上位互換のcounter_cultureといったgemもあるから
# 余裕があればやっとこう


  scope :filter_by_drink, ->(drink_id) { where(drink_id: drink_id) if drink_id }
end
