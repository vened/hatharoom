class AlbumPolicy < Struct.new(:current_user, :dashboard)
  def index?
    current_user.admin?
  end
  def create?
    current_user.admin?
  end
  def update?
    current_user.admin?
  end
end