class DrinksController < ApplicationController
  include SessionsHelper
  include Pagy::Backend


  before_action :logged_in_user, only: [:index, :new, :destroy]
  before_action :create_searching_object, only: [:show_searching_form, :search_drink]

  def index
     # 購入履歴に応じたおすすめのコーヒーや
     # ランダムに投稿を表示する機能を定義するメソッド

    @user = current_user

    @num = rand(0..1)
    # 命名が酷いのでなにかいい命名あったらお願いします。
    # この変数は、ユーザーの好みの酸味もしくは、
    # コクをできるだけ交互におすすめするために、定義しました。
    
    drink_body_ids = []
    drink_acidity_ids = []

    if @user.trade_drinks
      @user.trade_drinks.each do |drink|
        drink_body_ids << drink.body_id
        drink_acidity_ids << drink.acidity_id
      end
    end

    @favorite_body_id = drink_body_ids.group_by{|e| e}.max_by{|v| v.size}.first
    # https://osa.hatenablog.com/entry/2014/12/21/122603
    # max_byは最大のものを返すMethod
    # 今回は要素数が最大のものを返す v.sizeで要素数を比較するようにしてる
    

    @favorite_acidity_id = drink_acidity_ids.group_by{|e| e}.max_by{|v| v.size}.first
    
    if @num == 0
    @pagy,@drinks = pagy(Drink.includes(:user ,{image_attachment: :blob})
                    .where(body_id: @favorite_body_id)
                    .order('drinks.created_at DESC'))
    else
      @pagy,@drinks = pagy(Drink.includes(:user ,{image_attachment: :blob})
      .where(acidity_id: @favorite_acidity_id)
      .order('drinks.created_at DESC'))
    end

    @title = 'おすすめのコーヒー'

    @selected = 'Selected'

    @random_drinks = Drink.includes(:user, {image_attachment: :blob}).order('RAND()').limit(5)

  end

  def show
    @drink = Drink.find(params[:id])
    @user = @drink.user
    @comment = Comment.new
    @comments = @drink.comments.includes(:user).order('created_at DESC')
  end

  def new
    @drink = Drink.new
  end

  def create
    @drink = Drink.new(drink_params)
    if @drink.valid?
      @drink.save
      # binding.pry
      redirect_to drinks_path
    else
      render 'new'
    end
  end

  def destroy
    Drink.find(params[:id]).destroy
    redirect_to current_user
  end

  # GET search
  def search
    return nil if params[:keyword] == ''

    # 何も入れず検索したらエラーが起こるので、
    # 明示的にnilを返す
    tag = Tag.where(['tag_name LIKE ?', "%#{params[:keyword]}%"])
    # 第二引数が第一引数の?に入っていく,検索した
    # タグがデータベースにあれば返す
    render json: { keyword: tag }
    # const tagName = XHR.response.keyword
    # の.keywordが使えてる
  end

  def search_drink
    @results = @p.result

    # binding.pry
  end

  def show_searching_form
  end

  def hashtag
    @user = current_user
    if @tag = Tag.find_by(tag_name: params[:name])
      @pagy,@drinks = pagy(@tag.drinks.order('created_at DESC'))
      @title = "##{@tag.tag_name}"
    else
      render 'drinks/_not_found'
    end
  end

  private

  def drink_params
    params.require(:drink).permit(:name, :price, :explain, :image, :tag_name, :region_id, :body_id, :body, :acidity_id,
                                  :processing_id).merge(user_id: current_user.id)
  end

  def create_searching_object
    @p = Drink.ransack(params[:q])
  end
end
