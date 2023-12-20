class ReviewsController < ApplicationController

   before_action :authorize_user , only: [:update, :destroy]
   
   
   def create
      review = @current_user.reviews.create!(review_params)
      render json: review
    end

    def index
      movie = Movie.find(params[:movie_id])
      reviews = movie.reviews
      # render json: reviews,  each_serializer: ReviewSerializer
      render json: reviews
   end

   
    def update
      review = @current_user.reviews.find(params[:id])
      if review.update(review_params)
        # render json: review, serializer: ReviewSerializer
        render json: reviews
      else
        render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
      end
    end

    def destroy
      review = @current_user.reviews.find(params[:id])
      review.destroy
      render json: @current_user
    end

   private
   
   def review_params
    params.require(:review).permit(:movie_id, :review)
   end
end
