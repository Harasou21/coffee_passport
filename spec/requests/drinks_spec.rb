require 'rails_helper'
# bundle exec rspec spec/requests/tweets_spec.rb

RSpec.describe 'Drinks', type: :request do
  before do
    @user = FactoryBot.create(:user)
    region_id = Region.find_by(name: 'マルチリージョン').id
    body_id = Body.find_by(name: 'LIGHT(軽い)').id
    acidity_id = Acidity.find_by(name: 'LOW(少ない)').id
    processing_id = Processing.find_by(name: 'WASHED(水洗式)').id
    @drink = FactoryBot.create(:drink,
                               name: 'TOKYOロースト',
                               price: 350,
                               explain: 'これはコーヒーの説明です',
                               region_id: region_id,
                               body_id: body_id,
                               acidity_id: acidity_id,
                               processing_id: processing_id)

    # 投稿済みの投稿や、テキストが存在するか確かめる必要が、
    # あるので、createでテスト用のDBに値を保存
    post login_path, params: { session: { email: @user.email,
                                          password: @user.password } }
  end

  describe 'GET #index' do
    it 'indexアクションにリクエストすると正常にレスポンスが返ってくる' do
      get root_path
      expect(response.status).to eq 200
    end
    it 'indexアクションにリクエストするとレスポンスに投稿したユーザーの名前が存在する' do
      get root_path
      expect(response.body).to include(@drink.user.nickname)
    end
    it 'indexアクションにリクエストするとレスポンスに投稿済み投稿に画像URLが存在する' do
      get root_path
      expect(response.body).to include(url_for(@drink.image))
    end
    it 'indexアクションにリクエストするとレスポンスに投稿済み投稿にコーヒーの値段が存在する' do
      get root_path
      expect(response.body).to include('350円')
    end
    it 'indexアクションにリクエストするとレスポンスに投稿済みの投稿にコーヒー名が存在する' do
      get root_path
      expect(response.body).to include(@drink.name)
    end
    it 'indexアクションにリクエストするとレスポンスに投稿済みの投稿にコーヒーの説明が存在する' do
      get root_path
      expect(response.body).to include('これはコーヒーの説明です')
    end
    it 'indexアクションにリクエストするとレスポンスに投稿済みの投稿にいいねボタンが存在する' do
      get root_path
      # binding.pry
      expect(response.body).to include('<i class="far fa-heart"></i>')
    end
  end

  describe 'GET #show' do
    it 'showアクションにリクエストすると正常にレスポンスが返ってくる' do
      get drink_path(@drink)
      expect(response.status).to eq 200
    end
    it 'showアクションにリクエストするとレスポンスにコーヒー名が存在する' do
      get drink_path(@drink)
      expect(response.body).to include(@drink.name)
    end
    it 'showアクションにリクエストするとレスポンスに投稿済みの投稿の画像URLが存在する' do
      get drink_path(@drink)
      expect(response.body).to include(url_for(@drink.image))
    end
    it 'showアクションにリクエストすると、値段が表示される' do
      get drink_path(@drink)
      expect(response.body).to include('350円')
    end
    it 'showアクションにリクエストすると、コーヒーの説明が表示' do
      get drink_path(@drink)
      expect(response.body).to include(@drink.explain)
    end
    it 'showアクションにリクエストすると,そのコーヒーの産地が表示' do
      get drink_path(@drink)
      expect(response.body).to include('マルチリージョン')
    end
    it 'showアクションにリクエストすると,そのコーヒーのコクが表示' do
      get drink_path(@drink)
      expect(response.body).to include('LIGHT(軽い)')
    end
    it 'showアクションにリクエストすると,そのコーヒーの酸味が表示' do
      get drink_path(@drink)
      expect(response.body).to include('LOW(少ない)')
    end
    it 'showアクションにリクエストすると,そのコーヒーの加工法が表示' do
      get drink_path(@drink)
      expect(response.body).to include('WASHED(水洗式)')
    end
    it 'showアクションにリクエストするとレスポンスにコメント一覧表示部分が存在する' do
      get drink_path(@drink)
      expect(response.body).to include('コメントする')
    end
  end
end
