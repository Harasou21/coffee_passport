class DrinksController < ApplicationController
  include SessionsHelper
  
  before_action :logged_in_user, only: [:index,:destroy]
  def index
    @user = current_user
    @drinks = Drink.all.order("created_at DESC")
  end

  def show
    @drink = Drink.find(params[:id])
    @user = @drink.user
  end

  def new
    @drink = DrinkTag.new
  end

  def create
    @drink = DrinkTag.new(drink_params)
    
    if @drink.save
      redirect_to drinks_path
    else
      render 'new'
    end
  end

  def destroy
    Drink.find(params[:id]).destroy
    redirect_to root_path
  end



  private
  def drink_params
    params.require(:drink_tag).permit(:name,:price,:explain,:image,:tag_name).merge(user_id: current_user.id)
  end
end

