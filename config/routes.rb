Rails.application.routes.draw do
  root to: 'drinks#index'
  get '/sendgrid', to: 'users#sendgrid'
  get    '/login',   to: 'sessions#new'
  post    '/users/auth/:provider/callback',to: 'sessions#create'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'
  
  get 'user/config', to: 'users#config'   ,as: 'user_config'
  get 'user/likes/:id',  to: 'users#likes',as: 'user_likes'
  get 'user/purchase_record',to: 'users#purchase_record'
  post 'users/guest_sign_in',to: 'users#new_guest'
  resources :users do
    member do
      get :following,:followers
      # memberメソッドを使うと
      # ユーザーidが含まれてるURlを扱うようになる
    end
  end
  get 'drinks/searchingform', to: 'drinks#show_searching_form'
  get '/drinks/searchdrink',  to: 'drinks#search_drink'
  get '/drink/hashtag/:name', to: "drinks#hashtag"
  resources :drinks, only: [:index,:new,:show,:create,:destroy] do
    collection do
      get 'search'
    end

    resources :comments,only: [:create,:destroy]
    # あるツイートに対してのコメントと言う
    # 親子関係を表現したパスが、コメント投稿に必要なリクエストの
    # パスになります
    
    resources :trades,only: [:index,:new,:create]
  end
  post '/drinks/:id/trades/new', to: 'trades#create'
  resources :relationships, only: [:create,:destroy]
  post 'like/:drink_id' ,to: 'likes#like', as: 'like'
  delete 'like/:drink_id',to: 'likes#unlike', as: 'unlike'
  resources :account_activations, only: [:edit]
  get '/buy', to: 'sold_drinks#index'
 
end
