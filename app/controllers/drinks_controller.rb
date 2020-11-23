class DrinksController < ApplicationController
  
  def index
    @drinks = Drink.includes(:user).order("created_at DESC")
  end

  def show

  end

  def new
    @drink = Drink.new
  end

  def create
    
  end

  def destroy

  end
end

