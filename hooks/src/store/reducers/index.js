import { combineReducers } from 'redux'

const Common = (state = Initstate, action) => {
    switch (action.type) {
        case 'changeLang':
                return {...state, lang: action.text}
        default:
                return state
    }
}

let reducer = combineReducers({
    Common: Common
})

export default reducer

