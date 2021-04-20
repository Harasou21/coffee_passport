require 'rails_helper'

RSpec.describe Drink, type: :model do
  before do
    @drink = FactoryBot.build(:drink)
  end

  describe '感想の投稿' do
    context '投稿できる場合' do
      it 'コーヒー名と、値段と、画像と、感想があれば投稿できる' do
        expect(@drink).to be_valid
      end
    end
    context '投稿できない場合' do
      it 'コーヒー名がない' do
        @drink.name = nil
        @drink.valid?
        expect(@drink.errors.full_messages).to include("コーヒーの名前を入力してください")
      end
      it 'コーヒー名が1001字以上だと投稿できない' do
        @drink.name = 'a' * 1001
        @drink.valid?
        expect(@drink.errors.full_messages).to include('コーヒーの名前は1000文字以内で入力してください')
      end
      it '値段がない' do
        @drink.price = nil
        @drink.valid?
        expect(@drink.errors.full_messages).to include("値段を入力してください", "値段は不正な値です")
      end
      it '値段を全角入力してる' do
        @drink.price = '１０００'
        @drink.valid?
        expect(@drink.errors.full_messages).to include()
      end
      it '感想がない' do
        @drink.explain = nil
        @drink.valid?
        expect(@drink.errors.full_messages).to include("コーヒーを飲んだ感想を入力してください")
      end
      it '感想が1001字以上だと投稿できない' do
        @drink.explain = 'a' * 1001
        @drink.valid?
        expect(@drink.errors.full_messages).to include('コーヒーを飲んだ感想は1000文字以内で入力してください')
      end
      it 'ユーザーに紐付いていないと投稿できない' do
        user = FactoryBot.create(:user)
        @drink.user = nil
        @drink.valid?
        expect(@drink.errors.full_messages).to include('Userを入力してください')
      end
    end
  end
end
