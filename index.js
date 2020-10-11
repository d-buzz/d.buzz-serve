const express = require('express');
const secure = require('express-force-https');
const prerender = require('prerender-node');

const port = 8080
const prerenderToken = 'C6Y1M42Zky85xOzbhzKz'
const path = require('path')
const app = express()

// Use secure middleware to redirect to https
app.use(secure)

// Use prerender io middleware
app.use(prerender.set('prerenderToken', prerenderToken))

// Specify build folder
app.use(express.static(path.join(__dirname, 'static')))

// Serve index.html on every url.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'build.html'))
})


app.listen(port, () => console.log(`listening on port ${port}`))
