# Tictactoe Game

## Introduction
A simple REST API allowing to play a tic-tac-toe game over 3x3 board allowing for multiple games to be played simultaneously.

If you are not familiar with tic-tac-toe, you can find the rules here: https://en.wikipedia.org/wiki/Tic-tac-toe

"Happy path" scenario for a game:

    Player A sends POST request to /game endpoint. The application will generate a new game id and will respond with Set-Auth-Token HTTP header with the player's token and HTTP body containing an invitation URL for the player B in the form: <rootURL>/game/{id}/join
    Player B sends POST request to the invitation URL. The response has Set-Auth-Token HTTP header set to the player's token, and the HTTP body contains the initial status of the game.
    The invited player (B) starts the game.
    The players take turns to position their marks on the board by sending PUT to /game/{id} URL with Auth-Token header set to their tokens.
    The body contains the position where the mark should be placed: {"position":"A1"}. The position value is in the format [ABC][123]. First symbol [ABC] specifies the row and second symbol [123] specifies the column:

## Library Used

 The following libraries were favoured because of the contract first approach which was used to generate API and swagger-ui
 
 [Spring-framework] was used because of the ease of building web-api with it. However the construction of API was generated from
 [OPEN-API]() and swagger documentation.
 
 [Lombok]() was used to create simple POJO's.
 
## Challenge with the project
 The area I found challenging in the application is determining the winning strategy for a win,lose or draw. However this was
 resolved by mapping all the possible winning cases and assuming that when all position is played and no winner emerges is a draw. 
 
## What to improve on
 I will improve the algorithm to determine win or lose.
 
 
 
## Building for production

### Packaging as jar

To build the final jar and optimize the ticktack application for production, run:

    ./mvnw clean package

This will concatenate and minify the client CSS and JavaScript files. It will also modify `index.html` so it references these new files.
To ensure everything worked, run:

    java -jar target/*.jar

Then navigate to [http://localhost:8080](http://localhost:8080) in your browser.

## Testing

To launch your application's tests, run:

    ./mvnw verify

## Using Docker in development

You can fully dockerize your application and all the services that it depends on.
To achieve this, first build a docker image of your app by running the bash file:

    sh ./build.sh

Then run:

    sh ./run.sh
