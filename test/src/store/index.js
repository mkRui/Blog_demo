import { applyMiddleware, createStore } from 'redux'

import reducers from './reducers/index'

let store = createStore(
    reducers,
    applyMiddleware()
)

export default store