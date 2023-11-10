class Movie < ApplicationRecord
    has_many :reviews
    has_many :movies, through: :reviews
end
