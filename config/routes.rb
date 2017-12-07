Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :users
    end
  end

  namespace :admin do
    get '/(*section)' => 'dasboard#index'
  end

  root to: 'visitors#index'
  devise_for :users
  resources :users
end
