class DashboardPolicy < Struct.new(:current_user, :dashboard)
  def index?
    current_user.admin?
  end
end