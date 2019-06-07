import { combineReducers } from 'redux'
const Initstate = {}

const Common = (state = Initstate, action) => {
    switch (action.type) {
        case 'test':
                return {...state, Common: action.text}
        default:
                return state
    }
}

let reducer = combineReducers({
    Common: Common
})

export default reducer

