FactoryBot.define do
  factory :drink do
    name                {"TOKYOロースト"}
    price               {350}
    explain             {Faker::Lorem.sentence}
    region_id           {2}
    body_id             {2}
    acidity_id          {2}
    processing_id       {2}
    likes_count          {2}
    association :user 

    after(:build) do |drink|
      drink.image.attach(io: File.open('app/assets/images/ethiopia.jpg'), filename: 'ethiopia.jpg')
    end
  end
end
