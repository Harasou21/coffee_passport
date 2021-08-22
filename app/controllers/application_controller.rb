class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  include SessionsHelper
  include Pagy::Backend
  def logged_in_user
    unless logged_in?
      store_location
      # ユーザーがいきたがってたページを記憶
      flash[:danger] = 'Please log in'
      redirect_to login_url
    end
  end
end
