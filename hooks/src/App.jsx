import React, { Component } from 'react'
import ReactHooksRedux from 'react-hooks-redux'
import { changeLang }  from './store/actions/index'

const { Provider, store } = ReactHooksRedux({
  isDev: true,
  initialState: {}
})



function Button () {
  const state = store.useContext();

  

  // store.dispatch(changeLang(1))


  return (
    <div>1 {state.age}</div>
  )
}


function App() {
  // console.log(changeLang)
  // console.log(store)
  const state = store.useContext();

  // store.dispatch(changeLang(1))
  return (
    <Provider>
        <div>
          <Button/>
        </div>
    </Provider>
    
  )
}


export default App