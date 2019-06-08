import React from 'react';
import { connect } from 'react-redux'
import { LocaleProvider } from 'antd'
import { addLocaleData, IntlProvider } from 'react-intl'
import Action from '../store/actions/index'

import Home from '../page/home'

class App extends React.Component {
  state = {
    lang: true
  }
  // 切换语言 更新视图与intl
  change () {
    this.setState({
      lang: !this.state.lang
    })
    this.props.changeLang(this.state.lang ? 'zh' : 'en')
  }
  componentDidMount () {
    // 切换文字读取本地缓存 判断
    this.setState({
      lang: window.localStorage.getItem('lang') === 'zh' ? false : true
    })
  }
  componentWillMount () {
    // addLocaleData 加载react-intl语言包
    addLocaleData(this.props.lang.data)
  }
  componentWillUpdate (nextProps, nextState) {
    // 当props发生变化时加载react-intl语言包
    addLocaleData(nextProps.lang.data)
  }
  render () {
    return (
      <IntlProvider locale={this.props.lang.localeName} messages={this.props.lang.locale}>
        {/* IntlProvider react-intl 官方提供的方法 可以把当前语言环境 向下传递  可以让引入react-intl的组件读取本地语言*/}
        <LocaleProvider locale={this.props.lang.antd}>
        {/* LocaleProvider antd官方提供的多方法 可以把当前语言环境 向下传递 更改antd组件的语言 */}
          <div>
            <span onClick={this.change.bind(this)}>{this.state.lang ? '中' : 'en'}</span>
            <Home/>
          </div>
        </LocaleProvider>
      </IntlProvider>
    )
  }
}

const mapStateToProps = (state) => {
  // 存储在redux的modal
  return {
    lang: state.Common.lang
  }
}

const mapDispatchToProps = (dispatch, ownProps)  => {
  return {
      // 切换语言的方法
      changeLang: (data) => dispatch(Action.changeLang(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);






