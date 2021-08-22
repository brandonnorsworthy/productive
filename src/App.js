import React, { Component } from 'react';
import './reset.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Content from './components/Content'

class App extends Component {
	constructor() {
		super()
		this.state = {
			currentContent: 'Today'
		}

		this.Clicked = this.Clicked.bind(this);
	}

	Clicked(e) {
		console.log(e.target.attributes.name.value)
		this.setState({
			currentContent: e.target.attributes.name.value
		})
		console.log('state', this.state.currentContent)
	}

	render() {
		return (
			<>
				<Header />
				<main>
					<Navbar currentContent={this.state.currentContent} Clicked={this.Clicked} />
					<Content currentContent={this.state.currentContent} />
				</main>
			</>
		);
	}
}

export default App;
