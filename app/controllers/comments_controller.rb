class CommentsController < ApplicationController
  include SessionsHelper
  def create
    comment = Comment.create(comment_params)
    #redirect_to "/drinks/#{comment.drink.id}"

    @comments = comment.drink.comments.includes(:user).order("created_at DESC") # Ajax用インスタンス変数
    @drink = comment.drink # Ajax用インスタンス変数
    @comment = Comment.new # Ajax用インスタンス変数
    render 'comments.js.erb'
    # comments/index.js.erb
  end

  def destroy
    drink = Drink.find(params[:drink_id])
    @comment = Comment.find_by(id: params[:id])
    @comment.destroy
    
  end

  private
    def comment_params
      params.require(:comment).permit(:text).merge(user_id: current_user.id,drink_id: params[:drink_id])
    end
end
