import React from 'react'
import { connect } from 'react-redux'
import { changeText } from '../state/change'

class Sample extends React.Component {
    state = {
        inputText: ''
    }

    handleInputChange = value => {
        this.setState({
            inputText: value
        })
    }

    render() {
        return (
            <div>

                <input
                    onChange={e => this.handleInputChange(e.target.value)}
                />
                <button
                    onClick={() => this.props.handleChangeText(this.state.inputText)}
                >
                    Change!
                </button>
                <div style={{fontSize: '2em'}}>
                    {this.props.text}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    text: state.change.text
})

const mapDispatchToProps = dispatch => ({
    handleChangeText: newText => dispatch(changeText(newText))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sample)

export { Sample }