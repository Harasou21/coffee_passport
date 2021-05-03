require 'rails_helper'

RSpec.describe 'TradeAddresses', type: :system do
  before do
    @user = FactoryBot.create(:user)
    @trade_address = FactoryBot.build(:trade_address)
    @admin_user = User.create(id: 6,
                              nickname: 'hoge',
                              email: 'hoge@gmail.com',
                              password: 'hogehoge',
                              password_confirmation: 'hogehoge',
                              activated: true)

    @drinks = Drink.create(
      name: '商品',
      price: 340,
      explain: '商品の説明',
      user_id: 6,
      image: ActiveStorage::Blob.create_and_upload!(io: File.open('app/assets/images/break_first.jpg'),
                                                    filename: 'breake_first.jpg')
    )

    # file:///Users/soichirohara/coffee_passport/capybara-20210420044351587224176

    # @drinks = @admin_user.drinks.paginate(page: params[:page],per_page: 10)
    # NoMethodError:
    # undefined method `drinks' for nil:NilClass
  end

  context '購入ができる時' do
    it '必須項目を入力' do
      # ログイン
      visit login_path
      fill_in 'email', with: @user.email
      fill_in 'password', with: @user.password
      find('input[name="commit"]').click
      expect(current_path).to eq(user_path(@user))
      expect(page).to have_content('商品を購入')
      # 商品一覧ページに遷移
      visit buy_path
      # 購入ページに遷移

      visit drink_trades_path(@drinks.id)

      # その商品の写真が表示される
      # その商品の名前が表示される
      # その商品の値段が表示される
      # 必須項目を入力
      fill_in 'card-number', with: 4_242_424_242_424_242
      fill_in 'card-exp-month', with: 12
      fill_in 'card-exp-year', with: 24
      fill_in 'card-cvc', with: 123
      fill_in 'fam_name', with: @trade_address.fam_name
      fill_in 'first_name', with: @trade_address.first_name
      fill_in 'fam_name_kana', with: @trade_address.fam_name_kana
      fill_in 'first_name_kana', with: @trade_address.first_name_kana
      select  '1960', from: '_birthday_1i'
      select  '8',    from: '_birthday_2i'
      select  '19',   from: '_birthday_3i'
      fill_in 'postal-code', with: @trade_address.postal_code
      find('#prefecture').find("option[value='2']").select_option
      fill_in 'city', with: @trade_address.city
      fill_in 'addresses', with: @trade_address.house_num
      fill_in 'phone-number', with: @trade_address.phone_num
      # 購入するをクリック

      #  file:///Users/soichirohara/coffee_passport/capybara-202104200420558290187332.html
      # find('input[name="commit"]').click
      # expect(page).to have_content("Token can't be blank")
      # 当たり前だが、購入ページには遷移できていない。
      # このテストがパスすると言うことはtokenが入ってない

      expect  do
        find('input[name="commit"]').click
      end.to change { Trade.count }.by(1)

      # 購入完了ページに遷移
      expect(page).to have_content("商品をご購入いただきありがとうございます！
        ")
    end
  end

  context '購入ができない時' do
    it 'ログインしてないと購入ページに行っても、ログインページにリダイレクト' do
      visit drink_trades_path(@drinks.id)
      expect(page).to have_content('ログインしてコーヒーの旅へ出かけよう')
    end
    it '必須情報の抜け漏れ' do
      visit login_path
      fill_in 'email', with: @user.email
      fill_in 'password', with: @user.password
      find('input[name="commit"]').click
      expect(current_path).to eq(user_path(@user))
      expect(page).to have_content('商品を購入')
      # 商品一覧ページに遷移
      visit buy_path
      # 購入ページに遷移

      visit drink_trades_path(@drinks.id)
      fill_in 'card-number', with: 4_242_424_242_424_242
      fill_in 'card-exp-month', with: 12
      fill_in 'card-exp-year', with: 24
      fill_in 'card-cvc', with: 123
      fill_in 'fam_name', with: @trade_address.fam_name
      fill_in 'first_name', with: @trade_address.first_name
      fill_in 'fam_name_kana', with: @trade_address.fam_name_kana
      fill_in 'first_name_kana', with: @trade_address.first_name_kana
      select  '1960', from: '_birthday_1i'
      select  '8',    from: '_birthday_2i'
      select  '19',   from: '_birthday_3i'
      fill_in 'postal-code', with: @trade_address.postal_code
      find('#prefecture').find("option[value='2']").select_option
      fill_in 'city', with: @trade_address.city
      fill_in 'addresses', with: @trade_address.house_num
      fill_in 'phone-number', with: @trade_address.phone_num
      find('input[name="commit"]').click
      expect(current_path).to eq(buy_path)
    end
  end
end
