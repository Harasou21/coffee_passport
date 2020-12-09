class DrinksController < ApplicationController
  include SessionsHelper
  
  before_action :logged_in_user, only: [:index,:destroy]
  def index
    @user = current_user
    @drinks = Drink.all.order("created_at DESC")
  end

  def show
    @drink = Drink.find(params[:id])
    @user = @drink.user
  end

  def new
    @drink = DrinkTag.new
  end

  def create
    @drink = DrinkTag.new(drink_params)
    if @drink.valid?
      @drink.save
      redirect_to drinks_path
    else
      render 'new'
    end
  end

  def destroy
    Drink.find(params[:id]).destroy
    redirect_to root_path
  end

  # GET search
  def search
    return nil if params[:keyword] == ""
    # 何も入れず検索したらエラーが起こるので、
    # 明示的にnilを返す
    tag = Tag.where(['tag_name LIKE ?',"%#{params[:keyword]}%"])
    # 第二引数が第一引数の?に入っていく,検索した
    # タグがデータベースにあれば返す
    render json:{ keyword: tag}
    # const tagName = XHR.response.keyword
    # の.keywordが使えてる

  end

  private
  def drink_params
    params.require(:drink_tag).permit(:name,:price,:explain,:image,:tag_name).merge(user_id: current_user.id)
  end
end

