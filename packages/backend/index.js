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

app.get('*', (req, res) => res.send(html))
app.listen(3000)
