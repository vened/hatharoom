class AlbumSerializer < ActiveModel::Serializer
  attributes :title, :description, :publish
  attribute :key do
    object.id
  end
end
