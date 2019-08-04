import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Frim extends Component {

    render () {
        console.log(this.props)
        return <div onClick={this.props.remove}>{this.props.data}</div>
    }
}

const Confrim = (props) => {
    const div = document.createElement('div');
    document.body.appendChild(div);

    const remove = () => {
        const unmountResult = ReactDOM.unmountComponentAtNode(div);
        if (unmountResult && div.parentNode) {
            div.parentNode.removeChild(div);
        }
    }

    function render(props) {
        ReactDOM.render(<Frim data={props} remove={remove}/>, div);
    }

    render(props)
}

export default Confrim
