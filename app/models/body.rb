class Body < ActiveHash::Base
  self.data = [
    { id: 2, name: 'LIGHT(軽い)' },
    { id: 3, name: 'MEDIUM(ほどよい)' },
    { id: 4, name: 'FULL(しっかり)' }
  ]
end
