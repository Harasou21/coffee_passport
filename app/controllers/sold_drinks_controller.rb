class SoldDrinksController < ApplicationController
  
  def index
    @admin_user = User.find_by(id: 6)
    @drinks = @admin_user.drinks
  end



end
