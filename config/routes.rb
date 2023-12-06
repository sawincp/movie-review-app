Rails.application.routes.draw do
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  resources :movies do 
    resources :reviews 
  end
  
  # resources :movies do
  #   resources :reviews, only: [:index, :create]
  # end

  # resources :reviews

  # resources :users do
  #   resources :reviews , only: [:index]
  # end

  # resources :movies do
  #   resources :reviews
  # end

  # get '/movies', to: "movies#index"
  # post 'movies', to: "movies#create"

  
  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
