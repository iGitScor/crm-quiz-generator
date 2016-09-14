var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(
  path.join(__dirname, '..'),
  {
    src: [
      'docs/**/*',
      'demo/**/*',
    ],
    message: 'Automatic deployment update',
  },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('No error in the deployment');
    }
  }
);
