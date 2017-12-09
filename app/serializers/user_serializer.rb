class UserSerializer < ActiveModel::Serializer
  attributes :email, :role
  attribute :key do
    object.id
  end
end
