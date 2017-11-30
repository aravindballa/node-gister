const fs = require('fs');
const axios = require('axios');

const publish = (filename) => {
  const content = fs.readFileSync(filename, 'utf-8');
  
  const data = {
    "description": "the description for this gist",
    "public": true,
    "files": {
    }
  }
  data.files[filename] = { 'content': content};

  axios.post('https://api.github.com/gists', data)
    .then((response) => {
      console.log('A gist was sucessfully created..');
      console.log(response.data.html_url);
    })
    .catch((error) => {
      console.log(error);
    })
};

module.exports = {
  publish
}