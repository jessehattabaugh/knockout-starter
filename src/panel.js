var ko = require('knockout');

module.exports = {
  viewModel: function (params) {
    this.name = params.name;
    this.back = params.back;
    this.state = params.state;
  },
  template: require('fs').readFileSync('src/panel.html', 'utf8')
}
