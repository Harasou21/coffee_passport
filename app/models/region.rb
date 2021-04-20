class Region < ActiveHash::Base
  self.data = [
    { id: 1, name: '---' },
    { id: 2, name: 'マルチリージョン' },
    { id: 3, name: 'ラテンアメリカ' },
    { id: 4, name: 'アフリカ' },
    { id: 5, name: 'アジア、太平洋' }
  ]
end
