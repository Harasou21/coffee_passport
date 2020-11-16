Rails.application.routes.draw do
  get 'sessions/new'
  root to: 'users#new'
  resources :users
end
