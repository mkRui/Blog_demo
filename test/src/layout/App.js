import React from 'react';
import { connect } from 'react-redux'
import Action from './../store/actions/index'

class App extends React.Component {
  componentDidMount () {
    console.log(this.props)
    this.props.test('test')
  }
  render () {
    return (
      <div className="App">
        {this.props.Common}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    Common: state.Common.Common
  }
}

const mapDispatchToProps = (dispatch, ownProps)  => {
  return {
      test: (data) => dispatch(Action.test(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
