class MoviesController < ApplicationController

    before_action :authorize, except: [:index, :show]

    def index
        render json: Movie.all, each_serializer: MovieSerializer
    end

    def show
        movie = Movie.find(params[:id])
        render json: movie, serializer: MovieSerializer
    end
  

    def create
        movie = Movie.create!(movie_params)
        render json: {movie: movie}, status: :created
    end

    private
    
    def movie_params
        params.require(:movie).permit(:title)
    end

end
