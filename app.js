const express = require('express')

const app = express()
const port = 3000

const faviconPreventHTML = '<link rel="icon" href="data:;base64,=">'

app.use((req, res, next) => {
  req.time = new Date()
  console.log(`${req.time.toISOString().slice(0, 10)} ${req.time.getHours()}:${req.time.getMinutes()}:${req.time.getSeconds()} | ${req.method} from ${req.originalUrl}`)
  const startTime = process.hrtime()
  next()

  // log the request-response elapsed time
  res.on('finish', () => {
    const duration = process.hrtime(startTime)
    console.log('Duration: ', (duration[0] * 1e3 + duration[1] * 1e-6).toFixed(4), ' ms')
  })
})

app.get('/', (req, res) => {
  res.send(faviconPreventHTML + '列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send(faviconPreventHTML + '新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send(faviconPreventHTML + '顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send(faviconPreventHTML + '新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
