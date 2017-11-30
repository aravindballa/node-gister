'use strict';

var fs = require('fs');
var axios = require('axios');

var publish = function publish(filename) {
  var content = fs.readFileSync(filename, 'utf-8');

  var data = {
    "description": "the description for this gist",
    "public": true,
    "files": {}
  };
  data.files[filename] = { 'content': content };

  axios.post('https://api.github.com/gists', data).then(function (response) {
    console.log('A gist was sucessfully created..');
    console.log(response.data.html_url);
  }).catch(function (error) {
    console.log(error);
  });
};

module.exports = {
  publish: publish
};