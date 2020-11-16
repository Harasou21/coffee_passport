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
    redirect_to user
    else
      flash.now[:danger] = 'invalid email/password combination'
      render 'new'
    end
  end

  def destroy
    log_out
    redirect_to root_url
  end
end
