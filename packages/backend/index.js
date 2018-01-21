const { readFileSync } = require('fs')
const { join } = require('path')
const express = require('express')
const app = express()


const webpack = require('webpack')
const config = require('./webpack.config')
const webpackMiddleware = require('webpack-dev-middleware')
const compiler = webpack(config)
app.use(webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
}))

const html = readFileSync(join(__dirname, 'index.html'), 'utf8')

app.get('/api/user', (req, res) => res.json({
  user: {
    profile: {
      image: 'http://0.gravatar.com/avatar/cbb0e0bb8e68fe44de2dfde029aa0e06',
      name: 'Bobson Dugnutt',
    }
  }
}))
app.get('*', (req, res) => res.send(html))
app.listen(3000)
