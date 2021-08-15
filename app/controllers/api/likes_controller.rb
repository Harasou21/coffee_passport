class Api::LikesController < ApplicationController
  include SessionsHelper

  before_action :set_variables

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
end