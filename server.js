const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require('./data')

server.use(express.static('public/'))

server.set("view engine", "njk")

nunjucks.configure("public/views", {
  express:server
})
server.get("/", function(req, res) {
  return res.render("about")
})
server.get("/portfolio.html", function(req, res) {
  
  return res.render("portfolio", {items: videos})
})

server.listen(5000, () => {
  console.log("server is running")


})