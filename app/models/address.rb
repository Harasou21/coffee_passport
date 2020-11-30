class Address < ApplicationRecord
  belongs_to :trade
  with_options presence: true do

    with_options format: { with: /\A[ぁ-んァ-ン一-龥]/, message: 'は全角で入力してください。' } do
      validates :fam_name
      validates :first_name
    end

    with_options format: { with: /\A[ァ-ヶー－]+\z/, message: 'は全角カタカナで入力して下さい。' } do
    validates :fam_name_kana
    validates :first_name_kana
    end

    validates :birthday
    validates :postal_code,format: {with: /\A\d{3}[-]\d{4}\z/}
    validates :prefecture_id
    validates :city
    validates :house_num
    validates :phone_num
    validates :trade_id
  end
end
