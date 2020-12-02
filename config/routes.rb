Rails.application.routes.draw do
  root to: 'drinks#index'
  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'
  resources :users
  resources :drinks, only: [:index,:new,:show,:create,:destroy] do
    resources :trades,only: [:index,:new,:create]
  end
  post '/drinks/:id/trades/new', to: 'trades#create'
end
