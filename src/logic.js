const fs = require('fs')
const axios = require('axios')

async function publish(filename) {
  const postData = await getPostData(filename)
  axios
    .post('https://api.github.com/gists', postData)
    .then(response => {
      console.log('A gist was sucessfully created..')
      console.log(response.data.html_url)
    })
    .catch(error => {
      console.log(error)
    })
}

function getPostData(filename) {
  const content = fs.readFileSync(filename, 'utf-8')
  let data = {
    description: '',
    public: true,
    files: {},
  }
  data.files[filename] = { content: content }
  return data
}

export { publish, getPostData }
