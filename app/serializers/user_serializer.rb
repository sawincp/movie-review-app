class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :reviews, :movies

  has_many :reviews
  has_many :movies, through: :reviews
  
end
