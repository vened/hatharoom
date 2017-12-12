module Renderable

  extend ActiveSupport::Concern

  def render_collection(collection, options = {})
    collection = collection.page(params[:current]).per(params[:pageSize])
    collection = collection.reorder(order_by_field) if params[:sort]
    render_options(collection, options)
  end

  def render_entity(entity, options = {})
    render_options(entity, options)
  end

  def render_tags_collection(collection, options = {})
    render_options(collection, options)
  end

  def render_options(collection, options)
    data = {data: collection}
    data = {meta: {current: collection.current_page, total: collection.total_pages * params[:pageSize].to_i}}.merge(data)
    options = {json: data}
    render options
  end

  def render_errors(resource, status = :unprocessable_entity)
    render(json: {errors: errors(resource.errors)}, status: status)
  end

  def render_error(error, status = :unprocessable_entity)
    render(
        json: {errors: [{detail: error}]},
        status: status
    )
  end

  def render_unauthorized
    render_error(I18n.t('errors.messages.unauthorized'), :unauthorized)
  end

  def render_not_found
    render_error(I18n.t('errors.messages.wrong_id_provided'), :not_found)
  end

  def render_meta(meta = {})
    render(json: {data: {}, meta: meta})
  end

  def page_number
    params.dig(:page, :number) || 1
  end

  def page_size
    params.dig(:page, :size) || 30
  end

  def order_by_field
    f = params['sort']
    field = f[0] == '-' ? f[1..-1] : f
    order = f[0] == '-' ? 'DESC' : 'ASC'

    # Добавление замены '' на null если сортировка по имени
    field = "NULLIF(name, '')" if field.eql?('name')

    "#{field} #{order} NULLS LAST"
  end

  private

  def errors(raw_errors)
    raw_errors = raw_errors.to_hash(full_messages: true) if raw_errors.respond_to?(:to_hash) && raw_errors.respond_to?(:full_messages)
    raw_errors.inject([]) do |result, (attribute, messages)|
      result += messages.map {|message| single_error(attribute.to_s, message)}
    end
  end

  def single_error(attribute, message)
    {
        source: {
            pointer: "/data/attributes/#{attribute.dasherize}"
        },
        detail: message
    }
  end

  def compose_url
    uri = URI.parse(request.url)
    if Rails.env.eql?('development')
      "http://#{uri.host}:#{uri.port}#{uri.path}"
    else
      "https://#{uri.host}#{uri.path}"
    end
  end

  def current_url
    @url ||= compose_url
  end
end
