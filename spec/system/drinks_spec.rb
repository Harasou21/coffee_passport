require 'rails_helper'
require 'support/spec_helper'

RSpec.describe "Drinks", type: :system do

    let!(:user) { FactoryBot.create(:user) }
    let(:drink) { FactoryBot.create(:drink) }
    let!(:other_user) { FactoryBot.create(:user) }
    let(:other_drink) { FactoryBot.create(:drink) }


    image_path = Rails.root.join('app/assets/images/ethiopia.jpg')

  context '投稿ができる時' do
    it 'ログインしたユーザーは新規投稿できる' do
      # ログインする
      visit login_path
      fill_in 'email', with: user.email
      fill_in 'password', with: user.password
      find('input[name="commit"]').click
      expect(current_path).to eq(user_path(user))
      # 投稿のリンクがある
      expect(page).to have_content('投稿する')
      # 投稿ページに移動
      visit new_drink_path
      # フォームに情報を入力
      attach_file('drink[image]',image_path)
      fill_in 'item-name'  ,with: drink.name
      fill_in 'item-info'  ,with: drink.explain
      fill_in 'item-price' ,with: drink.price
      # 送信するとDrinkモデルのカウントが１上がる
      expect{
        find('input[name="commit"]').click
      }.to change { Drink.count }.by(1)
      # トップページに遷移する
      visit root_path
      # トップページには先ほど投稿した内容のツイートが存在する
      expect(page).to have_selector("img[src$='ethiopia.jpg']")
      expect(page).to have_content(drink.name)
      expect(page).to have_content(drink.price)
      expect(page).to have_content(drink.explain)
    end
  end
  context '投稿ができない時' do
    it 'ログインしてないユーザーは新規投稿できない' do
      # トップページに遷移する
      visit root_path
      # ログインページにリダイレクトされる
      # expect(response).to redirect_to("http://www.example.com/login")
      #get root_pathとかだと、上記のテストは通るが、今度は
      # 下記のテストが、     Capybara::ElementNotFound:Unable to find xpath "/html"

      # 新規投稿ページのリンクがない
      expect(page).to have_no_content('投稿する')
    end
  end

  context '削除できるとき' do 
    it "投稿した本人ならその投稿を削除できる" do
     
    visit login_path
    fill_in 'email', with: drink.user.email
    fill_in 'password', with: drink.user.password
    find('input[name="commit"]').click
    expect(current_path).to eq(user_path(drink.user))

      # 投稿詳細ページに移動
      visit drink_path(drink)
      # 削除のリンクがある
      expect(page).to have_link '削除する', href: drink_path(drink)
      # 削除したら、Drinkモデルのカウントが1減る
      expect{
        find_link('削除する', href: drink_path(drink)).click
      }.to change { Drink.count }.by(-1)
      # トップページに遷移される
      # 削除した投稿はない
      expect(page).to have_no_content(drink.image)
      # save_and_open_page
      expect(page).to have_no_content(drink.name)
      expect(page).to have_no_content(drink.price)
      expect(page).to have_no_content(drink.explain)
    end
  end

  context '削除できない時' do
    it "投稿した本人ではないので、その投稿が削除できない" do
     
      visit login_path
      fill_in 'email', with: user.email
      fill_in 'password', with: user.password
      find('input[name="commit"]').click
      expect(current_path).to eq(user_path(user))
      # 投稿詳細ページに移動
      visit drink_path(other_drink)
      # 削除のリンクがない
      expect(page).to have_no_content("削除する")
    end
  end


end
