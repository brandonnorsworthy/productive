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
		// default to whatever they click
		let eventTarget = e.target

		// if the current target is the span inside the div set the target to the parent
		if(eventTarget.tagName === 'SPAN' || eventTarget.tagName === 'P') {
			eventTarget = eventTarget.parentElement;
			console.log('reassigned', eventTarget)
		}

		this.setState({
			currentContent: eventTarget.attributes.name.value
		});
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
