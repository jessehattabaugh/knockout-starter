var ko = require('knockout');

// Register Components
ko.components.register('panel', require('./panel'));
//ko.components.register('back-button', require('./back-button'));
ko.components.register('back-button', {
  template: require('fs').readFileSync('src/back-button.html', 'utf8')
})

// Initialize App
var App = require('./app');
var app = new App();
ko.applyBindings(app);
app.initialized(true);
console.log('Knockout is running');
