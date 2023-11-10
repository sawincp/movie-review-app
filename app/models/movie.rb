class Movie < ApplicationRecord
    has_many :reviews
    has_many :movies, through: :reviews

    validates :title, presence: true
end
