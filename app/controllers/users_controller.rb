class UsersController < ApplicationController
  include SessionsHelper
  before_action :set_user, only: [:show,:edit,:update,:correct_user]
  before_action :logged_in_user, only: [:index,:edit,:update,:following,:followers]
  before_action :correct_user, only: [:edit, :update]
  before_action :check_guest,only: :destroy

  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      @user.send_activation_email
      flash[:info] = "メールをチェックしてアカウントを有効化してください."
      
      redirect_to root_url
    else
      render 'new'
    end
  end

  def show
    @user = User.find(params[:id])
    @drinks = @user.drinks.paginate(page: params[:page],per_page: 10).order("created_at DESC")
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

   def likes
    @user = User.find(params[:id])
    @drinks = @user.like_drinks.paginate(page: params[:page],per_page: 10).order("created_at DESC")
    @title = "#{@user.nickname}がいいねした投稿"
   end

   def purchase_record
    trades = Trade.where(user_id: current_user.id).select(:drink_id)
    # ユーザーが購入してればtradeにそのuser_idがある
    # まずはそれを取得
    # そこから、drink_idを取得

    # この時点では同じ商品も取得できてる
    
    #binding.pry
  
    @drinks = Drink.where(id: trades).order("created_at DESC")
    # この書き方だと同じ商品を購入できても、一つしか表示されない
    #.orderもdrinksのidを降順にしただけで、購入した順番ではない
    #binding.pry
   end

    def user_config
      redirect_to 'config'
    end

    def new_guest
      user = User.find_or_create_by!(nickname: "ゲスト様",email: 'guest@example.com') do |user|
        user.password = SecureRandom.urlsafe_base64
        # user.confirmed_at = Time.now  # Confirmable を使用している場合は必要
      end
      log_in user
      redirect_to user
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

    def check_guest
      if current_user.email == 'guest@example.com'
        redirect_to root_path
      end
    end
end
