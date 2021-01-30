# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# 出品ユーザーを定義
User.create(
  id: 6,
  nickname: "出品ユーザー",
  email: "harasou21soccer@gmail.com",
  password: ENV['ADMIN_USER_PASSWORD'],
  password_confirmation: ENV['ADMIN_USER_PASSWORD'],
  activated: true,
  activated_at: "Time.zone.now"
)

 houseblend = Drink.create(
  name: "ハウスブレンド",
  price: 1050,
  explain: " #RICH #LIVELY ナッツやココアの味わいが特徴で、スターバックス ローストによって引き出された香りやコクなど、すべてのバランスがよいコーヒー。",
  user_id: 6,
  region_id: 3,
  body_id: 3,
  acidity_id: 3,
  processing_id: 2
)

houseblend.image.attach(io: File.open(Rails.root.join("app/assets/images/houseblend.jpeg")),filename: "houseblend.jpeg")