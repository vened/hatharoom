class PagesSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :publish
end
