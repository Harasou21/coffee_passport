class AccountActivationsController < ApplicationController
  include SessionsHelper
  def edit
    user = User.find_by(email: params[:email])
    if user && !user.activated? && user.authenticated?(:activation, params[:id])
      user.activate
      log_in user
      flash.now[:success] = 'アカウントが認証できました！'
      redirect_to user
    else
      flash.now[:danger] = '無効なリンクです。アカウントが有効化できません。'
      redirect_to root_url
    end
  end
end
