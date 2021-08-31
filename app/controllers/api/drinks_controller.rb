class Api::DrinksController < ApplicationController

  include SessionsHelper

  def index
    def index
      @user = current_user
  
      following_ids = 'SELECT followed_id FROM relationships WHERE follower_id = :user_id'
      
      @drinks = Drink.includes(:user ,{image_attachment: :blob})
                     .where.not(user_id: 6)
                     .where("user_id IN (#{following_ids}) OR user_id = :user_id", user_id: @user.id)
                     .order('drinks.created_at DESC')
    end
  end


  def show
    @drink = Drink.find(params[:id])
    #@user = @drink.user
    #@comment = Comment.new
   # @comments = @drink.comments.includes(:user).order('created_at DESC')
  end
end
