export function changeLang (text) {
    return {
        type: 'changeLang',
        reducer(state) {
            return { ...state, age: text }; // 每次需要返回一个新的 state
        }, 
    }
}