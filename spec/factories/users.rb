FactoryBot.define do
  factory :user do
    nickname {"はらそう"}
    email {Faker::Internet.free_email}
    password {Faker::Internet.password(min_length: 6)}
    password_confirmation {password}
    activated {true}
  end
end
