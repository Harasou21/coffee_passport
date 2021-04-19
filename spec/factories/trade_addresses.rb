FactoryBot.define do
  factory :trade_address do
    token             {'sampleToken'}
    fam_name          {"原"}
    first_name        {"奏一郎"}
    fam_name_kana     {"ハラ"}
    first_name_kana   {"ソウイチロウ"}
    birthday          {"2000-01-01"}
    postal_code       {'200-2000'}
    prefecture_id     {2}
    city              {"東京都東区"}
    house_num         {"青山1-1-1"}
    building_name     {"ビル103"}
    phone_num         {'08000000000'}

  end
end
