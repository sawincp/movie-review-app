class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :user_id, :movie_id, :username

  belongs_to :user
  belongs_to :movie

  def username
    object.user.username
  end

  # create custom method for username
end
