Rails.application.routes.draw do
  root to: 'users#new'
  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'
  resources :users
  resources :drinks, only: [:index,:new,:show,:create,:destroy]
end
