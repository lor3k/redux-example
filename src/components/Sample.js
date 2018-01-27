import React from 'react'
import { connect } from 'react-redux'
import changeText from '../components/Sample'

class Sample extends React.Component {
    render() {
        return (
            <div>
                <div>{this.props.text}</div>
                <button
                    onClick={this.props.handleChangeText}
                >
                    Change 'b' to 'a'!
        </button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    text: state.change.text
})

const mapDispatchToProps = dispatch => ({
    handleChangeText: () => dispatch(changeText())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sample)

export { Sample }