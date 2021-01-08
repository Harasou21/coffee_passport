class Acidity < ActiveHash::Base
  self.data = [
    { id: 1, name: '---'},
    { id: 2, name: 'LOW(少ない)' },
    { id: 3, name: 'MEDIUM(ほどよい)' },
    { id: 4, name: 'HIGH(強い)' }
  ]
end
