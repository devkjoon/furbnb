# Furbnb
## Description
#### Furbnb is a web application that allows pet owners to find and book pet care services such as grooming, boarding, training, and veterinary services. The application is built with React, Node.js, Express, and MongoDB, and it uses GraphQL for the communication between the client and the server. 
## Table of Contents
- [Heroku](#heroku)
- [Installation](#installation)
- [Features](#features)
- [Technologies](#technologies)
- [Preview](#preview)
- [Contributing](#contributing)
- [License](#license)
## Heroku
- https://furbnbcare.herokuapp.com/
## Installation
- To get started with Furbnb, you need to have Node.js and MongoDB installed on your machine. Then, you can clone the repository and install the dependencies:
```
git clone https://github.com/devkjoon/furbnb.git
cd furbnb
npm install
```

- Before running the application, you need to create a .env file in the server directory with the following contents:
```
PORT=4000
MONGODB_URI=mongodb://localhost:27017/furbnb
JWT_SECRET=mysecret
```

- Replace mysecret with a secret key that you choose for JWT token generation. Then, you can start the server and the client:
```
npm run dev
```

- This will start the server on port 4000 and the client on port 3000. You can access the application by visiting http://localhost:3000 in your web browser.

## Features
### Furbnb allows users to:

- Create an account and log in
- View their profile information and pets
- Add, edit, and delete pets
- Book pet care services by selecting a type, date, and time
- View their upcoming and past bookings
## Technologies
### Furbnb is built with the following technologies:
- React: A JavaScript library for building user interfaces
- Node.js: A JavaScript runtime for building server-side applications
- Express: A web framework for Node.js
- MongoDB: A NoSQL database for storing data in JSON-like documents
- GraphQL: A query language for APIs
- Apollo Server: A GraphQL server for Node.js
- Apollo Client: A GraphQL client for React
- JWT: JSON Web Tokens for authentication
## Preview
[Furbnb.webm](https://user-images.githubusercontent.com/114960634/230257001-33308ebb-a350-450f-8e7a-9b08b8ce3d9c.webm)
## Contributing
#### Furbnb is a group project created by Liam Allen, Joon Kim, Trenton Kirchner, Coulson Porter, and Alexandria White. Contributions to Furbnb are welcome! If you find a bug, have an idea for a new feature, or want to improve the code, feel free to open an issue or a pull request. Please follow the existing code style and conventions and make sure to add tests for any new functionality.
## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
