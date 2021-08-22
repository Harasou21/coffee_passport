class Api::LikesController < ApplicationController

  before_action :set_variables

  def index
    # その投稿のいいね一覧を取得
    render json: Like.filter_by_drink(params[:drink_id]).select(:id, :user_id, :drink_id)
  end

  def create
    @like = @user.likes.new(drink_id: @drink.id)
    @like.save

    head :created
  end

  def destroy
     @like = @user.likes.find_by(drink_id: @drink.id)
     @like.destroy
    head :ok
  end

  private

  def set_variables

    @user = User.find(params[:user_id])
    @drink = Drink.find(params[:drink_id])
  end

  def likes_params
    params.require(:like).permit(:drink_id)
  end

end
