Rails.application.routes.draw do
  root to: 'drinks#index'
  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'
  get 'user/likes',  to: 'users#likes'
  resources :users do
    member do
      get :following,:followers
      # memberメソッドを使うと
      # ユーザーidが含まれてるURlを扱うようになる
    end
  end
  get '/drinks/searchdrink',  to: 'drinks#search_drink'
  resources :drinks, only: [:index,:new,:show,:create,:destroy] do
    collection do
      get 'search'
    end

    resources :comments,only: :create
    # あるツイートに対してのコメントと言う
    # 親子関係を表現したパスが、コメント投稿に必要なリクエストの
    # パスになります
    
    resources :trades,only: [:index,:new,:create]
  end
  post '/drinks/:id/trades/new', to: 'trades#create'
  resources :relationships, only: [:create,:destroy]
  post 'like/:id' ,to: 'likes#create', as: 'create_like'
  delete 'like/:id',to: 'likes#destroy', as: 'destroy_like'
end
