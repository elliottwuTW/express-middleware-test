const express = require('express')

const app = express()
const port = 3000

const faviconPreventHTML = '<link rel="icon" href="data:;base64,=">'

app.use((req, res, next) => {
  req.time = new Date()
  console.log(`${req.time.toISOString().slice(0, 10)} ${req.time.getHours()}:${req.time.getMinutes()}:${req.time.getSeconds()} | ${req.method} from ${req.originalUrl}`)
  next()
})

app.get('/', (req, res, next) => {
  res.send(faviconPreventHTML + '列出全部 Todo')
  next()
})

app.get('/new', (req, res, next) => {
  res.send(faviconPreventHTML + '新增 Todo 頁面')
  next()
})

app.get('/:id', (req, res, next) => {
  res.send(faviconPreventHTML + '顯示一筆 Todo')
  next()
})

app.post('/', (req, res, next) => {
  res.send(faviconPreventHTML + '新增一筆  Todo')
  next()
})

app.use((req, res) => {
  console.log('Duration: ', Date.now() - req.time, ' ms')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
