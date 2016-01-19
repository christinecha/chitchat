"use strict"

import React from 'react'
import ReactDOM from 'react-dom'
import reducer from './reducer.js'
import {ChatroomContainer} from './components/Chatroom.jsx'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
// import * as action from './actions.js'

const store = createStore(reducer)

store.dispatch({
  type: 'SET_INITIAL_STATE',
  data: {
    messages: [{message: "hi", author: "christine"}],
    currentAuthor: '',
    currentMessage: ''
  }
})

ReactDOM.render(
  <Provider store={store}>
    <ChatroomContainer />
  </Provider>,
  document.getElementById('chatroom-app')
)
