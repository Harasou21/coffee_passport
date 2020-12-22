class LikesController < ApplicationController
  include SessionsHelper

  before_action :drink_params
  def create
    Like.create(user_id: current_user.id, drink_id: params[:id])
    #redirect_to drinks_path
    # jsを用いるので画面遷移は行わない
  end

  def destroy
    Like.find_by(user_id: current_user.id, drink_id: params[:id]).destroy

  end

  private

    def drink_params
      @drink = Drink.find(params[:id])
    end

end
