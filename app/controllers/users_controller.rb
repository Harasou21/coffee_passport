class UsersController < ApplicationController
  include SessionsHelper
  before_action :set_user, only: [:show,:edit]

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
      redirect_to @user
    else
      render 'new'
    end
  end

  def show
  end

  def edit
  end

  private
    def user_params
      params.require(:user).permit(:nickname,:email,:password,:password_confirmation)
    end

    def set_user
      @user = User.find(params[:id])
    end
end
