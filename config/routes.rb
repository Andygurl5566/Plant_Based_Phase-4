Rails.application.routes.draw do


  resources :plants, only: [:index, :show, :update, :destroy]
  resources :gardens, only: [:index, :show, :create]
  resources :users, only: [:create, :index, :show, :update, :delete]
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
