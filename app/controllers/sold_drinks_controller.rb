class SoldDrinksController < ApplicationController
  before_action :logged_in_user
  def index
    @admin_user = User.find_by(id: 6)
    @pagy,@drinks = pagy(@admin_user.drinks)
    @title = '商品を購入する'
  end
end
