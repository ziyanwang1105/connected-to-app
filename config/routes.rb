Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :create]
    resource :session, only: [:show, :create, :destroy]
    resources :profiles, only: [:create, :update]
    resources :educations, only: [:create, :update, :destroy]
    resources :experiences, only: [:create, :update, :destroy]
  end

  get '*path', to: "static_pages#frontend"
end
