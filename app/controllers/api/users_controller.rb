class Api::UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @pagy,@drinks = pagy(@user.drinks.order('created_at DESC').includes(image_attachment: :blob))
  end
end
