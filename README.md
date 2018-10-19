# Stencil Web App Example

This is a single-page app consisting mainly of two views: a home page listing some blog posts and a detail view for each post. Rather than go with a full-blown single-page-app framework like Angular or Ember, I've chosen to use a web-component compiler called [Stencil](https://stenciljs.com/) to create a few components, add a bit of routing, fold in [Redux](https://redux.js.org/) for state, and test it all with a tool called [Cypress](https://www.cypress.io/).

## Installing and Running This App

1. First, install the [current version of Node](https://nodejs.org/en/). (The project requires Node 10 with NPM 6.) If you're [an `nvm` user](https://github.com/creationix/nvm), just run:

    ```
    $ nvm install
    ```

    in the root of the project (i.e., this folder), and nvm should install and enable Node 10 for you automatically. Verify your Node and NPM versions:

    ```
    $ node -v
    v10.12.0

    $ npm -v
    6.4.1
    ```

1. With Node 10 installed, you can proceed with installing the project:

    ```
    $ npm install
    ```

1. Once that's done, you can run the end-to-end tests (which just validate the overall behavior of the application):

    ```
    $ npm test
    ```

1. And then finally, start the application:

    ```
    $ npm start
    ```

Navigate to http://localhost:3333 and you should be good to go.

## Author

* Christian Nunciato <chris@nunciato.org>
