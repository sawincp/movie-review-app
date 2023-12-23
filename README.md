
# Phase-4 Project Ruby on Rails
By: Corey Sawin

This is a Movie Review application built with a React frontend and a Rails backend. This application allows the user to login or sign up for an account and then view a profile page that will list movies that they have reviewed. The user is also able to view a list of all the movies in the database and add a new movie to the database. The user has the ability to create, read, update and delete a review they left for any movie. 

## Technology Stack

### Frontend
- React
- Javascript
- React-Router-Dom
- CSS

### Backend
- Ruby
- Rails

### Database
- PostgreSQL

### GitHub Repository
- https://github.com/sawincp/movie-review-app

## Setup/Installation Requirements
- Clone GitHub repository from https://github.com/sawincp/movie-review-app
- Open movie-review-app project file
- In terminal run bundle install
- In terminal run rails db:migrate db:seed
- In terminal run rails s to start Rails server 
- In second terminal run npm start --prefix client to run local application

## Application Description

On page load, if the user hasn't already logged in, they will be directed to a login page or be given the option to sign up.

![Log In](/Images/Log_in.png)

![Sign_up](/Images/Sign_up.png)

After the user is successfully logged in, they will be looking at their profile page that will display a welcome message along with a movie list that will show which movies they have reviewed (if any) and a navigation bar that will allow the user to move between their profile page and movie list page. 

![Profile](/Images/profile.png)

When the user clicks on Movies in the navigation bar, they will be brought to the movie list page that will display a list of all the movies from the database. 

![Movie_List](/Images/Movie_list.png)

From this view, the user will be able to add a moive by click on "Add Movie" and filling a new movie form and click submit. 

![New_Movie](/Images/Add_movie.png)
![New_Movie2](/Images/Add_moive2.png)

From this page, the user is able to leave a review for any of the movies listed by clicking on the Review link. 

![Review_Screen](/Images/Review_screen.png)

The user is able to create a review by click on Add Review and filling out a form and hitting submit. Once they submit a review, that review will populate this screen along with which user submitted that review and two buttons will allow the user to update that gien review or delete it. 

![View_Review](/Images/View_Review.png)

If a user decides to edit their review, they can click on the pencil button to show a new form with the exisiting review data for them to make changes and save. 

![Edit_Review](/Images/Edit_Review.png)
![Updated_Review](/Images/Edit_review2.png)
![Updated_Review_List](/Images/Edit_review3.png)

If a user tries to add a second review to a movie they will get an error message stating they are only allowed one review per movie. 

![Review_Error](/Images/Second_review.png)