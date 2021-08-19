class Api::LikesController < ApplicationController
  include SessionsHelper

  before_action :set_variables

  def index
    # その投稿のいいね一覧を取得
    @like = Like.filter_by_drink(params[:post_id]).select(:id, :user_id, :drink_id)
  end

  def like
    @like = current_user.likes.new(drink_id: @drink.id)
    @like.save
    # redirect_to drinks_path
    # jsを用いるので画面遷移は行わない
    # binding.pry
    #=> like.js.erbに遷移する。
  end

  def unlike
     @like = current_user.likes.find_by(drink_id: @drink.id)
     @like.destroy
    # binding.pry
  end

  private

  def set_variables
    @drink = Drink.find(params[:drink_id])
  end

  def likes_params
    params.require(:like).permit(:drink_id)
  end

end
