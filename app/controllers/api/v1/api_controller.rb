module Api
  module V1
    class ApiController < ActionController::API
      include Pundit
      include Renderable
      before_action :authenticate_user!
      rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized
    end
  end
end
