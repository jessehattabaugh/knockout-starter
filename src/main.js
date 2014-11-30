var ko = require('knockout'),
    html = require('./htmlString');

// Register Components
ko.components.register('panel', require('./panel'));
//ko.components.register('back-button', require('./back-button'));
ko.components.register('back-button', {
  template: html('src/back-button.html')
})

// Initialize App
var App = require('./app');
var app = new App();
ko.applyBindings(app);
app.initialized(true);
console.log('Knockout is running');
