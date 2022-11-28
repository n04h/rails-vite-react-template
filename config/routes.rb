# frozen_string_literal: true

Rails.application.routes.draw do
  root 'root#index'

  namespace :api do
    resource :user, only: [:show]
  end
end
