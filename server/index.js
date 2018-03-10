'use strict'

import React from 'react'
import express from 'express'
import path from 'path'
import { renderToString as render } from 'react-dom/server'
import StaticRouter from 'react-router-dom/StaticRouter'
// import { renderRoutes } from 'react-router-config'
import routes from '../client/routes'

const server = express()

server
  .set('view engine', 'ejs')
  .set('views', path.join(__dirname, '/views'))

server.use('/static', express.static(path.join(process.env.PWD, '/client/static')))

server.use((req, res) => {
  console.log(req.url)
  const body = render(
    <StaticRouter location={req.url} context={{}}>
      { routes }
    </StaticRouter>
  )
  return res.status(200).render('index', { body })
})

server.listen('3000', (err) => {
  if (err) throw new Error(err)
  console.log('service is run')
})
