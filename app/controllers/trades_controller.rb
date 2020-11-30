class TradesController < ApplicationController
  def index
    # 商品を表示
  end

  def new
    # 商品購入ページ
  end

  def create
    @order = TradeAddress.new(trade_params)
    if @order.valid?
      @order.save
      redirect_to root_path
    else
      render 'new'
    end
  end

  private
    def trade_params
      params.permit(:token, :user_id, :item_id,:fam_name,:first_name,:fam_name_kana,:first_name_kana,:birthday :postal_code, :prefecture_id, :city, :house_num, :building_name, :phone_num, :trade_id).merge(user_id: current_user.id, price: @drink.price)
    end
end
