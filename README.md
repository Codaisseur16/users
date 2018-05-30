# Micro-services group assignment


This app is part of a more sophisticated app working with a Microservice architecture.

The app, still in progress, is a Quiz Creator Tool (modelled around TypeForm), and does the following:

1. ADMIN
  - can signup and login as admin (with authentication and authorization) 
  - can create a new quiz
  - can add questions and answers
  - can edit and delete the quizzes
  - can see all the responses and quiz score
  - thanks to webhooks, can add a url to display the quiz results
  
2. USER/STUDENT
  - can signup and login as user (with authentication and authorization)
  - can take the quiz
  - can see its results and score
  
  ## Users micro-service:
  Specifically, this repo contains the backend for the users. It has an endpoint to GET all users, GET a specific user by id, POST a new user, PUT and DELETE users.
  When a user signes up, password is hashed using bcrypt.
  It also validates if the user signing up is a teacher or student.
  
## Quickstart:
1. clone this repo
2. cd into /src
3. run yarn install
4. run tsc or tsc -w
5. run node . or nodemon .
6. happy hacking! 👌

###To do:
- Finish the Quiz app
- Refactor
