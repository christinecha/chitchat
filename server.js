"use strict"

let express = require('express')
let app = express()

let http = require('http').Server(app)
let io = require('socket.io')(http)

// var p2p = require('socket.io-p2p-server').server

// io.use(p2p)

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', function(socket) {
  io.emit('user connected', ' user has connected at ' + socket.id)

  socket.on('user is typing', function(msgData){
    // console.log(msgData)
    io.emit('user is typing', msgData)
  })

  socket.on('message sent', function(msgData){
    console.log(msgData)
    io.emit('message sent', msgData)
  })

  socket.on('disconnect', function() {
    console.log('disconnected')
  })
})


http.listen(3000, function() {
    console.log('listening on 3000')
})
