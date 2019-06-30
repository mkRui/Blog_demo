import React, { useCallback } from 'react'
import { useDispatch, useMappedState } from './store/index'

import AA from './component/aa'

function App() {
  let { lang } = useMappedState(
    useCallback(
      (state) => ({
          lang: state.Common.lang
        }),
      [],
    )
  )

  let dispatch = useDispatch()

  function click(text) {
    // 点击
    dispatch({type: 'changeLang', text})
  }


  console.log(lang)
  return (
      <div onClick={click.bind(this, 11)}>
        {lang}
        <AA/>
      </div>
  )
}


export default App