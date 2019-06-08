import { combineReducers } from 'redux'
import zh from '../../lang/zh_CN'
import en from '../../lang/en_US'

const Initstate = {
    lang: window.localStorage.getItem('lang') === 'zh' ? zh : en
}
const Common = (state = Initstate, action) => {
    switch (action.type) {
        case 'changeLang':
                window.localStorage.setItem('lang', action.text)
                return {...state, lang: action.text === 'zh' ? zh : en}
        default:
                return state
    }
}

let reducer = combineReducers({
    Common: Common
})

export default reducer

