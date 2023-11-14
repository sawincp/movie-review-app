class MoviesController < ApplicationController

    def show
        render json: Movie.all
    end

    def create
        @user = @current_user
        @movie = @user.movies.create!(movie_params)
        render json: {movie: @movie}, status: :created

    end

    private
    
    def movie_params
        params.require(:movie).permit(:title)
    end

end
