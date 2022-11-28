# frozen_string_literal: true

# Root
module Api
  class UsersController < ApplicationController
    def show
      render json: {
        id: 1,
        name: 'Alice',
        birthday: '2000-01-23'
      }
    end
  end
end
