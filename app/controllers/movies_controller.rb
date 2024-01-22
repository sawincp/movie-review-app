require "pry"
class MoviesController < ApplicationController


    # before_action :authorize, except: [:index]
    before_action :authorize, except: [:index, :popularmovies, :search]

    def index
        # render json: Movie.all, each_serializer: MovieSerializer
        render json: Movie.all
    end

    def create
        movie = Movie.create!(movie_params)
        render json: movie, status: :created
    end

    def popularmovies
        review_num = params[:num].to_i
        movies = Movie.all.filter{|movie| movie.reviews.length >= review_num}
        if movies.present?
            render json: movies
        else
            render json: {errors: "No Movies Found with at least #{review_num}  Reviews"}, status: :not_found
        end
       
    end


    def search
        
        title = params[:title]
        movie = Movie.find_by(title: title)
        render json: movie
        # debugger
    end

    private
    
    def movie_params
        params.require(:movie).permit(:title)
    end

end
