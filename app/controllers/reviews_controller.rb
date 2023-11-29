class ReviewsController < ApplicationController
   def create
    movie = Movie.find(params(:movie_id))
    review = movie.review.create!(review_params)
    render json: review
   end

   private
   
   def review_params
    params.require(:review).permit(:user_id, :movie_id, :review)
   end
end
