class Processing < ActiveHash::Base
  self.data = [
    { id: 1, name: '---' },
    { id: 2, name: 'WASHED(水洗式)' },
    { id: 3, name: 'SEMI-WASHED(半水洗式)' },
    { id: 4, name: 'NATURAL(乾燥式)' },
    { id: 5, name: 'WASHED(水洗式),SEMI-WASHED(半水栓式)' }
  ]
end
