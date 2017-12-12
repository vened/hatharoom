class Api::V1::PagesController < Api::V1::ApiController
  before_action :authenticate_user!
  after_action :verify_authorized

  def index
    authorize Page
    collection = Page.all
    render_collection(collection)
  end

  def create
    @page = Page.new(secure_params)
    authorize Page
    if @page.save
      render json: {status: :created, type: "success", data: @page}
    else
      render json: {:status => 422, type: "danger", notice: @page.errors.full_messages}
    end
  end

  private

  def secure_params
    params.require(:page).permit(
        :title,
        :body,
        :publish,
        )
  end

end
