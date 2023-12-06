class ReviewsController < ApplicationController

   def index
      movie = Movie.find(params[:movie_id])
      reviews = movie.reviews
      render json: reviews
   end
   
   
   def create
      movie = Movie.find(params[:movie_id])
      review = @current_user.reviews.create!(review_params)
      render json: review
    end

   private
   
   def review_params
    params.require(:review).permit(:movie_id, :review)
   end
end
