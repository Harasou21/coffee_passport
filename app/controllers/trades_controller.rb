class TradesController < ApplicationController
  include SessionsHelper
  def index
    # 購入ページ

    @item = Drink.find(params[:drink_id])
    @order = TradeAddress.new
    @user_address = current_user.address 
  
  end

  def new

    @item = Drink.find(params[:drink_id])
    @order = TradeAddress.new
    # 商品購入ページ
  end

  def create

    @item = Drink.find(params[:drink_id])
    @order = TradeAddress.new(trade_params)
    if @order.valid?
      pay_item
      @order.save
    else
      render 'index'
    end
  end

  def edit

  end

  private
    def trade_params
      params.permit(:drink_id,:user_id,:fam_name,:first_name,:fam_name_kana,:first_name_kana,:birthday, :postal_code, :prefecture_id, :city, :house_num, :building_name, :phone_num, :trade_id,:authenticity_token, :number, :exp_month, :exp_year, :cvc, :commit).merge(user_id: current_user.id,price: @item.price,token: params[:token])
    end

    def pay_item
      Payjp.api_key = ENV["PAYJP_SECRET_KEY"]
      # 秘密鍵をpayjpで
      Payjp::Charge.create(
        # 受け取った値を送信
        amount: trade_params[:price],
        card: trade_params[:token],
        currency: 'jpy'
      )
    end
end
