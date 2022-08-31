# Description

the project is an interactive activity using React.js, node.js, and Express.js that helps the students practice categorizing a set of words according to their part of speech.

# Installation

#### API

first you need to install the dependencies of the api and the frontend and then build and start the server.

in the root folder there are pacjage.json scripts that will do just that

```
"build:api": "cd quiz-backend && npm install && npm run build"
```

this will open the api directory and install the dependencies and then build the api.

then you can use the other script to start the server

```
"start:api": "cd quiz-backend && npm run start"
```

you can use this typing in the terminal

`npm run start:api`

#### Frontend

you can build the frontend by typing in the terminal `npm run build:frontend` this will go the the frontend directory and build the frontend and install all the dependencies.

and then you can start the front end by typing in the terminal `npm run start:frontend`

# Usage

the server is running on port 5000 and the frontend is running on port 3000.

the server has two end points that you can use to interact with the server.

- `http://localhost:5000/questions` this will return 10 random words that are not repeated and has at least one of each pos.

- `http://localhost:5000/ranks` this takes a request body of the score of the user and checks it against other users' scores and returns how well he did (Rank).

the front end consumes these end points and displays a mainmenu until you start the quiz then it starts fetching data from the api and displays all the questions. and when done it displays the rank and an option to restart the quiz.
