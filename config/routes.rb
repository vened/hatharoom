Rails.application.routes.draw do
  namespace :admin do
    get '/' => 'dasboard#index'
  end

  root to: 'visitors#index'
  devise_for :users
  resources :users
end
