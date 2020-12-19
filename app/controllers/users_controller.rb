class UsersController < ApplicationController
  include SessionsHelper
  before_action :set_user, only: [:show,:edit,:update,:correct_user]
  before_action :logged_in_user, only: [:index,:edit,:update,:following,:followers]
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
    @user = User.find(params[:id])
    @drinks = @user.drinks.order("created_at DESC")
  end

  def edit
  end

  def update
    if @user.update(user_params)
      redirect_to @user
    else
      render 'edit'
    end
  end

  def destroy
    user = User.find(params[:id])
    #binding.pry
    user.destroy
    redirect_to root_url
  end

  def following
    # フォローしてるユーザーの表示
    @user = User.find(params[:id])
    @users = @user.following
    render 'show_follow'
  end

  def followers
    # フォロワーの表示
    @user = User.find(params[:id])
    @users = @user.followers
    render 'show_follow'
  end

  private
    def user_params
      params.require(:user).permit(:nickname,:email,:password,:password_confirmation,:image)
    end

    def set_user
      @user = User.find(params[:id])
    end

    def correct_user
      redirect_to(root_url) unless current_user?(@user)
    end
end
