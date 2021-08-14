json.(@drink, :name ,:price ,      :explain ,
                     :region_id ,  :body_id , 
                     :acidity_id , :processing_id ,
                     :likes_count, :user_id,
                     :region_name, :acidity_name, 
                     :body_name,   :processing_name)

json.image rails_blob_url(@drink.image) if @drink.image.attached?