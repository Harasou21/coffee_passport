json.array! @drinks do |drink|
  json.user_img  rails_blob_url(drink.user.image)   if drink.user.image
  json.id               drink.id
  json.name             drink.name        
  json.explain          drink.explain
  json.price            drink.price
  json.acidity_id       drink.acidity_id
  json.body_id          drink.body_id
  json.processing_id    drink.processing_id
  json.region_id        drink.region_id
  json.region_name      drink.region.name
  json.acidity_name     drink.acidity.name
  json.body_name        drink.body.name
  json.processing_name  drink.processing.name
  json.likes_count      drink.likes_count
  json.user_id          drink.user_id
  json.nickname         drink.user.nickname
  json.image rails_blob_url(drink.image) if drink.image.attached?
end
