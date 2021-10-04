class SoldDrinksController < ApplicationController
  before_action :logged_in_user
  def index
    @admin_user = User.find_by(id: 6)
    @pagy,@drinks = pagy(@admin_user.drinks.includes(image_attachment: :blob))
    @title = '商品を購入する'
  end

  def sort_cheap_order
    @admin_user = User.find_by(id: 6)
    @pagy,@drinks = pagy(@admin_user.drinks.includes(image_attachment: :blob).order(:price))
    @title = '安い順'
  end

  def sort_often_purchased_order 
    @admin_user = User.find_by(id: 6)
    @pagy,@drinks = pagy(@admin_user.drinks.includes(image_attachment: :blob).order(trades_count: "DESC"))
  end
end
