Rails.application.routes.draw do


  get 'sessions/create'
  get 'sessions/destroy'
  resources :plants, only: [:index, :show, :update, :destroy, :create]
  resources :gardens, only: [:index, :show, :create]
  resources :users, only: [:create, :index, :show, :update, :delete]
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  
  get "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  get "/logout", to: "sessions#destroy"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
