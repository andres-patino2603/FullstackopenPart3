const express = require('express')
const app = express()
app.use(express.json())//Para acceder a los datos fácilmente, necesitamos la ayuda del json-parser de Express, que se usa con el comando 

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })



const PORT = 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })