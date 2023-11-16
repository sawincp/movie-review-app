class MoviesController < ApplicationController

    skip_before_action :authorize, only: [:index]
    

    def index
        render json: Movie.all
    end

    def create
        # user = @current_user
        movie = Movie.create!(movie_params)
        render json: {movie: movie}, status: :created

    end

    private
    
    def movie_params
        params.require(:movie).permit(:title)
    end

end
