const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require('./data')

server.use(express.static('public/'))
server.set("view engine", "njk")


nunjucks.configure("public/views", {
  express:server,
  autoescape: false,
  noCache: true
})
server.get("/", function(req, res) {
  const data = {
    avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
    name: "Mayk Brito",
    profession: "Instructor",
    company: "Rocketseat",
    bio: "Full-stack programmer, focused on bringing the best teaching to beginners in programming. Collaborator",
    // Social-Networks
    links: [
      { name: "GitHub", url: "https://github.com/maykbrito/"},
      { name: "Twitter", url: "https://Twitter.com/maykbrito/"},
      { name: "Linkedin", url: "htpps://www.linkedin.com/in/maykbrito/"}
    ]
  }
  return res.render("about", {user:data})
})
server.get("/portfolio.html", function(req, res) {
  return res.render("portfolio", {videos})
})
server.get("/video", function(req, res) {

  const id = req.query.id
  
  const video = videos.find(function(video) {
    if (video.id == id){
      return true
    }
  })
  res.send(id)
})
.get("/buttonlink", function(req,res) {
  return res.render("testebuttona")
})





server.listen(5000, () => {
  console.log("server is running")


})