class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :bio, :garden_level

  has_many :gardens


end
