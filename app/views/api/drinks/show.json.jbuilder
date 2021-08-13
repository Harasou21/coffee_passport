json.(@drink, :name , :price , :explain ,
                     :region_id , :body_id , 
                     :acidity_id , :processing_id ,
                     :likes_count , :user_id)

json.image rails_blob_url(@drink.image) if @drink.image.attached?