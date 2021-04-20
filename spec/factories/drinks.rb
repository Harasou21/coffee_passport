FactoryBot.define do
  factory :drink do
    # class: モデル名 ってやる必要あるが、キー名で推測してるらしい
    name                { 'TOKYOロースト' }
    price               { 350 }
    explain             { 'これはコーヒーの説明です' }
    region_id           { 2 }
    body_id             { Body.all.sample }
    acidity_id          { Acidity.all.sample }
    processing_id       { Processing.all.sample }
    likes_count         { 2 }
    association :user
    association :region
    association :body
    association :acidity
    association :processing

    after(:build) do |drink|
      drink.image.attach(io: File.open('app/assets/images/ethiopia.jpg'), filename: 'ethiopia.jpg')
    end
  end

  factory :sold_drink, class: Drink do
    name                { 'TOKYOロースト' }
    price               { 350 }
    explain             { 'これはコーヒーの説明です' }
    region_id           { 2 }
    body_id             { Body.all.sample }
    acidity_id          { Acidity.all.sample }
    processing_id       { Processing.all.sample }
    likes_count         { 2 }
    user_id             { 6 }
    association :user
    association :region
    association :body
    association :acidity
    association :processing

    after(:build) do |drink|
      drink.image.attach(io: File.open('app/assets/images/ethiopia.jpg'), filename: 'ethiopia.jpg')
    end
  end
end
