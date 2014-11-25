var ko = require('knockout');

module.exports = function App() {
  this.title = "Hello Knockout";

  this.env = process.env.NODE_ENV || 'development';

  this.initialized = ko.observable(false);

  this.panel = ko.observable('home');

  this.go = function () {
    console.dir(arguments);
  }

};
