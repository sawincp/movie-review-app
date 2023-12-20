class MoviesController < ApplicationController

    before_action :authorize, except: [:index]

    def index
        # render json: Movie.all, each_serializer: MovieSerializer
        render json: Movie.all
    end

    def create
        movie = Movie.create!(movie_params)
        render json: movie, status: :created
    end

    private
    
    def movie_params
        params.require(:movie).permit(:title)
    end

end
