class Api::V1::AlbumsController < Api::V1::ApiController
  before_action :authenticate_user!
  after_action :verify_authorized

  def index
    @albums = Album.all.order(created_at: :asc)
    authorize Album
    render json: @albums
  end

  def create
    @album = Album.new(secure_params)
    authorize Album
    if @album.save
      render json: {status: :created, type: "success", data: @album}
    else
      render json: {:status => 422, type: "danger", notice: @album.errors.full_messages}
    end
  end

  def update
    @album= Album.find(params[:id])
    authorize Album
    if @album.update_attributes(secure_params)
      render json: {status: :updated, type: "success", data: @album}
    else
      render json: {:status => 422, type: "danger", notice: @album.errors.full_messages}
    end
  end


  private

  def secure_params
    params.require(:album).permit(
        :title,
        :description,
        :publish,
        :slug
    )
  end

end
