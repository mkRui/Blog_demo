import React, { Component } from 'react'
import { injectIntl } from 'react-intl'
import { DatePicker } from 'antd'
import './../style/common.css'

class Home extends Component {
    render () {
        let { intl } = this.props
        console.log(this.props)
        return (
            <div>
                { intl.messages['test'] } <br/>
                { intl.formatMessage({id: 'code_tip'},{s: '2'}) } <br/>
                <DatePicker/>
            </div>
        )
    }
}

export default injectIntl(Home)
