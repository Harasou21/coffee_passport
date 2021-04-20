require 'rails_helper'

RSpec.describe 'Users', type: :system do
  before do
    @user = FactoryBot.build(:user)
  end

  context 'ユーザー新規登録ができる時' do
    it '正しい情報を入力かつメールのリンクをクリックしたら、ユーザー新規登録ができて、投稿一覧ページへ移動' do
      visit new_user_path
      expect(page).to have_content('会員情報入力')
      fill_in 'nickname',              with: @user.nickname
      fill_in 'email',                 with: @user.email
      fill_in 'password',              with: @user.password
      fill_in 'password_confirmation', with: @user.password_confirmation

      expect  do
        find('input[name="commit"]').click
      end.to change { User.count }.by(1)
      expect(current_path).to eq(user_path)
      # メイラーのテストはどうすべき？
      # ログインページにリダイレクト
      # ログインの文字がある
      # メールのリンクをクリックする
      # users/showにリダイレクト
      # @user.nameがある
    end
  end

  context 'ユーザー新規登録ができない時' do
    it '誤った情報では新規登録ができずに、新規登録ページへリダイレクト' do
    end
    it '情報は正しかったが、アカウント有効化のメールをクリックしてない' do
    end
  end
end
