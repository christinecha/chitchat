"use strict"

import React from 'react'
import {connect} from 'react-redux'
import SocketIo from 'socket.io-client'
import Message from './Message.jsx'
import * as action from '../actions.js'

export class Chatroom extends React.Component {

  getMessages() {
    console.log('getting Messages')
    return this.props.messages.toJS().map((message, i) => {
      return (
        <Message
          key={i}
          author={message.author}
          message={message.message} />
      )
    })
  }

  handleNewAuthor() {

  }

  handleTyping(e) {
    const {dispatch, currentAuthor} = this.props
    let socket = io()
    let currentMessage = e.target.value
    let msgData = {
      author: 'Christine',
      message: currentMessage
    }
    socket.emit('user is typing', msgData)
    socket.on('user is typing', (msgData) => {
      dispatch(action.UPDATE_CURRENT_MESSAGE(msgData))
    })
  }

  render() {
    console.log('rendering Chatroom')
    return (
      <div>
        <div>
          {this.getMessages()}
        </div>
        <form>
          <input
            placeholder="username"
            value={this.props.currentAuthor}
            onChange={() => this.handleNewAuthor()} />
          <input
            placeholder="message"
            value={this.props.currentMessage}
            onChange={(e) => this.handleTyping(e)} />
          <button>send</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    messages: state.get('messages'),
    currentAuthor: state.get('currentAuthor'),
    currentMessage: state.get('currentMessage')
  }
}

export const ChatroomContainer = connect(mapStateToProps)(Chatroom)
