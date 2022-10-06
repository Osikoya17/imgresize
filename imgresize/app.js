const express = require('express')
const app = express()
const reSize = require("./routes/resize")
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.use(reSize)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
