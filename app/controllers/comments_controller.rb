class CommentsController < ApplicationController
  include SessionsHelper
  def create
    comment = Comment.create(comment_params)
    redirect_to "/drinks/#{comment.drink.id}"
  end

  private
    def comment_params
      params.require(:comment).permit(:text).merge(user_id: current_user.id,drink_id: params[:drink_id])
    end
end
