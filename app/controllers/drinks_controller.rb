class DrinksController < ApplicationController
  include SessionsHelper
  before_action :logged_in_user, only: [:index,:destroy]
  def index
    @drinks = Drink.includes(:user).order("created_at DESC")
  end

  def show
    @drink = Drink.find(params[:id])
    @user = @drink.user
    @drinks = @user.drinks
  end

  def new
    @drink = Drink.new
  end

  def create
    @drink = current_user.drinks.build(drink_params)
    if @drink.save
      redirect_to drinks_path
    else
      redirect_to 'new'
    end
  end

  def destroy
    Drink.find(params[:id]).destroy
    redirect_to root_path
  end

  private
  def drink_params
    params.require(:drink).permit(:name,:price,:explain).merge(user_id: current_user.id)
  end
end

