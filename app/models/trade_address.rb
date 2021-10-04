class TradeAddress
  include ActiveModel::Model
  include ActiveRecord::AttributeAssignment
  include SessionsHelper
  # form_withやrender等の色々な機能が使える
  attr_accessor :fam_name, :first_name, :fam_name_kana, :first_name_kana, :birthday, :postal_code, :city, :house_num, :building_name,
                :phone_num, :drink_id, :prefecture_id, :trade_id, :user_id, :price, :token, :authenticity_token, :number, :exp_month, :exp_year, :cvc, :commit

  with_options presence: true do
    with_options format: { with: /\A[ぁ-んァ-ン一-龥]/, message: 'は全角で入力してください' } do
      validates :fam_name
      validates :first_name
    end

    with_options format: { with: /\A[ァ-ヶー－]+\z/, message: 'は全角カタカナで入力して下さい' } do
      validates :fam_name_kana
      validates :first_name_kana
    end

    validates :birthday
    validates :postal_code, format: { with: /\A\d{3}-\d{4}\z/ }
    validates :prefecture_id, numericality: { other_than: 1 , message: 'を選択してください'}
    validates :city
    validates :house_num
    validates :phone_num, format: { with: /\A\d{10,11}\z/ }
    #validates :token
  end

  def save
    trade = Trade.create(user_id: user_id, drink_id: drink_id)

    Address.create(fam_name: fam_name, first_name: first_name, fam_name_kana: fam_name_kana, first_name_kana: first_name_kana,
                   postal_code: postal_code, prefecture_id: prefecture_id, birthday: birthday, city: city, house_num: house_num, building_name: building_name, phone_num: phone_num, trade_id: trade.id, user_id: user_id)
  end
end
