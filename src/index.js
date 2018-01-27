import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Sample from './components/Sample'

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<Sample />
				</div>
			</Provider>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))
