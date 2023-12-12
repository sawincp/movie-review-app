class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :user_id, :movie_id, :user

  belongs_to :user
  belongs_to :movie
end
