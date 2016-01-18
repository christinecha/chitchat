"use strict"

var socket = io()

socket.on('message sent', function(msgData) {
  let $author = $('<span>').html(msgData.author)
  let $message = $('<span>').html(msgData.message)
  let $messageBlock = $('<li>').append($author, ': ', $message)
  $('#messageboard').append($messageBlock)
})

socket.on('user connected', function(msg) {
    $('#messageboard').append($('<li>').text(msg))
})

$('#messageform').submit(function(e) {
    e.preventDefault()
    let msgData = {
      author: $('#author').val(),
      message: $('#message').val()
    }
    socket.emit('message sent', msgData)
    $('#message').val('')
    return false
})
