# Phase-4 Project Ruby on Rails
By: Corey Sawin

This is a Movie Review application built with a React frontend and a Rails backend. This application allows the user to login or sign up for an account and then view a profile page that will list movies that they have reviewed. The user is also able to view a list of all the movies in the database and add a new movie to the database. The user has the ability to create, read, update and delete a review they left for any movie. 

##Technology Stack

###Frontend
- React
- Javascript
- React-Router-Dom
- CSS

###Backend
- Ruby
- Rails

###Database
- PostgreSQL

###GitHub Repository
- https://github.com/sawincp/movie-review-app

##Setup/Installation Requirements
- Clone GitHub repository from https://github.com/sawincp/movie-review-app
- Open movie-review-app project file
- In terminal run bundle install
- In terminal run rails db:migrate db:seed
- In terminal run rails s to start Rails server 
- In second terminal run npm start --prefix client to run local application

##Application Description

On page load, if the user hasn't already logged in, they will be directed to a login page or be given the option to sign up.

![Log In](./Images/Log_in.png)

![Sign_up](./Images/Sign_up.png)

After the user is successfully logged in, they will be looking at their profile page that will display a welcome message along with a movie list that will show which movies they have reviewed (if any) and a navigation bar that will allow the user to move between their profile page and movie list page. 

![Profile](./Images/profile.png)

When the user clicks on Movies in the nave bar, they will be brought to the movie list page that will display a list of all the movies from the database. 

![Movie_List](./Images/Movie_list.png)


