json.(@drink, :name ,:price ,      :explain ,
                     :region_id ,  :body_id , 
                     :acidity_id , :processing_id ,
                     :likes_count, :user_id)

json.region_name @drink.region.name
json.acidity_name @drink.acidity.name
json.body_name @drink.body.name
json.processing_name @drink.processing.name
json.image rails_blob_url(@drink.image) if @drink.image.attached?