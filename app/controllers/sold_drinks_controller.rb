class SoldDrinksController < ApplicationController
  before_action :logged_in_user
  def index
    @admin_user = User.find_by(id: 6)
    @drinks = @admin_user.drinks.paginate(page: params[:page],per_page: 10)
    @title = "商品を購入する"
  end

end
