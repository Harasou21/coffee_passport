class UsersController < ApplicationController
  include SessionsHelper
  before_action :set_user, only: [:show,:edit,:update,:correct_user]
  before_action :logged_in_user, only: [:index,:edit,:update]
  before_action :correct_user, only: [:edit, :update]

  def index
    @users = User.all
  end

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

  def update
    if @user.update(user_params)
      redirect_to @user
    else
      render
    end
  end

  private
    def user_params
      params.require(:user).permit(:nickname,:email,:password,:password_confirmation)
    end

    def set_user
      @user = User.find(params[:id])
    end

    def logged_in_user
      unless logged_in?
        store_location
        # ユーザーがいきたがってたページを記憶
        flash[:danger] = "Please log in"
        redirect_to login_url
      end
    end

    def correct_user
      redirect_to(root_url) unless current_user?(@user)
    end
end
