import React, { useCallback } from 'react'
import { useDispatch, useMappedState } from './../store/index'

const AA = () => {
    let { lang } = useMappedState(
        useCallback(
            (state) => ({
                lang: state.Common.lang
            }),
            [],
        )
    )

    return (
        <div>
            {lang}
        </div>
    )
}



export default AA