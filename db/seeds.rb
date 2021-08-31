# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# 出品ユーザーを定義
User.create!(
  id: 6,
  nickname: "出品ユーザー",
  email: "harasou21soccer@gmail.com",
  password: ENV['ADMIN_USER_PASSWORD'],
  password_confirmation: ENV['ADMIN_USER_PASSWORD'],
  activated: true,
  activated_at: "Time.zone.now"
)
#ユーザーは差し込めたので一旦コメントアウト

User.create!(
  id: 1,
  nickname: "はらそう",
  email: "soccer@gmail.com",
  password: "password",
  password_confirmation: "password",
  activated: true,
  activated_at: "Time.zone.now"
  image: ActiveStorage::Blob.create_and_upload!(io: File.open("app/assets/images/guest.png"),filename: "guest.png")
)

User.create!(
  id: 2,
  nickname: "ジェファーソン",
  email: "socce2r@gmail.com",
  password: "password",
  password_confirmation: "password",
  activated: true,
  activated_at: "Time.zone.now"
  image: ActiveStorage::Blob.create_and_upload!(io: File.open("app/assets/images/guest.png"),filename: "guest.png")
)

User.create!(
  id: 5,
  nickname: "ゲスト様",
  email: "guest@example.com",
  password: "password",
  password_confirmation: "password",
  activated: true,
  activated_at: "Time.zone.now",
  image: ActiveStorage::Blob.create_and_upload!(io: File.open("app/assets/images/guest.png"),filename: "guest.png")
)







Drink.create!(
  name: "ケニア",
  price: 1050,
  explain: " #RICH #LIVELY ナッツやココアの味わいが特徴で、 ローストによって引き出された香りやコクなど、すべてのバランスがよいコーヒー。",
  user_id: 5,
  region_id: 3,
  body_id: 3,
  acidity_id: 3,
  processing_id: 2,
  image: ActiveStorage::Blob.create_and_upload!(io: File.open("app/assets/images/houseblend.jpg"),filename: "houseblend.jpg")
)

Drink.create!(
  name: "スマトラ",
  price: 1110,
  explain: " #コクが有る ハーブのような香りがして、コクがあっておいしい。",
  user_id: 5,
  region_id: 3,
  body_id: 4,
  acidity_id: 4,
  processing_id: 2,
  image: ActiveStorage::Blob.create_and_upload!(io: File.open("app/assets/images/sumatora.jpg"),filename: "sumatora.jpg")
)

Drink.create!(
  name: "カプチーノ",
  price: 1110,
  explain: " #コクが有る ハーブのような香りがして、コクがあっておいしい。",
  user_id: 5,
  region_id: 3,
  body_id: 3,
  acidity_id: 3,
  processing_id: 2,
  image: ActiveStorage::Blob.create_and_upload!(io: File.open("app/assets/images/cappuccino.jpg"),filename: "cappuccino.jpg")
)

Drink.create!(
  name: "ヨーロピアンブレンド",
  price: 350,
  explain: " #バランスがいい  非常にバランスが良くてとてもおいしい",
  user_id: 5,
  region_id: 2,
  body_id: 2,
  acidity_id: 2,
  processing_id: 2,
  image: ActiveStorage::Blob.create_and_upload!(io: File.open("app/assets/images/europe.jpg"),filename: "europe.jpg")
)


Drink.create!(
  name: "ブルーマウンテン",
  price: 350,
  explain: " #バランスがいい  非常にバランスが良くてとてもおいしい",
  user_id: 1,
  region_id: 2,
  body_id: 4,
  acidity_id: 3,
  processing_id: 2,
  image: ActiveStorage::Blob.create_and_upload!(io: File.open("app/assets/images/1.jpg"),filename: "1.jpg")
)

Drink.create!(
  name: "キリマンジャロ",
  price: 350,
  explain: " #バランスがいい  非常にバランスが良くてとてもおいしい",
  user_id: 2,
  region_id: 2,
  body_id: 3,
  acidity_id: 2,
  processing_id: 2,
  image: ActiveStorage::Blob.create_and_upload!(io: File.open("app/assets/images/2.jpg"),filename: "2.jpg")
)

Drink.create!(
  name: "マンデリン",
  price: 350,
  explain: " #バランスがいい  非常にバランスが良くてとてもおいしい",
  user_id: 1,
  region_id: 2,
  body_id: 3,
  acidity_id: 4,
  processing_id: 2,
  image: ActiveStorage::Blob.create_and_upload!(io: File.open("app/assets/images/3.jpg"),filename: "3.jpg")
)

