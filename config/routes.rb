Rails.application.routes.draw do
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  resources :movies do 
    resources :reviews 
  end

  # get "/popularmovies/:num", to: "movies#popularmovies"

  get "/searchmovie/:title", to: "movies#search"
  
  
  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
