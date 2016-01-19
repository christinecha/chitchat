"use strict"

import React from 'react'
import socket from 'socket.io-client'

class Message extends React.Component {

  render() {
    console.log('rendering Message')
    return (
      <div>
        <span>{this.props.author}</span>
        <span>: </span>
        <span>{this.props.message}</span>
      </div>
    )
  }
}

export default Message
