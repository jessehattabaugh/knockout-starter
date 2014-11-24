var ko = require('knockout');

ko.components.register('panel', {
    viewModel: require('./panelViewModel'),
    template: require('fs').readFileSync('src/panelView.html', 'utf8')
});

var app = {
  title: "Hello Knockout",
  env: process.env.NODE_ENV || 'development',
  initialized: ko.observable(false)
};

ko.applyBindings(app);

console.log('Knockout is running');

app.initialized(true);
