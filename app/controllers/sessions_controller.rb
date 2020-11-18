class SessionsController < ApplicationController
  include SessionsHelper
  def new
  end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    # 受け取ったemailからfind_byでデータベースに
    # 問い合わせてユーザー取得
    if user && user.authenticate(params[:session][:password])
    # まずそのユーザーがいるかnilガード
    # いたらpasswordとauthenticateかける
    log_in user
    params[:session][:remember_me] == '1' ? remember(user) : forget(user)
    # check boxがonの時は1になるので1の時は
    # ? 以降がtrueの処理
    # : 以降がfalseの処理
    remember user
    redirect_to user
    else
      flash.now[:danger] = 'invalid email/password combination'
      render 'new'
    end
  end

  def destroy
    log_out if logged_in?
    # 二つのブラウザで同時ログアウトとかされたらバグが起こるので
    # ログイン
    redirect_to root_url
  end
end
