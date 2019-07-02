# Web Coding Challenge
DabaDoc's Web Coding Challenge

# [API :tada:](https://github.com/mehdi-alouane/dabadoc/blob/master/server/README.md)

## Functional spec coverage
  * As a User, I can sign up using my email & password ✔️
  * As a User, I can sign in using my email & password ✔️
  * As a User, I can post a question with these attributes title, content, location ✔️
  * As a User, I can post an answer to a question ✔️
  * As a User, I can display the list of questions sorted by distance ✔️
  * As a User, I can like a question, so it can be added to my favorites ✔️

## Bonus point:
  * [Optional] As a User, I can display the list of liked questions ✔️
  * [Optional] As a User, I can remove a question from my favorites list ✔️
  * [Optional] As a User, I can list questions on a map (Google Maps)

## Scripts
  - Setup
  - Running

## Tech-Stack:
  - Backend (server): 
    - Nodejs
    - Express
    - Mongoose
    - Cors
    - Jsonwebtoken (jwt)
    - Express-validation
  
  * Front-end (client):
    - Vue.js
    - Vuex
    - Axios
    - Bulma
    - Vue router
    
    
## Scripts

### Install dependencies
```bash
npm install
```

### Running
```bash
 $ yarn workspace server run start
 $ yarn workspace client run serve
``` 

## Tech-Stack

### Backend dependencies
  * Node.js 🚀️
      - an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.
  * Express.js 🌟️
    - Built on top Nodejs, ExpressJs will allow us to build our API endpoints in a simple and light way. It is a highly scalable choice to have an event Loop that manages all asynchronous operations and have the program run without a stop thanks the Google's V8 Engine
  * Mongoose 🤖️
    - MongoDB is an object-oriented, simple, dynamic, and scalable NoSQL database. 
  * Cors 🚪️
    - This will allow us to secure communication between the front-end and back-end servers. 
  * JsonWebToken (jwt) ⚡️
    - is a compact, URL-safe means of representing claims to be transferred between two parties.
  * Express-validation ✔️
    - is a middleware that validates the body, params, query, headers and cookies of a request and returns a response with errors; if any of the configured validation rules fail.

### Front-End Dependencies
  * Vue.js 🌠️
    - is an open-source JavaScript framework for building user interfaces and single-page applications.
  * Vuex
    -  is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion
  * Axios
    - A lightweight, promise-based HTTP client with an intuitive API that makes interfacing with a REST API simple. 
  * Bulma
    - is a free, open source CSS framework based on Flexbox.
   * Vue Router
    - This allows the navigation.
