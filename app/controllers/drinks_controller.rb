class DrinksController < ApplicationController
  include SessionsHelper
  include Pagy::Backend


  before_action :logged_in_user, only: [:index, :new, :destroy]
  before_action :create_searching_object, only: [:show_searching_form, :search_drink]

  def index
    @user = current_user

    following_ids = 'SELECT followed_id FROM relationships WHERE follower_id = :user_id'

    @pagy,@drinks = pagy(Drink.where.not(user_id: 6)
                   .where("user_id IN (#{following_ids}) OR user_id = :user_id", user_id: @user.id)
                   .order('created_at DESC')
                   .includes(:user))

    @title = 'Timeline'

    @selected = 'Selected'

    @random_drinks = Drink.order('RAND()').limit(5)

  
    
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
