class Api::DrinksController < ApplicationController

  def show
    

    @drink = Drink.find(params[:id])
    
    case @drink.region_id
      when 1
        @drink.region_name = "---"
      when 2
        @drink.region_name = "マルチリージョン"
      when 3
        @drink.region_name = "ラテンアメリカ"
      when 4
        @drink.region_name = "アフリカ"
      when 5
        @drink.region_name = "アジア、太平洋"
    end 

    case @drink.acidity_id
      when 1
        @drink.acidity_name = "---"
      when 2
        @drink.acidity_name = "LOW(少ない)"
      when 3
        @drink.acidity_name = "MEDIUM(ほどよい)"
      when 4
        @drink.acidity_name = "HIGH(強い)"
    end

    case @drink.body_id
      when 1
        @drink.body_name = "---"
      when 2
        @drink.body_name = "LIGHT(軽い)"
      when 3
        @drink.body_name = "MEDIUM(ほどよい)"
      when 4
        @drink.body_name = "FULL(しっかり)"
    end

    case @drink.processing_id
      when 1
        @drink.processing_name = "---"
      when 2
        @drink.processing_name = "WASHED(水洗式)"
      when 3
        @drink.processing_name = "SEMI-WASHED(半水洗式)"
      when 4
        @drink.processing_name = "NATURAL(乾燥式)"
      when 5
        @drink.processing_name = "WASHED(水洗式),SEMI-WASHED(半水栓式)"
    end
      
    #@user = @drink.user
    #@comment = Comment.new
   # @comments = @drink.comments.includes(:user).order('created_at DESC')
  end
end
