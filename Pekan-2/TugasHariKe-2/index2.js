var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

function readBooks() {
    readBooksPromise(10000, books[0])
    .then(function(sisawaktu) {
      if(sisawaktu > 0) {
        readBooksPromise(sisawaktu, books[1])
        .then(function(sisawaktu) {
          if(sisawaktu > 0) {
            readBooksPromise(sisawaktu, books[2])
          }
        })
      }
    })
    .catch(function(sisawaktu) {
       console.log(sisawaktu)
    })
}        
readBooks()