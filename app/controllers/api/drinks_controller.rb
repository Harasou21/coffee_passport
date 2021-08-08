class Api::DrinksController < ApplicationController
  def show
    @drink = Drink.find(params[:id])
    #@user = @drink.user
    #@comment = Comment.new
   # @comments = @drink.comments.includes(:user).order('created_at DESC')
  end
end
