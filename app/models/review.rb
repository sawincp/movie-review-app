class Review < ApplicationRecord
    belongs_to :user
    belongs_to :movie

    validates :review, presence: true, allow_blank: true
    validates :user_id, uniqueness: {scope: :movie_id, message: "You Can Only Create One Review Per Movie"}
end