Drink.create!(
  name: "トラジャ",
  price: 350,
  explain: " #バランスがいい  非常にバランスが良くてとてもおいしい",
  user_id: 2,
  region_id: 1,
  body_id: 1,
  acidity_id: 2,
  processing_id: 2,
  image: ActiveStorage::Blob.create_and_upload!(io: File.open("app/assets/images/4.jpg"),filename: "4.jpg")
)


houseblend = Drink.create!(
  name: "ハウスブレンド",
  price: 1050,
  explain: " #RICH #LIVELY ナッツやココアの味わいが特徴で、スターバックス ローストによって引き出された香りやコクなど、すべてのバランスがよいコーヒー。",
  user_id: 5,
  region_id: 3,
  body_id: 3,
  acidity_id: 3,
  processing_id: 2,
  image: ActiveStorage::Blob.create_and_upload!(io: File.open("app/assets/images/houseblend.jpg"),filename: "houseblend.jpg")
)

Relationship.create!(
  followed_id: 1,
  follower_id: 5
)

Relationship.create!(
  followed_id:5,
  follower_id:1
)

Relationship.create!(
  followed_id:2,
  follower_id:5
)

Relationship.create!(
  followed_id:5,
  follower_id:2
)


#houseblend.image.attach(io: File.open(Rails.root.join("app/assets/images/houseblend.jpeg")),filename: "houseblend.jpeg")


# 複数の書き方はこんな感じ

Drink.create!(
  [

    {
       name: "ブレックファーストブレンド",
       price: 1050,
       explain: " #BRIGHT(鮮やかな) #TANGY(はじけるような) やや浅めに焙煎された、軽めながらほどよいコクのブレンド。鮮やかでシトラス感とさわやかな後味が特徴。一日の始まりにふさわしい、いきいきとしたコーヒーです。",
       user_id: 6,
       region_id: 3,
       body_id: 2,
       acidity_id: 3,
       processing_id: 2,
       image: ActiveStorage::Blob.create_and_upload!(io: File.open("app/assets/images/break_first.jpg"),filename: "breake_first.jpg")
 
    },
    {
       name: "パイクプレイス® ロースト",
       price: 1140,
       explain: " #SMOOTH(なめらかな) #BALANCED(バランスの良い) ココアや煎ったナッツのようなほのかな香ばしさに、バランスのとれたなめらかな口あたりが特徴のコーヒー。一日を通して、また毎日でもお楽しみいただけます。",
       user_id: 6,
       region_id: 3,
       body_id: 3 ,
       acidity_id: 3,
       processing_id: 2,
       image: ActiveStorage::Blob.create_and_upload!(io: File.open("app/assets/images/pike_place.jpg"),filename: "pike_place.jpg")
 
    },
    {
       name: "グアテマラ アンティグア",
       price: 1240,
       explain: " #COCOA(ココアのような) #SUBTLE_SPICE(微かなスパイス感) チョコレートやかすかなスパイス、レモンを感じる上品な酸味が幾重にも重なる複雑ながらもエレガントで洗練されたコーヒー。火山に囲まれた100年もの歴史を誇るグアテマラ アンティグア地方の農園は、すばらしいコーヒーを栽培する生産地としてよく知られています。",
       user_id: 6,
       region_id: 3,
       body_id: 3 ,
       acidity_id: 3,
       processing_id: 2,
       image: ActiveStorage::Blob.create_and_upload!(io: File.open("app/assets/images/guatemala.jpg"),filename: "guatemala.jpg")
    },
    {
       name: "エチオピア",
       price: 1330,
       explain: " #CITRUS(シトラス) #DARK_COCOA(ダークココア) ダークチョコレート、ペッパーのようなスパイス、そしてスイートシトラスの風味が特徴の、やわらかでベルベットのような口あたりのコーヒーです。",
       user_id: 6,
       region_id: 4,
       body_id: 3 ,
       acidity_id: 4,
       processing_id: 2,
       image: ActiveStorage::Blob.create_and_upload!(io: File.open("app/assets/images/ethiopia.jpg"),filename: "ethiopia.jpg")

    },
    {
      name: "TOKYOロースト",
      price: 1240,
      explain: " #Hearty(心温まる) #Well-Rounded(まろやかな) スターバックス リザーブ® ロースタリー 東京のロースターが焙煎した、なめらかで深みのあるスマトラ産コーヒーにラテンアメリカ産コーヒーをブレンドした、まろやかで心温まるコーヒーです。",
      user_id: 6,
      region_id: 2,
      body_id: 4 ,
      acidity_id: 3,
      processing_id: 5,
      image: ActiveStorage::Blob.create_and_upload!(io: File.open("app/assets/images/tokyo_roast.jpg"),filename: "tokyo_roast.jpg")

    }


  ]
)