class Admin::DasboardController < ApplicationController
  layout 'admin/layouts/application'
  before_action :authenticate_user!

  def index
    authorize :dashboard, :index?
  end
end
