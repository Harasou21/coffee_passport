class LikesController < ApplicationController
  include SessionsHelper
  def create
    Like.create(user_id: current_user.id, drink_id: params[:id])
    redirect_to drinks_path
  end

  def destroy
    Like.find_by(user_id: current_user.id, drink_id: params[:id]).destroy
    redirect_to drinks_path
  end


end
