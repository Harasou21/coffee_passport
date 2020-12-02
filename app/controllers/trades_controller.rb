class TradesController < ApplicationController
  include SessionsHelper
  def index
    # 商品を表示

    @item = Drink.find(params[:drink_id])
    @order = TradeAddress.new
    #redirect_to root_path if @drink.trade
  end

  def new

    @item = Drink.find(params[:drink_id])
    @order = TradeAddress.new
    # 商品購入ページ
  end

  def create
    
    @item = Drink.find(params[:drink_id])
    @order = TradeAddress.new(trade_params)
    
   # binding.pry
    if @order.valid?
      @order.save
      redirect_to root_path
    else
      render 'index'
    end
  end

  private
    def trade_params
      params.permit(:drink_id,:user_id,:fam_name,:first_name,:fam_name_kana,:first_name_kana,:birthday, :postal_code, :prefecture_id, :city, :house_num, :building_name, :phone_num, :trade_id).merge(user_id: current_user.id,price: @item.price)
    end
end
