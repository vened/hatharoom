class PagePolicy < Struct.new(:current_user, :dashboard)
  def index?
    current_user.admin?
  end
  def create?
    current_user.admin?
  end
end