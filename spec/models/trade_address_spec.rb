require 'rails_helper'

RSpec.describe TradeAddress, type: :model do
  before do
    @trade_address = FactoryBot.build(:trade_address)
    # DBにアクセスする必要のないテストの時
  end
  describe '商品の購入' do
    context '購入ができる場合' do
      it '全ての値が正しく入力されていれば購入できる' do
        expect(@trade_address).to be_valid
      end

      it '建物の名前を入力しなくても購入できる' do
        @trade_address.building_name = nil
        expect(@trade_address).to be_valid
      end
    end
    context '購入ができない場合' do
      it 'クレジットカードを入力してない' do
        @trade_address.token = nil
        @trade_address.valid?
        expect(@trade_address.errors.full_messages).to include("Token can't be blank")
      end
      it 'クレジットカードの番号が間違ってる' do
      end
      it '苗字を入力してない' do
        @trade_address.fam_name = nil
        @trade_address.valid?
        expect(@trade_address.errors.full_messages).to include("Fam name can't be blank", 'Fam name は全角で入力してください。')
      end
      it '苗字が全角（漢字・ひらがな・カタカナ）でないと登録できない' do
        @trade_address.fam_name = 'XXX'
        @trade_address.valid?
        expect(@trade_address.errors.full_messages).to include('Fam name は全角で入力してください。')
      end
      it '氏名を入力してない' do
        @trade_address.first_name = nil
        @trade_address.valid?
        expect(@trade_address.errors.full_messages).to include("First name can't be blank", 'First name は全角で入力してください。')
      end
      it '氏名が全角（漢字・ひらがな・カタカナ）でないと登録できない' do
        @trade_address.first_name = 'XXX'
        @trade_address.valid?
        expect(@trade_address.errors.full_messages).to include('First name は全角で入力してください。')
      end
      it '苗字(カナ)を入力してない' do
        @trade_address.fam_name_kana = nil
        @trade_address.valid?
        expect(@trade_address.errors.full_messages).to include("Fam name kana can't be blank", 'Fam name kana は全角カタカナで入力して下さい。')
      end
      it '苗字が全角（カタカナ）でないと登録できない' do
        @trade_address.fam_name_kana = 'XXX'
        @trade_address.valid?
        expect(@trade_address.errors.full_messages).to include('Fam name kana は全角カタカナで入力して下さい。')
      end
      it '氏名(カナ)を入力してない' do
        @trade_address.first_name_kana = nil
        @trade_address.valid?
        expect(@trade_address.errors.full_messages).to include("First name kana can't be blank",
                                                               'First name kana は全角カタカナで入力して下さい。')
      end
      it '氏名が全角（カタカナ）でないと登録できない' do
        @trade_address.fam_name = 'XXX'
        @trade_address.valid?
        expect(@trade_address.errors.full_messages).to include('Fam name は全角で入力してください。')
      end
      it '誕生日を入力してない' do
        @trade_address.birthday = nil
        @trade_address.valid?
        expect(@trade_address.errors.full_messages).to include("Birthday can't be blank")
      end
      it '郵便番号を入力してない' do
        @trade_address.postal_code = nil
        @trade_address.valid?
        expect(@trade_address.errors.full_messages).to include("Postal code can't be blank", 'Postal code is invalid')
      end
      it '郵便番号に「-」がない' do
        @trade_address.postal_code = '0000000'
        @trade_address.valid?
        expect(@trade_address.errors.full_messages).to include('Postal code is invalid')
      end
      it '都道府県を選択してない' do
        @trade_address.prefecture_id = nil
        @trade_address.valid?
        expect(@trade_address.errors.full_messages).to include("Prefecture can't be blank", 'Prefecture is not a number')
      end
      it '都道府県でのカテゴリで1を選択してる' do
        @trade_address.prefecture_id = 1
        @trade_address.valid?
        expect(@trade_address.errors.full_messages).to include('Prefecture must be other than 1')
      end
      it '市区町村を入力してない' do
        @trade_address.city = nil
        @trade_address.valid?
        expect(@trade_address.errors.full_messages).to include("City can't be blank")
      end
      it '住所を入力してない' do
        @trade_address.city = nil
        @trade_address.valid?
        expect(@trade_address.errors.full_messages).to include("City can't be blank")
      end
      it '電話番号を入力してない' do
        @trade_address.phone_num = nil
        @trade_address.valid?
        expect(@trade_address.errors.full_messages).to include("Phone num can't be blank", 'Phone num is invalid')
      end
      it '電話番号にハイフンが含まれていたら保存できないこと' do
        @trade_address.phone_num = '080-1111-1111'
        @trade_address.valid?
        expect(@trade_address.errors.full_messages).to include('Phone num is invalid')
      end
    end
  end
end
