const express = require('express')
const app = express()
const cors = require('cors')
const request = require('request')
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(cors())

app.use(express.static('public'))

app.get("/proxy", (req, res) => {
  const channel = req.query["channel"];
  const date = req.query["date"];
  const id = req.query["id"];

  const targetUrl = `https://storage.googleapis.com/citizen-production/radio/channels/${channel}/${date}/${id}.aac`

  request(targetUrl).pipe(res);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
