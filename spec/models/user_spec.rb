require 'rails_helper'

RSpec.describe User, type: :model do
  before do
    @user = FactoryBot.build(:user)
  end

  it 'nicknameとemail、passwordとpassword_confirmationが存在すれば登録できること' do
    expect(@user).to be_valid
  end

  it 'nicknameが空では登録できないこと' do
    @user.nickname = nil
    @user.valid?
    expect(@user.errors.full_messages).to include("ニックネームを入力してください")
  end

  it 'nicknameが51文字以上なら登録できないこと' do
    @user.nickname = 'a' * 51
    @user.valid?
    expect(@user.errors.full_messages).to include('ニックネームは40文字以内で入力してください')
  end

  it 'emailが空では登録できないこと' do
    @user.email = nil
    @user.valid?
    expect(@user.errors.full_messages).to include("メールアドレスを入力してください")
  end

  it '重複したemailが存在する場合登録できないこと' do
    @user.save
    another_user = FactoryBot.build(:user)
    another_user.email = @user.email
    another_user.valid?
    expect(another_user.errors.full_messages).to include('メールアドレスはすでに存在します')
  end

  it '無効なフォーマットのemailの場合登録できないこと' do
    @user.email = 'HogeHogegmail.com'
    @user.valid?
    expect(@user.errors.full_messages).to include('メールアドレスは不正な値です')
  end

  it 'emailの文字数が256以上なら登録できないこと' do
    @user.email = "#{'a' * 256}@gmail.com"
    @user.valid?
    expect(@user.errors.full_messages).to include('メールアドレスは255文字以内で入力してください')
  end

  it 'passwordが空では登録できないこと' do
    @user.password = nil
    @user.valid?
    expect(@user.errors.full_messages).to include("パスワードを入力してください")
  end

  it 'passwordが5文字以下であれば登録できないこと' do
    @user.password = '00000'
    @user.password_confirmation = '00000'
    @user.valid?
    expect(@user.errors.full_messages).to include('パスワードは6文字以上で入力してください')
  end

  it 'passwordが存在してもpassword_confirmationが空では登録できないこと' do
    @user.password_confirmation = ''
    @user.valid?
    expect(@user.errors.full_messages).to include("パスワード(確認)とパスワードの入力が一致しません")
  end

  it 'passwordとpassword_confirmation一致してなければ登録できないこと' do
    @user.password = 'password'
    @user.password_confirmation = 'hogehoge'
    @user.valid?
    expect(@user.errors.full_messages).to include("パスワード(確認)とパスワードの入力が一致しません")
  end
end
