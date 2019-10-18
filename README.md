# Catch of the Day

![Screenshot](/public/images/screenshot.png)

## Installation

For this application you'll need a [Firebase](https://firebase.google.com/) account and database.
You'll also need to enable the Facebook, Twitter, and Github authentication providers.

In order to use the providers you'll need to create application in those 3 social networks:
[Facebook](https://www.facebook.com/), [Twitter](https://twitter.com/) and [Github](https://github.com/).

Use the application IDs and secrets provided by those services to configure authentication in Firebase.

Once you have your authentication. Install the application dependencies with `npm`

```
$ npm install
```

## Usage

To run the application in development mode, execute the following command

```
$ npm start
```

Open a browser in [http://localhost:3000](http://localhost:3000)

## Summary

This is a simple, single page app that might be used by a seafood
company to sell fish.

It's entirely client side, using React to render the vast majority of the HTML
that you see, and [Firebase](https://firebase.google.com/) to store information.

## Getting Started

The first page you'll see is the store picker page. All you have to do here is
enter the name of a store (can be anything) in the input and hit the Visit Store
button. Refresh the page for randomly generated (and often weird) names!

Once you've entered the store, login using GitHub, Facebook, or Twitter. You are
now the owner of this store, and only you can make changes to the fish in this
store.

Scroll to the bottom of the Inventory section, and hit the "Load Sample Fishes"
button to add some sample data into the app.

## Features

This was designed principally as a CRUD app to help teach the basics of React.
Users can add, remove, and update fish in the inventory, then add them to the
order. All of these actions are animated with transitions and will persist after
refreshing/leaving the page.

- [The app itself makes full use of ECMAScript
  JavaScript](https://github.com/andydnguyen/Catch-of-the-day/blob/54c6df84d713df47c90ecbf04d70a35eeef8ae8b/src/components/Inventory.js#L4)
- [Built on Google's Firebase Cloud
  Database](https://github.com/andydnguyen/Catch-of-the-day/blob/master/src/base.js)
- [OAuth sign in (Facebook, Github,
  Twitter)](https://github.com/andydnguyen/Catch-of-the-day/blob/master/src/components/Login.js)
- [Extensive use of React components (including stateless functional components)](https://github.com/andydnguyen/Catch-of-the-day/tree/master/src/components)
- [Extensive templating with
  JSX](https://github.com/andydnguyen/Catch-of-the-day/blob/master/src/components/App.js)
- [URL routing with React Router
  4](https://github.com/andydnguyen/Catch-of-the-day/blob/master/src/components/Router.js)
- [Advanced state management with local
  storage](https://github.com/andydnguyen/Catch-of-the-day/blob/54c6df84d713df47c90ecbf04d70a35eeef8ae8b/src/components/App.js#L18)
- [Animations with React CSS
  Transitions](https://github.com/andydnguyen/Catch-of-the-day/blob/master/src/components/Order.js)
