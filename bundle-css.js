const find = require('list-files')
const concat = require('concat-files')

find(files => {
  concat(files, './bundle.css', err => {
    if (err) throw err
    console.log('css bundled into bundle.css')
  })
}, {
  name: 'css'
})
