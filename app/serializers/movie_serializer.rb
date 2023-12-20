class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title

  has_many :reviews
  has_many :users, through: :reviews
end
