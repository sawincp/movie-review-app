class ReviewsController < ApplicationController

   before_action :authorize_user , only: [:update, :destroy]

   def index
      movie = Movie.find(params[:movie_id])
      reviews = movie.reviews
      render json: reviews,  each_serializer: ReviewSerializer
   end
   
   
   def create
      review = @current_user.reviews.create!(review_params)
      render json: review, serializer: ReviewSerializer
    end

    # def update
    #   review = @current_user.reviews.find(params[:id])
    #   render json: review, serializer: ReviewSerializer
    # end

    def update
      review = @current_user.reviews.find(params[:id])
    
      # Ensure that the review is found
      if review.update(review_params)
        render json: review, serializer: ReviewSerializer
      else
        render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
      end
    end

    def destroy
      review = @current_user.reviews.find(params[:id])
      review.destroy
      head :no_content
    end

   private
   
   def review_params
    params.require(:review).permit(:movie_id, :review)
   end
end
